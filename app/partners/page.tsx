'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ScrollReveal from '@/components/scroll-reveal'
import AnimatedCard from '@/components/animated-card'
import { MapPin, Users, Leaf, DollarSign, Award, Building2 } from 'lucide-react'

const partners = [
  {
    category: 'Luxury Lodges & Accommodations',
    icon: Building2,
    description: 'Premium stays providing exceptional comfort in the heart of Uganda\'s wildlife destinations',
    members: [
      { name: 'Crater Lake Lodge', type: 'Volcanic Lake Resort', image: '/images/nature/crater-lake-view.jpg' },
      { name: 'Wildlife Retreat Center', type: 'Safari Accommodation', image: '/images/experiences/scenic-overlook.jpg' },
      { name: 'Forest Edge Lodge', type: 'Eco-Tourism Resort', image: '/images/community/traditional-hut.jpg' },
    ],
  },
  {
    category: 'Conservation Partners',
    icon: Leaf,
    description: 'Organizations dedicated to wildlife protection and environmental sustainability',
    members: [
      { name: 'Uganda Wildlife Authority', type: 'National Conservation', image: '/images/safari/wildlife-encounter.jpg' },
      { name: 'Forest Guardians Alliance', type: 'Habitat Protection', image: '/images/nature/forest-landscape.jpg' },
      { name: 'Community Eco-Initiative', type: 'Local Conservation', image: '/images/community/farming-trail.jpg' },
    ],
  },
  {
    category: 'Travel & Tourism',
    icon: MapPin,
    description: 'Travel agencies and tour operators bringing guests from around the world',
    members: [
      { name: 'African Journeys Ltd', type: 'International Tours', image: '/images/safari/sunset-acacia.jpg' },
      { name: 'Wanderlust Adventures', type: 'Adventure Travel', image: '/images/experiences/golden-hour-safari.jpg' },
      { name: 'Global Explorer Network', type: 'Tour Operations', image: '/images/experiences/wildlife-photography.jpg' },
    ],
  },
  {
    category: 'Community Partners',
    icon: Users,
    description: 'Local communities and social enterprises supporting sustainable tourism development',
    members: [
      { name: 'Local Guides Association', type: 'Community Employment', image: '/images/experiences/guide-elephant.jpg' },
      { name: 'Women Entrepreneurs Cooperative', type: 'Women Empowerment', image: '/images/safari/vehicle-sunset.jpg' },
      { name: 'Youth Skills Development', type: 'Education Programs', image: '/images/nature/twin-crater-lakes.jpg' },
    ],
  },
]

const benefits = [
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'All partners meet our strict standards for excellence and ethical practices'
  },
  {
    icon: DollarSign,
    title: 'Fair Trade Pricing',
    description: 'Ensuring equitable compensation and sustainable economic practices'
  },
  {
    icon: Leaf,
    title: 'Environmental Care',
    description: 'Partners committed to conservation and minimal environmental impact'
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'Supporting local communities and creating meaningful employment'
  },
]

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-gradient-to-b from-accent/10 to-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Our Partners Network
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We collaborate with exceptional organizations dedicated to wildlife conservation, community development, and unforgettable travel experiences
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Partnership Principles</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <AnimatedCard key={idx} delay={idx * 0.1} className="bg-accent/5 p-6 rounded-lg">
                  <Icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {partners.map((category, categoryIdx) => {
            const CategoryIcon = category.icon
            return (
              <ScrollReveal key={categoryIdx} delay={categoryIdx * 0.1}>
                <div className="mb-16">
                  <div className="flex items-center gap-4 mb-8">
                    <CategoryIcon className="h-8 w-8 text-accent" />
                    <div>
                      <h2 className="text-2xl font-bold text-primary">{category.category}</h2>
                      <p className="text-muted-foreground mt-1">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {category.members.map((partner, idx) => (
                      <AnimatedCard
                        key={idx}
                        delay={idx * 0.1}
                        className="overflow-hidden hover:border-accent/50 bg-background"
                      >
                        <div className="relative h-48 overflow-hidden rounded-t-lg">
                          <Image
                            src={partner.image}
                            alt={partner.name}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
                            <p className="text-sm text-accent">{partner.type}</p>
                          </div>
                        </div>
                      </AnimatedCard>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-16 px-4 bg-accent/5">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-primary mb-6">Interested in Partnering with Us?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We&apos;re always looking for organizations that share our commitment to excellence, sustainability, and positive impact. Let&apos;s explore how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => window.location.href = 'mailto:kisakyedhisayar@gmail.com?subject=Partnership%20Inquiry'}
              >
                Send Partnership Inquiry
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = 'https://wa.me/447884181149'}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Partner with KITIIBWA SAFARIS?</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-white font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Proven Track Record</h3>
                    <p className="text-muted-foreground">Years of successful safari experiences and satisfied guests</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-white font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Market Access</h3>
                    <p className="text-muted-foreground">Connection to international travelers and tour operators</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-white font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Shared Values</h3>
                    <p className="text-muted-foreground">Commitment to conservation and community empowerment</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-white font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Professional Support</h3>
                    <p className="text-muted-foreground">Dedicated support for seamless collaboration</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-white font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Sustainable Growth</h3>
                    <p className="text-muted-foreground">Long-term partnerships built on mutual success</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-white font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Impact Measurement</h3>
                    <p className="text-muted-foreground">Transparent tracking of conservation and community benefits</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
