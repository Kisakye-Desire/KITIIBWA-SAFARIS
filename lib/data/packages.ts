export interface Package {
  id: number
  name: string
  description: string
  duration: number // days
  price: number // in USD
  highlights: string[]
  itinerary: string[] // daily descriptions
  includes: string[]
  excludes: string[]
  bestFor: string[]
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  season: string
  image: string
}

export const safariPackages: Package[] = [
  {
    id: 1,
    name: 'Classic Uganda Safari',
    description: 'Explore Uganda\'s most iconic wildlife destinations including Queen Elizabeth National Park and Kibale Forest.',
    duration: 5,
    price: 1950,
    highlights: [
      'Queen Elizabeth National Park',
      'Kazinga Channel Cruise',
      'Kibale Forest chimp tracking',
      'Bigodi Wetland Sanctuary',
      'Crater Lake views',
    ],
    itinerary: [
      'Arrival and transfer to Queen Elizabeth National Park',
      'Game drive and Kazinga Channel cruise',
      'Travel to Kibale Forest National Park',
      'Chimpanzee trekking experience',
      'Bigodi Wetland Sanctuary visit and departure',
    ],
    includes: [
      'Accommodation in comfortable lodges',
      'Professional guide services',
      'All meals (breakfast, lunch, dinner)',
      'Park entrance fees',
      'Game drives and activities as described',
      'Ground transportation',
    ],
    excludes: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities',
    ],
    bestFor: [
      'First-time safari goers',
      'Families with children',
      'Budget-conscious travelers',
      'Wildlife enthusiasts',
    ],
    difficulty: 'Easy',
    season: 'Year-round',
    image: '/images/packages/classic-uganda.jpg',
  },
  {
    id: 2,
    name: 'Gorilla & Wildlife Adventure',
    description: 'Experience the ultimate African safari with gorilla trekking in Bwindi and diverse wildlife viewing.',
    duration: 7,
    price: 2950,
    highlights: [
      'Mountain gorilla trekking',
      'Queen Elizabeth National Park',
      'Kazinga Channel cruise',
      'Batwa cultural experience',
      'Crater lakes and volcanoes',
    ],
    itinerary: [
      'Arrival and acclimatization',
      'Transfer to Bwindi Impenetrable National Park',
      'Mountain gorilla trekking',
      'Batwa cultural visit',
      'Travel to Queen Elizabeth National Park',
      'Game drives and Kazinga cruise',
      'Crater lake exploration and departure',
    ],
    includes: [
      'Luxury lodge accommodation',
      'Gorilla permit (USD 600)',
      'Professional naturalist guides',
      'All meals prepared by chef',
      'Ground transportation with 4x4 vehicles',
      'Park fees and activities',
      'Bottled water and snacks',
    ],
    excludes: [
      'International flights',
      'Travel insurance',
      'Visas',
      'Personal equipment (binoculars, camera)',
      'Tips and gratuities',
    ],
    bestFor: [
      'Adventure seekers',
      'Photography enthusiasts',
      'Experienced travelers',
      'Nature conservationists',
    ],
    difficulty: 'Moderate',
    season: 'Year-round (best June-September, December-February)',
    image: '/images/packages/gorilla-adventure.jpg',
  },
  {
    id: 3,
    name: 'Luxury Uganda Escape',
    description: 'Experience Uganda\'s finest with luxury accommodations, exclusive services, and personalized itineraries.',
    duration: 8,
    price: 4950,
    highlights: [
      'Luxury safari lodges',
      'Private game drives',
      'Gorilla trekking experience',
      'Murchison Falls National Park',
      'Private boat cruise',
      'Spa treatments',
    ],
    itinerary: [
      'Private airport transfer to luxury lodge',
      'Personalized wildlife briefing',
      'Private game drives with gourmet picnics',
      'Gorilla trekking with porter support',
      'Murchison Falls exploration',
      'Sunrise boat cruise',
      'Relaxation at spa and gourmet dining',
      'Private departure',
    ],
    includes: [
      'Premium lodge accommodation',
      'All meals including special dietary needs',
      'Private 4x4 vehicle with experienced driver',
      'Professional naturalist guide',
      'Park entrance fees and activities',
      'Gorilla permit included',
      'Airport transfers',
      'Spa treatments and wellness activities',
      'Wine and premium beverages',
    ],
    excludes: [
      'International flights',
      'Travel insurance',
      'Exceptional tips (discretionary)',
    ],
    bestFor: [
      'Luxury travelers',
      'Honeymooners',
      'Business executives',
      'Special occasion celebrants',
    ],
    difficulty: 'Easy',
    season: 'Year-round',
    image: '/images/packages/luxury-escape.jpg',
  },
  {
    id: 4,
    name: 'Budget Explorer',
    description: 'Affordable Uganda safari perfect for backpackers and budget-conscious adventurers.',
    duration: 4,
    price: 850,
    highlights: [
      'Queen Elizabeth National Park',
      'Guided nature walks',
      'Village visits',
      'Batwa cultural interaction',
      'Scenic viewpoints',
    ],
    itinerary: [
      'Budget lodge check-in and orientation',
      'Guided nature walk in Queen Elizabeth',
      'Local village visit and cultural interaction',
      'Evening campfire storytelling',
      'Sunrise nature walk and bird watching',
      'Checkout and travel tips',
    ],
    includes: [
      'Basic but clean accommodation',
      'Simple meals (breakfast and dinner)',
      'Walking tours with guides',
      'Park entrance fee',
      'Cultural village visit',
    ],
    excludes: [
      'Lunch on most days',
      'Beverages beyond water',
      'Tips and gratuities',
      'Travel insurance',
    ],
    bestFor: [
      'Backpackers',
      'Students',
      'Budget travelers',
      'Independent explorers',
    ],
    difficulty: 'Easy',
    season: 'Year-round',
    image: '/images/packages/budget-explorer.jpg',
  },
]

export function getPackageById(id: number): Package | undefined {
  return safariPackages.find((pkg) => pkg.id === id)
}

export function getPackagesByDifficulty(difficulty: string): Package[] {
  return safariPackages.filter((pkg) => pkg.difficulty === difficulty)
}

export function getPackagesByBudget(minPrice: number, maxPrice: number): Package[] {
  return safariPackages.filter((pkg) => pkg.price >= minPrice && pkg.price <= maxPrice)
}
