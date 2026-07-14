'use client'

import { currentAnnouncement } from '@/lib/announcements'
import Marquee from '@/components/marquee'
import ScrollReveal from '@/components/scroll-reveal'

export default function EventAnnouncement() {
  const { title, eventName, host, description, highlights, icon } = currentAnnouncement

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 relative overflow-hidden">
      {/* Subtle background gradient effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 100%, #D4A574 0%, transparent 50%)',
      }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Announcement Header */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <div className="inline-block mb-3">
              <span className="text-4xl md:text-5xl animate-bounce-subtle">{icon}</span>
            </div>
            <h2 className="text-sm md:text-base font-semibold tracking-widest uppercase text-accent mb-2">
              {title}
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-primary mb-2 text-balance">
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
                  className="flex items-center gap-3 whitespace-nowrap px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-accent/20 hover:border-accent/50 transition-all duration-300"
                >
                  <span className="text-accent font-bold">✦</span>
                  <span className="font-semibold text-foreground">{highlight}</span>
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
                  className="flex items-center gap-3 whitespace-nowrap px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-accent/20 hover:border-accent/50 transition-all duration-300"
                >
                  <span className="text-accent font-bold">✦</span>
                  <span className="font-semibold text-foreground">{highlight}</span>
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
            <div className="mt-4 inline-block">
              <div className="px-6 py-2 bg-accent/20 border border-accent/30 rounded-full">
                <p className="text-sm font-semibold text-accent">Coming to Uganda • 2026</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
