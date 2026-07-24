'use client'

import Link from 'next/link'
import { currentAnnouncement } from '@/lib/announcements'
import Marquee from '@/components/marquee'
import ScrollReveal from '@/components/scroll-reveal'

export default function EventAnnouncement() {
  const { title, eventName, host, description, highlights, icon } = currentAnnouncement

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gradient-safari via-primary/15 to-accent/20 relative overflow-hidden border-y-2 border-accent/30">
      {/* Eye-catching background gradient effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 30% 50%, #D4A574 0%, transparent 50%), radial-gradient(circle at 70% 100%, #2D5F3F 0%, transparent 60%)',
      }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Announcement Header */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <div className="inline-block mb-3">
              <span className="text-4xl md:text-5xl animate-bounce-subtle">{icon}</span>
            </div>
            <h2 className="text-sm md:text-base font-bold tracking-widest uppercase text-accent mb-3 drop-shadow-lg">
              {title}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-3 text-balance drop-shadow-md">
              {eventName}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground font-semibold mb-4">
              Hosted by <span className="text-accent font-bold">{host}</span>
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </ScrollReveal>

        {/* Scrolling Highlights */}
        <div className="mt-10 space-y-3">
          {/* First Line - Left to Right */}
          <Marquee speed="normal" pauseOnHover className="mb-4">
            <div className="flex gap-8 px-4">
              {highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 whitespace-nowrap px-7 py-3 bg-gradient-to-r from-accent/30 to-accent/10 backdrop-blur-md rounded-full border-2 border-accent/60 hover:border-accent hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <span className="text-accent font-bold text-lg">✦</span>
                  <span className="font-bold text-foreground text-sm md:text-base">{highlight}</span>
                </div>
              ))}
            </div>
          </Marquee>

          {/* Second Line - Right to Left (alternating direction for visual interest) */}
          <Marquee speed="normal" direction="right" pauseOnHover>
            <div className="flex gap-8 px-4">
              {[...highlights].reverse().map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 whitespace-nowrap px-7 py-3 bg-gradient-to-r from-accent/30 to-accent/10 backdrop-blur-md rounded-full border-2 border-accent/60 hover:border-accent hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <span className="text-accent font-bold text-lg">✦</span>
                  <span className="font-bold text-foreground text-sm md:text-base">{highlight}</span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* CTA Text */}
        <ScrollReveal>
          <div className="text-center mt-10">
            <p className="text-sm md:text-base text-muted-foreground">
              Stay tuned for <span className="text-accent font-bold">official dates, venue, and booking details</span>
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link href="/safari-chill-experience" className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </Link>
              <div className="px-6 py-2 bg-accent/20 border border-accent/30 rounded-full self-center">
                <p className="text-sm font-semibold text-accent">Coming to Uganda • 2027</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
