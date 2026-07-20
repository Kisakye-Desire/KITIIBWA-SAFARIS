import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Image from 'next/image'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { TextGradient, AnimatedCard } from '@/components/ui/effects'
import ScrollReveal from '@/components/scroll-reveal'

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
    {
      name: 'Source of the Nile Explorer: Raft, Fly & Discover',
      duration: '6 Days / 5 Nights',
      price: 1250,
      image: '/images/safari-landscape.png',
      description: 'Experience the thrill of Uganda\'s adventure capital with white-water rafting and bungee jumping at the legendary Source of the Nile',
      included: [
        'Visit the Source of the Nile',
        'Grade V white-water rafting or scenic Nile boat cruise',
        'Ziplining in Mabira Forest',
        'Guided Jinja town and cultural tour',
        'Birdwatching and nature walks',
        'Mid-range accommodation',
        'Professional English-speaking guide',
        'Breakfast, selected lunches, and drinking water',
      ],
      bestseller: false,
    },
    {
      name: 'Uganda Birding Circuit: Shoebill to Bwindi',
      duration: '7 Days / 6 Nights',
      price: 2200,
      image: '/images/bird-watching.png',
      description: 'Discover Uganda\'s incredible birdlife with over 1,060 species including the iconic Shoebill and Albertine Rift endemics',
      included: [
        'Shoebill tracking in Mabamba Swamp',
        'Birding in Kibale Forest & Bigodi Wetland',
        'Queen Elizabeth National Park birding',
        'Albertine Rift endemic species in Bwindi',
        'Expert certified local birding guide',
        'Eco-lodge accommodation',
        'All meals included',
        'Park entrance fees',
      ],
      bestseller: true,
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 100% 0%, #2D5F3F 0%, transparent 50%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="mb-4">
                <TextGradient className="text-sm font-semibold tracking-wider uppercase">Safari Experiences</TextGradient>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Safari Packages</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Choose from our carefully curated packages or work with us to customize your perfect African safari adventure tailored to your dreams and interests.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, idx) => (
                <ScrollReveal key={pkg.name} delay={idx * 0.08} direction={idx % 4 === 0 ? 'up' : idx % 4 === 1 ? 'left' : 'right'}>
                  <div
                    className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all relative transform hover:scale-105 hover:-translate-y-2 duration-300 card-hover group border ${
                      pkg.bestseller ? 'border-accent ring-2 ring-accent/50' : 'border-border hover:border-accent/50'
                    }`}
                  >
                    {pkg.bestseller && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-secondary text-accent-foreground px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-card flex flex-col h-full">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">{pkg.name}</h3>
                        <p className="text-accent font-semibold text-sm mb-2">{pkg.duration}</p>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{pkg.description}</p>
                      </div>

                      {/* Price */}
                      <div className="mb-6 pb-6 border-b border-border">
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-gradient">${pkg.price}</span>
                          <span className="text-muted-foreground text-sm">per person</span>
                        </div>
                      </div>

                      {/* Included */}
                      <div className="mb-6 flex-grow">
                        <p className="font-semibold text-primary text-xs mb-3 uppercase tracking-wider">Includes:</p>
                        <ul className="space-y-2">
                          {pkg.included.slice(0, 4).map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{item}</span>
                            </li>
                          ))}
                          {pkg.included.length > 4 && (
                            <li className="text-xs text-accent font-semibold">+{pkg.included.length - 4} more included</li>
                          )}
                        </ul>
                      </div>

                      {/* Button */}
                      <a
                        href="https://wa.me/447884181149"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:to-accent hover:from-accent text-primary-foreground py-3 rounded-lg font-semibold transition-all transform hover:scale-105 duration-300 text-center shadow-md hover:shadow-lg"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Packages */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Customize Your Perfect Safari</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <ScrollReveal delay={0} direction="up">
                <div className="bg-gradient-to-br from-accent/10 to-transparent p-8 rounded-xl text-center border border-border hover:border-accent/50 transition-all card-hover group">
                  <div className="h-14 w-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">Tell Us Your Dreams</h3>
                  <p className="text-muted-foreground">Share your travel dates, interests, and budget with our expert team</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1} direction="up">
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-xl text-center border border-border hover:border-primary/50 transition-all card-hover group">
                  <div className="h-14 w-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">We Design Your Adventure</h3>
                  <p className="text-muted-foreground">Our experts craft a personalized itinerary matching your every interest</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2} direction="up">
                <div className="bg-gradient-to-br from-secondary/10 to-transparent p-8 rounded-xl text-center border border-border hover:border-secondary/50 transition-all card-hover group">
                  <div className="h-14 w-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl text-white font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">Live Your Dream</h3>
                  <p className="text-muted-foreground">Depart knowing every detail is perfect and handled with care</p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-primary to-primary/80 hover:to-accent hover:from-accent text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg duration-300 shadow-lg"
              >
                Start Planning Your Custom Safari
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
