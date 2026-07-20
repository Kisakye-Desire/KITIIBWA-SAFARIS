# KITIIBWA SAFARIS - Production Deployment Guide

## Overview

This guide covers deploying KITIIBWA SAFARIS to production on Vercel with a Neon PostgreSQL database. The site includes dynamic form handling, email notifications, Stripe payments, and a complete content management system.

## Prerequisites

1. **Vercel Account** - https://vercel.com
2. **Neon Database** - https://neon.tech
3. **Stripe Account** - https://stripe.com (for donations)
4. **Email Service** - Choose one:
   - **Resend** - https://resend.com (recommended)
   - **SendGrid** - https://sendgrid.com
   - **Gmail** - Free (use app password)

## Step 1: Database Setup (Neon)

1. Go to https://neon.tech and create an account
2. Create a new project and database
3. Copy the connection string (looks like: `postgresql://user:password@host/database`)
4. Save for later - you'll need this for environment variables

## Step 2: Email Service Configuration

### Option A: Resend (Recommended - Easiest)

1. Go to https://resend.com and create account
2. Copy your API key
3. Set `EMAIL_PROVIDER=resend` and `RESEND_API_KEY=your_key`

### Option B: SendGrid

1. Go to https://sendgrid.com and create account
2. Create an API key
3. Set `EMAIL_PROVIDER=sendgrid`
4. Set `SENDGRID_API_KEY=your_key`

### Option C: Gmail (Free Option)

1. Enable 2-factor authentication on your Gmail account
2. Create an App Password at https://myaccount.google.com/apppasswords
3. Set `EMAIL_PROVIDER=nodemailer`
4. Set `EMAIL_USER=your_email@gmail.com`
5. Set `EMAIL_PASSWORD=your_app_password`

## Step 3: Stripe Setup (For Donations)

1. Create account at https://stripe.com
2. Go to Dashboard → API Keys
3. Copy **Publishable Key** and **Secret Key**
4. Go to Developers → Webhooks
5. Create endpoint for `https://yourdomain.com/api/webhooks/stripe`
6. Copy the **Webhook Secret**

Environment variables to set:
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...`
- `STRIPE_SECRET_KEY=sk_live_...`
- `STRIPE_WEBHOOK_SECRET=whsec_...`

## Step 4: Connect GitHub & Deploy to Vercel

1. Push code to GitHub
2. Go to https://vercel.com/dashboard
3. Click "Add New..." → "Project"
4. Select your repository
5. Click "Import"

## Step 5: Configure Environment Variables on Vercel

In Vercel project settings → Environment Variables, add all values from `.env.example`:

**Database:**
- `DATABASE_URL` = Your Neon PostgreSQL URL

**Business Info:**
- `BUSINESS_EMAIL`
- `BUSINESS_PHONE`
- `BUSINESS_WHATSAPP`

**Email Configuration:**
- `EMAIL_PROVIDER` = `resend` | `sendgrid` | `nodemailer`
- `ADMIN_EMAIL`
- `CONTACT_FORM_EMAIL`
- `BOOKINGS_EMAIL`
- `DONATIONS_EMAIL`
- `EVENTS_EMAIL`

**Email Provider Keys (choose one):**
- `RESEND_API_KEY` (if using Resend)
- `SENDGRID_API_KEY` (if using SendGrid)
- `EMAIL_USER` + `EMAIL_PASSWORD` (if using Gmail)

**Stripe (if payments enabled):**
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

**Better Auth (Session Management):**
- `BETTER_AUTH_SECRET` = Generate with: `openssl rand -base64 32`

**Other:**
- `NEXT_PUBLIC_BASE_URL` = Your production domain
- `NODE_ENV` = `production`

## Step 6: Initialize Database Schema

### Option A: Via Drizzle Kit (Recommended)

```bash
# Install packages
npm install

# Push schema to database
npx drizzle-kit push:pg
```

### Option B: Manual SQL

Connect to your Neon database and run the SQL schema from `/lib/db/schema.ts`

## Step 7: Verify Deployment

1. Visit your production domain
2. Test contact form at `/contact`
3. Test donations at `/donations`
4. Test newsletter signup in footer
5. Check admin email for submissions

## Production Checklist

- [ ] Database connected and schema initialized
- [ ] All environment variables set
- [ ] Email service configured and tested
- [ ] Stripe webhook configured (if using payments)
- [ ] Domain configured in Vercel
- [ ] SSL certificate generated (automatic on Vercel)
- [ ] Analytics configured (optional)
- [ ] Backup strategy in place
- [ ] Monitoring/alerting set up
- [ ] Admin contact emails verified

## Monitoring & Maintenance

### Email Logs

Check if emails are being sent:
1. Check spam folder in your email
2. Check email provider dashboard (Resend/SendGrid/Gmail)
3. Look at API response status in browser console

### Form Submissions

All submissions are stored in the database and can be accessed through:
- Contact messages: `contact_message` table
- Safari inquiries: `safari_inquiry` table
- Donations: `donation` table
- Newsletter signups: `newsletter_subscriber` table
- Event registrations: `event_registration` table

### Database Backups

Neon automatically backs up your database. To export data:

```bash
# Connect to Neon and export
psql DATABASE_URL -c "SELECT * FROM contact_message" > backup.sql
```

## Troubleshooting

### Emails not sending

1. Check environment variables are set correctly
2. Verify email provider API keys are valid
3. Check spam folder
4. Review email provider dashboard for errors
5. Check `console.error` logs in Vercel

### Stripe payments not working

1. Verify webhook is configured correctly
2. Check `STRIPE_WEBHOOK_SECRET` is set
3. Test with Stripe test card: `4242 4242 4242 4242`
4. Check webhook logs in Stripe dashboard

### Database connection errors

1. Verify `DATABASE_URL` is correct
2. Check network connectivity from Vercel to Neon
3. Ensure IP allowlist includes Vercel
4. Verify password is correct (special characters need URL encoding)

## Performance Optimization

The site is optimized for performance:
- Static pages prerendered
- API routes cached where appropriate
- Images optimized with Next.js Image component
- CSS/JS minified automatically
- Database queries optimized

Current performance targets:
- Lighthouse Score: > 85
- Core Web Vitals: All green
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

## Security

- All user input validated server-side
- SQL injection prevention via Drizzle ORM
- XSS protection via escaping
- CSRF tokens on forms (handled by Next.js)
- Rate limiting on forms
- HTTPS/SSL on all connections
- No sensitive data in client code

## Support

For issues:
1. Check this guide's troubleshooting section
2. Review Vercel logs: `vercel logs`
3. Check environment variable configuration
4. Contact support at admin@kitiibwasafaris.com

## Next Steps

1. Configure custom domain
2. Set up analytics (Google Analytics optional)
3. Customize email templates in `/lib/email.ts`
4. Add more team members to Vercel project
5. Set up monitoring/alerting
6. Create backup strategy
