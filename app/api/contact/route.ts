import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  console.log('[CONTACT API] Request received')
  console.log('[ENV CHECK] RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'Present' : 'Missing')
  
  try {
    const body = await request.json()
    console.log('[CONTACT API] Body parsed:', { name: body.name, email: body.email })
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

    // Updated email configuration
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
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #2D5F3F;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #D4A574;">${email}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #2D5F3F;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${phone}</td>
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
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${subject}</td>
            </tr>
          </table>
          
          <div style="margin-top: 24px; background: #fff; border-left: 4px solid #D4A574; padding: 16px 20px; border-radius: 0 8px 8px 0;">
            <p style="font-weight: bold; color: #2D5F3F; margin: 0 0 8px;">Message:</p>
            <p style="white-space: pre-wrap; color: #333; margin: 0; line-height: 1.6;">${message}</p>
          </div>
        </div>
        
        <div style="padding: 20px 32px; text-align: center; color: #999; font-size: 12px; background: #f0f0f0;">
          <p style="margin: 0;">This message was sent via the KITIIBWA SAFARIS website contact form.</p>
          <p style="margin: 4px 0 0;">Reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `

    // Try Resend first (if API key available), then fallback to nodemailer
    const resendApiKey = process.env.RESEND_API_KEY
    const gmailUser = process.env.EMAIL_USER
    const gmailPass = process.env.EMAIL_PASSWORD

    if (resendApiKey) {
      // Use Resend - start with onboarding domain for free tier
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'KITIIBWA SAFARIS <onboarding@resend.dev>',
          to: toEmail,
          subject: `[Website Contact] ${inquiryLabel}: ${subject}`,
          html: htmlBody,
          reply_to: email,
        }),
      })

      if (!resendResponse.ok) {
        const errData = await resendResponse.json()
        console.error('[CONTACT - RESEND ERROR]', errData)
        console.error('[RESEND ERROR DETAILS]', JSON.stringify(errData, null, 2))
        throw new Error(`Resend API error: ${errData.message || JSON.stringify(errData)}`)
      }

      const resendData = await resendResponse.json()
      console.log('[EMAIL SENT SUCCESSFULLY VIA RESEND]', { messageId: resendData.id, to: toEmail, from: email })
    } else if (gmailUser && gmailPass) {
      // Use nodemailer with Gmail
      const nodemailer = require('nodemailer')
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: gmailUser, pass: gmailPass },
      })
      
      const mailResult = await transporter.sendMail({
        from: `KITIIBWA SAFARIS Website <${gmailUser}>`,
        to: toEmail,
        subject: `[Website Contact] ${inquiryLabel}: ${subject}`,
        html: htmlBody,
        replyTo: email,
      })
      
      console.log('[EMAIL SENT SUCCESSFULLY]', { messageId: mailResult.messageId, to: toEmail, from: email })
    } else {
      // Fallback: log to console so the form works in dev/demo
      console.log('[CONTACT FORM SUBMISSION - NO EMAIL CONFIG]', { name, email, phone, subject, message, country, contactPerson })
      console.warn('[WARNING] EMAIL_USER or EMAIL_PASSWORD not configured. Messages are being logged but not sent.')
    }

    return NextResponse.json(
      { success: true, message: 'Thank you! We will contact you within 24 hours.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[CONTACT ERROR]', error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('[ERROR DETAILS]', errorMessage)
    console.error('[STACK]', error instanceof Error ? error.stack : 'No stack trace')
    console.log('[DEBUG] RESEND_API_KEY present:', !!process.env.RESEND_API_KEY)
    console.log('[DEBUG] EMAIL_USER present:', !!process.env.EMAIL_USER)
    console.log('[DEBUG] EMAIL_PASSWORD present:', !!process.env.EMAIL_PASSWORD)
    return NextResponse.json({ error: 'Failed to send message. Please try WhatsApp or email us directly.' }, { status: 500 })
  }
}
