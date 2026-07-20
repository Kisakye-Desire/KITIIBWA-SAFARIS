import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { event_registration } from '@/lib/db/schema'
import { sendEmail } from '@/lib/email'
import { validateEmail, validatePhone, sanitizeInput, checkSpam, validateGuestCount } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    let { 
      name, 
      email, 
      phone, 
      numberOfGuests, 
      dietaryRestrictions, 
      specialNeeds, 
      heardAboutUs,
      eventId
    } = body

    // Validation
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    // Email validation
    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Phone validation if provided
    if (phone && !validatePhone(phone)) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 })
    }

    // Guest count validation
    if (numberOfGuests && !validateGuestCount(numberOfGuests)) {
      return NextResponse.json({ error: 'Invalid number of guests' }, { status: 400 })
    }

    // Check spam
    const isSpam = await checkSpam(email)
    if (isSpam) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
    }

    // Sanitize inputs
    name = sanitizeInput(name)
    phone = phone ? sanitizeInput(phone) : null
    dietaryRestrictions = dietaryRestrictions ? sanitizeInput(dietaryRestrictions) : null
    specialNeeds = specialNeeds ? sanitizeInput(specialNeeds) : null
    heardAboutUs = heardAboutUs ? sanitizeInput(heardAboutUs) : null
    eventId = eventId || 'safari-chill-2026'

    // Get client IP
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Insert into database
    const result = await db
      .insert(event_registration)
      .values({
        event_id: eventId,
        name,
        email,
        phone: phone || null,
        number_of_guests: numberOfGuests || 1,
        dietary_restrictions: dietaryRestrictions || null,
        special_needs: specialNeeds || null,
        heard_about_us: heardAboutUs || null,
        status: 'registered',
        confirmation_sent: false,
        ip_address: ip,
      })
      .returning()

    // Send confirmation email to registrant
    const confirmationEmail = await sendEmail({
      to: email,
      subject: 'Safari & Chill Experience 2026 - Registration Confirmed',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D4A574; border-bottom: 2px solid #D4A574; padding-bottom: 10px;">
            Registration Confirmed
          </h2>
          
          <p>Dear ${sanitizeInput(name)},</p>

          <p>Thank you for registering for the <strong>Safari & Chill Experience 2026</strong>!</p>

          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3>Your Registration Details:</h3>
            <p><strong>Confirmation ID:</strong> #${result[0].id}</p>
            <p><strong>Number of Guests:</strong> ${numberOfGuests || 1}</p>
            ${dietaryRestrictions ? `<p><strong>Dietary Restrictions:</strong> ${dietaryRestrictions}</p>` : ''}
            ${specialNeeds ? `<p><strong>Special Needs:</strong> ${specialNeeds}</p>` : ''}
          </div>

          <p>We will send you more details about the event schedule, accommodation options, and payment information soon.</p>

          <p>If you have any questions, please don't hesitate to contact us at <strong>dynamicyoo@gmail.com</strong> or call us on <strong>+256 708898424</strong>.</p>

          <p>We look forward to seeing you at the Safari & Chill Experience!</p>

          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
            KITIIBWA SAFARIS | Event Registration
          </p>
        </div>
      `,
    })

    // Send admin notification
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'dynamicyoo@gmail.com',
      subject: `New Registration: Safari & Chill Experience 2026`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Event Registration</h2>
          <p><strong>Event:</strong> Safari & Chill Experience 2026</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Number of Guests:</strong> ${numberOfGuests || 1}</p>
          <p><strong>Registration ID:</strong> #${result[0].id}</p>
          ${dietaryRestrictions ? `<p><strong>Dietary Restrictions:</strong> ${dietaryRestrictions}</p>` : ''}
          ${specialNeeds ? `<p><strong>Special Needs:</strong> ${specialNeeds}</p>` : ''}
          ${heardAboutUs ? `<p><strong>Heard About Us:</strong> ${heardAboutUs}</p>` : ''}
        </div>
      `,
      replyTo: email,
    })

    console.log('[EVENT REGISTRATION] New registration:', email, '- Event:', eventId)

    // Update confirmation_sent after emails are sent
    if (confirmationEmail.success) {
      await db
        .update(event_registration)
        .set({ confirmation_sent: true, updatedAt: new Date() })
        .where(evt => evt.id === result[0].id)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for registering! Check your email for confirmation details.',
        registrationId: result[0].id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[EVENT REGISTRATION ERROR]', error)
    return NextResponse.json({ error: 'Failed to register for event' }, { status: 500 })
  }
}
