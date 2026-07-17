import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import HeroCarousel from '@/components/hero-carousel'
import Link from 'next/link'
import Image from 'next/image'
import { SectionHeading, AnimatedCard, InteractiveImage, TextGradient } from '@/components/ui/effects'
import ScrollReveal from '@/components/scroll-reveal'
import EventAnnouncement from '@/components/event-announcement'

export const metadata = {
  title: 'Home | KITIIBWA SAFARIS',
  description: 'Welcome to KITIIBWA SAFARIS - Premium African Safari Experiences in Uganda',
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Carousel Section */}
        <HeroCarousel />

        {/* Welcome Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #2D5F3F 0%, transparent 50%), radial-gradient(circle at 80% 50%, #D4A574 0%, transparent 50%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="animate-fade-in-up mb-4">
                <TextGradient className="text-sm font-semibold tracking-wider uppercase">Welcome Aboard</TextGradient>
              </div>
              <SectionHeading animated>Welcome to KITIIBWA SAFARIS</SectionHeading>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Embark on the journey of a lifetime in the Pearl of Africa. KITIIBWA SAFARIS delivers authentic, transformative safari experiences that connect you with Uganda&apos;s breathtaking wildlife, stunning landscapes, and vibrant cultures. Since our founding, we have been committed to creating not just memorable holidays, but meaningful encounters with nature and genuine human connections.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Every safari we arrange is carefully curated to showcase the best of Uganda&apos;s national parks while supporting conservation efforts and empowering local communities. Whether you seek the thrill of tracking mountain gorillas, the wonder of wildlife encounters, or the tranquility of pristine nature, KITIIBWA SAFARIS transforms your dreams into reality.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-gradient-safari text-primary-foreground p-8 rounded-xl shadow-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-2xl md:text-4xl font-bold mb-1 text-accent">2,000+</div>
                <p className="text-sm opacity-95">Happy Guests</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl md:text-4xl font-bold mb-1 text-accent">15+</div>
                <p className="text-sm opacity-95">Years Serving</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-2xl md:text-4xl font-bold mb-1 text-accent">50+</div>
                <p className="text-sm opacity-95">Expert Staff</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.7s' }}>
                <div className="text-2xl md:text-4xl font-bold mb-1 text-accent">5</div>
                <p className="text-sm opacity-95">Prime Parks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Announcement Section */}
        <EventAnnouncement />

        {/* Featured Experiences */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <ScrollReveal>
                <div className="mb-4">
                  <TextGradient className="text-sm font-semibold tracking-wider uppercase">Our Signature Journeys</TextGradient>
                </div>
                <SectionHeading animated>Unforgettable Experiences</SectionHeading>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover our most sought-after safari adventures and premium accommodations tailored for the discerning traveler
                </p>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Mountain Gorilla Trekking */}
              <AnimatedCard delay={0} className="bg-background overflow-hidden hover:border-accent/50">
                <div className="relative h-56 overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/images/hero-safari.png"
                    alt="Mountain Gorilla Trekking"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Mountain Gorilla Trekking</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Trek through the misty forests of Bwindi Impenetrable National Park to encounter the majestic mountain gorillas. This life-changing experience brings you face-to-face with our closest living relatives in their natural environment—a profound moment of connection you&apos;ll cherish forever.
                </p>
                <Link href="/packages" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group">
                  Learn More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </AnimatedCard>

              {/* Wildlife Safari */}
              <AnimatedCard delay={1} className="bg-background overflow-hidden hover:border-accent/50">
                <div className="relative h-56 overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/images/safari-landscape.png"
                    alt="Wildlife Safari"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Wildlife Safari</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Witness the iconic Big Five and over 100 bird species in the stunning Queen Elizabeth National Park. From sunrise game drives to Kazinga Channel boat cruises, immerse yourself in authentic African wildlife encounters with expert naturalist guides who bring every moment to life.
                </p>
                <Link href="/packages" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group">
                  Learn More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </AnimatedCard>

              {/* Luxury Accommodations */}
              <AnimatedCard delay={2} className="bg-background overflow-hidden hover:border-accent/50">
                <div className="relative h-56 overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/images/safari-cottage.png"
                    alt="Luxury Accommodations"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Luxury Accommodations</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Unwind in our carefully designed safari cottages offering the perfect blend of comfort and authenticity. Each lodge features modern amenities, fine dining, spa services, and breathtaking views—ensuring your off-safari hours are just as memorable as your adventures.
                </p>
                <Link href="/cottages" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group">
                  Learn More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #D4A574 0%, transparent 70%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <ScrollReveal>
                <div className="mb-4">
                  <TextGradient className="text-sm font-semibold tracking-wider uppercase">What Sets Us Apart</TextGradient>
                </div>
                <SectionHeading animated>Why Choose KITIIBWA</SectionHeading>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  We&apos;re not just another safari company. We&apos;re conservation partners, community advocates, and curators of transformative experiences.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatedCard delay={0} className="bg-gradient-to-br from-accent/10 to-transparent text-center">
                <div className="h-16 w-16 bg-gradient-safari text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
                  ★
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Expert Guides</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our certified wildlife experts and naturalists have decades of combined experience, sharing deep knowledge about Uganda&apos;s ecosystem and wildlife behavior.
                </p>
              </AnimatedCard>

              <AnimatedCard delay={1} className="bg-gradient-to-br from-accent/10 to-transparent text-center">
                <div className="h-16 w-16 bg-gradient-safari text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
                  🏡
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Luxury Stays</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Premium safari cottages with world-class amenities, gourmet dining, and stunning views—your sanctuary in the heart of nature.
                </p>
              </AnimatedCard>

              <AnimatedCard delay={2} className="bg-gradient-to-br from-accent/10 to-transparent text-center">
                <div className="h-16 w-16 bg-gradient-safari text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
                  🌍
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Authentic Experiences</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Beyond tourist attractions, we create genuine connections with wildlife, cultures, and the breathtaking landscapes of Uganda.
                </p>
              </AnimatedCard>

              <AnimatedCard delay={3} className="bg-gradient-to-br from-accent/10 to-transparent text-center">
                <div className="h-16 w-16 bg-gradient-safari text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
                  🤝
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Conservation First</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A portion of every booking supports wildlife conservation, community education, healthcare, and sustainable livelihoods.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-safari opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white">Ready for Your African Adventure?</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg opacity-95 mb-8 leading-relaxed text-white">
                Your dream safari awaits. From intimate wildlife encounters to transformative cultural experiences, KITIIBWA SAFARIS brings Uganda's wonders to life. Every journey is personalized, every moment is precious—let us craft your unforgettable story.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/packages"
                  className="bg-white text-primary hover:bg-accent hover:text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-xl shadow-lg duration-300"
                >
                  Explore Packages
                </Link>
                <Link
                  href="/contact"
                  className="bg-accent text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-xl shadow-lg duration-300"
                >
                  Plan Your Journey
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-sm opacity-90 mt-6 text-white animate-pulse-subtle">
                💬 Need help? Chat with us on WhatsApp or call +256 708898424
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
