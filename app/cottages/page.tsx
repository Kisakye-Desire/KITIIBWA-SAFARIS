'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Image from 'next/image'
import { MapPin, Users, Wifi, Utensils, Trees, Heart } from 'lucide-react'
import { TextGradient } from '@/components/ui/effects'
import ScrollReveal from '@/components/scroll-reveal'

const IMAGES_PER_PAGE = 9

const galleryImages = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%285%29-D5WH9MCNOwIcjujHeNQrauKShrHI98.jpeg',
    alt: 'Community Workshop Activity',
    title: 'Agro-Tourism Workshops',
    description: 'Interactive community art and educational activities'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%289%29-Gbl8pg03QAyqQndfjssEn4urcN87s5.jpeg',
    alt: 'Cottage Pathway with Banana Plants',
    title: 'Garden Pathways',
    description: 'Scenic pathways through lush banana plantations'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%282%29-vvxbQJowWUl2rGfqbmINXT2SYUt2e7.jpeg',
    alt: 'Community Art Session',
    title: 'Creative Gatherings',
    description: 'Engage with local artists and craftspeople'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%2813%29-IJzr28kitGgIarvd1LQAm7pdOA4Lh2.jpeg',
    alt: 'Mountain Landscape View',
    title: 'Scenic Vistas',
    description: 'Panoramic views of surrounding mountains and valleys'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%288%29-v6DiXecida7I0GWUNiRmXPnJ75wscm.jpeg',
    alt: 'Rustic Cottage Structure',
    title: 'Sustainable Design',
    description: 'Eco-friendly cottages blending with nature'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%2812%29-HsQ4KXikwa6dGf73188lUDdDgliwOW.jpeg',
    alt: 'Garden Entrance Arch',
    title: 'Natural Entrances',
    description: 'Welcoming paths through organic gardens'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.21%20PM%20%281%29-6m5AFUbVoVenn51SGNWOafKcs6beZz.jpeg',
    alt: 'Aerial View of Homestead',
    title: 'Property Overview',
    description: 'Sweeping views of the entire homestead and farmland'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%286%29-1dvMdx0A6YHJTzdes7yfzLKG09V2gZ.jpeg',
    alt: 'Group Art Workshop',
    title: 'Workshops & Events',
    description: 'Host group activities and team building experiences'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%2814%29-8qybKY11S3au0YvkTpHt6vxfzHazUG.jpeg',
    alt: 'Market Setup Area',
    title: 'Community Market',
    description: 'Fresh local produce and artisan crafts'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%281%29-Fc1fNmWE4G92WpGuOIOF9As4LgDwR3.jpeg',
    alt: 'Evening Workshop Gathering',
    title: 'Sunset Experiences',
    description: 'Perfect moments amidst nature during golden hour'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.21%20PM-WOLBzmtILQNWxiqQW5cEIJKSnO7piC.jpeg',
    alt: 'Banana Plantation Pathway',
    title: 'Agricultural Tours',
    description: 'Learn about sustainable organic farming practices'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%2811%29-Aq19L3QX2JtV60Jterb0vETEgn16NJ.jpeg',
    alt: 'Garden Trellis with Vegetation',
    title: 'Organic Gardens',
    description: 'Vibrant gardens full of local vegetation'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%283%29-cTAivFwCT4Ns1zCzu9zk58MfiLq1BP.jpeg',
    alt: 'Art Workshop Session',
    title: 'Creative Sessions',
    description: 'Hands-on artistic and cultural experiences'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM-C1TGz5zIZ8V6J8YJu171a4OmYsMJgE.jpeg',
    alt: 'Community Gathering with Music',
    title: 'Cultural Experiences',
    description: 'Live music and cultural performances'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%287%29-jkNkt5tYpbdIVJOkHURms9OicxhOSi.jpeg',
    alt: 'Artist at Work',
    title: 'Artisan Demonstrations',
    description: 'Meet local artists and watch them create'
  },
]

