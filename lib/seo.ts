import { Metadata } from 'next'

export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'article.news' | 'article.blog'
  author?: string
  publishedDate?: string
  modifiedDate?: string
  canonicalUrl?: string
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://kitiibwasafaris.com'
const siteName = 'KITIIBWA SAFARIS'
const siteDescription = 'Premium Uganda safari adventures focused on conservation, wildlife viewing, and community engagement'

// Default OG image
const defaultOGImage = `${baseUrl}/images/og-default.jpg`

// Page metadata definitions
export const pageMetadata: Record<string, SEOMetadata> = {
  home: {
    title: 'KITIIBWA SAFARIS - Premium Uganda Safari Adventures & Conservation',
    description: 'Experience authentic safari adventures in Uganda. Gorilla trekking, wildlife viewing, and community engagement. Expert-guided tours with conservation focus.',
    keywords: [
      'Uganda safari',
      'gorilla trekking',
      'wildlife tours',
      'Bwindi National Park',
      'Queen Elizabeth National Park',
      'conservation tourism',
      'African safari',
    ],
    image: `${baseUrl}/images/og-home.jpg`,
    url: baseUrl,
    type: 'website',
  },
  about: {
    title: 'About KITIIBWA SAFARIS | Conservation-Focused Tourism',
    description: 'Learn about KITIIBWA SAFARIS mission to combine authentic safari experiences with conservation and community development in Uganda.',
    keywords: [
      'about KITIIBWA',
      'conservation tourism',
      'community development',
      'Uganda safari company',
      'wildlife protection',
    ],
    image: `${baseUrl}/images/og-about.jpg`,
    url: `${baseUrl}/about`,
  },
  packages: {
    title: 'Safari Packages | KITIIBWA SAFARIS',
    description: 'Explore our carefully designed safari packages from budget explorer to luxury escapes. All inclusive guided tours with expert naturalists.',
    keywords: [
      'safari packages',
      'Uganda tours',
      'gorilla trekking packages',
      'wildlife safari',
      'custom itineraries',
    ],
    image: `${baseUrl}/images/og-packages.jpg`,
    url: `${baseUrl}/packages`,
  },
  cottages: {
    title: 'Safari Cottages | KITIIBWA SAFARIS Singura Cottages',
    description: 'Luxury safari cottages in Uganda with world-class amenities. Premium accommodations near Queen Elizabeth National Park.',
    keywords: [
      'safari cottages',
      'Uganda lodges',
      'luxury accommodation',
      'Singura Cottages',
      'safari resort',
    ],
    image: `${baseUrl}/images/og-cottages.jpg`,
    url: `${baseUrl}/cottages`,
  },
  donations: {
    title: 'Donate to KITIIBWA | Support Conservation & Community',
    description: 'Support wildlife conservation, community development, and sustainable tourism in Uganda. 100% of donations go to programs.',
    keywords: [
      'donate Uganda',
      'conservation donations',
      'wildlife protection',
      'community development fund',
      'nonprofit donations',
    ],
    image: `${baseUrl}/images/og-donations.jpg`,
    url: `${baseUrl}/donations`,
  },
  contact: {
    title: 'Contact KITIIBWA SAFARIS | Get in Touch',
    description: 'Contact KITIIBWA SAFARIS for safari inquiries, bookings, or partnerships. We respond within 24 hours.',
    keywords: ['contact', 'safari booking', 'inquiries', 'Uganda tourism'],
    image: `${baseUrl}/images/og-contact.jpg`,
    url: `${baseUrl}/contact`,
  },
  blog: {
    title: 'KITIIBWA Blog | Safari Stories & Conservation News',
    description: 'Read about wildlife, conservation, travel tips, and stories from Uganda safaris. Expert guides share their experiences.',
    keywords: [
      'safari blog',
      'wildlife stories',
      'conservation news',
      'travel tips Uganda',
      'gorilla facts',
    ],
    image: `${baseUrl}/images/og-blog.jpg`,
    url: `${baseUrl}/blog`,
  },
  safariChill: {
    title: 'Safari & Chill Experience 2026 | KITIIBWA SAFARIS',
    description: 'Join us for the premiere Safari & Chill Experience in 2026. Immersive wildlife encounters, relaxation, entertainment, and networking in Uganda.',
    keywords: [
      'Safari & Chill 2026',
      'Uganda event',
      'safari experience',
      'wildlife immersion',
      'event Uganda',
    ],
    image: `${baseUrl}/images/og-safari-chill.jpg`,
    url: `${baseUrl}/safari-chill-experience`,
    type: 'event',
  },
}

/**
 * Generate Next.js Metadata object from SEO metadata
 */
export function generateMetadata(seo: SEOMetadata): Metadata {
  const url = seo.url || baseUrl
  const image = seo.image || defaultOGImage

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: seo.author ? [{ name: seo.author }] : undefined,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: url,
      siteName: siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      type: (seo.type as any) || 'website',
      locale: 'en_US',
      alternateLocale: ['en_GB'],
      publishedTime: seo.publishedDate,
      modifiedTime: seo.modifiedDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [image],
      creator: '@kitiibwasafaris',
    },
    alternates: {
      canonical: seo.canonicalUrl || url,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    metadataBase: new URL(baseUrl),
  }
}

/**
 * Generate structured data (Schema.org JSON-LD) for SEO
 */
export function generateStructuredData(type: string, data: any) {
  const baseStructure = {
    '@context': 'https://schema.org',
  }

  switch (type) {
    case 'organization':
      return {
        ...baseStructure,
        '@type': 'Organization',
        name: siteName,
        url: baseUrl,
        logo: `${baseUrl}/images/logo.png`,
        description: siteDescription,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          telephone: '+256 708898424',
          email: 'dynamicyoo@gmail.com',
        },
        sameAs: [
          'https://facebook.com/kitiibwasafaris',
          'https://instagram.com/kitiibwasafaris',
          'https://twitter.com/kitiibwasafaris',
        ],
      }

    case 'tour':
      return {
        ...baseStructure,
        '@type': 'TouristAttraction',
        name: data.name,
        description: data.description,
        url: `${baseUrl}/packages/${data.id}`,
        image: data.image,
        priceRange: `USD${data.price}`,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'UG',
          addressLocality: 'Mukono',
        },
      }

    case 'article':
      return {
        ...baseStructure,
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        image: data.image,
        datePublished: data.publishedDate,
        dateModified: data.modifiedDate,
        author: {
          '@type': 'Organization',
          name: siteName,
        },
      }

    case 'breadcrumb':
      return {
        ...baseStructure,
        '@type': 'BreadcrumbList',
        itemListElement: data.items.map((item: any, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${baseUrl}${item.url}`,
        })),
      }

    default:
      return baseStructure
  }
}

/**
 * Generate sitemap URLs
 */
export function generateSitemapURLs() {
  const pages = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/packages', changefreq: 'weekly', priority: 0.9 },
    { url: '/cottages', changefreq: 'monthly', priority: 0.8 },
    { url: '/safari-chill-experience', changefreq: 'weekly', priority: 0.8 },
    { url: '/gallery', changefreq: 'bi-weekly', priority: 0.7 },
    { url: '/blog', changefreq: 'weekly', priority: 0.8 },
    { url: '/donations', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    { url: '/uganda', changefreq: 'monthly', priority: 0.7 },
    { url: '/initiative', changefreq: 'monthly', priority: 0.7 },
    { url: '/best-of', changefreq: 'quarterly', priority: 0.6 },
  ]

  return pages
}
