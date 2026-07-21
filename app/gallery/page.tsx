'use client'

import { useState, useCallback } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Image from 'next/image'
import { TextGradient } from '@/components/ui/effects'
import ScrollReveal from '@/components/scroll-reveal'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Safari Vehicle Adventure', title: 'Safari Vehicle Adventure', category: 'Safari' },
  { src: '/images/gallery-2.jpg', alt: 'Lions on the Road', title: 'Lions on the Road', category: 'Wildlife' },
  { src: '/images/gallery-3.jpg', alt: 'Giraffes in Their Natural Habitat', title: 'Giraffes in Nature', category: 'Wildlife' },
  { src: '/images/gallery-4.jpg', alt: 'Chimpanzees in the Forest', title: 'Chimpanzees', category: 'Primates' },
  { src: '/images/gallery-5.jpg', alt: 'Sunset Over Murchison Falls', title: 'Murchison Falls Sunset', category: 'Landscape' },
  { src: '/images/gallery-6.jpg', alt: 'Gorilla Trekking Adventure', title: 'Gorilla Trekking', category: 'Primates' },
  { src: '/images/gallery-7.jpg', alt: 'Buffalo Herd at Sunrise', title: 'Buffalo Herd', category: 'Wildlife' },
  { src: '/images/gallery-8.jpg', alt: 'Elephant at the Waterside', title: 'Elephant Moment', category: 'Wildlife' },
  { src: '/images/gallery-9.jpg', alt: 'Safari & Chill Experience', title: 'Safari & Chill', category: 'Events' },
  { src: '/images/gallery-10.jpg', alt: 'Lion Pride in Tall Grass', title: 'Lion Pride', category: 'Wildlife' },
  { src: '/images/gallery-11.jpg', alt: 'Forest Trail with Guide', title: 'Forest Trail', category: 'Safari' },
  { src: '/images/gallery-12.jpg', alt: 'Community Outreach Program', title: 'Community Outreach', category: 'Community' },
  { src: '/images/gallery-13.jpg', alt: 'Chimpanzee Close Encounter', title: 'Chimp Encounter', category: 'Primates' },
  { src: '/images/gallery-14.jpg', alt: 'Acacia Trees at Golden Hour', title: 'Golden Hour', category: 'Landscape' },
  { src: '/images/gallery-15.jpg', alt: 'Forest Trek Through Banana Plantations', title: 'Banana Forest', category: 'Landscape' },
  { src: '/images/gallery-16.jpg', alt: 'Safari Vehicle on Field Game Drive', title: 'Game Drive', category: 'Safari' },
  { src: '/images/gallery-17.jpg', alt: 'Traditional Community Dwelling', title: 'Cultural Heritage', category: 'Community' },
  { src: '/images/gallery-18.jpg', alt: 'Crater Lakes Volcanic Landscape', title: 'Crater Lakes', category: 'Landscape' },
  { src: '/images/gallery-19.jpg', alt: 'Wildlife Conservation Documentation', title: 'Conservation Work', category: 'Community' },
  { src: '/images/gallery-20.jpg', alt: 'Safari Vehicle at Sunset Point', title: 'Sunset Point', category: 'Safari' },
  { src: '/images/gallery-21.jpg', alt: 'Wildlife Monitoring in the Field', title: 'Wildlife Monitoring', category: 'Safari' },
  { src: '/images/gallery-22.jpg', alt: 'Expert Wildlife Guide Documentation', title: 'Expert Guides', category: 'Safari' },
  { src: '/images/gallery-23.jpg', alt: 'Safari Vehicle on Scenic Route', title: 'Scenic Route', category: 'Safari' },
  { src: '/images/gallery-24.jpg', alt: 'Mountain Crater Lake View', title: 'Mountain Vista', category: 'Landscape' },
  { src: '/images/gallery-25.jpg', alt: 'Crater Lake with Forest Panorama', title: 'Forest Panorama', category: 'Landscape' },
  { src: '/images/gallery-26.jpg', alt: 'Safari Explorer at Valley Overlook', title: 'Valley Explorer', category: 'Safari' },
]

const CATEGORIES = ['All', 'Wildlife', 'Primates', 'Safari', 'Landscape', 'Community', 'Events']
const IMAGES_PER_PAGE = 12

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [displayedCount, setDisplayedCount] = useState(IMAGES_PER_PAGE)
  const [isLoading, setIsLoading] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const displayedImages = filteredImages.slice(0, displayedCount)
  const hasMore = displayedCount < filteredImages.length

  const handleLoadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setDisplayedCount(prev => Math.min(prev + IMAGES_PER_PAGE, filteredImages.length))
      setIsLoading(false)
    }, 300)
  }

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayedImages.length) % displayedImages.length)
    }
  }, [lightboxIndex, displayedImages.length])

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayedImages.length)
    }
  }, [lightboxIndex, displayedImages.length])

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, #D4A574 0%, transparent 50%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center">
                <TextGradient className="text-sm font-semibold tracking-wider uppercase mb-2">Visual Journey</TextGradient>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
                  KITIIBWA SAFARIS Gallery
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                  Experience the raw beauty of African wildlife and authentic safari adventures through our curated collection of {galleryImages.length} stunning photographs
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-background sticky top-0 z-30 border-b border-border/50 backdrop-blur-sm bg-background/95">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); setDisplayedCount(IMAGES_PER_PAGE) }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-card text-muted-foreground border border-border hover:border-accent/50 hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-16 bg-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {displayedImages.map((image, idx) => (
                <ScrollReveal key={`${image.src}-${idx}`}>
                  <div
                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-card aspect-square"
                    onClick={() => openLightbox(idx)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                      quality={75}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4">
                      <div className="flex justify-end">
                        <span className="px-2 py-1 bg-accent/90 text-accent-foreground text-xs font-semibold rounded-full">
                          {image.category}
                        </span>
                      </div>
                      <div className="flex items-end justify-between">
                        <h3 className="text-sm font-bold text-white">{image.title}</h3>
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <ZoomIn className="h-4 w-4 text-white" />
                        </div>
                      </div>
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
                  {isLoading ? 'Loading...' : `Load More Photos (${displayedCount}/${filteredImages.length})`}
                </button>
              </div>
            )}

            {!hasMore && displayedCount > IMAGES_PER_PAGE && (
              <p className="text-center text-muted-foreground mt-12 text-sm">
                Showing all {filteredImages.length} photos{selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-semibold bg-black/40 px-4 py-1.5 rounded-full">
            {lightboxIndex + 1} / {displayedImages.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full mx-16 max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[75vh]" style={{ aspectRatio: '16/10' }}>
              <Image
                src={displayedImages[lightboxIndex].src}
                alt={displayedImages[lightboxIndex].alt}
                fill
                className="object-contain"
                quality={90}
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white font-bold text-lg">{displayedImages[lightboxIndex].title}</h3>
              <span className="text-accent text-sm font-semibold">{displayedImages[lightboxIndex].category}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
