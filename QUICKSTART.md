# KITIIBWA SAFARIS - Quick Start Guide

## Local Development Setup

### 1. Clone & Install

```bash
# Clone the repository
git clone <your-repo-url>
cd kitiibwa-safaris

# Install dependencies
npm install
```

### 2. Configure Environment

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your values
# You need:
# - DATABASE_URL (from Neon or local PostgreSQL)
# - Email credentials
# - Stripe keys (optional, for testing donations)
# - BETTER_AUTH_SECRET (generate: openssl rand -base64 32)
```

### 3. Initialize Database

```bash
# Push schema to database
npx drizzle-kit push:pg

# Or run migrations if using them
npm run db:migrate
```

### 4. Start Development Server

```bash
# Run dev server
npm run dev

# Open http://localhost:3000
```

## Key Files & Directories

```
/app
  ├── page.tsx              # Home page
  ├── contact/page.tsx      # Contact form page
  ├── donations/page.tsx    # Donations page
  ├── /api                  # API routes
  │   ├── /contact          # Contact form endpoint
  │   ├── /safari-inquiry   # Safari inquiry endpoint
  │   ├── /newsletter       # Newsletter subscription
  │   ├── /donations        # Donation creation
  │   ├── /events           # Event registration
  │   └── /webhooks         # Stripe webhooks

/lib
  ├── config.ts            # Centralized configuration
  ├── db/                   # Database setup
  │   ├── index.ts         # Drizzle instance
  │   └── schema.ts        # Table schemas
  ├── email.ts             # Email service (multi-provider)
  ├── validation.ts        # Input validation rules
  ├── seo.ts               # SEO utilities
  └── data/                # Data-driven content
      ├── packages.ts      # Safari packages
      └── site-config.ts   # Business info

/components
  ├── header.tsx           # Navigation
  ├── footer.tsx           # Footer
  └── ...other components

/public
  ├── /images              # Image assets
  └── ...static files
```

## Common Tasks

### Update Business Information

Edit `/lib/config.ts` - all business info is centralized and clearly labeled as PLACEHOLDER.

### Add a New API Route

1. Create file: `/app/api/my-endpoint/route.ts`
2. Add validation in `/lib/validation.ts` if needed
3. Add database table in `/lib/db/schema.ts`
4. Use centralized config from `/lib/config.ts`

Example:
```typescript
// app/api/my-endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { CONFIG } from '@/lib/config'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate & process
    // Store in database
    // Send email if needed
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
```

### Test Forms Locally

1. Start dev server: `npm run dev`
2. Go to contact form: http://localhost:3000/contact
3. Submit form
4. Check terminal for logs
5. Verify data in database or email

### Test Stripe Payments

```bash
# Use Stripe test card
Card: 4242 4242 4242 4242
Expiry: Any future date
CVC: Any 3 digits

# Check webhooks in Stripe dashboard
# Use Stripe CLI for local webhook testing:
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

### Send Test Email

```typescript
// In any API route
import { sendEmail, getContactEmailHTML } from '@/lib/email'

const result = await sendEmail({
  to: 'test@example.com',
  subject: 'Test Email',
  html: getContactEmailHTML({
    name: 'Test',
    email: 'sender@example.com',
    subject: 'Test',
    message: 'This is a test'
  })
})

console.log('Email sent:', result)
```

### Debug API Issues

Check environment variables:
```bash
# Verify .env.local has all required values
cat .env.local

# Check for TypeScript errors
npm run type-check

# Test API endpoint
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test"}'
```

## Database Queries

### Using Drizzle ORM

```typescript
import { db } from '@/lib/db'
import { contact_message } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

// Get all messages
const messages = await db.query.contact_message.findMany()

// Get specific message
const message = await db.query.contact_message.findFirst({
  where: eq(contact_message.id, 1)
})

// Insert new message
const result = await db
  .insert(contact_message)
  .values({
    name: 'John',
    email: 'john@example.com',
    subject: 'Test',
    message: 'Hello'
  })
  .returning()

// Update message
await db
  .update(contact_message)
  .set({ status: 'read' })
  .where(eq(contact_message.id, 1))

// Delete message
await db
  .delete(contact_message)
  .where(eq(contact_message.id, 1))
```

## Email Configuration

### Test Different Providers

**Resend (Recommended)**
```env
EMAIL_PROVIDER=resend
RESEND_API_KEY=re_...
```

**SendGrid**
```env
EMAIL_PROVIDER=sendgrid
SENDGRID_API_KEY=SG.xxx
```

**Gmail (Free)**
```env
EMAIL_PROVIDER=nodemailer
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

## Production Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full instructions.

Quick version:
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

## Troubleshooting

### "DATABASE_URL not set"
- Copy `.env.example` to `.env.local`
- Add your database connection string

### "Cannot find module"
- Run `npm install`
- Check imports match file names (case-sensitive)

### Email not sending
- Check EMAIL_PROVIDER is set
- Verify credentials in .env.local
- Check spam folder
- Review email provider dashboard

### Database connection refused
- Ensure DATABASE_URL is correct
- Check database is running
- Verify credentials
- Test connection with psql

### Build fails on Vercel
- Check all environment variables are set
- Run `npm run build` locally to debug
- Check for TypeScript errors: `npm run type-check`

## Performance Tips

- Images: Use Next.js Image component for optimization
- Database: Add indexes for frequently queried fields
- API: Add caching headers where appropriate
- Forms: Debounce input validation

## Security Checklist

- Never commit `.env.local`
- Use strong database passwords
- Rotate API keys regularly
- Enable HTTPS (automatic on Vercel)
- Keep dependencies updated: `npm audit`
- Validate all user inputs server-side

## Learning Resources

- Next.js: https://nextjs.org/docs
- Drizzle ORM: https://orm.drizzle.team
- Tailwind CSS: https://tailwindcss.com/docs
- Better Auth: https://www.better-auth.com

## Support

- Check API docs: [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)
- Check config options: [lib/config.ts](./lib/config.ts)
- Check deployment: [DEPLOYMENT.md](./DEPLOYMENT.md)
