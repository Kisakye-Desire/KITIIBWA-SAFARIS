'use client'

import Image from 'next/image'
import { useState } from 'react'
import ScrollReveal from '@/components/scroll-reveal'

interface GalleryImage {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM%20%285%29-BAIwpxuR2yaXUyWK21gq8AejquKAzp.jpeg',
    alt: 'Community Gift Distribution',
    title: 'Community Gift Distribution',
    description: 'Distributing essential supplies and gifts to families in local villages'
  },
  {
    id: 2,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM%20%284%29-3PLuPB6xGWYlGYb6NXHTKKQn3Lze7O.jpeg',
    alt: 'Clothing Assistance Programme',
    title: 'Clothing Assistance Programme',
    description: 'Providing new clothing and essential items to community members'
  },
  {
    id: 3,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM%20%288%29-vGGinqaURUYPNEJqJsbCfCNpoZF6Xv.jpeg',
    alt: 'Youth Footwear Initiative',
    title: 'Youth Footwear Initiative',
    description: 'Empowering young people through footwear and new opportunities'
  },
  {
    id: 4,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM%20%283%29-Ad7G1wEJj17MPHp9FitOMxmZtPOGmo.jpeg',
    alt: 'Educational Outreach Activities',
    title: 'Educational Outreach Activities',
    description: 'Supporting children\'s learning and development in village communities'
  },
  {
    id: 5,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM%20%286%29-UkVuwzu81LfB0GJXdXnOsb9thBHhcq.jpeg',
    alt: 'Community Direct Assistance',
    title: 'Community Direct Assistance',
    description: 'Delivering vital support and resources directly to families in need'
  },
  {
    id: 6,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM%20%282%29-FSMMcq5RZNIiOQo21DU27J0U4MEfKl.jpeg',
    alt: 'Volunteer Team Connection',
    title: 'Volunteer Team Connection',
    description: 'Building relationships and trust with community members through direct engagement'
  },
  {
    id: 7,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM%20%281%29-boaI4SZPL5Bb8S2bDjjiNrmpdZNrBZ.jpeg',
    alt: 'Community Health Outreach',
    title: 'Community Health Outreach',
    description: 'Providing essential health support and care to village residents'
  },
  {
    id: 8,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.07%20PM-tFxQ6fE76qpU6pYa7w1KqZo4fKhXlv.jpeg',
    alt: 'Children\'s Joy & Celebration',
    title: 'Children\'s Joy & Celebration',
    description: 'Creating memorable moments of happiness and hope for children in our communities'
  },
  {
    id: 9,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.09%20PM%20%281%29-mRLS4jZy7SaozbWqYICoUOz1zYGcSP.jpeg',
    alt: 'Family Support Programme',
    title: 'Family Support Programme',
    description: 'Comprehensive assistance supporting entire families towards sustainable living'
  },
  {
    id: 10,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.09%20PM%20%282%29-pZUuldEgdo7HQpICGieMnYq61MiBGx.jpeg',
    alt: 'Community Engagement Event',
    title: 'Community Engagement Event',
    description: 'Bringing communities together for shared growth and development initiatives'
  },
  {
    id: 11,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.09%20PM-snhQ6GzTJTbrZDRrWqI9b3T2FyGnuj.jpeg',
    alt: 'Youth Mentorship Programme',
    title: 'Youth Mentorship Programme',
    description: 'Guiding and empowering young people to reach their full potential'
  },
  {
    id: 12,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-09%20at%2012.48.08%20PM-PaG3s6RmDzEUc003m96D08BfC6vgtd.jpeg',
    alt: 'Smiles of Hope',
    title: 'Smiles of Hope',
    description: 'Capturing the transformative power of compassion and community support'
  }
]

export default function ImpactGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <>
      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #D4A574 0%, transparent 70%)',
        }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Gallery Header */}
          <ScrollReveal className="mb-4">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent">Visual Impact</p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Moments of Impact</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-12">
              Every smile tells a story. Explore highlights from our community outreach programmes, children's activities, humanitarian support, volunteer initiatives, and life-changing moments that reflect the heart of KITIIBWA Initiatives.
            </p>
          </ScrollReveal>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, idx) => (
              <ScrollReveal
                key={image.id}
                delay={idx * 0.08}
                direction={idx % 3 === 0 ? 'up' : idx % 3 === 1 ? 'left' : 'right'}
              >
                <button
                  onClick={() => setSelectedImage(image)}
                  className="group relative h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Accent Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300 text-balance">
                      {image.title}
                    </h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                      {image.description}
                    </p>
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-accent/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <span className="text-lg">+</span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in-up"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
            style={{ animation: 'scaleIn 0.5s ease-out forwards' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative w-full h-[70vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="bg-card p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {selectedImage.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
