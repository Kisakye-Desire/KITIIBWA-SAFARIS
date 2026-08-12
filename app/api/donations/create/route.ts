import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { donation } from '@/lib/db/schema'
import { validateEmail, sanitizeInput, checkSpam, validateDonationAmount } from '@/lib/validation'
import Stripe from 'stripe'

const stripeKey = process.env.STRIPE_SECRET_KEY
let stripe: Stripe | null = null

if (stripeKey) {
  stripe = new Stripe(stripeKey)
}

// Persisting the donation is best-effort: the site can accept card payments
// even when no database is connected, so DB errors must never block checkout.
async function recordDonationSafely(values: {
  donor_name: string
  donor_email: string
  amount: string
  currency: string
  message: string | null
  anonymous: boolean
  ip_address: string
}): Promise<string | null> {
  if (!process.env.DATABASE_URL) return null
  try {
    const inserted = await db
      .insert(donation)
      .values({ ...values, status: 'pending' })
      .returning()
    return inserted[0]?.id?.toString() ?? null
  } catch (error) {
    console.error('[v0] Donation DB insert skipped:', error)
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check Stripe configuration
    if (!stripe) {
      return NextResponse.json({ error: 'Card payments are not configured yet. Please try mobile money or bank transfer.' }, { status: 503 })
    }

    const body = await request.json()
    let { donorName, donorEmail, amount, currency, message, anonymous, successUrl, cancelUrl } = body

    // Validation
    if (!donorName || !donorEmail || !amount) {
      return NextResponse.json({ error: 'Please provide your name, email, and a donation amount.' }, { status: 400 })
    }

    // Email validation
    if (!validateEmail(donorEmail)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    // Amount validation
    const numAmount = parseFloat(amount)
    if (!validateDonationAmount(numAmount)) {
      return NextResponse.json({ error: 'Please enter a valid donation amount.' }, { status: 400 })
    }

    // Check spam (safe no-op when the database is unavailable)
    const isSpam = await checkSpam(donorEmail, 'donation')
    if (isSpam) {
      return NextResponse.json({ error: 'You just started a donation. Please wait a moment before trying again.' }, { status: 429 })
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

    // Best-effort persistence — never blocks the payment.
    const donationId = await recordDonationSafely({
      donor_name: donorName,
      donor_email: donorEmail,
      amount: numAmount.toString(),
      currency,
      message: message || null,
      anonymous: anonymous || false,
      ip_address: ip,
    })

    const referenceId = donationId ? `donation-${donationId}` : `donation-${Date.now()}`
    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || ''

    // Create Stripe checkout session (hosted redirect flow)
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: donorEmail,
      client_reference_id: referenceId,
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
      success_url: successUrl || `${origin}/donations?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${origin}/donations?status=cancelled`,
      metadata: {
        donationId: donationId || '',
        message: message || '',
      },
    })

    return NextResponse.json(
      {
        success: true,
        sessionId: session.id,
        url: session.url,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] DONATION ERROR', error)
    const errorMessage = error instanceof Error ? error.message : 'We could not start the card payment. Please try again or use mobile money.'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
