'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import ScrollReveal from '@/components/scroll-reveal'

interface GalleryImage {
  src: string
  alt: string
  activity: string
  description?: string
  isPlaceholder?: boolean
}

const IMAGES_PER_PAGE = 9
const galleryImages: GalleryImage[] = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM%20%285%29-BAIwpxuR2yaXUyWK21gq8AejquKAzp.jpeg',
    alt: 'Community Clothing Distribution',
    activity: 'Clothing Distribution Drive',
    description: 'Providing essential clothing to local families in rural communities'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM%20%287%29-E24v2jbTABOsC5DPEyHxNLtjmnC733.jpeg',
    alt: 'Supply Distribution',
    activity: 'Charity Supply Distribution',
    description: 'Team members delivering vital supplies to underserved communities'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM%20%281%29-boaI4SZPL5Bb8S2bDjjiNrmpdZNrBZ.jpeg',
    alt: 'Home Improvement Program',
    activity: 'Home Improvement Program',
    description: 'Restoring and renovating homes in partnership with local communities'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM%20%289%29-MALtPz668dAOnaJ1Hw2Z1BJuMzvZ3u.jpeg',
    alt: 'Footwear Distribution',
    activity: 'Footwear & Clothing Support',
    description: 'Providing shoes and clothing to children in need'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM%20%286%29-UkVuwzu81LfB0GJXdXnOsb9thBHhcq.jpeg',
    alt: 'Community Engagement',
    activity: 'Community Engagement Program',
    description: 'Direct interaction and mentorship with local children and families'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.09%20PM%20%281%29-mRLS4jZy7SaozbWqYICoUOz1zYGcSP.jpeg',
    alt: 'Community Photo',
    activity: 'Community Visit',
    description: 'Group gathering with families and community members'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM%20-PaG3s6RmDzEUc003m96D08BfC6vgtd.jpeg',
    alt: 'Children Smiling',
    activity: 'Children Happiness & Bonding',
    description: 'Joyful moments with children from local communities'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM%20%282%29-FSMMcq5RZNIiOQo21DU27J0U4MEfKl.jpeg',
    alt: 'Team Member with Children',
    activity: 'Youth Mentorship Program',
    description: 'Building relationships and mentoring young minds'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM%20%283%29-Ad7G1wEJj17MPHp9FitOMxmZtPOGmo.jpeg',
    alt: 'School Supplies Distribution',
    activity: 'School Supplies & Support',
    description: 'Distributing educational materials and resources to schools'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.09%20PM-snhQ6GzTJTbrZDRrWqI9b3T2FyGnuj.jpeg',
    alt: 'School Children',
    activity: 'Educational Initiative',
    description: 'Supporting children in their educational journey'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.07%20PM-tFxQ6fE76qpU6pYa7w1KqZo4fKhXlv.jpeg',
    alt: 'Community Children',
    activity: 'Community Children Program',
    description: 'Celebrating and supporting local children'
  },
  // Placeholder images for future content (12-51)
  ...Array.from({ length: 40 }, (_, idx) => ({
    src: `https://images.unsplash.com/photo-${1590080876402 + idx}?w=800&h=600&fit=crop&crop=faces&q=80`,
    alt: `Community Activity ${idx + 12}`,
    activity: `Community Initiative ${idx + 12}`,
    description: `Upcoming community outreach activity - Image ${idx + 12}`,
    isPlaceholder: true
  }))
]

export default function ImpactGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [displayedCount, setDisplayedCount] = useState(IMAGES_PER_PAGE)
  const [isLoading, setIsLoading] = useState(false)

  const displayedImages = galleryImages.slice(0, displayedCount)
  const hasMore = displayedCount < galleryImages.length
  const totalCount = galleryImages.length

  const handleLoadMore = () => {
    setIsLoading(true)
    // Simulate loading delay for better UX
    setTimeout(() => {
      setDisplayedCount(prev => Math.min(prev + IMAGES_PER_PAGE, totalCount))
      setIsLoading(false)
    }, 300)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #D4A574 0%, transparent 70%)',
      }} />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Gallery Header */}
        <ScrollReveal className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">Moments of Impact</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12 leading-relaxed">
            Every smile tells a story. Explore highlights from our community outreach programmes, children's activities, environmental conservation projects, volunteer initiatives, educational support, and life-changing moments that reflect the heart of KITIIBWA Initiative.
          </p>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {displayedImages.map((image, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 0.08}
              direction={idx % 3 === 0 ? 'up' : idx % 3 === 1 ? 'left' : 'right'}
            >
              <div
                onClick={() => setSelectedImage(image)}
                className="group relative h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer card-hover border border-border hover:border-accent/50"
              >
                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  quality={75}
                />

                {/* Placeholder Badge */}
                {image.isPlaceholder && (
                  <div className="absolute top-4 left-4 z-10 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                    Coming Soon
                  </div>
                )}

                {/* Gradient Overlay - Dark on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">{image.activity}</h3>
                    {image.description && (
                      <p className="text-white/90 text-sm leading-relaxed">{image.description}</p>
                    )}
                  </div>
                </div>

                {/* Accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    Load More Moments
                    <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </>
                )}
              </span>
            </button>

            {/* Counter Text */}
            <p className="text-sm text-muted-foreground">
              Showing {displayedCount} of {totalCount} moments
            </p>
          </div>
        )}

        {/* All Loaded Message */}
        {!hasMore && displayedCount > IMAGES_PER_PAGE && (
          <div className="flex flex-col items-center mt-16">
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-2">You're viewing all {totalCount} moments</p>
              <p className="text-sm text-muted-foreground/70">More stories coming soon...</p>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
          style={{ animation: 'fadeInUp 0.3s ease-out' }}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/75 text-white rounded-full p-2 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full h-full object-contain"
            />

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
              <h3 className="text-white font-bold text-2xl mb-2">{selectedImage.activity}</h3>
              {selectedImage.description && (
                <p className="text-white/90 text-lg">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
