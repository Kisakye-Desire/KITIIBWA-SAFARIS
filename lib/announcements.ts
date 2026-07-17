/**
 * Announcement Configuration
 * Update the announcement object below to change the marquee announcement
 * This allows easy updates without modifying the component
 */

export interface Announcement {
  title: string
  eventName: string
  host: string
  description: string
  highlights: string[]
  active: boolean
  icon?: string
}

export const currentAnnouncement: Announcement = {
  title: 'Coming Soon!',
  eventName: 'Safari & Chill Experience 2026',
  host: 'KITIIBWA SAFARIS',
  description: 'Join KITIIBWA SAFARIS for an unforgettable adventure combining wildlife, nature, entertainment, networking, and relaxation.',
  highlights: [
    'Immersive Wildlife Encounters',
    'Premium Accommodations',
    'Cultural Experiences',
    'Adventure & Relaxation',
    'Expert Naturalist Guides',
  ],
  active: true,
  icon: '🎉',
}
