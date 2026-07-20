'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Image from 'next/image'
import { TextGradient } from '@/components/ui/effects'
import ScrollReveal from '@/components/scroll-reveal'

const IMAGES_PER_PAGE = 9

const galleryImages = [
  { src: '/images/safari/vehicle-sunset.jpg', alt: 'Safari Vehicle Adventure', title: 'Safari Vehicle Adventure' },
  { src: '/images/safari/sunset-acacia.jpg', alt: 'Sunset Over Acacia Trees', title: 'Acacia Sunset' },
  { src: '/images/safari/wildlife-encounter.jpg', alt: 'Wildlife Encounter', title: 'Wildlife Encounter' },
  { src: '/images/experiences/wildlife-photography.jpg', alt: 'Wildlife Photography', title: 'Wildlife Photography' },
  { src: '/images/experiences/golden-hour-safari.jpg', alt: 'Golden Hour Safari', title: 'Golden Hour' },
  { src: '/images/experiences/scenic-overlook.jpg', alt: 'Scenic Overlook', title: 'Scenic Overlook' },
  { src: '/images/nature/crater-lake-view.jpg', alt: 'Crater Lake View', title: 'Crater Lake' },
  { src: '/images/nature/twin-crater-lakes.jpg', alt: 'Twin Crater Lakes', title: 'Twin Lakes' },
  { src: '/images/nature/forest-landscape.jpg', alt: 'Forest Landscape', title: 'Forest Landscape' },
  { src: '/images/experiences/guide-elephant.jpg', alt: 'Guide with Elephant', title: 'Elephant Encounter' },
  { src: '/images/community/farming-trail.jpg', alt: 'Farming Trail', title: 'Farming Trail' },
  { src: '/images/community/traditional-hut.jpg', alt: 'Traditional Hut', title: 'Traditional Architecture' },
  { src: '/images/safari/vehicle-sunset.jpg', alt: 'Safari at Sunset', title: 'Safari Sunset' },
  { src: '/images/experiences/scenic-overlook.jpg', alt: 'Valley Overlook', title: 'Valley View' },
  { src: '/images/nature/crater-lake-view.jpg', alt: 'Lake Panorama', title: 'Lake Panorama' },
  { src: '/images/safari/wildlife-encounter.jpg', alt: 'Wildlife Moment', title: 'Wildlife Moment' },
  { src: '/images/community/traditional-hut.jpg', alt: 'Cultural Heritage', title: 'Cultural Heritage' },
  { src: '/images/nature/twin-crater-lakes.jpg', alt: 'Volcanic Landscape', title: 'Volcanic Landscape' },
  { src: '/images/experiences/guide-elephant.jpg', alt: 'Conservation Work', title: 'Conservation' },
  { src: '/images/safari/sunset-acacia.jpg', alt: 'Sunset Safari', title: 'Sunset Safari' },
  { src: '/images/experiences/wildlife-photography.jpg', alt: 'Wildlife Monitoring', title: 'Monitoring' },
  { src: '/images/experiences/golden-hour-safari.jpg', alt: 'Expert Guides', title: 'Expert Guides' },
  { src: '/images/community/farming-trail.jpg', alt: 'Scenic Route', title: 'Scenic Route' },
  { src: '/images/nature/forest-landscape.jpg', alt: 'Mountain Vista', title: 'Mountain Vista' },
  { src: '/images/safari/vehicle-sunset.jpg', alt: 'Forest Panorama', title: 'Forest Panorama' },
  { src: '/images/experiences/scenic-overlook.jpg', alt: 'Valley Explorer', title: 'Valley Explorer' },
]

export default function Gallery() {
  const [displayedCount, setDisplayedCount] = useState(IMAGES_PER_PAGE)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

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
        {/* Photo Gallery */}
        <section className="py-16 md:py-24 bg-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <TextGradient className="text-sm font-semibold tracking-wider uppercase mb-2">Visual Journey</TextGradient>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  KITIIBWA SAFARIS Gallery
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Experience the raw beauty of African wildlife and authentic safari adventures through our curated collection of 26 stunning photographs
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
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
