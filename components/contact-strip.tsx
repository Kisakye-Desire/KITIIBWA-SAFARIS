'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import GoogleTranslate from '@/components/google-translate'
import SocialIcons from '@/components/social-icons'
import { contactInfo, socialLinks } from '@/lib/data/site-config'

interface ContactStripProps {
  compact?: boolean
}

export default function ContactStrip({ compact = false }: ContactStripProps) {
  return (
    <div className="border-b border-border/70 bg-muted/40">
      <div className={`mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-2 px-4 text-xs text-muted-foreground sm:px-6 lg:px-8 ${compact ? 'py-3' : 'py-2'}`}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="Kitiibwa Safaris contact details">
          <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
            <Mail className="size-3.5" aria-hidden="true" />
            {contactInfo.email}
          </a>
          <a href={`tel:${contactInfo.phone.uganda.replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
            <Phone className="size-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">Uganda </span>{contactInfo.phone.uganda}
          </a>
          <a href={`tel:${contactInfo.phone.uk.replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
            <Phone className="size-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">UK </span>{contactInfo.phone.uk}
          </a>
          <span className="hidden items-center gap-1.5 xl:inline-flex">
            <MapPin className="size-3.5" aria-hidden="true" />
            Uganda · UK representative
          </span>
        </div>
        <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
          <SocialIcons
            size="sm"
            className="gap-2"
            facebook={socialLinks.find((link) => link.name === 'Facebook')?.url}
            instagram={socialLinks.find((link) => link.name === 'Instagram')?.url}
            tiktok={socialLinks.find((link) => link.name === 'TikTok')?.url}
            email={contactInfo.email}
          />
          <GoogleTranslate />
        </div>
      </div>
    </div>
  )
}
