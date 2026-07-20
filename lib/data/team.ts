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
    name: 'John Mukwaya',
    role: 'Lead Safari Guide',
    bio: 'With over 15 years of experience in wildlife guiding across Uganda, John is a passionate conservationist and expert naturalist. His deep knowledge of animal behavior and ecosystem dynamics makes every safari unforgettable.',
    image: '/images/team/john.jpg',
    specialization: ['Wildlife', 'Conservation', 'Bird watching', 'Photography'],
    experience: 15,
    languages: ['English', 'Luganda', 'Swahili'],
    email: 'john@kitiibwa.com',
  },
  {
    id: 2,
    name: 'Sarah Namukasa',
    role: 'Community Liaison',
    bio: 'Sarah connects travelers with local communities, sharing authentic cultural experiences. Her passion for community development drives KITIIBWA\'s social impact initiatives.',
    image: '/images/team/sarah.jpg',
    specialization: ['Cultural tourism', 'Community development', 'Education'],
    experience: 8,
    languages: ['English', 'Luganda', 'French'],
    email: 'sarah@kitiibwa.com',
  },
  {
    id: 3,
    name: 'Dr. Peter Okello',
    role: 'Gorilla Trekking Specialist',
    bio: 'Dr. Okello holds a doctorate in primatology and has dedicated his career to mountain gorilla research and protection. His expertise ensures safe, respectful gorilla encounters.',
    image: '/images/team/peter.jpg',
    specialization: ['Primatology', 'Gorilla tracking', 'Research', 'Conservation'],
    experience: 20,
    languages: ['English', 'Luganda'],
    email: 'peter@kitiibwa.com',
  },
  {
    id: 4,
    name: 'Amara Kisombe',
    role: 'Hospitality Manager',
    bio: 'Amara ensures every guest feels welcomed and cared for. With expertise in luxury service management, she orchestrates seamless safari experiences.',
    image: '/images/team/amara.jpg',
    specialization: ['Guest services', 'Accommodation', 'Dining', 'Events'],
    experience: 10,
    languages: ['English', 'Luganda', 'Swahili', 'Spanish'],
    email: 'amara@kitiibwa.com',
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
