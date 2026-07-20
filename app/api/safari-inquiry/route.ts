import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { safari_inquiry } from '@/lib/db/schema'
import { sendEmail, getSafariInquiryEmailHTML } from '@/lib/email'
import { validateEmail, validatePhone, sanitizeInput, checkSpam, validateGuestCount } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    let { name, email, phone, packageName, packageId, travelDates, numberOfGuests, specialRequests } = body

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
    const isSpam = await checkSpam(email, 'inquiry')
    if (isSpam) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
    }

    // Sanitize inputs
    name = sanitizeInput(name)
    packageName = packageName ? sanitizeInput(packageName) : null
    travelDates = travelDates ? sanitizeInput(travelDates) : null
    specialRequests = specialRequests ? sanitizeInput(specialRequests) : null
    phone = phone ? sanitizeInput(phone) : null

    // Get client IP
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Insert into database
    const result = await db
      .insert(safari_inquiry)
      .values({
        name,
        email,
        phone: phone || null,
        package_id: packageId || null,
        package_name: packageName || null,
        travel_dates: travelDates || null,
        number_of_guests: numberOfGuests || null,
        special_requests: specialRequests || null,
        status: 'new',
        ip_address: ip,
      })
      .returning()

    // Send email to admin
    const adminEmailResult = await sendEmail({
      to: process.env.ADMIN_EMAIL || 'kisakyedhisayar@gmail.com',
      subject: `New Safari Inquiry: ${packageName || 'General'}`,
      html: getSafariInquiryEmailHTML({
        name,
        email,
        packageName: packageName || undefined,
        travelDates: travelDates || undefined,
        numberOfGuests: numberOfGuests || undefined,
        specialRequests: specialRequests || undefined,
        phone: phone || undefined,
      }),
      replyTo: email,
    })

    console.log('[SAFARI INQUIRY] New inquiry from:', email, '- Status:', adminEmailResult.success)

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry! We will contact you within 24 hours.',
        id: result[0].id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[SAFARI INQUIRY ERROR]', error)
    return NextResponse.json({ error: 'Failed to submit inquiry' }, { status: 500 })
  }
}
