# Safari & Chill Experience 2026

## Overview

The **Safari & Chill Experience** is KITIIBWA SAFARIS' flagship annual event page, built as a dedicated route on the website. The event is hosted at **Singura Cottages** and combines wildlife, relaxation, entertainment, and unforgettable memories in Uganda's natural surroundings.

## Page Structure

### Route
- **Path:** `/safari-chill-experience`
- **File:** `app/safari-chill-experience/page.tsx`
- **Navigation:** Added to main header navigation menu

### Sections Included

#### 1. Hero Section
- Full-width background image from Singura Cottages
- Dark overlay for readability
- Large title: "Safari & Chill Experience 2026"
- Subtitle explaining the event
- "Coming Soon" badge
- "Learn More" call-to-action button

#### 2. About the Event
- Description of what Safari & Chill Experience is
- Three informational cards:
  - Venue: Singura Cottages, Uganda
  - Frequency: Annual Event
  - Attendees: Families, Singles & Groups

#### 3. Event Highlights
- 10 interactive highlight cards featuring:
  - Nature Walks
  - Wildlife Encounters
  - Campfire Evenings
  - Live Entertainment
  - Outdoor Games
  - Networking
  - Photography Moments
  - Gourmet Food & Drinks
  - Relaxation Zones
  - Cultural Experiences

#### 4. Photo Gallery
- Premium responsive gallery with 15 high-quality images from Singura Cottages
- Hover effects with image titles
- Lightbox modal on click
- Pagination with "View More" button
- Loads 9 images at a time, easy to expand
- Shows count: "Viewing X of Y moments"

#### 5. Event Schedule
- Detailed 4-day event schedule with:
  - Arrival & Registration
  - Morning Activities
  - Guided Nature Walk
  - Workshop Sessions
  - Campfire Night
  - Farm & Garden Tour
  - Leisure & Recreation
  - Gala Dinner & Entertainment
  - Optional Adventure
  - Closing Ceremony
  - Departure
- Timeline cards with Calendar icons
- Easily editable for future event years

#### 6. Venue Section (Singura Cottages)
- Split layout with text and image
- Venue description emphasizing luxury and authenticity
- Amenities list:
  - Comfortable Cottages
  - Farm-Fresh Meals
  - Natural Surroundings
  - Premium Amenities
- "Explore Singura" button linking to cottage page

#### 7. Why Attend Section
- 6 compelling reason cards:
  - Connect with Nature
  - Meet New People
  - Relax Away from City
  - Premium Hospitality
  - Unforgettable Memories
  - Unique Uganda Experience
- Gradient styling with emoji icons

#### 8. Coming Soon / Countdown Section
- Elegant message about upcoming 2026 dates
- "Stay Tuned" button
- "Learn More" button
- Easy to convert to countdown timer

## Features

### Design & UX
- Premium safari branding consistent with site
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)
- ScrollReveal animations for engaging scroll experience
- Lightbox modal for image viewing
- Hover effects on interactive elements

### Technical Implementation
- Next.js with TypeScript
- Optimized images with Next/Image component
- State management for gallery pagination
- Lazy loading for images (quality: 75 initially, 90 in lightbox)
- Modular component structure
- Easy to update and refresh annually

### Integration
- Added to main navigation header (`components/header.tsx`)
- Linked from homepage event announcement banner
- Links to Singura Cottages page for more info
- Accessible on desktop and mobile

## How to Update for Next Year

### Simple Updates
1. Change "2026" to "2027" in the page
2. Update event description and highlights in the page file
3. Replace schedule items with new agenda
4. Update dates once confirmed

### Gallery Updates
1. Upload new event images to Blob storage
2. Get the blob URLs
3. Add new image objects to `galleryImages` array in the page file
4. Images will automatically appear in the gallery with pagination

### Coming Soon to Live Countdown
When official dates are announced:
1. Add a countdown timer component using a date library
2. Replace "Coming Soon" section with live countdown
3. Update schedule with confirmed times
4. Add booking button when ready

## File Locations
- **Main Page:** `/vercel/share/v0-project/app/safari-chill-experience/page.tsx`
- **Navigation:** `/vercel/share/v0-project/components/header.tsx`
- **Announcement Banner:** `/vercel/share/v0-project/components/event-announcement.tsx`

## Future Enhancements
- Add countdown timer when dates confirmed
- Integrate booking system for registrations
- Add testimonials from previous attendees
- Include email signup for early-bird notifications
- Add live event updates and social media feeds
- Create video highlights section
- Add FAQs specific to the event
- Implement event ticket pricing

## Gallery Image URLs
All 15 images are hosted on Vercel Blob storage. The URLs are included directly in the page file's `galleryImages` array for easy updating and management.

---

**Last Updated:** July 2026
**Status:** Active - Coming Soon
**Frequency:** Annual Event
