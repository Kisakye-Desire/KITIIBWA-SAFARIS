# KITIIBWA SAFARIS - Deployment Checklist

## Pre-Deployment Setup

### Phase 1: Environment Configuration

- [ ] Copy `.env.example` to `.env.local`
- [ ] Update `BUSINESS_EMAIL` with your email
- [ ] Update `BUSINESS_PHONE` with your phone
- [ ] Update `BUSINESS_WHATSAPP` with WhatsApp number
- [ ] Choose email provider (Resend recommended)
- [ ] Generate `BETTER_AUTH_SECRET`: `openssl rand -base64 32`
- [ ] Set `NODE_ENV=development` for local testing

### Phase 2: Database Setup

**Choose one database provider:**

- [ ] **Neon (Recommended)**
  - [ ] Sign up at https://neon.tech
  - [ ] Create project and database
  - [ ] Copy connection string to `DATABASE_URL`

- [ ] **AWS RDS PostgreSQL**
  - [ ] Create RDS instance
  - [ ] Copy connection string to `DATABASE_URL`

- [ ] **Local PostgreSQL**
  - [ ] Install PostgreSQL locally
  - [ ] Create database
  - [ ] Set `DATABASE_URL` to connection string

- [ ] Run: `npx drizzle-kit push:pg`
- [ ] Verify tables created in database

### Phase 3: Email Provider Setup

**Choose ONE provider:**

#### Option A: Resend (Recommended)
- [ ] Sign up at https://resend.com
- [ ] Create API key
- [ ] Set `EMAIL_PROVIDER=resend`
- [ ] Set `RESEND_API_KEY=your_key`
- [ ] Test email sending locally

#### Option B: SendGrid
- [ ] Sign up at https://sendgrid.com
- [ ] Create API key
- [ ] Set `EMAIL_PROVIDER=sendgrid`
- [ ] Set `SENDGRID_API_KEY=your_key`
- [ ] Verify sender email

#### Option C: Gmail (Free)
- [ ] Enable 2-factor authentication on Gmail
- [ ] Create App Password
- [ ] Set `EMAIL_PROVIDER=nodemailer`
- [ ] Set `EMAIL_USER=your_email@gmail.com`
- [ ] Set `EMAIL_PASSWORD=app_password`

- [ ] Update admin emails in config:
  - `ADMIN_EMAIL`
  - `CONTACT_FORM_EMAIL`
  - `BOOKINGS_EMAIL`
  - `DONATIONS_EMAIL`
  - `EVENTS_EMAIL`

### Phase 4: Payment Setup (Optional - for Donations)

- [ ] Sign up at https://stripe.com
- [ ] Get API keys from dashboard
- [ ] Set `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...`
- [ ] Set `STRIPE_SECRET_KEY=sk_...`
- [ ] Create webhook endpoint
- [ ] Set `STRIPE_WEBHOOK_SECRET=whsec_...`

### Phase 5: Local Testing

- [ ] Run: `npm install`
- [ ] Run: `npm run dev`
- [ ] Visit http://localhost:3000
- [ ] Test contact form:
  - [ ] Submit form at /contact
  - [ ] Check database for entry
  - [ ] Check admin email inbox
  - [ ] Verify success message
- [ ] Test safari inquiry:
  - [ ] Go to /packages
  - [ ] Submit inquiry
  - [ ] Check database
  - [ ] Check email
- [ ] Test newsletter:
  - [ ] Subscribe at footer
  - [ ] Check database
  - [ ] Check welcome email
- [ ] Test donations (if enabled):
  - [ ] Go to /donations
  - [ ] Create checkout session
  - [ ] Verify Stripe integration
- [ ] Test event registration:
  - [ ] Go to /safari-chill-experience
  - [ ] Register for event
  - [ ] Check confirmation email

## Production Deployment

### Phase 6: Vercel Setup

- [ ] Push code to GitHub
- [ ] Sign up at https://vercel.com
- [ ] Import GitHub repository
- [ ] Click "Deploy"

### Phase 7: Vercel Environment Variables

In Vercel project settings → Environment Variables, add all values:

**Database:**
- [ ] `DATABASE_URL` = PostgreSQL connection string

**Business Info:**
- [ ] `BUSINESS_EMAIL`
- [ ] `BUSINESS_PHONE`
- [ ] `BUSINESS_WHATSAPP`

**Email Configuration:**
- [ ] `EMAIL_PROVIDER` = resend | sendgrid | nodemailer
- [ ] `ADMIN_EMAIL`
- [ ] `CONTACT_FORM_EMAIL`
- [ ] `BOOKINGS_EMAIL`
- [ ] `DONATIONS_EMAIL`
- [ ] `EVENTS_EMAIL`

