# KITIIBWA SAFARIS - Backend Documentation

## Overview
KITIIBWA SAFARIS uses a modern Next.js 16 full-stack architecture with:
- **Database**: Neon PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth (email + password)
- **Storage**: Vercel Blob for images
- **Payments**: Stripe for donations
- **Email**: Nodemailer for contact form submissions

---

## Database Schema

### Tables

#### 1. `user` (Better Auth)
```sql
-- Better Auth managed table
id: TEXT PRIMARY KEY
email: TEXT UNIQUE NOT NULL
emailVerified: BOOLEAN
name: TEXT
image: TEXT
createdAt: TIMESTAMP
updatedAt: TIMESTAMP
```

#### 2. `session` (Better Auth)
```sql
id: TEXT PRIMARY KEY
userId: TEXT (FK -> user.id)
expiresAt: TIMESTAMP
createdAt: TIMESTAMP
updatedAt: TIMESTAMP
```

#### 3. `account` (Better Auth)
```sql
id: TEXT PRIMARY KEY
userId: TEXT (FK -> user.id)
type: TEXT
provider: TEXT
providerAccountId: TEXT
refreshToken: TEXT
accessToken: TEXT
expiresAt: BIGINT
```

#### 4. `verification` (Better Auth)
```sql
id: TEXT PRIMARY KEY
identifier: TEXT
value: TEXT
expiresAt: TIMESTAMP
createdAt: TIMESTAMP
updatedAt: TIMESTAMP
```

#### 5. `team`
```sql
id: SERIAL PRIMARY KEY
name: TEXT NOT NULL
role: TEXT NOT NULL
bio: TEXT
image: TEXT (URL to image)
createdAt: TIMESTAMP DEFAULT NOW()
```

#### 6. `gallery`
```sql
id: SERIAL PRIMARY KEY
title: TEXT NOT NULL
description: TEXT
image: TEXT NOT NULL (URL to image)
category: TEXT NOT NULL
order_index: INTEGER DEFAULT 0
createdAt: TIMESTAMP DEFAULT NOW()
```

#### 7. `cottage`
```sql
id: SERIAL PRIMARY KEY
name: TEXT NOT NULL
description: TEXT
image: TEXT NOT NULL
amenities: TEXT (JSON array as string)
capacity: INTEGER
pricePerNight: DECIMAL(10,2)
order_index: INTEGER DEFAULT 0
createdAt: TIMESTAMP DEFAULT NOW()
```

#### 8. `package`
```sql
id: SERIAL PRIMARY KEY
name: TEXT NOT NULL
description: TEXT
duration: INTEGER (days)
price: DECIMAL(10,2)
itinerary: TEXT (detailed text)
image: TEXT (URL to image)
createdAt: TIMESTAMP DEFAULT NOW()
```

#### 9. `blog`
```sql
id: SERIAL PRIMARY KEY
title: TEXT NOT NULL
slug: TEXT UNIQUE NOT NULL
content: TEXT NOT NULL (markdown)
excerpt: TEXT
featured_image: TEXT
author: TEXT
published: BOOLEAN DEFAULT true
createdAt: TIMESTAMP DEFAULT NOW()
updatedAt: TIMESTAMP DEFAULT NOW()
```

#### 10. `uganda_attraction`
```sql
id: SERIAL PRIMARY KEY
name: TEXT NOT NULL
description: TEXT
image: TEXT
location: TEXT
best_season: TEXT
order_index: INTEGER DEFAULT 0
createdAt: TIMESTAMP DEFAULT NOW()
```

#### 11. `outreach`
```sql
id: SERIAL PRIMARY KEY
title: TEXT NOT NULL
description: TEXT
image: TEXT
impact: TEXT
createdAt: TIMESTAMP DEFAULT NOW()
```

#### 12. `contact_message`
```sql
id: SERIAL PRIMARY KEY
name: TEXT NOT NULL
email: TEXT NOT NULL
phone: TEXT
subject: TEXT NOT NULL
message: TEXT NOT NULL
status: TEXT DEFAULT 'new' (new, replied, archived)
createdAt: TIMESTAMP DEFAULT NOW()
```

#### 13. `donation`
```sql
id: SERIAL PRIMARY KEY
donor_name: TEXT NOT NULL
donor_email: TEXT NOT NULL
amount: DECIMAL(10,2) NOT NULL
currency: TEXT DEFAULT 'USD' (USD, GBP, EUR, UGX)
stripe_payment_id: TEXT
status: TEXT DEFAULT 'pending' (pending, completed, failed)
message: TEXT
createdAt: TIMESTAMP DEFAULT NOW()
```

---

## API Routes

### Contact Form API
**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "phone": "string (optional)",
  "subject": "string",
  "message": "string"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Thank you for contacting us",
  "id": 123
}
```

**Response** (400 Bad Request):
```json
{
  "success": false,
  "error": "Missing required fields"
}
```

**Implementation Details**:
- Saves to `contact_message` table with status='new'
- Sends confirmation email to sender
- Notifies admin at dynamicyoo@gmail.com
- Returns message ID for tracking

### Donation API (To be implemented)
**Endpoint**: `POST /api/donations`

**Request Body**:
```json
{
  "donor_name": "string",
  "donor_email": "string",
  "amount": 100.00,
  "currency": "USD|GBP|EUR|UGX",
  "message": "string (optional)"
}
```

**Implementation Details**:
- Validates amount (min $5, max $100,000)
- Creates Stripe PaymentIntent
- Saves donation record with status='pending'
- Returns clientSecret for frontend Stripe integration
- Webhook `/api/webhooks/stripe` updates donation status on payment

---

## Environment Variables

```bash
# Database
DATABASE_URL=postgresql://user:pass@host/dbname

