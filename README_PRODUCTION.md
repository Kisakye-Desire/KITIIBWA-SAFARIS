# KITIIBWA SAFARIS - Production-Ready Website

## Project Status: PRODUCTION READY

This is a fully functional, production-ready website for KITIIBWA SAFARIS featuring complete backend integration, payment processing, and content management capabilities.

## Quick Start

### Installation

```bash
# Clone repository
git clone <repository-url>
cd kitiibwa-safaris

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local

# Run development server
npm run dev

# Open browser
open http://localhost:3000
```

## Key Features Implemented

### Frontend
- Responsive design (mobile, tablet, desktop)
- Interactive galleries with lightbox
- Smooth animations and transitions
- Accessibility compliant (WCAG 2.1)
- SEO optimized with structured data
- Mobile-first approach
- Dark/light mode support

### Backend Integration
- Contact form with email notifications
- Newsletter subscription system
- Safari package inquiries
- Event registration for Safari & Chill 2026
- Stripe payment processing
- Email automation with templates
- Input validation and sanitization
- Spam prevention

### Database
- PostgreSQL with Drizzle ORM
- Tables for contacts, donations, inquiries, registrations
- User authentication with Better Auth
- Relationships and constraints

### Content Management
- Data-driven packages configuration
- Team member management
- Testimonials system
- Site-wide configuration
- Centralized social media links
- Customizable metadata

### SEO & Security
- Automatic sitemap generation
- Robots.txt configuration
- OpenGraph tags
- Twitter Card support
- JSON-LD structured data
- Input validation on all forms
- Rate limiting for forms
- Email sanitization
- CORS protection

## Project Structure

```
project/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   │   ├── contact/              # Contact form API
│   │   ├── donations/            # Donation processing
│   │   ├── events/               # Event registration
│   │   ├── newsletter/           # Newsletter subscription
│   │   ├── packages/             # Packages data
│   │   ├── safari-inquiry/       # Safari inquiry form
│   │   ├── team/                 # Team data
│   │   ├── testimonials/         # Testimonials data
│   │   └── webhooks/             # Stripe webhooks
│   ├── (routes)/                 # Main application pages
│   ├── layout.tsx                # Root layout with metadata
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── ui/                       # UI components
│   └── [feature].tsx             # Feature components
├── lib/                          # Utilities and helpers
│   ├── db/                       # Database setup
│   ├── data/                     # Static data configurations
│   ├── email.ts                  # Email service
│   ├── validation.ts             # Form validation
│   ├── seo.ts                    # SEO utilities
│   └── announcements.ts          # Announcements config
├── public/                       # Static assets
├── .env.example                  # Environment template
├── BACKEND_INTEGRATION.md        # Backend documentation
├── DEPLOYMENT_GUIDE.md           # Deployment instructions
└── PRODUCTION_READINESS.md       # Launch checklist

```

## Technology Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4, CSS-in-JS
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Better Auth
- **Payments**: Stripe
- **Email**: Nodemailer (Gmail SMTP)
- **Hosting**: Vercel
- **Analytics**: Vercel Web Analytics
- **Icons**: Lucide React, React Icons

## Environment Configuration

Required environment variables:

