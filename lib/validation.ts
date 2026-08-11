import { db } from '@/lib/db'
import { contact_message, safari_inquiry, donation } from '@/lib/db/schema'
import { eq, and, gte } from 'drizzle-orm'

// Email validation
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

// Phone validation (basic)
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/
  return phone.length >= 8 && phoneRegex.test(phone)
}

// Input sanitization - remove potentially dangerous characters
export function sanitizeInput(input: string): string {
  if (!input) return ''
  return input
    .trim()
    .substring(0, 5000) // Limit length
    .replace(/[<>]/g, '') // Remove angle brackets
}

// Validate message/content
export function validateMessage(message: string): boolean {
  if (!message || message.trim().length === 0) return false
  if (message.length > 10000) return false
  return true
}

// Spam checking - prevent duplicate submissions within time window
export async function checkSpam(email: string, table?: 'contact' | 'donation' | 'inquiry'): Promise<boolean> {
  try {
    const timeWindow = new Date(Date.now() - 5 * 60 * 1000) // 5 minutes

    if (table === 'donation' || !table) {
      const recentDonations = await db.query.donation.findMany({
        where: and(
          eq(donation.donor_email, email),
          gte(donation.createdAt, timeWindow)
        ),
        limit: 1,
      })
      if (recentDonations.length > 0) return true
    }

    if (table === 'inquiry' || !table) {
      const recentInquiries = await db.query.safari_inquiry.findMany({
        where: and(
          eq(safari_inquiry.email, email),
          gte(safari_inquiry.createdAt, timeWindow)
        ),
        limit: 1,
      })
      if (recentInquiries.length > 0) return true
    }

    if (table === 'contact' || !table) {
      const recentMessages = await db.query.contact_message.findMany({
        where: and(
          eq(contact_message.email, email),
          gte(contact_message.createdAt, timeWindow)
        ),
        limit: 1,
      })
      if (recentMessages.length > 0) return true
    }

    return false
  } catch (error) {
    console.error('[SPAM CHECK ERROR]', error)
    return false // Don't block on error
  }
}

// Validate donation amount
export function validateDonationAmount(amount: number): boolean {
  return amount > 0 && amount <= 1000000 && !isNaN(amount)
}

// Validate number of guests
export function validateGuestCount(count: number): boolean {
  return count > 0 && count <= 1000 && Number.isInteger(count)
}

// Generate unique tokens
export function generateToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

// Validate URLs
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Check if email is disposable (basic)
export function isDisposableEmail(email: string): boolean {
  const disposableDomains = [
    'tempmail.com',
    '10minutemail.com',
    'guerrillamail.com',
    'mailinator.com',
    'throwaway.email',
  ]
  const domain = email.split('@')[1]
  return disposableDomains.includes(domain.toLowerCase())
}
