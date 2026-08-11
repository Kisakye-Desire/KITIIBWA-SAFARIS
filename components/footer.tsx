'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { contactInfo, siteMetadata, socialLinks } from '@/lib/data/site-config'
import ContactStrip from '@/components/contact-strip'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-safari text-primary-foreground mt-16 relative overflow-hidden">
      <ContactStrip compact />
      {/* Watermark-style background effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(212, 165, 116, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245, 176, 65, 0.3) 0%, transparent 50%)',
      }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <div className="h-6 w-6 bg-secondary rounded animate-scale-pulse" />
              Kitiibwa Children Initiative
            </h3>
            <p className="text-sm opacity-90">
              Helping children in Uganda learn, grow, and thrive through education, care, family support, and opportunity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:opacity-75 transition hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:opacity-75 transition hover:translate-x-1 inline-block">
                  Safari Packages
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:opacity-75 transition hover:translate-x-1 inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-75 transition hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Experiences */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h4 className="font-bold mb-4">Experiences</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cottages" className="hover:opacity-75 transition hover:translate-x-1 inline-block">
                  Safari Cottages
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:opacity-75 transition hover:translate-x-1 inline-block">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/uganda" className="hover:opacity-75 transition hover:translate-x-1 inline-block">
                  Uganda Info
                </Link>
              </li>
              <li>
                <Link href="/initiative" className="hover:opacity-75 transition hover:translate-x-1 inline-block">
                  Kitiibwa Children Initiative
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 hover:translate-x-1 transition">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span>Uganda: {contactInfo.phone.uganda}</span>
                  <span>UK: {contactInfo.phone.uk}</span>
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-2 hover:translate-x-1 transition">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-start gap-2 hover:translate-x-1 transition">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center gap-6 mb-6">
            <div className="flex items-center gap-6">
              {socialLinks.slice(0, 3).map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition text-sm font-semibold" aria-label={social.name}>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; {currentYear} {siteMetadata.title}. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:opacity-100 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:opacity-100 transition">
                Terms of Service
              </Link>
              <Link href="/donations" className="hover:opacity-100 transition">
                Support Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
