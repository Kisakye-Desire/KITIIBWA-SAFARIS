export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface ContactInfo {
  email: string
  phone: {
    uganda: string
    uk: string
  }
  address: string
  whatsapp: string
  operatingHours: {
    weekday: string
    saturday: string
    sunday: string
  }
}

export interface SiteMetadata {
  title: string
  description: string
  tagline: string
  domain: string
  logo: string
  favicon: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/kitiibwasafaris',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/kitiibwasafaris',
    icon: 'instagram',
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@kitiibwasafaris',
    icon: 'tiktok',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/kitiibwasafaris',
    icon: 'twitter',
  },
]

export const contactInfo: ContactInfo = {
  email: 'info@kitiibwasafaris.com',
  phone: {
    uganda: '+256 702 345273',
    uk: '+44 7884 181149',
  },
  address: 'Mukon Access Clinic, Mukon Town, Kampala–Jinja Road, opposite Harred Petrol Station, Uganda',
  whatsapp: 'https://wa.me/256702345273',
  operatingHours: {
    weekday: 'Monday - Friday: 8:00 AM - 6:00 PM EAT',
    saturday: 'Saturday: 9:00 AM - 4:00 PM EAT',
    sunday: 'Sunday: Closed (Emergency line available)',
  },
}

export const siteMetadata: SiteMetadata = {
  title: 'Kitiibwa Children Initiative',
  description: 'Kitiibwa Children Initiative helps children in Uganda thrive through education, practical support, community care, and opportunities for a brighter future.',
  tagline: 'Every child deserves a chance to thrive',
  domain: 'kitiibwasafaris.com',
  logo: '/images/logo.png',
  favicon: '/favicon.ico',
}

export const bankTransferDetails = {
  accountName: 'KITIIBWA SAFARIS LIMITED',
  accountNumber: 'XXXX XXXX XXXX XXXX', // Update with actual account
  bankName: 'Uganda Commercial Bank',
  swiftCode: 'UGCBUGKA',
  iban: 'UG##XXXX XXXX XXXX XXXX XXXX',
  bankAddress: 'Kampala, Uganda',
  reference: 'DONATION-[NAME]-[DATE]',
}

export const mobilePaymentMethods = {
  mtn: '0773525452 (MTN Mobile Money) — Muwaga Hannington',
  airtel: '0702345273 (Airtel Money) — Muwaga Hannington',
  africell: 'Not currently available',
}

// Helper functions
export function getSocialLinkByName(name: string): SocialLink | undefined {
  return socialLinks.find((link) => link.name.toLowerCase() === name.toLowerCase())
}

export function getPhoneNumber(region: 'uganda' | 'uk'): string {
  return contactInfo.phone[region]
}

export function getFullTitle(pageTitle?: string): string {
  return pageTitle ? `${pageTitle} | ${siteMetadata.title}` : siteMetadata.title
}

export function getSocialShareUrl(platform: string, page: string): string {
  const baseUrl = `https://${siteMetadata.domain}`
  const text = `Check out this amazing safari experience at KITIIBWA SAFARIS`

  switch (platform.toLowerCase()) {
    case 'facebook':
      return `https://facebook.com/sharer/sharer.php?u=${baseUrl}${page}`
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${baseUrl}${page}&text=${text}`
    case 'whatsapp':
      return `https://wa.me/?text=${text}%20${baseUrl}${page}`
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${baseUrl}${page}`
    default:
      return baseUrl
  }
}
