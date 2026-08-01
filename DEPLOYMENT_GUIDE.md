# KITIIBWA SAFARIS - Deployment & Launch Guide

## Overview

This guide provides step-by-step instructions to deploy the KITIIBWA SAFARIS website to production and make it live.

## Prerequisites Checklist

Before deploying, ensure you have:

- [ ] Vercel account created
- [ ] GitHub account with repository access
- [ ] PostgreSQL database set up (Neon, Railway, or self-hosted)
- [ ] Stripe account with API keys
- [ ] Gmail/email account for notifications
- [ ] Domain name registered and ready
- [ ] DNS access for domain configuration
- [ ] SSL certificate (Vercel handles this automatically)

## Step 1: Database Setup

### Using Neon (Recommended for Vercel)

1. Go to [neon.tech](https://neon.tech) and sign up
2. Create a new project
3. Copy the PostgreSQL connection string
4. Save as `DATABASE_URL` environment variable

### Running Migrations

```bash
# Install dependencies
npm install

# Run database setup (if using migrations)
npm run db:push
```

## Step 2: Stripe Configuration

1. Go to [stripe.com](https://stripe.com) and sign in
2. Navigate to API keys in Settings
3. Get your Secret Key and Publishable Key
4. Set webhook endpoint:
   - URL: `https://yourdomain.com/api/webhooks/stripe`
   - Select events: `checkout.session.completed`, `checkout.session.expired`
5. Copy webhook signing secret

## Step 3: Environment Variables

Create a `.env.production` file or set in Vercel:

```env
# Database
DATABASE_URL=postgresql://user:password@host/database

# Email
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
ADMIN_EMAIL=admin@kitiibwasafaris.com

# Stripe
STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_PUBLIC_KEY=pk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Authentication
BETTER_AUTH_SECRET=generate-with-openssl-rand-base64-32
BETTER_AUTH_URL=https://yourdomain.com/api/auth

# Site Configuration
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

### Generating BETTER_AUTH_SECRET

```bash
openssl rand -base64 32
```

## Step 4: Deploying to Vercel

### Method 1: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your GitHub repository
5. Configure project settings:
   - Framework: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Add environment variables from Step 3
7. Click "Deploy"

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Step 5: Domain Configuration

### Connecting Domain to Vercel

1. In Vercel project settings, go to Domains
2. Add your domain
3. Follow DNS setup instructions
4. Update DNS records (usually CNAME or A records):
   - CNAME: `yourdomain.com` → `cname.vercel.app`
   - Or follow Vercel's specific instructions

### DNS Propagation

DNS changes can take 24-48 hours to propagate. You can check status:

```bash
# Check DNS propagation
nslookup yourdomain.com
```

## Step 6: Post-Deployment Testing

### Testing Email Notifications

1. Go to `/contact` page
2. Submit a test message
3. Verify email arrives in admin inbox
4. Check spam folder if not found

### Testing Payments (Stripe)

1. Go to `/donations` page
2. Enter test details:
   - Card: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits
3. Complete payment
4. Check Stripe dashboard for transaction
5. Verify confirmation email sent to test email

### Testing Forms

1. Contact form: `/contact` → should receive admin email
2. Newsletter: Submit → should receive welcome email
3. Safari inquiry: `/packages` → should receive inquiry email
4. Event registration: `/safari-chill-experience` → should receive confirmation

### Testing Site Features

- [ ] Homepage loads without errors
- [ ] All navigation links work
- [ ] Images load correctly
- [ ] Videos/media play
- [ ] Contact form submits
- [ ] Newsletter signup works
- [ ] Donation flow works
- [ ] Mobile responsive
- [ ] All pages accessible

## Step 7: Performance Verification

### Check Lighthouse Scores

1. In Vercel project, go to "Analytics"
2. Review performance scores
3. Target scores:
   - Performance: > 90
   - Accessibility: > 95
   - Best Practices: > 90
   - SEO: > 95

### Check SEO

1. Verify sitemap.xml: `https://yourdomain.com/sitemap.xml`
2. Verify robots.txt: `https://yourdomain.com/robots.txt`
3. Submit sitemap to Google Search Console
4. Submit sitemap to Bing Webmaster Tools

### Monitor Analytics

1. Set up Google Analytics 4
2. Set up Vercel Web Analytics
3. Monitor initial traffic

## Step 8: Security Hardening

### Enable Security Headers

In `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

### HTTPS Enforcement

Vercel handles SSL automatically. Verify HTTPS is enforced in domain settings.

### Rate Limiting

Consider adding rate limiting middleware for:
- Contact form (5 requests per 5 minutes per IP)
- Donation form (3 requests per 30 minutes per IP)
- API endpoints (100 requests per minute per IP)

## Step 9: Monitoring & Alerts

### Set Up Error Tracking

Consider using Sentry or LogRocket:

```bash
npm install @sentry/nextjs
```

### Set Up Performance Monitoring

Use Vercel Analytics and third-party services like:
- DataDog
- New Relic
- Honeycomb

### Email Alerts

Set up alerts for:
- Failed form submissions
- Payment errors
- Database errors
- High error rates

## Step 10: Backup & Disaster Recovery

### Database Backups

```bash
# Daily automated backups with Neon
# Configure in Neon dashboard

# Manual backup
pg_dump $DATABASE_URL > backup.sql
```

### Recovery Procedure

```bash
# Restore from backup
psql $DATABASE_URL < backup.sql
```

### Disaster Recovery Plan

1. Backup location: Off-site (Neon handles this)
2. Recovery time objective: 1 hour
3. Recovery point objective: 24 hours
4. Regular recovery testing: Monthly

## Step 11: Continuous Deployment

### GitHub Actions Setup

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Step 12: Documentation Update

Update the following documentation:

- [ ] Site URL in all marketing materials
- [ ] Admin dashboard URL (once created)
- [ ] Contact information verified
- [ ] Social media links updated
- [ ] Team contact information current
- [ ] Outdated content removed

## Step 13: Launch Announcement

### Pre-Launch Checklist

- [ ] Test all critical paths
- [ ] Verify all forms submit
- [ ] Check all links work
- [ ] Verify payment processing
- [ ] Confirm email notifications
- [ ] Mobile responsiveness
- [ ] Accessibility compliance

### Launch Communication

1. Send announcement to subscribers
2. Post on social media
3. Update Google My Business
4. Send press release (if applicable)
5. Notify team members

## Ongoing Maintenance

### Daily Tasks

- [ ] Monitor error logs
- [ ] Check payment processing
- [ ] Verify email delivery
- [ ] Monitor website uptime

### Weekly Tasks

- [ ] Review analytics
- [ ] Check database performance
- [ ] Review user feedback
- [ ] Update blog content

### Monthly Tasks

- [ ] Security audit
- [ ] Performance optimization review
- [ ] Database maintenance
- [ ] Backup testing
- [ ] User feedback analysis

### Quarterly Tasks

- [ ] Dependency updates
- [ ] Security scanning
- [ ] Performance benchmarking
- [ ] SEO review
- [ ] Content strategy review

## Troubleshooting

### Website Not Loading

```bash
# Check Vercel deployment
vercel logs

# Check domain configuration
nslookup yourdomain.com

# Check SSL certificate
curl -I https://yourdomain.com
```

### Email Not Sending

1. Verify EMAIL_USER and EMAIL_PASSWORD
2. Check Gmail settings (enable app-specific passwords)
3. Review email service logs
4. Check spam filters

### Payments Not Processing

1. Verify Stripe API keys
2. Check Stripe webhook configuration
3. Review Stripe dashboard for errors
4. Check database donation records

### Database Connection Issues

1. Verify DATABASE_URL
2. Check database is online
3. Verify firewall rules
4. Check connection pool limits

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Stripe Docs**: https://stripe.com/docs
- **PostgreSQL Docs**: https://www.postgresql.org/docs
- **GitHub Issues**: Report bugs and issues

## Post-Launch Support

For issues or questions:

1. Check documentation
2. Review logs in Vercel dashboard
3. Contact hosting support
4. Reach out to development team

---

**Deployment Date**: _______________

**Deployed By**: _______________

**Notes**: 
