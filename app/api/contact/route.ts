import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { contact_message } from '@/lib/db/schema'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

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
      })
      .returning()

    // Here you would typically send an email to admin
    // For now, we'll just log it
    console.log('[CONTACT] New message from:', email, '-', subject)

    return NextResponse.json(
      { success: true, message: 'Message received. We will contact you soon!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[CONTACT ERROR]', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
