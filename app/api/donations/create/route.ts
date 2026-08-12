import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { donation } from '@/lib/db/schema'
import { sendEmail, getDonationConfirmationHTML } from '@/lib/email'
import { validateEmail, sanitizeInput, checkSpam, validateDonationAmount } from '@/lib/validation'
import Stripe from 'stripe'

const stripeKey = process.env.STRIPE_SECRET_KEY
let stripe: Stripe | null = null

if (stripeKey) {
  stripe = new Stripe(stripeKey)
}

export async function POST(request: NextRequest) {
  try {
    // Check Stripe configuration
    if (!stripe) {
      return NextResponse.json({ error: 'Payment service not configured' }, { status: 503 })
    }

    const body = await request.json()
    let { donorName, donorEmail, amount, currency, message, anonymous, successUrl, cancelUrl } = body

    // Validation
    if (!donorName || !donorEmail || !amount) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Email validation
    if (!validateEmail(donorEmail)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Amount validation
    const numAmount = parseFloat(amount)
    if (!validateDonationAmount(numAmount)) {
      return NextResponse.json({ error: 'Invalid donation amount' }, { status: 400 })
    }

    // Check spam
    const isSpam = await checkSpam(donorEmail, 'donation')
    if (isSpam) {
      return NextResponse.json({ error: 'Please wait before making another donation' }, { status: 429 })
    }

    // Sanitize inputs and keep Stripe currency values predictable.
    donorName = sanitizeInput(String(donorName))
    donorEmail = String(donorEmail).toLowerCase().trim()
    message = message ? sanitizeInput(String(message)) : null
    const normalizedCurrency = String(currency || 'USD').toUpperCase()
    const supportedCurrencies = new Set(['USD', 'GBP', 'EUR', 'UGX'])
    if (!supportedCurrencies.has(normalizedCurrency)) {
      return NextResponse.json({ error: 'This donation currency is not currently supported for card payments.' }, { status: 400 })
    }
    currency = normalizedCurrency

    // Get client IP
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Insert initial donation record. This is best-effort: if the database is
    // not configured or unreachable, we still let the Stripe checkout proceed so
    // the donor is never blocked from paying. The Stripe webhook remains the
    // source of truth for a completed donation.
    let donationId: string | null = null
    try {
      const donationRecord = await db
        .insert(donation)
        .values({
          donor_name: donorName,
          donor_email: donorEmail,
          amount: numAmount.toString(),
          currency,
          message: message || null,
          anonymous: anonymous || false,
          status: 'pending',
          ip_address: ip,
        })
        .returning()
      donationId = donationRecord[0]?.id?.toString() ?? null
    } catch (dbError) {
      console.error('[DONATION DB WARNING] Could not persist donation, continuing to Stripe checkout:', dbError)
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: donorEmail,
      client_reference_id: donationId ? `donation-${donationId}` : `donation-${Date.now()}`,
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: 'Donation to Kitiibwa Safaris',
              description: 'Support education, care, and brighter futures for children in Uganda',
            },
            unit_amount: Math.round(numAmount * 100),
          },
          quantity: 1,
        },
      ],
      success_url: successUrl || `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/donations?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/donations?status=cancelled`,
      metadata: {
        donationId: donationId || '',
        message: message || '',
      },
    })

    return NextResponse.json(
      {
        success: true,
        sessionId: session.id,
        clientSecret: session.client_secret,
        url: session.url,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[DONATION ERROR]', error)
    return NextResponse.json({ error: 'Failed to process donation' }, { status: 500 })
  }
}