**Email Provider (choose one):**
- [ ] `RESEND_API_KEY` (if using Resend)
- [ ] `SENDGRID_API_KEY` (if using SendGrid)
- [ ] `EMAIL_USER` + `EMAIL_PASSWORD` (if using Gmail)

**Stripe (if payments enabled):**
- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- [ ] `STRIPE_SECRET_KEY`
- [ ] `STRIPE_WEBHOOK_SECRET`

**Authentication:**
- [ ] `BETTER_AUTH_SECRET` = Generate: `openssl rand -base64 32`

**Other:**
- [ ] `NEXT_PUBLIC_BASE_URL` = Your domain
- [ ] `NODE_ENV` = production

### Phase 8: Domain Configuration

- [ ] Register domain (if needed)
- [ ] In Vercel: Settings → Domains
- [ ] Add your domain
- [ ] Update DNS records as shown by Vercel
- [ ] Wait for SSL certificate (automatic)
- [ ] Verify domain works

### Phase 9: Production Testing

Visit your production domain and test:

- [ ] Homepage loads
- [ ] Navigation works
- [ ] Contact form submits and email arrives
- [ ] Safari inquiry works
- [ ] Newsletter signup works
- [ ] Donations/payments work (if enabled)
- [ ] Event registration works
- [ ] Mobile responsive
- [ ] SSL certificate valid
- [ ] No console errors

### Phase 10: Stripe Webhook Configuration

If using donations:
- [ ] Configure webhook in Stripe Dashboard
- [ ] URL: `https://yourdomain.com/api/webhooks/stripe`
- [ ] Events: checkout.session.completed, charge.failed, charge.refunded
- [ ] Test webhook delivery

### Phase 11: Monitoring & Alerts

- [ ] Set up Vercel alerts (optional)
- [ ] Test error notifications
- [ ] Check database backup settings (Neon auto-backs up)
- [ ] Plan backup strategy

## Post-Deployment

### Phase 12: Verification

- [ ] All forms working end-to-end
- [ ] Emails sending to admins
- [ ] Database storing all data
- [ ] Stripe payments processing (if enabled)
- [ ] No errors in Vercel logs
- [ ] Site responsive on mobile
- [ ] Performance acceptable

### Phase 13: Documentation

- [ ] Share deployment guide with team
- [ ] Update business contact info in config
- [ ] Document any customizations made
- [ ] Store backup of environment variables (securely)
- [ ] Save API keys in secure location

### Phase 14: Maintenance

Ongoing tasks:

- [ ] Weekly: Check form submissions
- [ ] Weekly: Verify emails being sent
- [ ] Monthly: Review error logs
- [ ] Monthly: Check payment processing
- [ ] Quarterly: Update dependencies
- [ ] Quarterly: Review security logs
- [ ] Annually: Database audit

## Troubleshooting

If something doesn't work:

1. **Check logs:**
   - Local: Terminal output
   - Production: Vercel logs → `vercel logs`

2. **Verify environment variables:**
   - All required variables set?
   - Correct values copied?
   - No typos in names?

3. **Test API directly:**
   ```bash
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -d '{...}'
   ```

4. **Check database connection:**
   ```bash
   psql $DATABASE_URL -c "SELECT NOW();"
   ```

5. **Review documentation:**
   - [DEPLOYMENT.md](./DEPLOYMENT.md) - Full instructions
   - [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) - API reference
   - [QUICKSTART.md](./QUICKSTART.md) - Developer guide

## Important Reminders

- Never commit `.env.local` to Git
- Never share API keys or secrets
- Always use environment variables for sensitive data
- Keep dependencies updated: `npm audit`
- Monitor error logs regularly
- Test all functionality after updates
- Backup database regularly

## Support Contacts

- **Issues**: Check troubleshooting above
- **Documentation**: Read included .md files
- **Email Configuration**: Check email provider's docs
- **Database**: Check Neon/provider's docs
- **Stripe**: https://stripe.com/docs

## Success Indicators

You're done when:

✓ Website loads at your domain
✓ Contact forms send emails successfully
✓ Database contains submitted data
✓ Newsletter signups working
✓ All pages responsive on mobile
✓ No console errors
✓ SSL certificate active
✓ Admin receives test submissions

## Estimated Timeline

- **Setup (local)**: 1-2 hours
- **Email provider setup**: 15-30 min
- **Local testing**: 30-45 min
- **Vercel deployment**: 10-15 min
- **Configuration**: 15-30 min
- **Production testing**: 30-45 min
- **Total**: 2.5-4 hours first time

---

**Checklist Version**: 1.0
**Last Updated**: July 14, 2026
**Status**: Ready for deployment
