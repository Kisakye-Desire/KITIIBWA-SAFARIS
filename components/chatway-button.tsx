'use client'

import Image from 'next/image'
import { MessageCircle, Send } from 'lucide-react'

const WHATSAPP_NUMBER = '256702345273'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello Kitiibwa Safaris, I would like to start a conversation about a safari.'
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function ChatwayButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-3 rounded-full border border-border bg-card px-3 py-2 text-foreground shadow-xl transition-transform hover:scale-105"
      aria-label="Start a WhatsApp chat with Kitiibwa Safaris"
      title="Message Kitiibwa Safaris on WhatsApp"
    >
      <span className="relative shrink-0">
        <Image
          src="/images/team/chat-avatar.jpeg"
          alt="Kitiibwa Safaris support assistant"
          width={40}
          height={40}
          className="size-10 rounded-full object-cover"
        />
        <MessageCircle className="absolute -right-0.5 -top-0.5 size-4 rounded-full bg-primary p-0.5 text-primary-foreground" aria-hidden="true" />
      </span>
      <span className="hidden flex-col items-start gap-0.5 pr-2 sm:flex">
        <span className="flex items-center gap-1 text-sm font-semibold">
          <MessageCircle className="size-4 text-primary" aria-hidden="true" />
          Chat with us
        </span>
        <span className="text-xs text-muted-foreground">Message us directly on WhatsApp</span>
      </span>
      <Send className="mr-1 size-4 text-primary sm:hidden" aria-hidden="true" />
    </a>
  )
}
