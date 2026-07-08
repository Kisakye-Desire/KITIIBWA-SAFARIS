import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Image from 'next/image'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { TextGradient, AnimatedCard } from '@/components/ui/effects'

export const metadata = {
  title: 'Safari Packages | KITIIBWA SAFARIS',
  description: 'Customize your perfect safari adventure with our curated packages',
}

export default function Packages() {
  const packages = [
    {
      name: 'Bwindi Gorilla Encounter',
      duration: '4 Days / 3 Nights',
      price: 1900,
      image: '/images/hero-safari.png',
      description: 'Unforgettable 4-day gorilla trekking adventure in Bwindi Impenetrable Forest with expert guides',
      included: [
        'Gorilla trekking in Bwindi',
        'Scenic forest walks',
        'Cultural community experiences',
        'Guided nature walks & birdwatching',
        'Comfortable mid-range accommodation',
        'Full-board meals',
      ],
      bestseller: true,
    },
    {
      name: '2-Day Queen Elizabeth Safari',
      duration: '2 Days / 1 Night',
      price: 650,
      image: '/images/safari-landscape.png',
      description: 'Game drive and scenic Kazinga Channel boat cruise in Uganda\'s most iconic park',
      included: [
        'Private 4x4 safari vehicle',
        'Professional English-speaking guide',
        'Game drive in Queen Elizabeth',
        'Boat cruise on Kazinga Channel',
        'Mid-range lodge accommodation',
        'Full meals included',
      ],
      bestseller: false,
    },
    {
      name: 'Murchison Falls & Rhino Tracking',
      duration: '4 Days / 3 Nights',
      price: 1200,
      image: '/images/safari-cottage.png',
      description: 'Experience rhino tracking, game drives, and the spectacular Murchison Falls waterfall',
      included: [
        'Guided rhino tracking at Ziwa',
        'Exciting game drives',
        'Nile boat cruise to falls',
        'Guided hike to top of falls',
        'Opportunity to spot Big Five',
        'Stunning savannah scenery',
      ],
      bestseller: false,
    },
    {
      name: 'Mountain Adventure',
      duration: '5 Days / 4 Nights',
      price: 2950,
      image: '/images/gallery-3.png',
      description: 'Rwenzori Mountains trekking and alpine ecosystem exploration',
      included: [
        'Mountain guide & porters',
        'Alpine hut accommodation',
        'All meals on trek',
        'Safety & rescue equipment',
        'Training & orientation',
        'Photography stops',
      ],
      bestseller: false,
    },
    {
      name: 'Chimpanzee Connection',
      duration: '3 Days / 2 Nights',
      price: 1900,
      image: '/images/bird-watching.png',
      description: 'Track wild chimpanzees in Kibale Forest and experience forest ecosystem',
      included: [
        'Chimp habituation experience',
        'Forest walks & nature guides',
        'Eco-lodge accommodation',
        'All meals included',
        'Park entrance fees',
        'Professional guide',
      ],
      bestseller: true,
    },
    {
      name: 'Grand Uganda Safari',
      duration: '10 Days / 9 Nights',
      price: 6500,
      image: '/images/safari-landscape.png',
      description: 'The ultimate safari combining gorillas, wildlife, mountains, and culture',
      included: [
        'All transportation & transfers',
        'Gorilla & chimp permits',
        'All accommodations (luxury lodges)',
        'All meals & premium drinks',
        'All activities & excursions',
        'Expert guides throughout',
        'Photography tips & assistance',
        'Cultural experiences',
      ],
      bestseller: false,
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Safari Packages</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Choose from our curated packages or work with us to customize your perfect African safari adventure
            </p>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg, idx) => (
                <div
                  key={pkg.name}
                  className={`rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all relative transform hover:scale-105 hover:-translate-y-2 duration-300 animate-fade-in-up ${
                    pkg.bestseller ? 'ring-2 ring-accent' : 'bg-card'
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {pkg.bestseller && (
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                      BESTSELLER
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-card flex flex-col h-full">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-primary mb-1">{pkg.name}</h3>
                      <p className="text-accent font-semibold text-sm mb-2">{pkg.duration}</p>
                      <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-primary">${pkg.price}</span>
                        <span className="text-muted-foreground">per person</span>
                      </div>
                    </div>

                    {/* Included */}
                    <div className="mb-6 flex-grow">
                      <p className="font-semibold text-primary text-sm mb-3">Includes:</p>
                      <ul className="space-y-2">
                        {pkg.included.slice(0, 4).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                        {pkg.included.length > 4 && (
                          <li className="text-xs text-accent font-semibold">+{pkg.included.length - 4} more</li>
                        )}
                      </ul>
                    </div>

                    {/* Button */}
                    <Link
                      href="/contact"
                      className="w-full bg-primary hover:bg-accent text-primary-foreground py-2 rounded-lg font-semibold transition-colors text-center"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Packages */}
        <section className="py-16 md:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Customize Your Package</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg text-center">
                <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl text-accent-foreground font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Tell Us Your Dreams</h3>
                <p className="text-muted-foreground">Share your travel dates, interests, and budget with our team</p>
              </div>
              <div className="bg-background p-8 rounded-lg text-center">
                <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl text-accent-foreground font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">We Design Your Adventure</h3>
                <p className="text-muted-foreground">Our experts craft a personalized itinerary matching your interests</p>
              </div>
              <div className="bg-background p-8 rounded-lg text-center">
                <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl text-accent-foreground font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Live Your Dream</h3>
                <p className="text-muted-foreground">Depart knowing every detail is perfect and handled with care</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Planning Your Custom Safari
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
