import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { donation } from '@/lib/db/schema'
import { sendEmail, getDonationConfirmationHTML } from '@/lib/email'
import { validateEmail, sanitizeInput, checkSpam, validateDonationAmount } from '@/lib/validation'
import Stripe from 'stripe'

const stripeKey = process.env.STRIPE_SECRET_KEY
let stripe: Stripe | null = null

if (stripeKey) {
  stripe = new Stripe(stripeKey, {
    apiVersion: '2024-12-18.acacia',
  })
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

    // Sanitize inputs
    donorName = sanitizeInput(donorName)
    donorEmail = donorEmail.toLowerCase().trim()
    message = message ? sanitizeInput(message) : null
    currency = currency || 'USD'

    // Get client IP
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Insert initial donation record
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

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: donorEmail,
      client_reference_id: `donation-${donationRecord[0].id}`,
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: 'Donation to KITIIBWA SAFARIS',
              description: 'Support conservation and community development in Uganda',
            },
            unit_amount: Math.round(numAmount * 100),
          },
          quantity: 1,
        },
      ],
      success_url: successUrl || `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/donations?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/donations?status=cancelled`,
      metadata: {
        donationId: donationRecord[0].id.toString(),
        message: message || '',
      },
    })

    console.log('[DONATION] Stripe session created:', session.id)

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
