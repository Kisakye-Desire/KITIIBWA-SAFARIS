export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
  specialization: string[]
  experience: number // years
  languages: string[]
  email?: string
}

export interface Testimonial {
  id: number
  name: string
  country: string
  rating: number // 1-5
  text: string
  packageName: string
  date: string
  avatar?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Grace Mwole',
    role: 'Team Leader',
    bio: 'Grace leads our people-first work, keeping every program centered on the dignity, safety, and potential of each child.',
    image: '/images/team/grace-mwole.jpeg',
    specialization: ['Child wellbeing', 'Community partnerships', 'Program leadership'],
    experience: 8,
    languages: ['English', 'Luganda'],
    email: 'info@kitiibwasafaris.com',
  },
  {
    id: 2,
    name: 'Muwaga Hannington',
    role: 'Head of Operation',
    bio: 'Hannington coordinates day-to-day operations so support reaches children, families, and partner communities with care and accountability.',
    image: '/images/team/muwaga-hannington.jpeg',
    specialization: ['Operations', 'Logistics', 'Community support'],
    experience: 10,
    languages: ['English', 'Luganda'],
    email: 'info@kitiibwasafaris.com',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Emma Johnson',
    country: 'United Kingdom',
    rating: 5,
    text: 'The gorilla trekking experience was the most incredible moment of my life. The guides were knowledgeable, respectful, and professional. This is a once-in-a-lifetime experience that KITIIBWA makes truly special.',
    packageName: 'Gorilla & Wildlife Adventure',
    date: '2026-05-15',
    avatar: '/images/testimonials/emma.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    country: 'United States',
    rating: 5,
    text: 'I came for the wildlife, but stayed for the people. The team at KITIIBWA is passionate about conservation and it shows in every interaction. Best investment I\'ve made in travel.',
    packageName: 'Luxury Uganda Escape',
    date: '2026-04-28',
    avatar: '/images/testimonials/michael.jpg',
  },
  {
    id: 3,
    name: 'Amara Okonkwo',
    country: 'Nigeria',
    rating: 4,
    text: 'Amazing wildlife and wonderful guides. The cultural experiences were authentic and meaningful. Definitely coming back for the longer safari experience.',
    packageName: 'Classic Uganda Safari',
    date: '2026-03-10',
    avatar: '/images/testimonials/amara.jpg',
  },
  {
    id: 4,
    name: 'Sophie Martin',
    country: 'France',
    rating: 5,
    text: 'A truly transformative experience. The conservation work is inspiring and the safaris are perfectly organized. Merci KITIIBWA for an unforgettable adventure!',
    packageName: 'Gorilla & Wildlife Adventure',
    date: '2026-02-14',
    avatar: '/images/testimonials/sophie.jpg',
  },
  {
    id: 5,
    name: 'James Wilson',
    country: 'Australia',
    rating: 5,
    text: 'Best safari company I\'ve used in all my travels. Professional, knowledgeable, and genuinely committed to conservation. Already planning my next trip!',
    packageName: 'Classic Uganda Safari',
    date: '2026-01-22',
    avatar: '/images/testimonials/james.jpg',
  },
  {
    id: 6,
    name: 'Priya Patel',
    country: 'India',
    rating: 5,
    text: 'The luxury experience exceeded all expectations. Every detail was perfect, from the accommodations to the meals to the wildlife encounters. Highly recommended!',
    packageName: 'Luxury Uganda Escape',
    date: '2025-12-30',
    avatar: '/images/testimonials/priya.jpg',
  },
]

export function getTeamMemberById(id: number): TeamMember | undefined {
  return teamMembers.find((member) => member.id === id)
}

export function getTestimonialsByRating(minRating: number): Testimonial[] {
  return testimonials.filter((testimonial) => testimonial.rating >= minRating)
}

export function getTopTestimonials(limit: number = 3): Testimonial[] {
  return testimonials.sort((a, b) => b.rating - a.rating).slice(0, limit)
}
