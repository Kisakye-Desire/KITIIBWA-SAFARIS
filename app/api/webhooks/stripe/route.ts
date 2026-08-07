import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { donation } from '@/lib/db/schema'
import { sendEmail, getDonationConfirmationHTML } from '@/lib/email'
import { eq } from 'drizzle-orm'
import Stripe from 'stripe'

const stripeKey = process.env.STRIPE_SECRET_KEY
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

let stripe: Stripe | null = null
if (stripeKey) {
  stripe = new Stripe(stripeKey, {
    apiVersion: '2024-12-18.acacia',
  })
}

export async function POST(request: NextRequest) {
  try {
    if (!stripe || !webhookSecret) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 503 })
    }

    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
    }

    let event: Stripe.Event
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (error) {
      console.error('[STRIPE WEBHOOK] Signature verification failed:', error)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    console.log('[STRIPE WEBHOOK] Event received:', event.type)

    // Handle different event types
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session

      if (session.payment_status === 'paid') {
        const donationId = parseInt(session.client_reference_id?.split('-')[1] || '0')

        if (donationId) {
          // Update donation status
          const donationRecord = await db
            .update(donation)
            .set({
              status: 'completed',
              stripe_payment_id: session.payment_intent as string,
              updatedAt: new Date(),
            })
            .where(eq(donation.id, donationId))
            .returning()

          if (donationRecord.length > 0) {
            const donorRecord = donationRecord[0]

            // Send confirmation email
            await sendEmail({
              to: donorRecord.donor_email,
              subject: 'Donation Received - Thank You!',
              html: getDonationConfirmationHTML({
                name: donorRecord.donor_name,
                amount: donorRecord.amount,
                currency: donorRecord.currency,
                message: donorRecord.message || undefined,
              }),
            })

            // Send admin notification
            await sendEmail({
              to: process.env.ADMIN_EMAIL || 'dynamicyoo@gmail.com',
              subject: `New Donation Received: ${donorRecord.currency} ${donorRecord.amount}`,
              html: `
                <div style="font-family: Arial, sans-serif;">
                  <h2>New Donation Received</h2>
                  <p><strong>Donor:</strong> ${donorRecord.donor_name}</p>
                  <p><strong>Email:</strong> ${donorRecord.donor_email}</p>
                  <p><strong>Amount:</strong> ${donorRecord.currency} ${donorRecord.amount}</p>
                  <p><strong>Stripe Payment ID:</strong> ${session.payment_intent}</p>
                  ${donorRecord.message ? `<p><strong>Message:</strong> ${donorRecord.message}</p>` : ''}
                </div>
              `,
            })

            console.log('[STRIPE] Donation completed:', donationId)
          }
        }
      }
    } else if (event.type === 'checkout.session.expired') {
      const session = event.data.object as Stripe.Checkout.Session
      const donationId = parseInt(session.client_reference_id?.split('-')[1] || '0')

      if (donationId) {
        // Mark as expired
        await db
          .update(donation)
          .set({
            status: 'expired',
            updatedAt: new Date(),
          })
          .where(eq(donation.id, donationId))

        console.log('[STRIPE] Donation expired:', donationId)
      }
    }

    return NextResponse.json({ received: true }, { status: 200 })
  } catch (error) {
    console.error('[STRIPE WEBHOOK ERROR]', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}
