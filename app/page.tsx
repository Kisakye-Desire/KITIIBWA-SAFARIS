import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import HeroCarousel from '@/components/hero-carousel'
import Link from 'next/link'
import Image from 'next/image'

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
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-balance">Welcome to KITIIBWA SAFARIS</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Embark on the journey of a lifetime in the Pearl of Africa. KITIIBWA SAFARIS delivers authentic, transformative safari experiences that connect you with Uganda's breathtaking wildlife, stunning landscapes, and vibrant cultures. Since our founding, we have been committed to creating not just memorable holidays, but meaningful encounters with nature and genuine human connections.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every safari we arrange is carefully curated to showcase the best of Uganda's national parks while supporting conservation efforts and empowering local communities. Whether you seek the thrill of tracking mountain gorillas, the wonder of wildlife encounters, or the tranquility of pristine nature, KITIIBWA SAFARIS transforms your dreams into reality.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 bg-primary text-primary-foreground p-8 rounded-lg">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">2,000+</div>
                <p className="text-sm opacity-90">Happy Guests</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">15+</div>
                <p className="text-sm opacity-90">Years Serving</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">50+</div>
                <p className="text-sm opacity-90">Expert Staff</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">5</div>
                <p className="text-sm opacity-90">Prime Parks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Experiences */}
        <section className="py-16 md:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Unforgettable Experiences</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our most sought-after safari adventures and premium accommodations tailored for the discerning traveler
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Mountain Gorilla Trekking */}
              <div className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/hero-safari.png"
                    alt="Mountain Gorilla Trekking"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Mountain Gorilla Trekking</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Trek through the misty forests of Bwindi Impenetrable National Park to encounter the majestic mountain gorillas. This life-changing experience brings you face-to-face with our closest living relatives in their natural environment—a profound moment of connection you&apos;ll cherish forever.
                  </p>
                  <Link href="/packages" className="text-primary font-semibold hover:text-accent transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* Wildlife Safari */}
              <div className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/safari-landscape.png"
                    alt="Wildlife Safari"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Wildlife Safari</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Witness the iconic Big Five and over 100 bird species in the stunning Queen Elizabeth National Park. From sunrise game drives to Kazinga Channel boat cruises, immerse yourself in authentic African wildlife encounters with expert naturalist guides who bring every moment to life.
                  </p>
                  <Link href="/packages" className="text-primary font-semibold hover:text-accent transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* Luxury Accommodations */}
              <div className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/safari-cottage.png"
                    alt="Luxury Accommodations"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Luxury Accommodations</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Unwind in our carefully designed safari cottages offering the perfect blend of comfort and authenticity. Each lodge features modern amenities, fine dining, spa services, and breathtaking views—ensuring your off-safari hours are just as memorable as your adventures.
                  </p>
                  <Link href="/cottages" className="text-primary font-semibold hover:text-accent transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose KITIIBWA</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We&apos;re not just another safari company. We&apos;re conservation partners, community advocates, and curators of transformative experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">★</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Expert Guides</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our certified wildlife experts and naturalists have decades of combined experience, sharing deep knowledge about Uganda&apos;s ecosystem and wildlife behavior.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏡</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Luxury Stays</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Premium safari cottages with world-class amenities, gourmet dining, and stunning views—your sanctuary in the heart of nature.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Authentic Experiences</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Beyond tourist attractions, we create genuine connections with wildlife, cultures, and the breathtaking landscapes of Uganda.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Conservation First</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A portion of every booking supports wildlife conservation, community education, healthcare, and sustainable livelihoods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready for Your African Adventure?</h2>
            <p className="text-lg opacity-95 mb-8 leading-relaxed">
              Your dream safari awaits. From intimate wildlife encounters to transformative cultural experiences, KITIIBWA SAFARIS brings Uganda&apos;s wonders to life. Every journey is personalized, every moment is precious—let us craft your unforgettable story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/packages"
                className="bg-white text-primary hover:bg-accent/20 hover:text-primary px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Explore Packages
              </Link>
              <Link
                href="/contact"
                className="bg-accent text-accent-foreground hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Plan Your Journey
              </Link>
            </div>
            <p className="text-sm opacity-85 mt-6">
              💬 Need help? Chat with us on WhatsApp or call +256 708898424
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
