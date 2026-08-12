import nodemailer from 'nodemailer'
import { CONFIG } from '@/lib/config'

export interface EmailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export interface EmailResult {
  success: boolean
  messageId?: string
  error?: string
}

// Initialize email provider based on configuration
let emailProvider: 'resend' | 'nodemailer' | 'sendgrid' = (CONFIG.EMAIL_CONFIG.provider as any) || 'nodemailer'
let resendClient: any = null
let nodemailerTransporter: any = null

// Initialize Resend if configured
if (emailProvider === 'resend' && CONFIG.EMAIL_CONFIG.resend.apiKey) {
  try {
    const { Resend } = require('resend')
    resendClient = new Resend(CONFIG.EMAIL_CONFIG.resend.apiKey)
  } catch (error) {
    console.warn('[EMAIL] Resend not installed, falling back to nodemailer')
    emailProvider = 'nodemailer'
  }
}

// Initialize Nodemailer
if (emailProvider === 'nodemailer' || !resendClient) {
  nodemailerTransporter = nodemailer.createTransport({
    service: CONFIG.EMAIL_CONFIG.nodemailer.service || 'gmail',
    auth: {
      user: CONFIG.EMAIL_CONFIG.nodemailer.user,
      pass: CONFIG.EMAIL_CONFIG.nodemailer.password,
    },
  })
}

export async function sendEmail(options: EmailOptions): Promise<EmailResult> {
  try {
    // Send via appropriate provider
    if (emailProvider === 'resend' && resendClient) {
      return await sendViaResend(options)
    } else if (emailProvider === 'sendgrid' && CONFIG.EMAIL_CONFIG.sendgrid.apiKey) {
      return await sendViaSendGrid(options)
    } else {
      return await sendViaNodemailer(options)
    }
  } catch (error) {
    console.error('[EMAIL ERROR]', error)
    return { success: false, error: String(error) }
  }
}

async function sendViaResend(options: EmailOptions): Promise<EmailResult> {
  try {
    const result = await resendClient.emails.send({
      from: `KITIIBWA SAFARIS <${CONFIG.EMAIL_CONFIG.resend.apiKey ? 'noreply@resend.dev' : 'contact@kitiibwasafaris.com'}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    })

    return { success: true, messageId: result.id }
  } catch (error) {
    console.error('[EMAIL - RESEND ERROR]', error)
    return { success: false, error: String(error) }
  }
}

async function sendViaNodemailer(options: EmailOptions): Promise<EmailResult> {
  try {
    if (!nodemailerTransporter) {
      throw new Error('Nodemailer not configured')
    }

    const result = await nodemailerTransporter.sendMail({
      from: `KITIIBWA SAFARIS <${CONFIG.EMAIL_CONFIG.nodemailer.user}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    })

    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('[EMAIL - NODEMAILER ERROR]', error)
    return { success: false, error: String(error) }
  }
}

async function sendViaSendGrid(options: EmailOptions): Promise<EmailResult> {
  try {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(CONFIG.EMAIL_CONFIG.sendgrid.apiKey)

    const msg = {
      to: options.to,
      from: CONFIG.EMAIL_CONFIG.sendgrid.fromEmail,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    }

    const result = await sgMail.send(msg)
    return { success: true, messageId: result[0].headers['x-message-id'] }
  } catch (error) {
    console.error('[EMAIL - SENDGRID ERROR]', error)
    return { success: false, error: String(error) }
  }
}

export function getContactEmailHTML(data: {
  name: string
  email: string
  subject: string
  message: string
  phone?: string
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #D4A574; border-bottom: 2px solid #D4A574; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      
      <div style="margin: 20px 0;">
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        ${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ''}
        <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
      </div>

      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3>Message:</h3>
        <p style="white-space: pre-wrap; color: #333;">
          ${escapeHtml(data.message)}
        </p>
      </div>

      <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
        This is an automated email from your website contact form.
      </p>
    </div>
  `
}

export function getSafariInquiryEmailHTML(data: {
  name: string
  email: string
  packageName?: string
  travelDates?: string
  numberOfGuests?: number
  specialRequests?: string
  phone?: string
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #D4A574; border-bottom: 2px solid #D4A574; padding-bottom: 10px;">
        New Safari Inquiry
      </h2>
      
      <div style="margin: 20px 0;">
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        ${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ''}
        ${data.packageName ? `<p><strong>Package:</strong> ${escapeHtml(data.packageName)}</p>` : ''}
        ${data.travelDates ? `<p><strong>Travel Dates:</strong> ${escapeHtml(data.travelDates)}</p>` : ''}
        ${data.numberOfGuests ? `<p><strong>Number of Guests:</strong> ${data.numberOfGuests}</p>` : ''}
      </div>

      ${data.specialRequests ? `
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>Special Requests:</h3>
          <p style="white-space: pre-wrap; color: #333;">
            ${escapeHtml(data.specialRequests)}
          </p>
        </div>
      ` : ''}

      <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
        Please respond to this inquiry as soon as possible.
      </p>
    </div>
  `
}

export function getDonationConfirmationHTML(data: {
  name: string
  amount: string
  currency: string
  message?: string
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #D4A574; border-bottom: 2px solid #D4A574; padding-bottom: 10px;">
        Thank You for Your Donation
      </h2>
      
      <p>Dear ${escapeHtml(data.name)},</p>

      <p>We are deeply grateful for your generous donation of <strong>${data.currency} ${data.amount}</strong> to KITIIBWA SAFARIS.</p>

      <p>Your support will directly contribute to:</p>
      <ul style="color: #333;">
        <li>Conservation efforts in Uganda's national parks</li>
        <li>Community development and education programs</li>
        <li>Sustainable tourism practices</li>
        <li>Wildlife protection initiatives</li>
      </ul>

      ${data.message ? `
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Your Message:</strong></p>
          <p style="white-space: pre-wrap; color: #333;">${escapeHtml(data.message)}</p>
        </div>
      ` : ''}

      <p>A tax receipt will be sent to you via email shortly.</p>

      <p>Thank you for making a difference!</p>

      <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
        KITIIBWA SAFARIS | Conservation & Community Development
      </p>
    </div>
  `
}

export function getNewsletterWelcomeHTML(data: { name?: string }) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #D4A574; border-bottom: 2px solid #D4A574; padding-bottom: 10px;">
        Welcome to KITIIBWA Newsletter
      </h2>
      
      <p>Hello ${data.name ? escapeHtml(data.name) : 'Friend'},</p>

      <p>Thank you for subscribing to our newsletter! You'll now receive updates about:</p>
      <ul style="color: #333;">
        <li>New safari packages and special offers</li>
        <li>Wildlife and conservation news from Uganda</li>
        <li>Travel tips and destination guides</li>
        <li>Community initiatives and impact stories</li>
        <li>Exclusive member-only discounts</li>
      </ul>

      <p>We promise to keep your inbox fresh with quality content, not spam!</p>

      <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
        KITIIBWA SAFARIS Newsletter
      </p>
    </div>
  `
}

export function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
