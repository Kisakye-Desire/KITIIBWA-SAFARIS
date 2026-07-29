import { MetadataRoute } from 'next'
import { generateSitemapURLs } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://kitiibwasafaris.com'
  const urls = generateSitemapURLs()

  return urls.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changefreq as any,
    priority: page.priority,
  }))
}
