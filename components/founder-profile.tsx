'use client'

import Image from 'next/image'
import SocialIcons from './social-icons'

export default function FounderProfile() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 via-background to-secondary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">Meet Our Founder</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          The visionary behind KITIIBWA SAFARIS
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-accent/50 transition-all duration-500 transform hover:scale-105">
              <Image
                src="/images/team-member-1.png"
                alt="Alizeyuna Henry, Founder"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Founder Bio */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">Alizeyuna Henry</h3>
            <p className="text-xl text-accent font-semibold mb-6">Founder & Managing Director</p>

            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Alizeyuna Henry is a passionate conservationist and experienced travel entrepreneur who founded KITIIBWA SAFARIS with a dream to showcase Uganda's natural beauty while protecting its precious ecosystems.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                With over 15 years of experience in the safari industry, Alizeyuna has personally explored every corner of Uganda's national parks, conducting thorough research and building relationships with local communities. His dedication to responsible tourism and community development has made KITIIBWA a leader in sustainable safari experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Born and raised in Uganda, Alizeyuna's connection to the land runs deep. He believes that every traveler should not just witness Africa's beauty but become an advocate for its protection. Through KITIIBWA SAFARIS, he has impacted thousands of lives—both travelers and locals—creating lasting positive change.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <p className="font-semibold text-primary">Connect:</p>
              <SocialIcons
                facebook="https://facebook.com/alizeyunahenry"
                instagram="https://instagram.com/alizeyunahenry"
                linkedin="https://linkedin.com/in/alizeyunahenry"
                twitter="https://twitter.com/alizeyunahenry"
                size="md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
