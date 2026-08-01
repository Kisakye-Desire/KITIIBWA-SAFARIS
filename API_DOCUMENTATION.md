# KITIIBWA SAFARIS - API Documentation

## Overview

All endpoints are located at `/api/` and return JSON responses. Authentication uses session-based system (Better Auth).

## Response Format

### Success Response

```json
{
  "success": true,
  "message": "Success message",
  "data": { /* response data */ }
}
```

### Error Response

```json
{
  "success": false,
  "error": "Error message"
}
```

## Base URL

- **Development**: `http://localhost:3000/api`
- **Production**: `https://yourdomain.com/api`

---

## Endpoints

### 1. Contact Form

**POST** `/api/contact`

Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+256 708 898 424",
  "subject": "Safari Inquiry",
  "message": "I'm interested in your safari packages..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you! We will contact you soon.",
  "id": 123
}
```

**Rate Limit**: 3 requests per 5 minutes per email

---

### 2. Safari Inquiry

**POST** `/api/safari-inquiry`

Submit a safari package inquiry.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+256 708 898 424",
  "packageId": "premium-safari",
  "packageName": "Premium Safari Experience",
  "travelDates": "2026-12-15 to 2026-12-20",
  "numberOfGuests": 4,
  "specialRequests": "Vegetarian meals, guided photography"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your inquiry!",
  "id": 456
}
```

**Rate Limit**: 3 requests per 5 minutes per email

---

### 3. Newsletter Subscription

**POST** `/api/newsletter/subscribe`

Subscribe to newsletter.

**Request Body:**
```json
{
  "email": "subscriber@example.com",
  "name": "John Subscriber"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for subscribing!"
}
```

**Rate Limit**: 5 requests per hour per email

---

### 4. Create Donation

**POST** `/api/donations/create`

Initiate a donation via Stripe.

**Request Body:**
```json
{
  "donorName": "Generous Donor",
  "donorEmail": "donor@example.com",
  "amount": 100,
  "currency": "USD",
  "message": "Support your amazing conservation work!"
}
```

**Response:**
```json
{
  "success": true,
  "url": "https://checkout.stripe.com/pay/...",
  "sessionId": "cs_test_..."
}
```

**Rate Limit**: 10 requests per hour per email

---

### 5. Event Registration

**POST** `/api/events/register`

Register for an event (e.g., Safari & Chill Experience).

**Request Body:**
```json
{
  "eventId": "safari-chill-2026",
  "name": "Event Attendee",
  "email": "attendee@example.com",
  "phone": "+256 708 898 424",
  "numberOfGuests": 2,
  "dietaryRestrictions": "Vegan",
  "specialNeeds": "Wheelchair accessible",
  "heardAboutUs": "Instagram"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for registering!",
  "registrationId": 789,
  "confirmationSent": true
}
```

**Rate Limit**: 3 requests per 5 minutes per email

---

### 6. Stripe Webhook

**POST** `/api/webhooks/stripe`

Webhook for Stripe payment events. Automatically updates donation status.

**Triggers:**
- `checkout.session.completed` - Payment successful
- `charge.failed` - Payment failed
- `charge.refunded` - Refund processed

---

### 7. Get Packages

**GET** `/api/packages`

Get all safari packages.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "basic-safari",
      "name": "Basic Safari Package",
      "price": 1500,
      "duration": "3 days",
      "description": "Perfect introduction to Ugandan wildlife"
    }
  ]
}
```

---

### 8. Get Team

**GET** `/api/team`

Get team member information.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "founder",
      "name": "Founder Name",
      "role": "Founder & CEO",
      "bio": "Bio text...",
      "image": "/images/team/founder.jpg"
    }
  ]
}
```

---

### 9. Get Testimonials

**GET** `/api/testimonials`

