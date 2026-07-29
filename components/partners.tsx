'use client'

import ScrollReveal from '@/components/scroll-reveal'
import { TextGradient } from '@/components/ui/effects'
import Image from 'next/image'

export default function PartnersSection() {
  const partners = [
    {
      name: 'Vision for Trauma Care in Africa',
      description: 'Supporting mental health and trauma recovery in East African communities — Every Life Counts.',
      url: 'https://visionfstraumacare.org',
      logo: '/images/partner-vision-trauma.jpg',
    },
    {
      name: 'Mukono Access Clinic',
      description: 'Providing accessible, high-quality healthcare services to rural communities in Uganda — Your health matters.',
      url: '#',
      logo: '/images/partner-mukono-clinic.jpg',
    },
    {
      name: 'Ssinza Safaris',
      description: 'Community-focused safari experiences and conservation partnerships across Uganda.',
      url: '#',
      logo: '/images/partner-sinza-safaris.png',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/5 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <TextGradient className="text-sm font-semibold tracking-wider uppercase mb-2">Our Community</TextGradient>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Strategic Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re proud to collaborate with organizations that share our commitment to conservation, community development, and positive impact in Uganda.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {partners.map((partner, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <a
                href={partner.url}
                target={partner.url !== '#' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="flex flex-col h-full bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-border hover:border-accent/50 transition-all duration-300 group"
              >
                {/* Logo area — fixed height, consistent for all cards */}
                <div className="relative h-44 bg-white flex items-center justify-center p-6 flex-shrink-0">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Text area — flex-1 so all cards stretch to same height */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-base font-bold text-primary mb-2 group-hover:text-accent transition-colors leading-snug">
                    {partner.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {partner.description}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center border border-primary/20">
            <p className="text-muted-foreground mb-4">
              Interested in partnering with Kitiibwa Safaris?
            </p>
            <a
              href="https://wa.me/447884181149"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-2 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