export default function SinguraCottages() {
  const [displayedCount, setDisplayedCount] = useState(IMAGES_PER_PAGE)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    alt: string
    title: string
    description: string
  } | null>(null)

  const displayedImages = galleryImages.slice(0, displayedCount)
  const hasMore = displayedCount < galleryImages.length
  const totalCount = galleryImages.length

  const handleLoadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setDisplayedCount(prev => Math.min(prev + IMAGES_PER_PAGE, totalCount))
      setIsLoading(false)
    }, 300)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/15 via-background to-background overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, #D4A574 0%, transparent 50%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="animate-fade-in-up mb-4">
              <TextGradient className="text-sm font-semibold tracking-wider uppercase">Agro-Tourism Experience</TextGradient>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Singura Homesteads
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Immerse yourself in authentic Ugandan countryside living with sustainable farming, community engagement, and warm hospitality
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-12 md:py-16 bg-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Welcome to Singura Homesteads California
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Singura Homesteads is a unique agro-tourism destination nestled in the heart of Uganda&apos;s verdant countryside. Our philosophy combines sustainable agricultural practices with authentic community experiences, offering guests an immersive journey into rural Ugandan life.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Stay in comfortable cottages surrounded by thriving organic farms, banana plantations, and natural gardens. Participate in workshops, meet local artisans, enjoy farm-fresh meals, and connect with the vibrant community that makes Singura special.
                  </p>
                  <a
                    href="https://wa.me/447884181149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Book Your Stay
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <Trees className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-bold text-primary mb-2">Organic Farms</h3>
                    <p className="text-sm text-muted-foreground">Sustainable agricultural practices and fresh produce</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <Heart className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-bold text-primary mb-2">Community</h3>
                    <p className="text-sm text-muted-foreground">Authentic connections with local people</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <Utensils className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-bold text-primary mb-2">Local Cuisine</h3>
                    <p className="text-sm text-muted-foreground">Farm-to-table meals prepared on site</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <Wifi className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-bold text-primary mb-2">Comfort</h3>
                    <p className="text-sm text-muted-foreground">Modern amenities in rustic settings</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Accommodation Features */}
        <section className="py-12 md:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <TextGradient className="text-sm font-semibold tracking-wider uppercase mb-2">Comfort & Nature</TextGradient>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Accommodation Features
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🏡', title: 'Rustic Cottages', desc: 'Cozy rooms with traditional architecture and modern comforts' },
                { icon: '🌿', title: 'Garden Views', desc: 'Surrounded by lush plantations and organic gardens' },
                { icon: '🍽��', title: 'Farm Meals', desc: 'Delicious cuisine prepared from fresh farm produce' },
                { icon: '🎨', title: 'Art Workshops', desc: 'Hands-on creative sessions with local artists' },
                { icon: '🚶', title: 'Walking Tours', desc: 'Guided tours through farms and natural trails' },
                { icon: '👥', title: 'Community Time', desc: 'Authentic interactions and cultural exchanges' },
              ].map((feature, idx) => (
                <ScrollReveal key={idx}>
                  <div className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:-translate-y-2">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <TextGradient className="text-sm font-semibold tracking-wider uppercase mb-2">Visual Journey</TextGradient>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Moments at Singura
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore the beauty, activities, and authentic experiences that make Singura Homesteads special
                </p>
              </div>
            </ScrollReveal>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
              {displayedImages.map((image, idx) => (
                <ScrollReveal key={idx}>
                  <div
                    className="group relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-lg font-bold text-white">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Load More Section */}
            {hasMore && (
              <div className="flex flex-col items-center mt-16 gap-4">
                <button
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  className="group relative px-8 py-3 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
                >
                  <span className="flex items-center gap-2">
                    {isLoading ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Loading...
                      </>
                    ) : (
                      <>
                        View More Moments
                        <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
                <p className="text-sm text-muted-foreground">
                  Viewing {displayedCount} of {totalCount} moments
                </p>
              </div>
            )}

            {!hasMore && displayedCount > IMAGES_PER_PAGE && (
              <div className="flex flex-col items-center mt-16">
                <div className="text-center">
                  <p className="text-lg text-muted-foreground mb-2">You&apos;re viewing all {totalCount} moments</p>
                  <p className="text-sm text-muted-foreground/70">Thank you for exploring Singura Homesteads</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-12 md:py-16 bg-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <TextGradient className="text-sm font-semibold tracking-wider uppercase mb-2">Premium Experience</TextGradient>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  What&apos;s Included
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
              <ScrollReveal>
                <div className="bg-card rounded-xl shadow-lg border border-border h-full flex flex-col">
                  <div className="px-8 pt-8 pb-4 border-b border-border text-center">
                    <h3 className="text-2xl font-bold text-primary">Included Amenities</h3>
                  </div>
                  <ul className="px-8 py-6 space-y-3 flex-1">
                    {[
                      'Comfortable cottage accommodation',
                      'All meals (breakfast, lunch, dinner)',
                      'Guided farm tours',
                      'Art & craft workshops',
                      'Community activities',
                      'WiFi & electricity',
                      'Hot shower facilities',
                      'Natural garden access',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-primary-foreground">&#10003;</span>
                        </span>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-card rounded-xl shadow-lg border border-border h-full flex flex-col">
                  <div className="px-8 pt-8 pb-4 border-b border-border text-center">
                    <h3 className="text-2xl font-bold text-primary">Optional Add-ons</h3>
                  </div>
                  <ul className="px-8 py-6 space-y-3 flex-1">
                    {[
                      'Photography workshops',
                      'Extended farm programs',
                      'Cooking classes',
                      'Transportation services',
                      'Wellness sessions',
                      'Team building events',
                      'Educational tours',
                      'Group accommodations',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs text-accent font-bold">+</span>
                        </span>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ready for an Authentic Experience?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Book your stay at Singura Homesteads and discover the beauty of rural Uganda combined with modern comfort
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/447884181149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Book Your Stay
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in-up"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-card rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                  quality={90}
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 bg-card border-t border-border">
                <h3 className="text-2xl font-bold text-primary mb-2">{selectedImage.title}</h3>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
