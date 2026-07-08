'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Pagination from '@/components/pagination'
import Image from 'next/image'

const ITEMS_PER_PAGE = 10

const galleryItems = [
  { id: 1, image: '/images/real-elephant.jpg', label: 'African Elephant', category: 'Mammals' },
  { id: 2, image: '/images/real-giraffe.jpg', label: 'Giraffes', category: 'Mammals' },
  { id: 3, image: '/images/real-buffalo.jpg', label: 'Cape Buffalo', category: 'Mammals' },
  { id: 4, image: '/images/real-sunset.jpg', label: 'Savanna Sunset', category: 'Landscapes' },
  { id: 5, image: '/images/real-sunset-2.jpg', label: 'Acacia Trees', category: 'Landscapes' },
  { id: 6, image: '/images/bird-watching.png', label: 'African Birds', category: 'Birds' },
  { id: 7, image: '/images/safari-landscape.png', label: 'Wildlife Landscape', category: 'Landscapes' },
  { id: 8, image: '/images/safari-cottage.png', label: 'Safari Lodge', category: 'Accommodations' },
  { id: 9, image: '/images/hero-safari.png', label: 'Mountain Gorilla', category: 'Primates' },
  { id: 10, image: '/images/gallery-1.png', label: 'Elephant Herd', category: 'Mammals' },
  { id: 11, image: '/images/gallery-2.png', label: 'Serval Cat', category: 'Predators' },
  { id: 12, image: '/images/gallery-3.png', label: 'Mountain Lake', category: 'Landscapes' },
  { id: 13, image: '/images/gallery-wildlife-1.png', label: 'Lion Pride', category: 'Predators' },
  { id: 14, image: '/images/gallery-wildlife-2.png', label: 'Zebra Herd', category: 'Mammals' },
  { id: 15, image: '/images/gallery-wildlife-3.png', label: 'Hippopotamus', category: 'Mammals' },
  { id: 16, image: '/images/gallery-wildlife-4.png', label: 'Leopard', category: 'Predators' },
  { id: 17, image: '/images/gallery-wildlife-5.png', label: 'Antelope Herd', category: 'Mammals' },
  { id: 18, image: '/images/gallery-wildlife-6.png', label: 'Chimpanzee', category: 'Primates' },
  { id: 19, image: '/images/gallery-wildlife-7.png', label: 'Baby Gorilla', category: 'Primates' },
  { id: 20, image: '/images/gallery-wildlife-8.png', label: 'Crowned Crane', category: 'Birds' },
  { id: 21, image: '/images/gallery-wildlife-9.png', label: 'Rhinoceros', category: 'Mammals' },
  { id: 22, image: '/images/gallery-wildlife-10.png', label: 'Hyena Pack', category: 'Predators' },
  { id: 23, image: '/images/gallery-landscape-1.png', label: 'Rwenzori Mountains', category: 'Landscapes' },
  { id: 24, image: '/images/gallery-landscape-2.png', label: 'Murchison Falls', category: 'Landscapes' },
  { id: 25, image: '/images/gallery-landscape-3.png', label: 'Bwindi Forest', category: 'Landscapes' },
  { id: 26, image: '/images/gallery-landscape-4.png', label: 'Queen Elizabeth Park', category: 'Landscapes' },
  { id: 27, image: '/images/gallery-landscape-5.png', label: 'Kazinga Channel', category: 'Landscapes' },
  { id: 28, image: '/images/real-giraffe.jpg', label: 'Giraffe Close-up', category: 'Mammals' },
  { id: 29, image: '/images/bird-watching.png', label: 'Exotic Birds', category: 'Birds' },
  { id: 30, image: '/images/safari-landscape.png', label: 'Golden Hour', category: 'Landscapes' },
  { id: 31, image: '/images/gallery-wildlife-1.png', label: 'Big Five', category: 'Mammals' },
  { id: 32, image: '/images/real-elephant.jpg', label: 'Elephant Family', category: 'Mammals' },
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
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Safari Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
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
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {displayedItems.map((item) => (
                <div
                  key={item.id}
                  className="gallery-item relative h-32 md:h-40 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="gallery-image object-cover"
                  />
                  {/* Overlay with Label */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-xs md:text-sm text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.label}
                    </span>
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
