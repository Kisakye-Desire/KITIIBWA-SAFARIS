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
const siteName = 'Kitiibwa Safaris'
const siteDescription = 'Kitiibwa Safaris is a Uganda-based tour operator offering gorilla trekking, wildlife safaris, cultural journeys, and tailor-made East Africa tours.'

// Default OG image (brand logo, used across pages until dedicated share images exist)
const defaultOGImage = `${baseUrl}/logo.png`

// Page metadata definitions
export const pageMetadata: Record<string, SEOMetadata> = {
  home: {
    title: 'Kitiibwa Safaris | Uganda Gorilla Trekking & Wildlife Tours',
    description: 'Kitiibwa Safaris is a Uganda tour operator creating memorable gorilla trekking, wildlife safaris, and cultural adventures across the Pearl of Africa.',
    keywords: [
      'Uganda safari',
      'gorilla trekking',
      'wildlife tours',
      'Bwindi National Park',
      'Queen Elizabeth National Park',
      'conservation tourism',
      'African safari',
      'Uganda tour operator',
    ],
    image: `${baseUrl}/logo.png`,
    url: baseUrl,
    type: 'website',
  },
  about: {
    title: 'About Kitiibwa Safaris | Our Team and Mission',
    description: 'Meet the team behind Kitiibwa Safaris and learn how we craft authentic Uganda wildlife, gorilla, and cultural experiences with genuine local hospitality.',
    keywords: [
      'about Kitiibwa Safaris',
      'Uganda safari company',
      'conservation tourism',
      'tour operator Uganda',
      'wildlife protection',
    ],
    image: `${baseUrl}/logo.png`,
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
    image: `${baseUrl}/logo.png`,
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
    image: `${baseUrl}/logo.png`,
    url: `${baseUrl}/cottages`,
  },
  donations: {
    title: 'Donate | Kitiibwa Safaris Children Initiative',
    description: 'Support the Kitiibwa Safaris Children Initiative — helping fund education, school fees, and brighter futures for children in Uganda.',
    keywords: [
      'donate Uganda',
      'Kitiibwa children initiative',
      'community development fund',
      'conservation donations',
      'nonprofit donations',
    ],
    image: `${baseUrl}/logo.png`,
    url: `${baseUrl}/donations`,
  },
  contact: {
    title: 'Contact Kitiibwa Safaris | Book Your Uganda Safari',
    description: 'Get in touch with Kitiibwa Safaris to plan your Uganda safari, ask about packages, partnerships, and tailor-made itineraries.',
    keywords: ['contact Kitiibwa Safaris', 'safari booking', 'Uganda tour inquiries', 'Uganda tourism'],
    image: `${baseUrl}/logo.png`,
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
    image: `${baseUrl}/logo.png`,
    url: `${baseUrl}/blog`,
  },
  safariChill: {
    title: 'Safari & Chill Experience 2027 | KITIIBWA SAFARIS',
    description: 'Join us for the premiere Safari & Chill Experience in 2027. Immersive wildlife encounters, relaxation, entertainment, and networking in Uganda.',
    keywords: [
      'Safari & Chill 2027',
      'Uganda event',
      'safari experience',
      'wildlife immersion',
      'event Uganda',
    ],
    image: `${baseUrl}/logo.png`,
    url: `${baseUrl}/safari-chill-experience`,
    type: 'article',
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
          width: 500,
          height: 500,
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
        '@type': 'TravelAgency',
        name: siteName,
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        image: `${baseUrl}/logo.png`,
        description: siteDescription,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mukono',
          addressCountry: 'UG',
        },
        areaServed: 'Uganda',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          telephone: '+256 708898424',
          email: 'dynamicyoo@gmail.com',
        },
        sameAs: [
          'https://facebook.com/kitiibwasafaris',
          'https://www.instagram.com/kitiibwa_safaris_',
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
