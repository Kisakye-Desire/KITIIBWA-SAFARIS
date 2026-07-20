'use client'

import ScrollReveal from '@/components/scroll-reveal'
import { TextGradient } from '@/components/ui/effects'
import Link from 'next/link'

export default function PartnersSection() {
  const partners = [
    {
      name: 'Vision for Trauma Care in Africa',
      description: 'Supporting mental health and trauma recovery in East African communities',
      url: 'https://visionfstraumacare.org',
    },
    {
      name: 'Mukono Access Clinic',
      description: 'Providing accessible healthcare services to rural communities in Uganda',
      url: '#',
    },
    {
      name: 'Ssinza Safaris',
      description: 'Community-focused safari experiences and conservation partnerships',
      url: '#',
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
              We're proud to collaborate with organizations that share our commitment to conservation, community development, and positive impact in Uganda.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl border border-border hover:border-accent/50 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {partner.description}
                </p>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group/link"
                >
                  Learn More
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center border border-primary/20">
            <p className="text-muted-foreground mb-4">
              Interested in partnering with Kittibwa Safaris?
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