Get customer testimonials.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "testimonial-1",
      "author": "Happy Customer",
      "text": "Amazing experience...",
      "rating": 5
    }
  ]
}
```

---

## Error Codes

| Code | Meaning |
|------|---------|
| 400 | Bad Request - Missing or invalid fields |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Access denied |
| 404 | Not Found - Resource not found |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error |
| 503 | Service Unavailable |

---

## Validation Rules

### Email
- Must be valid email format
- Not disposable/temporary email
- Not more than 254 characters

### Phone
- At least 8 characters
- Can contain: digits, spaces, hyphens, parentheses, plus sign

### Names
- 2-100 characters
- Can contain letters, spaces, hyphens, apostrophes

### Message/Content
- 10-10,000 characters

### Donation Amount
- 1-1,000,000 (in selected currency)

### Guest Count
- 1-1,000

---

## Security

### Rate Limiting

All endpoints have rate limiting to prevent abuse:

```
Contact Form: 3 requests/5 minutes per email
Newsletter: 5 requests/hour per email
Donations: 10 requests/hour per email
Events: 3 requests/5 minutes per email
```

### Input Validation

All inputs are:
- Trimmed and validated
- Sanitized for XSS prevention
- Limited by length
- Checked for spam patterns

### IP Logging

Client IP address is logged with submissions for security purposes. Can be disabled in config.

---

## Testing

### Using cURL

```bash
# Contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "This is a test message"
  }'

# Newsletter
curl -X POST http://localhost:3000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "subscriber@example.com",
    "name": "Test Subscriber"
  }'
```

### Using JavaScript

```javascript
// Contact form
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Test',
    message: 'This is a test message'
  })
});

const data = await response.json();
console.log(data);
```

---

## Email Notifications

When forms are submitted, automated emails are sent:

- **Contact Form** → Admin email
- **Safari Inquiry** → Admin email
- **Newsletter Signup** → Welcome email to subscriber
- **Donation** → Confirmation email to donor
- **Event Registration** → Confirmation email to registrant

Email templates can be customized in `/lib/email.ts`

---

## Database Schema

### contact_message
```sql
- id (serial, primary key)
- name (text)
- email (text)
- phone (text)
- subject (text)
- message (text)
- status (text: 'new', 'read', 'responded')
- ip_address (text)
- createdAt (timestamp)
- updatedAt (timestamp)
```

### safari_inquiry
```sql
- id (serial, primary key)
- name (text)
- email (text)
- phone (text)
- package_id (integer)
- package_name (text)
- travel_dates (text)
- number_of_guests (integer)
- special_requests (text)
- status (text: 'new', 'contacted', 'quoted', 'booked')
- assigned_to (text)
- notes (text)
- ip_address (text)
- createdAt (timestamp)
- updatedAt (timestamp)
```

### newsletter_subscriber
```sql
- id (serial, primary key)
- email (text, unique)
- name (text)
- subscribed (boolean)
- verified (boolean)
- unsubscribe_token (text, unique)
- ip_address (text)
- createdAt (timestamp)
- updatedAt (timestamp)
```

### donation
```sql
- id (serial, primary key)
- donor_name (text)
- donor_email (text)
- amount (decimal)
- currency (text)
- stripe_payment_id (text)
- status (text: 'pending', 'successful', 'failed', 'refunded')
- message (text)
- anonymous (boolean)
- ip_address (text)
- createdAt (timestamp)
- updatedAt (timestamp)
```

### event_registration
```sql
- id (serial, primary key)
- event_id (text)
- name (text)
- email (text)
- phone (text)
- number_of_guests (integer)
- dietary_restrictions (text)
- special_needs (text)
- heard_about_us (text)
- status (text: 'registered', 'confirmed', 'cancelled')
- confirmation_sent (boolean)
- ip_address (text)
- createdAt (timestamp)
- updatedAt (timestamp)
```

---

## Support

For API issues or questions:
- Email: api@kitiibwasafaris.com
- Documentation: See this file
- Configuration: See `/lib/config.ts`
