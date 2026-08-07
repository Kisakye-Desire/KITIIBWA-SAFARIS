'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Image from 'next/image'
import { Calendar, MapPin, Users, Music, Zap, Award } from 'lucide-react'
import { TextGradient } from '@/components/ui/effects'
import ScrollReveal from '@/components/scroll-reveal'
import Link from 'next/link'

const IMAGES_PER_PAGE = 9

const galleryImages = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%285%29-D5WH9MCNOwIcjujHeNQrauKShrHI98.jpeg',
    alt: 'Community Workshop',
    title: 'Interactive Workshops',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%289%29-Gbl8pg03QAyqQndfjssEn4urcN87s5.jpeg',
    alt: 'Cottage Pathways',
    title: 'Beautiful Venues',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%282%29-vvxbQJowWUl2rGfqbmINXT2SYUt2e7.jpeg',
    alt: 'Art Activities',
    title: 'Creative Sessions',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%2813%29-IJzr28kitGgIarvd1LQAm7pdOA4Lh2.jpeg',
    alt: 'Scenic Views',
    title: 'Mountain Vistas',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%288%29-v6DiXecida7I0GWUNiRmXPnJ75wscm.jpeg',
    alt: 'Cottage Exterior',
    title: 'Luxury Cottages',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%2812%29-HsQ4KXikwa6dGf73188lUDdDgliwOW.jpeg',
    alt: 'Garden Entrance',
    title: 'Nature Paths',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.21%20PM%20%281%29-6m5AFUbVoVenn51SGNWOafKcs6beZz.jpeg',
    alt: 'Aerial View',
    title: 'Property Overview',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%286%29-1dvMdx0A6YHJTzdes7yfzLKG09V2gZ.jpeg',
    alt: 'Group Activities',
    title: 'Community Gathering',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%2814%29-8qybKY11S3au0YvkTpHt6vxfzHazUG.jpeg',
    alt: 'Market Area',
    title: 'Local Market',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%281%29-Fc1fNmWE4G92WpGuOIOF9As4LgDwR3.jpeg',
    alt: 'Evening Session',
    title: 'Sunset Moments',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.21%20PM-WOLBzmtILQNWxiqQW5cEIJKSnO7piC.jpeg',
    alt: 'Farm Pathway',
    title: 'Agricultural Tours',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%2811%29-Aq19L3QX2JtV60Jterb0vETEgn16NJ.jpeg',
    alt: 'Garden Trellis',
    title: 'Organic Gardens',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%283%29-cTAivFwCT4Ns1zCzu9zk58MfiLq1BP.jpeg',
    alt: 'Creative Moment',
    title: 'Artistic Experiences',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM-C1TGz5zIZ8V6J8YJu171a4OmYsMJgE.jpeg',
    alt: 'Music Performance',
    title: 'Entertainment',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%287%29-jkNkt5tYpbdIVJOkHURms9OicxhOSi.jpeg',
    alt: 'Artist Demo',
    title: 'Artisan Crafts',
  },
]

const eventHighlights = [
  { icon: '🚶', title: 'Nature Walks', description: 'Guided explorations through pristine landscapes' },
  { icon: '🦁', title: 'Wildlife Encounters', description: 'Observe Uganda\'s incredible fauna up close' },
  { icon: '🔥', title: 'Campfire Evenings', description: 'Stories under the stars with fellow guests' },
  { icon: '🎵', title: 'Live Entertainment', description: 'Music and cultural performances nightly' },
  { icon: '🎮', title: 'Outdoor Games', description: 'Team activities and friendly competitions' },
  { icon: '🤝', title: 'Networking', description: 'Connect with adventurers and nature lovers' },
  { icon: '📸', title: 'Photography Moments', description: 'Capture memories in stunning locations' },
  { icon: '🍽️', title: 'Gourmet Food', description: 'Farm-to-table culinary delights' },
  { icon: '🧘', title: 'Relaxation Zones', description: 'Peaceful spaces to unwind and recharge' },
  { icon: '🌍', title: 'Cultural Experiences', description: 'Meet local communities and learn traditions' },
]