# Authentication
BETTER_AUTH_SECRET=your-secret-key-here (generate with: openssl rand -base64 32)
BETTER_AUTH_URL=https://yourdomain.com (optional, auto-detected in Vercel)

# Email (for contact form notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@kitiibwasafaris.com

# Stripe (for donations)
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Storage (Vercel Blob)
BLOB_READ_WRITE_TOKEN=your-token-here
```

---

## Admin Dashboard Features (To be built)

### Manage Content
- **Gallery**: Add/edit/delete images with labels
- **Packages**: Create custom safari packages
- **Cottages**: Manage accommodation listings
- **Team**: Update team member bios and photos
- **Blog**: Write and publish blog posts
- **Outreach**: Track community programs and impact metrics

### View Messages
- Filter contact form submissions by status
- Reply to inquiries
- Mark messages as replied/archived

### Track Donations
- View all donations with status
- Filter by date range and amount
- Export donation reports for financial records

---

## Frontend Components Architecture

```
app/
├── layout.tsx (root with branding)
├── page.tsx (home with carousel)
├── about/page.tsx (founder story + team)
├── gallery/page.tsx (10 items/page pagination)
├── cottages/page.tsx (accommodation listings)
├── uganda/page.tsx (destination info)
├── blog/page.tsx (blog listings with pagination)
├── outreach/page.tsx (community programs)
├── best-of/page.tsx (curated highlights)
├── packages/page.tsx (safari packages)
├── contact/page.tsx (contact form + map)
├── donations/page.tsx (donation form with Stripe)
└── api/
    ├── contact/ (POST - save messages)
    ├── donations/ (POST - process donations)
    └── webhooks/stripe/ (POST - payment updates)

components/
├── header.tsx (sticky nav with logo)
├── footer.tsx (with contact info)
├── hero-carousel.tsx (auto-scrolling images)
├── whatsapp-button.tsx (floating button)
├── pagination.tsx (page navigation)
└── gallery-image.tsx (image with overlay)

lib/
├── auth.ts (Better Auth config)
├── auth-client.ts (Client-side auth)
└── db/
    ├── index.ts (Drizzle setup)
    └── schema.ts (Database tables)
```

---

## Data Flow Examples

### Contact Form Submission
1. User fills form on `/contact`
2. `handleSubmit` sends POST to `/api/contact`
3. API validates fields
4. API saves to `contact_message` table (status='new')
5. API sends emails (confirmation + admin notification)
6. Frontend shows success message
7. Admin can view/reply from future admin dashboard

### Gallery Management (Future)
1. Admin logs in via `/admin` (protected route)
2. Admin uploads image → saves to Vercel Blob
3. Admin adds metadata (label, category, order)
4. Saves to `gallery` table
5. Gallery page fetches all images, paginated (10/page)
6. Frontend renders with hover label overlay

### Donation Flow (Future)
1. User selects amount and currency on `/donations`
2. Frontend creates Stripe PaymentIntent
3. User completes payment in Stripe modal
4. Stripe webhook confirms payment
5. API updates `donation` table (status='completed')
6. Donation email sent to donor
7. Impact metrics updated on `/outreach`

---

## Development Setup

### 1. Clone & Install
```bash
git clone <repo>
cd kitiibwa-safaris
pnpm install
```

### 2. Set Environment Variables
```bash
cp .env.example .env.local
# Edit .env.local with your secrets
```

### 3. Run Dev Server
```bash
pnpm dev
# Opens http://localhost:3000
```

### 4. Database Migrations
```bash
# Use Neon MCP tool in v0 to create tables
# Or run SQL directly from Neon dashboard
```

### 5. Test Contact Form
```
POST http://localhost:3000/api/contact
{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "+1234567890",
  "subject": "Test Inquiry",
  "message": "This is a test message"
}
```

---

## Security Best Practices

1. **Environment Variables**: Never commit `.env.local` to git
2. **Database**: All queries use parameterized statements (Drizzle)
3. **Authentication**: Better Auth handles password hashing + session management
4. **CORS**: Only allow requests from trusted origins
5. **Rate Limiting**: Implement rate limiting on contact form (future enhancement)
6. **Input Validation**: Validate all form inputs on backend
7. **Stripe Webhooks**: Verify webhook signatures before processing
8. **Email**: Use app-specific passwords, never hardcode credentials

---

## Deployment

### Vercel
```bash
# Push to GitHub
git push origin main

# Automatic deployment via Vercel
# Set environment variables in Vercel dashboard
```

### Database Backups
- Neon automatically backs up data
- Download backups from Neon dashboard regularly

### Monitoring
- Check Vercel logs for API errors
- Monitor Stripe webhook failures
- Set up email alerts for critical errors

---

## Future Enhancements

- [ ] Admin dashboard for content management
- [ ] Payment receipt emails (Stripe)
- [ ] User accounts with booking history
- [ ] Email newsletter signup
- [ ] Booking confirmation workflow
- [ ] Availability calendar for packages
- [ ] Multi-language support
- [ ] SMS notifications (Twilio)
- [ ] Social media integration
- [ ] Analytics dashboard

---

## Support & Contacts

**Technical Issues**: dynamicyoo@gmail.com  
**Uganda Phone**: +256 708898424  
**UK Phone**: +44 7498605656  
**WhatsApp**: +256 763705967

---

*Last Updated: 2026-07-08*
