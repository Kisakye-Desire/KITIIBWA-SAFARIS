'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import GoogleTranslate from '@/components/google-translate'
import { contactInfo, siteMetadata } from '@/lib/data/site-config'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Safari Cottages', href: '/cottages' },
    { name: 'Safari & Chill', href: '/safari-chill-experience' },
    { name: 'Uganda', href: '/uganda' },
    { name: 'Blog', href: '/blog' },
    { name: 'Children Initiative', href: '/initiative' },
    { name: 'Best Of', href: '/best-of' },
    { name: 'Packages', href: '/packages' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card shadow-lg">
      <div className="border-b border-border/70 bg-muted/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <div className="hidden items-center gap-4 truncate sm:flex">
            <span>{contactInfo.address}</span>
            <a href={`mailto:${contactInfo.email}`} className="hover:text-primary">{contactInfo.email}</a>
            <a href="tel:+256702345273" className="hover:text-primary">{contactInfo.phone.uganda}</a>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="hidden items-center gap-3 sm:flex" aria-label="Social media links">
              <a href="https://facebook.com/kitiibwasafaris" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</a>
              <a href="https://instagram.com/kitiibwasafaris" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>
              <a href="https://tiktok.com/@kitiibwasafaris" target="_blank" rel="noopener noreferrer" className="hover:text-primary">TikTok</a>
            </div>
            <GoogleTranslate />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt={siteMetadata.title}
              width={120}
              height={120}
              className="h-16 w-auto animate-fade-in-down"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1 items-center">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  animation: `slideInDown 0.5s ease-out ${idx * 30}ms forwards`,
                  opacity: 0,
                }}
              >
                <style>{`
                  @keyframes slideInDown {
                    from {
                      opacity: 0;
                      transform: translateY(-10px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-muted transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
