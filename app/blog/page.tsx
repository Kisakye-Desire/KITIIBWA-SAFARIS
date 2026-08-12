'use client'

import { Suspense } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Pagination from '@/components/pagination'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Calendar, User } from 'lucide-react'
import { TextGradient, AnimatedCard } from '@/components/ui/effects'

const ITEMS_PER_PAGE = 6

const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to Mountain Gorilla Trekking in Bwindi',
    excerpt:
      'Discover what to expect, how to prepare, and why gorilla trekking is a life-changing experience that will stay with you forever.',
    content:
      'Mountain gorilla trekking in Bwindi is more than just a wildlife activity—it\'s a spiritual journey into one of Earth\'s most pristine ecosystems. Learn everything you need to know to make the most of this unforgettable experience.',
    author: 'John Kisoro',
    date: '2024-01-15',
    image: '/images/chimp-1.jpg',
    slug: 'gorilla-trekking-guide',
  },
  {
    id: 2,
    title: 'Why Uganda is Africa\'s Most Underrated Safari Destination',
    excerpt:
      'Explore the reasons why Uganda deserves a spot on every adventurer\'s bucket list, from wildlife diversity to authentic experiences.',
    content:
      'While many think of Kenya or Tanzania for safari, Uganda offers something special—fewer tourists, more intimate wildlife encounters, and a true connection to African wilderness.',
    author: 'Dr. Sarah Kamwesiga',
    date: '2024-01-10',
    image: '/images/gallery-2.jpg',
    slug: 'uganda-safari-destination',
  },
  {
    id: 3,
    title: 'Bird Watching in Uganda: A Paradise for Ornithologists',
    excerpt:
      'With over 1,000 bird species, Uganda is a birder\'s dream. Learn about the best spots and seasons for bird watching.',
    content:
      'Uganda\'s diverse habitats—from forests to wetlands—make it home to an astounding variety of bird species. Whether you\'re a seasoned birder or a casual enthusiast, Uganda will captivate you.',
    author: 'Michael Okello',
    date: '2024-01-05',
    image: '/images/gallery-7.jpg',
    slug: 'bird-watching-uganda',
  },
  {
    id: 4,
    title: 'Conservation Efforts: How Tourism Protects Gorillas',
    excerpt:
      'Discover how responsible safari tourism directly funds gorilla conservation and community development in Bwindi.',
    content:
      'Every gorilla trek contributes directly to conservation. Learn how KITIIBWA and other responsible operators work to protect these magnificent creatures for future generations.',
    author: 'Grace Namutebi',
    date: '2023-12-28',
    image: '/images/gallery-8.jpg',
    slug: 'conservation-tourism',
  },
  {
    id: 5,
    title: '7 Tips for Amazing Wildlife Photography on Safari',
    excerpt:
      'Professional tips to help you capture stunning wildlife photos that will make your safari memories unforgettable.',
    content:
      'From camera settings to composition techniques, learn how to photograph wildlife like a pro. Our expert guides can help position you for the best shots.',
    author: 'John Kisoro',
    date: '2023-12-20',
    image: '/images/gallery-9.jpg',
    slug: 'wildlife-photography-tips',
  },
  {
    id: 6,
    title: 'The Biodiversity of Queen Elizabeth National Park',
    excerpt:
      'Explore the remarkable ecosystem of Uganda\'s most visited national park and its diverse wildlife populations.',
    content:
      'Queen Elizabeth National Park is a biodiversity hotspot featuring everything from tree-climbing lions to hippo-filled channels. Discover what makes this park so special.',
    author: 'Dr. Sarah Kamwesiga',
    date: '2023-12-12',
    image: '/images/gallery-10.jpg',
    slug: 'queen-elizabeth-biodiversity',
  },
  {
    id: 7,
    title: 'Chimpanzee Trekking in Kibale Forest: What to Expect',
    excerpt:
      'Everything you need to know about tracking chimpanzees in Uganda\'s ancient rainforest and why it\'s an essential safari experience.',
    content:
      'Watching wild chimpanzees in their natural habitat is an extraordinary experience. Learn about these intelligent primates and how to maximize your encounter.',
    author: 'Michael Okello',
    date: '2023-12-05',
    image: '/images/chimp-3.jpg',
    slug: 'chimp-trekking-kibale',
  },
]

function BlogContent() {
  const searchParams = useSearchParams()
  const page = parseInt(searchParams.get('page') || '1')
  const pageIndex = page - 1
  const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE)

  const startIdx = pageIndex * ITEMS_PER_PAGE
  const endIdx = startIdx + ITEMS_PER_PAGE
  const paginatedPosts = blogPosts.slice(startIdx, endIdx)

  const validPage = page >= 1 && page <= totalPages
  if (!validPage) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-lg text-muted-foreground">Page not found</p>
        </div>
        <Footer />
        <WhatsAppButton />
      </>
    )
  }

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
              <TextGradient className="text-sm font-semibold tracking-wider uppercase">Stories & Insights</TextGradient>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>KITIIBWA Safari Blog</h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Insights, tips, and stories from Africa&apos;s premier safari destination
            </p>
          </div>
        </section>

        {/* Blog Intro */}
        <section className="py-12 md:py-16 bg-secondary/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Discover African Safari Knowledge</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                From expert guides sharing wildlife insights to conservation stories, our blog offers practical tips, fascinating discoveries, and inspiration for your next African adventure.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {paginatedPosts.map((post, idx) => (
                <article key={post.id} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="relative h-48 md:h-auto md:col-span-1 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 md:col-span-2 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-primary mb-3 hover:text-accent transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 pt-4 border-t border-border text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <a href={`/blog/${post.slug}`} className="text-primary font-semibold hover:text-accent transition-colors ml-auto">
                          Read More →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {totalPages > 1 && <Pagination currentPage={page} totalPages={totalPages} baseUrl="/blog" />}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default function Blog() {
  return (
    <Suspense
      fallback={
        <>
          <Header />
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-lg text-muted-foreground">Loading...</p>
          </div>
          <Footer />
        </>
      }
    >
      <BlogContent />
    </Suspense>
  )
}
