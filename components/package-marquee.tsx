'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

const packages = [
  { name: 'Gorilla Trekking', detail: 'Mist-covered forests and unforgettable encounters' },
  { name: 'Classic Uganda Safari', detail: 'Big Five game drives across the Pearl of Africa' },
  { name: 'Safari & Chill', detail: 'Wildlife, culture, music, and restorative escapes' },
  { name: 'Luxury Cottages', detail: 'Comfort, calm, and spectacular natural views' },
]

export default function PackageMarquee() {
  return (
    <section aria-label="Featured safari packages" className="overflow-hidden border-y border-accent/20 bg-primary py-3 text-primary-foreground">
      <div className="flex min-w-max animate-[marquee_28s_linear_infinite] items-center gap-10 px-4">
        {[...packages, ...packages].map((item, index) => (
          <Link key={`${item.name}-${index}`} href="/packages" className="group flex items-center gap-3 whitespace-nowrap transition-opacity hover:opacity-80">
            <Sparkles className="size-4 text-accent" aria-hidden="true" />
            <span className="font-semibold">{item.name}</span>
            <span className="text-sm text-primary-foreground/75">{item.detail}</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        ))}
      </div>
      <style jsx>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  )
}