const schedule = [
  { time: 'Day 1 - Morning', activity: 'Arrival & Registration', description: 'Check-in at Singura Cottages with welcome refreshments' },
  { time: 'Day 1 - Afternoon', activity: 'Welcome Orientation', description: 'Site introduction and activity briefing' },
  { time: 'Day 1 - Evening', activity: 'Opening Ceremony', description: 'Kickoff dinner with entertainment' },
  { time: 'Day 2 - Morning', activity: 'Guided Nature Walk', description: 'Led by expert naturalists through local trails' },
  { time: 'Day 2 - Afternoon', activity: 'Workshop Sessions', description: 'Photography, art, or wildlife workshops (choose your path)' },
  { time: 'Day 2 - Evening', activity: 'Campfire Night', description: 'Stories, music, and s\'mores under the stars' },
  { time: 'Day 3 - Morning', activity: 'Farm & Garden Tour', description: 'Learn sustainable agriculture practices' },
  { time: 'Day 3 - Afternoon', activity: 'Leisure & Recreation', description: 'Swimming, lawn games, or rest' },
  { time: 'Day 3 - Evening', activity: 'Gala Dinner & Entertainment', description: 'Premium feast with live performance' },
  { time: 'Day 4 - Morning', activity: 'Optional Adventure', description: 'Sunrise hike or additional activities' },
  { time: 'Day 4 - Afternoon', activity: 'Closing Ceremony', description: 'Awards and memories sharing' },
  { time: 'Day 4 - Late Afternoon', activity: 'Departure', description: 'Safe travels with lasting memories' },
]

