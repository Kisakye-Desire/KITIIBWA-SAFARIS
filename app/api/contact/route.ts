import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { contact_message } from '@/lib/db/schema'
import { sendEmail, getContactEmailHTML } from '@/lib/email'
import { validateEmail, sanitizeInput, checkSpam } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    let { name, email, phone, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Email validation
    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Check spam
    const isSpam = await checkSpam(email)
    if (isSpam) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
    }

    // Sanitize inputs
    name = sanitizeInput(name)
    subject = sanitizeInput(subject)
    message = sanitizeInput(message)
    phone = phone ? sanitizeInput(phone) : null

    // Get client IP
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Insert into database
    const result = await db
      .insert(contact_message)
      .values({
        name,
        email,
        phone: phone || null,
        subject,
        message,
        status: 'new',
        ip_address: ip,
      })
      .returning()

    // Send email to admin
    const adminEmailResult = await sendEmail({
      to: process.env.ADMIN_EMAIL || 'dynamicyoo@gmail.com',
      subject: `New Contact Form: ${subject}`,
      html: getContactEmailHTML({ name, email, subject, message, phone: phone || undefined }),
      replyTo: email,
    })

    console.log('[CONTACT] New message from:', email, '- Status:', adminEmailResult.success)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We will contact you soon.',
        id: result[0].id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[CONTACT ERROR]', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
