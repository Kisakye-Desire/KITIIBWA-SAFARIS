'use client'

import Image from 'next/image'
import { MessageCircle } from 'lucide-react'

declare global {
  interface Window {
    $chatway?: {
      openChatwayWidget?: () => void
      closeChatwayWidget?: () => void
      hideChatwayIcon?: () => void
    }
  }
}

export default function ChatwayButton() {
  function openChatway() {
    const chatway = typeof window !== 'undefined' ? window.$chatway : undefined
    if (chatway?.openChatwayWidget) {
      chatway.openChatwayWidget()
      return
    }
    // The Chatway script may still be loading — retry briefly so the first
    // click after page load still opens the real chat.
    let attempts = 0
    const timer = window.setInterval(() => {
      attempts += 1
      if (window.$chatway?.openChatwayWidget) {
        window.$chatway.openChatwayWidget()
        window.clearInterval(timer)
      } else if (attempts > 20) {
        window.clearInterval(timer)
      }
    }, 150)
  }

  return (
    <button
      type="button"
      onClick={openChatway}
      className="fixed bottom-6 left-4 z-40 flex items-center gap-3 rounded-full border border-border bg-card px-3 py-2 text-foreground shadow-xl transition-transform hover:scale-105 sm:left-6"
      aria-label="Open live chat with Kitiibwa Safaris"
      title="Chat with Kitiibwa Safaris"
      data-chatway-replies="disabled-in-chatway-dashboard"
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
        <span className="absolute -bottom-0.5 -left-0.5 size-3 rounded-full border-2 border-card bg-green-500" aria-hidden="true" />
      </span>
      <span className="hidden flex-col items-start gap-0.5 pr-2 sm:flex">
        <span className="text-sm font-semibold">Chat with us</span>
        <span className="text-xs text-muted-foreground">We&apos;re online now</span>
      </span>
    </button>
  )
}