export default function SafariChillExperience() {
  const [displayedCount, setDisplayedCount] = useState(IMAGES_PER_PAGE)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    alt: string
    title: string
    description?: string
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
        <section className="relative h-screen min-h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/safari-chill-poster.jpg"
              alt="Safari & Chill Experience 2027"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10 text-center text-white px-4">
            <ScrollReveal>
              <div className="inline-block mb-6 px-4 py-2 bg-accent/80 backdrop-blur-sm rounded-full">
                <span className="text-sm font-bold">2027 Edition Coming Soon</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
                Safari & Chill Experience 2027
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100">
                KITIIBWA SAFARIS&apos; Annual Signature Event at Singura Cottages
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link href="#about-event" className="inline-block px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                Learn More
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* About Event Section */}
        <section id="about-event" className="py-16 md:py-24 bg-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <TextGradient className="text-sm font-semibold tracking-wider uppercase mb-2">The Experience</TextGradient>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  About Safari & Chill
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Safari & Chill Experience is KITIIBWA SAFARIS&apos; annual lifestyle and adventure event held at Singura Cottages. It brings together nature lovers, travelers, families, and friends for a unique combination of wildlife, relaxation, entertainment, great food, music, outdoor activities, and unforgettable memories in Uganda&apos;s beautiful natural surroundings.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: '📍', label: 'Venue', value: 'Singura Cottages, Uganda' },
                { icon: '📅', label: 'Frequency', value: 'Annual Event' },
                { icon: '👥', label: 'For Everyone', value: 'Families, Singles & Groups' },
              ].map((item, idx) => (
                <ScrollReveal key={idx}>
                  <div className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <p className="text-muted-foreground mb-2">{item.label}</p>
                    <p className="text-xl font-bold text-primary">{item.value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Event Highlights */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <TextGradient className="text-sm font-semibold tracking-wider uppercase mb-2">What to Expect</TextGradient>
                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                  Event Highlights
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {eventHighlights.map((highlight, idx) => (
                <ScrollReveal key={idx}>
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{highlight.icon}</div>
                    <h3 className="text-lg font-bold text-primary mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground flex-1">{highlight.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 md:py-24 bg-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <TextGradient className="text-sm font-semibold tracking-wider uppercase mb-2">Visual Journey</TextGradient>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  Experience in Pictures
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Glimpse the beauty, activities, and vibrant moments from Singura Cottages
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  className="px-8 py-3 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50"
                >
                  {isLoading ? 'Loading...' : `View More (${displayedCount}/${totalCount})`}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Event Schedule */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <TextGradient className="text-sm font-semibold tracking-wider uppercase mb-2">Timeline</TextGradient>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  Event Schedule
                </h2>
                <p className="text-muted-foreground">Tentative schedule - Details to be confirmed closer to event date</p>
              </div>
            </ScrollReveal>

            <div className="space-y-4 max-w-4xl mx-auto">
              {schedule.map((item, idx) => (
                <ScrollReveal key={idx}>
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-primary">{item.activity}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.time}</p>
                        <p className="text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Venue Section */}
        <section className="py-16 md:py-24 bg-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div>
                  <TextGradient className="text-sm font-semibold tracking-wider uppercase mb-4">Your Home Away from Home</TextGradient>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                    Singura Cottages
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Nestled in Uganda&apos;s lush countryside, Singura Cottages provides the perfect setting for Safari & Chill Experience. This premium agro-tourism destination combines luxury accommodation with authentic natural living.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Stay in comfortable cottages surrounded by thriving organic farms, banana plantations, and natural gardens. Every corner is designed for comfort and relaxation.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: '🏡', label: 'Comfortable Cottages' },
                      { icon: '🍽️', label: 'Farm-Fresh Meals' },
                      { icon: '🌿', label: 'Natural Surroundings' },
                      { icon: '🌟', label: 'Premium Amenities' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-sm font-semibold text-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/cottages" className="inline-block px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                    Explore Singura
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%208.48.20%20PM%20%288%29-v6DiXecida7I0GWUNiRmXPnJ75wscm.jpeg"
                    alt="Singura Cottages"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Why Attend */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <TextGradient className="text-sm font-semibold tracking-wider uppercase mb-2">Compelling Reasons</TextGradient>
                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                  Why Attend Safari & Chill?
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🌍',
                  title: 'Connect with Nature',
                  description: 'Experience the raw beauty of Uganda\'s pristine landscapes and diverse wildlife in an intimate setting.',
                },
                {
                  icon: '👥',
                  title: 'Meet New People',
                  description: 'Network with adventurous souls, nature enthusiasts, and travelers from around the world with shared passions.',
                },
                {
                  icon: '😌',
                  title: 'Relax Away from City',
                  description: 'Escape the hustle and bustle for peaceful days and rejuvenating experiences surrounded by nature.',
                },
                {
                  icon: '⭐',
                  title: 'Premium Hospitality',
                  description: 'Enjoy world-class service, delicious farm-to-table cuisine, and comfortable luxury accommodations.',
                },
                {
                  icon: '📸',
                  title: 'Unforgettable Memories',
                  description: 'Create lasting moments with activities, entertainment, and breathtaking natural backdrops.',
                },
                {
                  icon: '🦁',
                  title: 'Unique Uganda Experience',
                  description: 'Discover Uganda like never before through authentic wildlife encounters and cultural interactions.',
                },
              ].map((item, idx) => (
                <ScrollReveal key={idx}>
                  <div className="bg-gradient-to-br from-card to-secondary/20 p-8 rounded-lg border border-border hover:border-primary hover:shadow-xl transition-all duration-300">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon / Countdown */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                The 2027 Edition is Coming Soon
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Official dates and early-bird registrations will be announced soon. Stay tuned for one of Uganda&apos;s most anticipated annual events.
              </p>
              <p className="text-muted-foreground mb-8">
                Mark your calendars and get ready for an unforgettable experience at Safari & Chill 2027!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-block px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                  Get Interested
                </Link>
                <a
                  href="https://wa.me/447884181149?text=Hello%20KITIIBWA%20SAFARIS%2C%20I%20am%20interested%20in%20the%20Safari%20%26%20Chill%20Experience%202027.%20Please%20share%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 border-2 border-primary hover:border-accent text-primary hover:text-accent font-semibold rounded-lg transition-all duration-300 text-center"
                >
                  Contact Us
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
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
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors text-xl font-bold"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary">{selectedImage.title}</h3>
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
