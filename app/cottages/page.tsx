'use client'

import { Suspense } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Pagination from '@/components/pagination'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Star } from 'lucide-react'
import { TextGradient } from '@/components/ui/effects'

const ITEMS_PER_PAGE = 6

const cottages = [
  {
    id: 1,
    name: 'Bwindi Forest Lodge',
    location: 'Bwindi Impenetrable National Park',
    pricePerNight: 350,
    capacity: 4,
    amenities: ['En-suite Bathroom', 'Hot Shower', 'WiFi', 'Heating', 'Private Terrace', 'Game Viewing'],
    description: 'Luxury cottage nestled in the misty forest with panoramic views of the Bwindi ecosystem.',
    image: '/images/safari-cottage.png',
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Queen Elizabeth Safari Suite',
    location: 'Queen Elizabeth National Park',
    pricePerNight: 280,
    capacity: 3,
    amenities: ['En-suite Bathroom', 'AC', 'WiFi', 'Bar', 'Lounge Area', 'Savanna View'],
    description: 'Modern safari suite with stunning views of the Queen Elizabeth savanna.',
    image: '/images/safari-landscape.png',
    rating: 4.8,
    reviews: 95,
  },
  {
    id: 3,
    name: 'Rwenzori Mountain Retreat',
    location: 'Rwenzori Mountains',
    pricePerNight: 320,
    capacity: 5,
    amenities: ['Stone Fireplace', 'Hot Tub', 'WiFi', 'Mountain View', 'Library', 'Dining Area'],
    description: 'Premium mountain lodge with cozy fireplace and breathtaking alpine views.',
    image: '/images/safari-cottage.png',
    rating: 4.7,
    reviews: 82,
  },
  {
    id: 4,
    name: 'Kibale Tree House',
    location: 'Kibale Forest National Park',
    pricePerNight: 290,
    capacity: 2,
    amenities: ['Elevated Deck', 'Nature Sounds', 'WiFi', 'Star Gazing', 'Binoculars', 'Forest View'],
    description: 'Unique elevated treehouse for intimate forest immersion and bird watching.',
    image: '/images/bird-watching.png',
    rating: 4.6,
    reviews: 76,
  },
  {
    id: 5,
    name: 'Lake George Waterfront Cottage',
    location: 'Lake George, Queen Elizabeth Park',
    pricePerNight: 310,
    capacity: 4,
    amenities: ['Lake View', 'Private Jetty', 'WiFi', 'Telescope', 'Fishing Gear', 'Boat Tours'],
    description: 'Exclusive waterfront cottage perfect for sunset views and water activities.',
    image: '/images/safari-landscape.png',
    rating: 4.8,
    reviews: 110,
  },
  {
    id: 6,
    name: 'Mgahinga Volcano Villa',
    location: 'Mgahinga Gorilla National Park',
    pricePerNight: 340,
    capacity: 6,
    amenities: ['Volcano View', 'Spa Services', 'WiFi', 'Conference Room', 'Dining Hall', 'Gardens'],
    description: 'Spacious villa with volcanic mountain views and premium spa facilities.',
    image: '/images/hero-safari.png',
    rating: 4.9,
    reviews: 135,
  },
  {
    id: 7,
    name: 'Ishasha Plains Lodge',
    location: 'Ishasha Sector, Queen Elizabeth Park',
    pricePerNight: 275,
    capacity: 3,
    amenities: ['Bush Bathroom', 'Outdoor Shower', 'WiFi', 'Game Viewing', 'Sundowner Deck'],
    description: 'Authentic safari experience with open-air design and authentic atmosphere.',
    image: '/images/safari-landscape.png',
    rating: 4.5,
    reviews: 68,
  },
  {
    id: 8,
    name: 'Kasese Comfort Lodge',
    location: 'Kasese Town',
    pricePerNight: 220,
    capacity: 2,
    amenities: ['AC', 'WiFi', 'Restaurant', 'Room Service', 'Airport Shuttle', 'Garden'],
    description: 'Comfortable urban lodge perfect for transit and relaxation between safaris.',
    image: '/images/safari-cottage.png',
    rating: 4.4,
    reviews: 92,
  },
]

function CottagesContent() {
  const searchParams = useSearchParams()
  const page = parseInt(searchParams.get('page') || '1')
  const pageIndex = page - 1
  const totalPages = Math.ceil(cottages.length / ITEMS_PER_PAGE)

  const startIdx = pageIndex * ITEMS_PER_PAGE
  const endIdx = startIdx + ITEMS_PER_PAGE
  const paginatedCottages = cottages.slice(startIdx, endIdx)

  const validPage = page >= 1 && page <= totalPages
  if (!validPage) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-lg text-muted-foreground">Page not found</p>
        </div>
        <Footer />
        <WhatsAppButton />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 80% 50%, #D4A574 0%, transparent 60%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="animate-fade-in-up mb-4">
              <TextGradient className="text-sm font-semibold tracking-wider uppercase">Your Sanctuary Awaits</TextGradient>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Safari Cottages & Lodges</h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Luxury accommodations across Uganda&apos;s most pristine safari destinations
            </p>
          </div>
        </section>

        {/* Cottages Intro */}
        <section className="py-12 md:py-16 bg-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Experience Luxury in the Heart of Nature</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our carefully curated collection of safari cottages and lodges combines luxury comfort with authentic African experiences. Each property is strategically located in Uganda&apos;s most spectacular destinations, offering stunning views, world-class amenities, and warm hospitality that make your stay unforgettable.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From the misty forests of Bwindi to the expansive savannas of Queen Elizabeth National Park, our accommodations provide the perfect base for your safari adventures. Whether you seek romance, adventure, or relaxation, we have the perfect cottage for your journey.
              </p>
              <div className="grid sm:grid-cols-4 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-primary">Cottages</p>
                  <p className="text-2xl font-bold text-accent">8+</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-primary">Locations</p>
                  <p className="text-2xl font-bold text-accent">5</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-primary">Avg Rating</p>
                  <p className="text-2xl font-bold text-accent">4.7/5</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-primary">Guests</p>
                  <p className="text-2xl font-bold text-accent">700+</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cottages Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedCottages.map((cottage, idx) => (
                <div key={cottage.id} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={cottage.image}
                      alt={cottage.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      ${cottage.pricePerNight}/night
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-1">{cottage.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{cottage.location}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(cottage.rating) ? 'fill-accent text-accent' : 'text-muted'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-primary">{cottage.rating}</span>
                      <span className="text-xs text-muted-foreground">({cottage.reviews})</span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">{cottage.description}</p>

                    {/* Amenities */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-primary mb-2">Amenities:</p>
                      <div className="flex flex-wrap gap-1">
                        {cottage.amenities.slice(0, 3).map((amenity) => (
                          <span key={amenity} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                            {amenity}
                          </span>
                        ))}
                        {cottage.amenities.length > 3 && (
                          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                            +{cottage.amenities.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Capacity */}
                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">Capacity: {cottage.capacity} guests</span>
                      <button className="bg-primary hover:bg-accent text-primary-foreground px-4 py-2 rounded font-semibold transition-colors text-sm">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && <Pagination currentPage={page} totalPages={totalPages} baseUrl="/cottages" />}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default function Cottages() {
  return (
    <Suspense
      fallback={
        <>
          <Header />
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-lg text-muted-foreground">Loading...</p>
          </div>
          <Footer />
        </>
      }
    >
      <CottagesContent />
    </Suspense>
  )
}
