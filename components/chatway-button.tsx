'use client'

import Image from 'next/image'
import { MessageCircle, Circle } from 'lucide-react'

export default function ChatwayButton() {
  return (
    <a
      href="https://go.chatway.app/conversations"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-3 rounded-full border border-border bg-card px-3 py-2 text-foreground shadow-xl transition-transform hover:scale-105"
      aria-label="Chat with Kitiibwa Children Initiative support"
      title="Chat with our team"
    >
      <span className="relative shrink-0">
        <Image src="/images/team/chat-avatar.jpeg" alt="Kitiibwa support assistant" width={40} height={40} className="size-10 rounded-full object-cover" />
        <Circle className="absolute -right-0.5 -top-0.5 size-3 fill-green-500 text-card" aria-label="Online" />
      </span>
      <span className="hidden sm:flex flex-col items-start gap-0.5 pr-2">
        <span className="flex items-center gap-1 text-sm font-semibold"><MessageCircle className="size-4 text-primary" /> Chat with us</span>
        <span className="text-xs text-muted-foreground">We&apos;re here to help</span>
      </span>
    </a>
  )
}
