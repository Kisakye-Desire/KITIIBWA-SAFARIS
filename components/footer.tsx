'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <div className="h-6 w-6 bg-secondary rounded" />
              KITIIBWA
            </h3>
            <p className="text-sm opacity-90">
              Premium African safari experiences showcasing the beauty of Uganda's wildlife and natural wonders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:opacity-75 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:opacity-75 transition">
                  Safari Packages
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:opacity-75 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-75 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="font-bold mb-4">Experiences</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cottages" className="hover:opacity-75 transition">
                  Safari Cottages
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:opacity-75 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/uganda" className="hover:opacity-75 transition">
                  Uganda Info
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:opacity-75 transition">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span>Uganda: +256 708898424</span>
                  <span>UK: +44 7498605656</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>dynamicyoo@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Mukono District, Uganda</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center gap-6 mb-6">
            <div className="flex items-center gap-6">
              <a href="https://facebook.com/kitiibwasafaris" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition text-lg">
                f
              </a>
              <a href="https://instagram.com/kitiibwasafaris" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition text-lg">
                📷
              </a>
              <a href="https://linkedin.com/company/kitiibwasafaris" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition text-lg">
                in
              </a>
              <a href="https://twitter.com/kitiibwasafaris" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition text-lg">
                𝕏
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; {currentYear} KITIIBWA SAFARIS. All rights reserved.</p>
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
