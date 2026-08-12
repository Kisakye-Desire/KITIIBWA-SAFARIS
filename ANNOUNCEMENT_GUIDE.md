# Event Announcement Configuration Guide

## Overview
The homepage event announcement banner is powered by a centralized configuration file, making it easy to update announcements without modifying any components.

## How to Update the Announcement

### Step 1: Edit the Configuration File
Open `/lib/announcements.ts` and update the `currentAnnouncement` object:

```typescript
export const currentAnnouncement: Announcement = {
  title: 'Coming Soon!',                    // Badge text above the event name
  eventName: 'Safari & Chill Experience 2026',  // Main event title (highlighted in gold)
  host: 'KITIIBWA SAFARIS',                // Hosting organization
  description: 'Join KITIIBWA SAFARIS for an unforgettable adventure combining wildlife, nature, entertainment, networking, and relaxation.',
  highlights: [
    'Immersive Wildlife Encounters',        // Scrolling highlight badges (max 5-6)
    'Premium Accommodations',
    'Cultural Experiences',
    'Adventure & Relaxation',
    'Expert Naturalist Guides',
  ],
  active: true,                             // Set to false to temporarily hide the announcement
  icon: '🎉',                              // Emoji icon for the announcement
}
```

### Step 2: Customize the Fields

| Field | Purpose | Example |
|-------|---------|---------|
| `title` | Small badge above event name | "Coming Soon!", "Now Open!", "Register Now" |
| `eventName` | Main event title (in gold accent) | "Safari & Chill Experience 2026" |
| `host` | Organization hosting the event | "KITIIBWA SAFARIS" |
| `description` | Detailed event description | Full explanation text |
| `highlights` | Scrolling feature badges | Array of 4-6 key features |
| `active` | Toggle announcement visibility | `true` or `false` |
| `icon` | Emoji representing the event | Any emoji (🎉, ⭐, 🦁, etc.) |

### Step 3: Deploy
The announcement will automatically appear on the homepage once you save the file. The component reads from the config file on every page load.

## Features

✓ **Smooth Scrolling**: Highlights scroll continuously with pause-on-hover
✓ **Responsive Design**: Works perfectly on mobile, tablet, and desktop
✓ **Alternating Direction**: Two marquee lines scroll in opposite directions for visual interest
✓ **Easy Updates**: Change announcement without touching components
✓ **Future-Proof**: Design allows quick pivots to new events/promotions

## Examples

### Example 1: Conference Registration
```typescript
{
  title: 'Registration Open!',
  eventName: 'KITIIBWA Conservation Summit 2026',
  host: 'KITIIBWA SAFARIS',
  description: 'Join conservation leaders for a summit on sustainable wildlife tourism.',
  highlights: ['Expert Speakers', 'Networking Events', 'Hands-on Workshops', 'Conservation Focus'],
  icon: '🎓'
}
```

### Example 2: Promotional Campaign
```typescript
{
  title: 'Limited Time Offer!',
  eventName: 'Early Bird Discount - 30% Off',
  host: 'KITIIBWA SAFARIS',
  description: 'Book your safari adventure now and save 30% on all 2026 packages.',
  highlights: ['Gorilla Trekking', 'Game Drives', 'Luxury Lodges', 'Expert Guides'],
  icon: '🎁'
}
```

### Example 3: Hide Announcement
Simply set `active: false`:
```typescript
{
  // ... other fields ...
  active: false,  // Announcement won't display
}
```

## Component Structure

The announcement appears on the homepage via:
- **Component**: `components/event-announcement.tsx`
- **Config**: `lib/announcements.ts`
- **Page**: `app/page.tsx` (imported as `<EventAnnouncement />`)

To temporarily display different announcements based on conditions, modify the config export to include conditional logic.

## Styling

The announcement section features:
- Gold accent color highlighting for event name and features
- Smooth, performant scrolling animations
- Hover effects on highlight badges
- Responsive padding and typography
- Subtle backdrop blur effects

All styling is contained within the component and uses Tailwind CSS classes for consistency with the rest of the site.
