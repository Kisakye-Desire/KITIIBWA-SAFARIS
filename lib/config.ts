/**
 * KITIIBWA SAFARIS Configuration
 * Centralized configuration file for all business information, API keys, and settings.
 * All placeholder values are clearly labeled and should be updated with actual values.
 */

// BUSINESS INFORMATION
export const BUSINESS_INFO = {
  name: 'Kitiibwa Children Initiative',
  tagline: 'Helping children in Uganda thrive',
  description: 'Kitiibwa Children Initiative helps children in Uganda learn, grow, and thrive through education, practical care, family support, and pathways to a brighter future.',
  
  // Contact Information - UPDATE THESE
  email: process.env.BUSINESS_EMAIL || 'contact@kitiibwasafaris.com', // PLACEHOLDER - Update in .env
  phone: process.env.BUSINESS_PHONE || '+256 (0) 708 898 424', // PLACEHOLDER
  whatsapp: process.env.BUSINESS_WHATSAPP || '+256 708 898 424', // PLACEHOLDER
  
  // Addresses
  headquarters: {
    street: 'Plot 245, Kigondo Road', // PLACEHOLDER
    city: 'Kampala',
    country: 'Uganda',
    postalCode: 'P.O. Box 7232', // PLACEHOLDER
  },
  
  // Coordinates for map
  coordinates: {
    lat: 0.3476,
    lng: 32.5825,
  },
}

// SOCIAL MEDIA - UPDATE THESE
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/kitiibwasafaris', // PLACEHOLDER
  instagram: 'https://www.instagram.com/kitiibwasafaris', // PLACEHOLDER
  twitter: 'https://twitter.com/kitiibwasafaris', // PLACEHOLDER
  whatsapp: 'https://wa.me/256708898424', // PLACEHOLDER
  youtube: 'https://www.youtube.com/@kitiibwasafaris', // PLACEHOLDER
  linkedin: 'https://linkedin.com/company/kitiibwa-safaris', // PLACEHOLDER
}

// EMAIL CONFIGURATION
export const EMAIL_CONFIG = {
  // Admin emails
  adminEmail: process.env.ADMIN_EMAIL || 'kisakyedhisayar@gmail.com',
  contactFormEmail: process.env.CONTACT_FORM_EMAIL || 'kisakyedhisayar@gmail.com',
  bookingsEmail: process.env.BOOKINGS_EMAIL || 'kisakyedhisayar@gmail.com',
  donationsEmail: process.env.DONATIONS_EMAIL || 'kisakyedhisayar@gmail.com',
  eventsEmail: process.env.EVENTS_EMAIL || 'kisakyedhisayar@gmail.com',
  
  // Email provider configuration
  provider: process.env.EMAIL_PROVIDER || 'resend', // 'resend' | 'nodemailer' | 'sendgrid'
  
  // Resend configuration
  resend: {
    apiKey: process.env.RESEND_API_KEY || '', // PLACEHOLDER - Get from Resend.com
  },
  
  // Nodemailer configuration (Gmail example)
  nodemailer: {
    service: 'gmail',
    user: process.env.EMAIL_USER || '', // PLACEHOLDER - Gmail address
    password: process.env.EMAIL_PASSWORD || '', // PLACEHOLDER - Gmail app password
  },
  
  // SendGrid configuration
  sendgrid: {
    apiKey: process.env.SENDGRID_API_KEY || '', // PLACEHOLDER - Get from SendGrid
    fromEmail: process.env.SENDGRID_FROM_EMAIL || 'noreply@kitiibwasafaris.com', // PLACEHOLDER
  },
}

// PAYMENT CONFIGURATION (Stripe)
export const PAYMENT_CONFIG = {
  provider: 'stripe',
  stripe: {
    publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '', // PLACEHOLDER
    secretKey: process.env.STRIPE_SECRET_KEY || '', // PLACEHOLDER
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '', // PLACEHOLDER
  },
  
  // Currency configuration
  currency: 'USD',
  supportedCurrencies: ['USD', 'UGX', 'EUR', 'GBP'],
  
  // Mobile money (for Uganda)
  mobileMoney: {
    enabled: true,
    methods: {
      mtn: '+256 773 525452',
      airtel: '+256 702 345273',
      africell: 'Not currently available',
    },
  },
}

// SAFARI PACKAGES - UPDATE THESE
export const SAFARI_PACKAGES = {
  basic: {
    id: 'basic-safari',
    name: 'Basic Safari Package',
    price: 1500,
    duration: '3 days',
    description: 'Perfect introduction to Ugandan wildlife',
  },
  premium: {
    id: 'premium-safari',
    name: 'Premium Safari Experience',
    price: 2500,
    duration: '5 days',
    description: 'Comprehensive gorilla trekking and game drives',
  },
  luxury: {
    id: 'luxury-safari',
    name: 'Luxury African Adventure',
    price: 4500,
    duration: '7 days',
    description: 'All-inclusive luxury experience with private guides',
  },
}

