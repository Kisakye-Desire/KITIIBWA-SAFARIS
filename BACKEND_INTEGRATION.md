# Backend Integration Guide

## Overview

The KITIIBWA SAFARIS website now has a complete backend infrastructure with form submission, payment processing, email notifications, and database persistence.

## Completed Integrations

### 1. Contact Form System
- **Endpoint**: `POST /api/contact`
- **Features**:
  - Email validation and sanitization
  - Spam prevention (5-minute cooldown per email)
  - Admin email notifications
  - IP address logging
  - Error handling and user feedback
- **Database Table**: `contact_message`

### 2. Newsletter Subscription
- **Endpoint**: `POST /api/newsletter/subscribe`
- **Features**:
  - Email duplicate prevention
  - Disposable email detection
  - Welcome email automation
  - Unsubscribe token generation
  - Double opt-in ready support
- **Database Table**: `newsletter_subscriber`

### 3. Safari Inquiry System
- **Endpoint**: `POST /api/safari-inquiry`
- **Features**:
  - Package inquiry tracking
  - Travel date capture
  - Guest count validation
  - Special requests support
  - Admin notification emails
  - Assignment workflow ready
- **Database Table**: `safari_inquiry`

### 4. Donation System
- **Endpoint**: `POST /api/donations/create`
- **Webhook**: `POST /api/webhooks/stripe`
- **Features**:
  - Stripe checkout integration
  - Multiple currency support (USD, EUR, GBP, UGX)
  - Donation confirmation emails
  - Payment status tracking
  - Automatic receipt generation
  - Admin notifications
- **Database Tables**: `donation`

### 5. Event Registration
- **Endpoint**: `POST /api/events/register`
- **Features**:
  - Multi-event support
  - Dietary restrictions tracking
  - Special needs accommodation
  - Confirmation email automation
  - Admin notification emails
  - Registration ID generation
- **Database Tables**: `event_registration`

## Environment Variables Required

```env
# Database
DATABASE_URL=your-postgres-connection-string

# Email Configuration
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@kitiibwasafaris.com

# Stripe Payment Processing
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PUBLIC_KEY=pk_live_...

# Application
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
BETTER_AUTH_SECRET=generate-random-string
BETTER_AUTH_URL=https://yourdomain.com/api/auth
```

## Database Schema Extensions

New tables added to support backend operations:

- **newsletter_subscriber**: Stores newsletter subscriptions with unsubscribe tokens
- **safari_inquiry**: Tracks safari package inquiries and booking requests
- **event_registration**: Manages event registrations with special requirements
- Enhanced **contact_message**: Added IP logging and timestamps
- Enhanced **donation**: Added payment tracking and anonymous flag

## API Response Format

All APIs return standardized JSON responses:

### Success Response
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "id": 123
}
```

### Error Response
```json
{
  "error": "Descriptive error message"
}
```

HTTP Status Codes:
- `200`: Success
- `400`: Validation error
- `429`: Rate limit exceeded (too many requests)
- `500`: Server error
- `503`: Service unavailable (Stripe not configured)

## Validation Features

All inputs are validated for:
- Email format and length
- Phone number format
- Message content length (max 5000 chars)
- Donation amounts (0.01 to 1,000,000)
- Guest counts (1-1000)
- Input sanitization (XSS prevention)
- Disposable email detection
- Spam detection (time-based)

## Email Notifications

### Automated Emails Sent

1. **Contact Form**:
   - Admin receives inquiry details
   - Includes sender's contact information

2. **Newsletter Subscription**:
   - Subscriber receives welcome email
   - Details newsletter benefits

3. **Safari Inquiry**:
   - Admin receives detailed inquiry
   - Includes travel dates and guest count
   - Contains special requests

4. **Donation**:
   - Donor receives confirmation with amount
   - Admin receives payment notification
   - Links to payment receipt

5. **Event Registration**:
   - Registrant receives confirmation
   - Admin receives registration details
   - Includes dietary and special needs info

## Stripe Integration

### Setup Steps

1. Create Stripe account at https://stripe.com
2. Get API keys from Stripe Dashboard
3. Set `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` in environment
4. Configure webhook endpoint: `your-domain.com/api/webhooks/stripe`
5. Set Stripe events to listen: `checkout.session.completed`, `checkout.session.expired`

### Payment Flow

1. User submits donation form
2. Backend validates and creates donation record with "pending" status
3. Stripe checkout session is created
4. User is redirected to Stripe payment page
5. After payment, Stripe sends webhook event
6. Webhook updates donation status to "completed"
7. Confirmation emails sent automatically

## Admin Dashboard Setup (Future)

When implementing an admin dashboard, queries needed:

```sql
-- Get recent contact messages
SELECT * FROM contact_message ORDER BY createdAt DESC LIMIT 10;

-- Get pending safari inquiries
SELECT * FROM safari_inquiry WHERE status = 'new' ORDER BY createdAt DESC;

-- Get unresponded donations
SELECT * FROM donation WHERE status = 'pending' ORDER BY createdAt DESC;

-- Get all event registrations
SELECT * FROM event_registration WHERE event_id = 'safari-chill-2026';

-- Export newsletter for campaigns
SELECT email, name FROM newsletter_subscriber WHERE subscribed = true;
```

## Testing

### Test Email
To test email functionality locally, you can:
1. Use Mailtrap or similar SMTP testing service
2. Configure SMTP credentials in environment
3. Send test requests to API endpoints

### Test Stripe Payments
Use Stripe test mode with test card numbers:
- `4242 4242 4242 4242` - Visa
- `5555 5555 5555 4444` - Mastercard
- `3782 822463 10005` - American Express

## Maintenance

### Database Backups
Ensure regular backups of PostgreSQL database containing:
- Contact messages
- Donations
- Event registrations
- Newsletter subscribers

### Email Logs
Monitor email delivery and bounce rates through:
- Gmail settings (if using Gmail SMTP)
- Email service provider logs
- Application error logs

### Payment Reconciliation
Regularly reconcile:
- Stripe records with database records
- Pending vs completed donations
- Failed transactions

## Security Considerations

1. **Input Validation**: All inputs sanitized before storage
2. **Rate Limiting**: Spam prevention with 5-minute cooldown
3. **Email Security**: No sensitive data in email subjects
4. **Payment Security**: Stripe handles PCI compliance
5. **IP Logging**: Track submission origins for fraud detection
6. **Environment Variables**: All secrets in .env file, never in code

## Troubleshooting

### Contact Form Not Sending
- Check EMAIL_USER and EMAIL_PASSWORD are correct
- Verify Gmail app password (not account password)
- Check ADMIN_EMAIL environment variable
- Look at server logs for email service errors

### Stripe Payments Not Working
- Verify STRIPE_SECRET_KEY is set
- Check webhook secret matches Stripe dashboard
- Ensure webhook endpoint is publicly accessible
- Test with Stripe test mode cards first

### Newsletter Emails Not Arriving
- Check subscriber email is not on spam list
- Verify welcome email template is loading
- Check email service logs for delivery errors
- Add sender to subscriber's contacts to avoid spam

### Database Connection Issues
- Verify DATABASE_URL format
- Check database server is running
- Confirm network connectivity
- Review database connection limits

## Future Enhancements

1. **Admin Dashboard**: Manage all submissions, view analytics
2. **Email Templates**: Customizable email designs
3. **Webhook Retry**: Failed webhook handling
4. **Subscription Payments**: Recurring donations
5. **Form Analytics**: Track submission patterns
6. **Customer Portal**: Donors view their history
7. **Survey Integration**: Post-donation feedback
8. **SMS Notifications**: Text confirmations