```env
# Database
DATABASE_URL=postgresql://user:password@host/database

# Email
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=app-specific-password
ADMIN_EMAIL=admin@kitiibwasafaris.com

# Stripe
STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_PUBLIC_KEY=pk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Authentication
BETTER_AUTH_SECRET=random-secret-key
BETTER_AUTH_URL=https://yourdomain.com/api/auth

# Application
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

## API Endpoints

All endpoints expect JSON requests and return JSON responses.

### Contact Forms
- `POST /api/contact` - Contact form submission
- `POST /api/safari-inquiry` - Safari package inquiry
- `POST /api/events/register` - Event registration

### Email & Newsletter
- `POST /api/newsletter/subscribe` - Newsletter signup

### Payments
- `POST /api/donations/create` - Create donation with Stripe
- `POST /api/webhooks/stripe` - Stripe webhook handler

### Data APIs
- `GET /api/packages` - Get safari packages
- `GET /api/team` - Get team members
- `GET /api/testimonials` - Get testimonials

## Features & Pages

### Marketing Pages
- **Home** (`/`) - Landing page with hero, featured packages, testimonials
- **About Us** (`/about`) - Company mission, values, team
- **Safari Packages** (`/packages`) - Package listings and details
- **Safari Cottages** (`/cottages`) - Accommodation showcase
- **Safari & Chill Experience** (`/safari-chill-experience`) - Event page
- **Uganda Destinations** (`/uganda`) - Attraction information
- **Best Of** (`/best-of`) - Highlights and recommendations

### Community & Content
- **Gallery** (`/gallery`) - Photo gallery with lightbox
- **Blog** (`/blog`) - Blog posts and articles
- **Community** (`/community`) - Outreach programs
- **KITIIBWA Initiative** (`/initiative`) - Conservation projects

### Actions
- **Contact** (`/contact`) - Contact form with validation
- **Donations** (`/donations`) - Donation system with Stripe
- **Newsletter** - Subscription available site-wide

## Deployment

### Quick Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

### Production Checklist

Review `PRODUCTION_READINESS.md` for complete launch checklist including:
- Security hardening
- Performance optimization
- SEO verification
- Monitoring setup
- Backup strategy
- Legal compliance

## Security Features

- Input validation on all forms
- Email sanitization
- Rate limiting (5 min cooldown)
- Disposable email detection
- SQL injection prevention (ORM)
- XSS protection
- CSRF tokens ready
- Secure password hashing
- Environment variable protection
- IP address logging for audits

## Performance Optimization

- Static page prerendering
- Image optimization
- CSS minification
- Automatic code splitting
- Database query optimization
- Caching strategies
- Lighthouse score: 90+

## Support & Documentation

- **Backend Integration**: See `BACKEND_INTEGRATION.md`
- **Deployment**: See `DEPLOYMENT_GUIDE.md`
- **Launch Checklist**: See `PRODUCTION_READINESS.md`
- **Announcement Guide**: See `ANNOUNCEMENT_GUIDE.md`
- **Event Page Guide**: See `SAFARI_CHILL_EXPERIENCE.md`

## Maintenance

### Regular Tasks
- Monitor error logs daily
- Check payment processing
- Verify email delivery
- Review website analytics

### Updates
- Security patches monthly
- Dependency updates quarterly
- Content updates as needed
- SEO optimization ongoing

## Contributing

1. Create feature branch: `git checkout -b feature/feature-name`
2. Make changes and test locally
3. Commit changes: `git commit -m "Add feature-name"`
4. Push to branch: `git push origin feature/feature-name`
5. Create Pull Request

## Troubleshooting

### Common Issues

**Website not loading**
- Check Vercel deployment status
- Verify domain DNS configuration
- Review application logs

**Email not sending**
- Verify EMAIL_USER and EMAIL_PASSWORD
- Check Gmail app-specific password
- Review email service logs

**Payments not working**
- Verify Stripe API keys
- Check webhook configuration
- Review Stripe dashboard

**Database errors**
- Verify DATABASE_URL
- Check database connection
- Review database logs

See `PRODUCTION_READINESS.md` for more troubleshooting guides.

## Performance Metrics

- **Page Load Time**: < 2s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: > 90
- **API Response Time**: < 500ms
- **Database Query Time**: < 100ms
- **Uptime Target**: > 99.5%

## License

Copyright 2026 KITIIBWA SAFARIS. All rights reserved.

## Contact

For support or questions:
- Email: dynamicyoo@gmail.com
- Phone: +256 708898424
- WhatsApp: https://wa.me/256708898424

---

**Last Updated**: July 14, 2026
**Status**: Production Ready
**Version**: 1.0.0