// EVENT CONFIGURATION
export const EVENT_CONFIG = {
  safariChill2027: {
    id: 'safari-chill-2027',
    name: 'Safari & Chill Experience 2027',
    status: 'coming-soon', // 'coming-soon' | 'registration-open' | 'sold-out' | 'completed'
    description: 'The ultimate African adventure combining wildlife, entertainment, and relaxation',
    startDate: '2027-12-15', // PLACEHOLDER - Update with actual dates
    endDate: '2027-12-18',
    venue: 'Singura Cottages, Uganda',
    capacity: 150,
    pricePerPerson: 2500,
  },
}

// SEO CONFIGURATION
export const SEO_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://kitiibwasafaris.com', // PLACEHOLDER
  defaultLocale: 'en',
  
  // Open Graph
  og: {
    defaultImage: '/og-image.png',
    imageWidth: 1200,
    imageHeight: 630,
  },
  
  // Twitter
  twitter: {
    handle: '@kitiibwasafaris', // PLACEHOLDER
    site: '@kitiibwasafaris',
  },
}

// ANALYTICS CONFIGURATION
export const ANALYTICS_CONFIG = {
  // Google Analytics
  googleAnalytics: {
    enabled: process.env.NEXT_PUBLIC_GA_ENABLED === 'true',
    measurementId: process.env.NEXT_PUBLIC_GA_ID || '', // PLACEHOLDER - GA4 ID
  },
  
  // Vercel Analytics
  vercelAnalytics: {
    enabled: true,
  },
}

// FEATURE FLAGS
export const FEATURES = {
  enableBookings: process.env.ENABLE_BOOKINGS === 'true' ?? true,
  enableDonations: process.env.ENABLE_DONATIONS === 'true' ?? true,
  enableEvents: process.env.ENABLE_EVENTS === 'true' ?? true,
  enableNewsletter: process.env.ENABLE_NEWSLETTER === 'true' ?? true,
  enableGallery: process.env.ENABLE_GALLERY === 'true' ?? true,
  enableBlog: process.env.ENABLE_BLOG === 'true' ?? false, // Coming soon
}

// RATE LIMITING
export const RATE_LIMITS = {
  contactForm: {
    windowMs: 5 * 60 * 1000, // 5 minutes
    maxRequests: 3,
  },
  newsletter: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 5,
  },
  donation: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 10,
  },
  eventRegistration: {
    windowMs: 5 * 60 * 1000, // 5 minutes
    maxRequests: 3,
  },
}

// VALIDATION RULES
export const VALIDATION_RULES = {
  message: {
    minLength: 10,
    maxLength: 10000,
  },
  name: {
    minLength: 2,
    maxLength: 100,
  },
  phone: {
    minLength: 8,
    maxLength: 20,
  },
  donation: {
    minAmount: 1,
    maxAmount: 1000000,
  },
  eventGuests: {
    minGuests: 1,
    maxGuests: 1000,
  },
}

// SECURITY
export const SECURITY = {
  // CORS configuration
  cors: {
    allowedOrigins: (process.env.ALLOWED_ORIGINS || 'https://kitiibwasafaris.com').split(','),
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
  
  // Rate limiting enabled
  rateLimitingEnabled: process.env.RATE_LIMITING_ENABLED !== 'false',
  
  // IP logging
  logIpAddresses: process.env.LOG_IP_ADDRESSES !== 'false',
}

// DATABASE
export const DATABASE_CONFIG = {
  url: process.env.DATABASE_URL || '', // PLACEHOLDER - Get from Neon
  // Maximum pool connections
  max: 20,
  // Timeout for acquiring connection (ms)
  timeout: 5000,
}

// ENVIRONMENT
export const ENVIRONMENT = {
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  isStaging: process.env.VERCEL_ENV === 'preview',
  
  // Deployment URLs
  productionUrl: process.env.VERCEL_PRODUCTION_URL || 'kitiibwasafaris.com', // PLACEHOLDER
  previewUrl: process.env.VERCEL_URL || 'localhost:3000',
}

// EXPORT ALL CONFIGURATION
export const CONFIG = {
  BUSINESS_INFO,
  SOCIAL_LINKS,
  EMAIL_CONFIG,
  PAYMENT_CONFIG,
  SAFARI_PACKAGES,
  EVENT_CONFIG,
  SEO_CONFIG,
  ANALYTICS_CONFIG,
  FEATURES,
  RATE_LIMITS,
  VALIDATION_RULES,
  SECURITY,
  DATABASE_CONFIG,
  ENVIRONMENT,
}
