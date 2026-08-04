import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, escapeHtml } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message, country, contactPerson } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const officeLabel = country === 'uk' ? 'UK Office' : 'Uganda Office'
    const inquiryLabel = {
      general: 'General Inquiry',
      safari: 'Safari Booking',
      donation: 'Donation/Support',
      partnership: 'Partnership Opportunity',
    }[contactPerson] || 'General Inquiry'

    // Email to info@kitiibwasafaris.com
    const toEmail = 'info@kitiibwasafaris.com'

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #2D5F3F, #4a8f64); padding: 32px; text-align: center;">
          <h1 style="color: #D4A574; margin: 0; font-size: 26px; letter-spacing: 2px;">KITIIBWA SAFARIS</h1>
          <p style="color: #ffffff; margin: 8px 0 0; font-size: 14px; opacity: 0.9;">New Contact Form Message</p>
        </div>
        
        <div style="padding: 32px; background: #f9f9f9;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #2D5F3F; width: 140px;">From:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #2D5F3F;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #D4A574;">${escapeHtml(email)}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #2D5F3F;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${escapeHtml(phone)}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #2D5F3F;">Office:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${officeLabel}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #2D5F3F;">Inquiry Type:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${inquiryLabel}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #2D5F3F;">Subject:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${escapeHtml(subject)}</td>
            </tr>
          </table>
          
          <div style="margin-top: 24px; background: #fff; border-left: 4px solid #D4A574; padding: 16px 20px; border-radius: 0 8px 8px 0;">
            <p style="font-weight: bold; color: #2D5F3F; margin: 0 0 8px;">Message:</p>
            <p style="white-space: pre-wrap; color: #333; margin: 0; line-height: 1.6;">${escapeHtml(message)}</p>
          </div>
        </div>
        
        <div style="padding: 20px 32px; text-align: center; color: #999; font-size: 12px; background: #f0f0f0;">
          <p style="margin: 0;">This message was sent via the KITIIBWA SAFARIS website contact form.</p>
          <p style="margin: 4px 0 0;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
        </div>
      </div>
    `

    // Send email using the configured email service
    const result = await sendEmail({
      to: toEmail,
      subject: `[Website Contact] ${inquiryLabel}: ${subject}`,
      html: htmlBody,
      replyTo: email,
    })

    if (!result.success) {
      console.error('[CONTACT EMAIL FAILED]', result.error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try WhatsApp or email us directly.' },
        { status: 500 }
      )
    }

    console.log('[EMAIL SENT SUCCESSFULLY]', { messageId: result.messageId, to: toEmail, from: email })

    return NextResponse.json(
      { success: true, message: 'Thank you! We will contact you within 24 hours.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[CONTACT ERROR]', error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('[ERROR DETAILS]', errorMessage)
    return NextResponse.json({ error: 'Failed to send message. Please try WhatsApp or email us directly.' }, { status: 500 })
  }
}
