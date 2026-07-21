'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CAROUSEL_IMAGES = [
  { src: '/images/real-sunset.jpg', alt: 'African Savanna Sunset' },
  { src: '/images/real-elephant.jpg', alt: 'Elephant by the Nile' },
  { src: '/images/real-giraffe.jpg', alt: 'Giraffes in the Grassland' },
  { src: '/images/real-buffalo.jpg', alt: 'Buffalo Herd at Dawn' },
  { src: '/images/real-sunset-2.jpg', alt: 'Golden Hour Acacia Trees' },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoplay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1
    )
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  return (
    <section className="relative h-screen md:h-96 lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Image Container */}
      <div className="absolute inset-0 w-full h-full">
        {CAROUSEL_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance animate-in fade-in">
          Kitiibwa Safaris
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 animate-in fade-in">
          Experience the magic of Uganda&apos;s pristine wilderness with expert guides and luxury accommodations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in">
          <Link
            href="/packages"
            className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore Packages
          </Link>
          <Link
            href="/contact"
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/50"
          >
            Plan Your Trip
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-colors"
        aria-label="Next slide"
      >
        →
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 w-3 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
