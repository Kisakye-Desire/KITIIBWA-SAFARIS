'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

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
    { name: 'KITIIBWA Initiative', href: '/initiative' },
    { name: 'Partners', href: '/partners' },
    { name: 'Best Of', href: '/best-of' },
    { name: 'Packages', href: '/packages' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
            <Image
              src="/logo.jpg"
              alt="KITIIBWA SAFARIS"
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
