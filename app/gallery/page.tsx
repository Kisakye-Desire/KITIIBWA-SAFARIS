'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Pagination from '@/components/pagination'
import Image from 'next/image'
import { TextGradient } from '@/components/ui/effects'

const ITEMS_PER_PAGE = 10

const galleryItems = [
  { id: 1, image: '/images/hero-safari.png', label: 'Mountain Gorilla', category: 'Primates' },
  { id: 2, image: '/images/gallery-2.png', label: 'Savanna Sunset', category: 'Landscapes' },
  { id: 3, image: '/images/gallery-3.png', label: 'Elephant Family', category: 'Mammals' },
  { id: 4, image: '/images/gallery-4.png', label: 'Zebra Herd', category: 'Mammals' },
  { id: 5, image: '/images/gallery-5.png', label: 'Mountain Views', category: 'Landscapes' },
  { id: 6, image: '/images/gallery-6.png', label: 'Giraffe Close-up', category: 'Mammals' },
  { id: 7, image: '/images/gallery-7.png', label: 'African Bird', category: 'Birds' },
  { id: 8, image: '/images/gallery-8.png', label: 'Safari Lodge', category: 'Accommodations' },
  { id: 9, image: '/images/gallery-9.png', label: 'Waterfall', category: 'Landscapes' },
  { id: 10, image: '/images/gallery-10.png', label: 'Leopard', category: 'Predators' },
  { id: 11, image: '/images/gallery-11.png', label: 'Hippopotamus', category: 'Mammals' },
  { id: 12, image: '/images/gallery-12.png', label: 'Rhinoceros', category: 'Mammals' },
  { id: 13, image: '/images/gallery-13.png', label: 'Cheetah Running', category: 'Predators' },
  { id: 14, image: '/images/gallery-14.png', label: 'Buffalo Herd', category: 'Mammals' },
  { id: 15, image: '/images/gallery-15.png', label: 'Antelope Herd', category: 'Mammals' },
  { id: 16, image: '/images/gallery-16.png', label: 'Sunset Scene', category: 'Landscapes' },
  { id: 17, image: '/images/gallery-17.png', label: 'Safari Cottage', category: 'Accommodations' },
  { id: 18, image: '/images/gallery-18.png', label: 'Community Outreach', category: 'Conservation' },
  { id: 19, image: '/images/gallery-19.png', label: 'Wildlife Conservation', category: 'Conservation' },
  { id: 20, image: '/images/gallery-20.png', label: 'Game Drive', category: 'Experiences' },
  { id: 21, image: '/images/gallery-21.png', label: 'Wild Dog Pack', category: 'Predators' },
  { id: 22, image: '/images/gallery-22.png', label: 'Chimpanzee', category: 'Primates' },
  { id: 23, image: '/images/gallery-23.png', label: 'Fish Eagle', category: 'Birds' },
  { id: 24, image: '/images/gallery-24.png', label: 'Forest Canopy', category: 'Landscapes' },
  { id: 25, image: '/images/hero-safari.png', label: 'Gorilla Encounter', category: 'Primates' },
  { id: 26, image: '/images/gallery-2.png', label: 'Acacia Tree Sunset', category: 'Landscapes' },
  { id: 27, image: '/images/gallery-6.png', label: 'Giraffe Feeding', category: 'Mammals' },
  { id: 28, image: '/images/gallery-13.png', label: 'Cheetah Portrait', category: 'Predators' },
  { id: 29, image: '/images/gallery-16.png', label: 'Golden Hour Safari', category: 'Landscapes' },
  { id: 30, image: '/images/gallery-8.png', label: 'Luxury Lodge', category: 'Accommodations' },
]

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_PAGE)

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE
  const displayedItems = galleryItems.slice(startIdx, startIdx + ITEMS_PER_PAGE)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 80% 50%, #D4A574 0%, transparent 60%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="animate-fade-in-up mb-4">
              <TextGradient className="text-sm font-semibold tracking-wider uppercase">Visual Journey</TextGradient>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Safari Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Experience the raw beauty of African wildlife through our curated collection
            </p>
          </div>
        </section>

        {/* Gallery Intro */}
        <section className="py-12 md:py-16 bg-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Discover Uganda's Untamed Beauty</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Step into the heart of Africa through our extensive wildlife gallery. Every image tells a story of extraordinary encounters with some of the world&apos;s most magnificent creatures in their natural habitats. From the gentle giants of the savanna to elusive predators, from rare primates to exotic birds, our collection captures the essence of Uganda&apos;s incredible biodiversity.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                These moments, captured across Uganda's pristine national parks—from the mist-covered forests of Bwindi to the vast plains of Queen Elizabeth—represent the authentic experiences awaiting every adventurer. Each photograph is a testament to the rich wildlife that makes Uganda the &quot;Pearl of Africa.&quot;
              </p>
              <div className="grid sm:grid-cols-4 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-primary">Mammals</p>
                  <p className="text-2xl font-bold text-accent">12+</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-primary">Birds</p>
                  <p className="text-2xl font-bold text-accent">8+</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-primary">Predators</p>
                  <p className="text-2xl font-bold text-accent">5+</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-primary">Landscapes</p>
                  <p className="text-2xl font-bold text-accent">7+</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {displayedItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="gallery-item relative h-32 md:h-40 overflow-hidden rounded-lg shadow-lg group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="gallery-image object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Overlay with Label */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-90">
                      <span className="text-white font-semibold text-xs md:text-sm text-center px-2 block mb-1">
                        {item.label}
                      </span>
                      <span className="text-accent text-xs font-medium">{item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}

            {/* Image Count */}
            <div className="text-center mt-8 text-muted-foreground text-sm">
              <p>Showing {startIdx + 1}–{Math.min(startIdx + ITEMS_PER_PAGE, galleryItems.length)} of {galleryItems.length} images</p>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">Explore Uganda's Wildlife</h2>
              <p className="text-muted-foreground mb-8">
                Our gallery showcases the incredible diversity of Uganda's national parks. From majestic elephants to rare mountain gorillas, discover the moments that make African safaris truly unforgettable.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-accent mb-2">2,000+</h3>
                  <p className="text-muted-foreground text-sm">Wildlife Photos</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-accent mb-2">500+</h3>
                  <p className="text-muted-foreground text-sm">Species Documented</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-accent mb-2">5</h3>
                  <p className="text-muted-foreground text-sm">National Parks</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
