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
  { src: '/images/gallery-1.jpg', alt: 'Safari Vehicle Adventure', title: 'Safari Vehicle Adventure' },
  { src: '/images/gallery-2.jpg', alt: 'Lions on the Road', title: 'Lions on the Road' },
  { src: '/images/gallery-3.jpg', alt: 'Giraffes in Their Natural Habitat', title: 'Giraffes in Nature' },
  { src: '/images/gallery-4.jpg', alt: 'Chimpanzees in the Forest', title: 'Chimpanzees' },
  { src: '/images/gallery-5.jpg', alt: 'Sunset Over Murchison Falls', title: 'Murchison Falls Sunset' },
  { src: '/images/gallery-6.jpg', alt: 'Gorilla Trekking Adventure', title: 'Gorilla Trekking' },
  { src: '/images/gallery-7.jpg', alt: 'Buffalo Herd at Sunrise', title: 'Buffalo Herd' },
  { src: '/images/gallery-8.jpg', alt: 'Elephant at the Waterside', title: 'Elephant Moment' },
  { src: '/images/gallery-9.jpg', alt: 'Safari & Chill Experience', title: 'Safari & Chill' },
  { src: '/images/gallery-10.jpg', alt: 'Lion Pride in Tall Grass', title: 'Lion Pride' },
  { src: '/images/gallery-11.jpg', alt: 'Forest Trail with Guide', title: 'Forest Trail' },
  { src: '/images/gallery-12.jpg', alt: 'Community Outreach Program', title: 'Community Outreach' },
  { src: '/images/gallery-13.jpg', alt: 'Chimpanzee Close Encounter', title: 'Chimp Encounter' },
  { src: '/images/gallery-14.jpg', alt: 'Acacia Trees at Golden Hour', title: 'Golden Hour' },
  { src: '/images/gallery-15.jpg', alt: 'Forest Trek Through Banana Plantations', title: 'Banana Forest' },
  { src: '/images/gallery-16.jpg', alt: 'Safari Vehicle on Field Game Drive', title: 'Game Drive' },
  { src: '/images/gallery-17.jpg', alt: 'Traditional Community Dwelling', title: 'Cultural Heritage' },
  { src: '/images/gallery-18.jpg', alt: 'Crater Lakes Volcanic Landscape', title: 'Crater Lakes' },
  { src: '/images/gallery-19.jpg', alt: 'Wildlife Conservation Documentation', title: 'Conservation Work' },
  { src: '/images/gallery-20.jpg', alt: 'Safari Vehicle at Sunset Point', title: 'Sunset Point' },
  { src: '/images/gallery-21.jpg', alt: 'Wildlife Monitoring in the Field', title: 'Wildlife Monitoring' },
  { src: '/images/gallery-22.jpg', alt: 'Expert Wildlife Guide Documentation', title: 'Expert Guides' },
  { src: '/images/gallery-23.jpg', alt: 'Safari Vehicle on Scenic Route', title: 'Scenic Route' },
  { src: '/images/gallery-24.jpg', alt: 'Mountain Crater Lake View', title: 'Mountain Vista' },
  { src: '/images/gallery-25.jpg', alt: 'Crater Lake with Forest Panorama', title: 'Forest Panorama' },
  { src: '/images/gallery-26.jpg', alt: 'Safari Explorer at Valley Overlook', title: 'Valley Explorer' },
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
                  KITIIBWA SAFARIS GALLERY
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
