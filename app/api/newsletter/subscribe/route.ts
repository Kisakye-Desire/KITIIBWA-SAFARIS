import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { newsletter_subscriber } from '@/lib/db/schema'
import { sendEmail, getNewsletterWelcomeHTML } from '@/lib/email'
import { validateEmail, sanitizeInput, checkSpam, generateToken, isDisposableEmail } from '@/lib/validation'
import { eq } from 'drizzle-orm'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    let { email, name } = body

    // Validation
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Email validation
    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Check for disposable email
    if (isDisposableEmail(email)) {
      return NextResponse.json({ error: 'Disposable emails are not allowed' }, { status: 400 })
    }

    // Check spam
    const isSpam = await checkSpam(email)
    if (isSpam) {
      return NextResponse.json({ error: 'Please wait before subscribing again' }, { status: 429 })
    }

    // Sanitize inputs
    email = email.toLowerCase().trim()
    name = name ? sanitizeInput(name) : null

    // Get client IP
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Check if already subscribed
    const existing = await db.query.newsletter_subscriber.findFirst({
      where: eq(newsletter_subscriber.email, email),
    })

    if (existing) {
      if (existing.subscribed) {
        return NextResponse.json({ error: 'Already subscribed with this email' }, { status: 400 })
      } else {
        // Re-subscribe
        await db
          .update(newsletter_subscriber)
          .set({ 
            subscribed: true, 
            verified: true,
            name: name || existing.name,
            updatedAt: new Date()
          })
          .where(eq(newsletter_subscriber.email, email))
      }
    } else {
      // Create new subscriber
      const unsubscribeToken = generateToken()
      await db.insert(newsletter_subscriber).values({
        email,
        name: name || null,
        subscribed: true,
        verified: true,
        unsubscribe_token: unsubscribeToken,
        ip_address: ip,
      })
    }

    // Send welcome email
    await sendEmail({
      to: email,
      subject: 'Welcome to KITIIBWA SAFARIS Newsletter',
      html: getNewsletterWelcomeHTML({ name: name || undefined }),
    })

    console.log('[NEWSLETTER] New subscription:', email)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to our newsletter!'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[NEWSLETTER ERROR]', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
