'use client'

import Image from 'next/image'
import { useState } from 'react'
import ScrollReveal from '@/components/scroll-reveal'

interface GalleryImage {
  src: string
  alt: string
  activity: string
  description?: string
}

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
]

export default function ImpactGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
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
                />

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
