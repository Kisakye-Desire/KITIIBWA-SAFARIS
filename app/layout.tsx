import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import BackToTop from '@/components/back-to-top'
import ChatwayButton from '@/components/chatway-button'
import { generateMetadata, generateStructuredData, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...generateMetadata(pageMetadata.home),
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  generator: 'Next.js',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8b6f47' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1410' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData('organization', {})),
          }}
        />
        {children}
        <BackToTop />
        <ChatwayButton />
        <Script id="chatway" src="https://cdn.chatway.app/widget.js?id=Rv2T5A9P0559" strategy="afterInteractive" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
