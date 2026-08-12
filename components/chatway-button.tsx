'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Grid2X2, Maximize2, MessageCircle, Plane, Send, X, CircleHelp } from 'lucide-react'
import { composeEmailUrl } from '@/lib/mail'

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
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'chat' | 'faq' | 'channels'>('chat')

  function openChatway() {
    // Close the custom welcome panel first so Chatway is the only visible chat surface.
    setIsOpen(false)
    const chatway = typeof window !== 'undefined' ? window.$chatway : undefined
    if (chatway?.openChatwayWidget) {
      chatway.openChatwayWidget()
      return
    }

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
    <div className="fixed bottom-4 left-4 z-40 sm:bottom-6 sm:left-6">
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 rounded-full border border-border bg-card px-3 py-2 text-foreground shadow-xl transition-transform hover:scale-105"
          aria-label="Open live chat with Kitiibwa Safaris"
          title="Chat with Kitiibwa Safaris"
        >
          <span className="relative shrink-0">
            <Image src="/images/team/chat-avatar.jpeg" alt="Kitiibwa Safaris support team" width={40} height={40} className="size-10 rounded-full object-cover" />
            <MessageCircle className="absolute -right-0.5 -top-0.5 size-4 rounded-full bg-primary p-0.5 text-primary-foreground" aria-hidden="true" />
            <span className="absolute -bottom-0.5 -left-0.5 size-3 rounded-full border-2 border-card bg-green-500" aria-hidden="true" />
          </span>
          <span className="hidden flex-col items-start gap-0.5 pr-2 sm:flex">
            <span className="text-sm font-semibold">Chat with us</span>
            <span className="text-xs text-muted-foreground">We&apos;re online now</span>
          </span>
        </button>
      ) : (
        <section className="flex h-[min(650px,calc(100vh-2rem))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.75rem] border border-border bg-background text-foreground shadow-2xl" aria-label="Kitiibwa Safaris chat">
          <header className="relative shrink-0 bg-gradient-to-br from-primary via-accent to-secondary px-6 pb-8 pt-5 text-primary-foreground">
            <div className="flex items-start justify-between">
              <Image src="/images/team/chat-avatar.jpeg" alt="Kitiibwa Safaris support team" width={64} height={64} className="size-16 rounded-full border-2 border-primary-foreground/80 object-cover shadow-lg" />
              <div className="flex items-center gap-3">
                <button type="button" onClick={() => setIsOpen(false)} className="rounded-full p-1.5 transition-colors hover:bg-primary-foreground/15" aria-label="Close chat panel"><X className="size-6" aria-hidden="true" /></button>
                <button type="button" className="rounded-full p-1.5 transition-colors hover:bg-primary-foreground/15" aria-label="Expand chat panel"><Maximize2 className="size-5" aria-hidden="true" /></button>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-2 text-3xl font-bold tracking-tight sm:text-4xl">
              <Plane className="size-8 shrink-0 -rotate-12" aria-hidden="true" />
              <h2>We&apos;re here for you</h2>
            </div>
          </header>

          <div className="flex min-h-0 flex-1 flex-col bg-muted/30 px-4 pb-4 pt-0">
            <div className="-mt-5 rounded-3xl bg-card p-5 shadow-lg">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-muted-foreground">Kitiibwa Safaris team</span>
                <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground"><span className="size-2.5 rounded-full bg-green-500" /> ONLINE</span>
              </div>
              <p className="mt-6 text-xl font-medium text-card-foreground">Hi, how can we help?</p>
              <button type="button" onClick={openChatway} className="mt-5 flex w-full items-center justify-between rounded-2xl bg-primary px-5 py-4 text-left text-lg font-semibold text-primary-foreground shadow-md transition-all hover:bg-accent hover:shadow-lg">
                Start a new chat
                <span className="rounded-xl bg-primary-foreground/15 p-2"><Send className="size-5" aria-hidden="true" /></span>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center px-5 text-center text-sm leading-6 text-muted-foreground">
              {activeTab === 'chat' && 'Our safari team can help with destinations, lodges, itineraries, and travel questions.'}
              {activeTab === 'faq' && 'Find quick answers about booking, payments, airport transfers, and safari planning.'}
              {activeTab === 'channels' && (
                <span>
                  Chat with us here or{' '}
                  <a className="font-semibold text-primary underline-offset-4 hover:underline" href={composeEmailUrl({ subject: 'Kitiibwa Safaris Inquiry' })} target="_blank" rel="noopener noreferrer">
                    email our team
                  </a>
                  .
                </span>
              )}
            </div>
          </div>

          <nav className="grid shrink-0 grid-cols-3 border-t border-border bg-card px-2 py-2" aria-label="Chat options">
            <button type="button" onClick={() => setActiveTab('chat')} className={`flex flex-col items-center gap-1 rounded-2xl py-3 text-sm font-medium transition-colors ${activeTab === 'chat' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted'}`}><MessageCircle className="size-6" aria-hidden="true" />Chat</button>
            <button type="button" onClick={() => setActiveTab('faq')} className={`flex flex-col items-center gap-1 rounded-2xl py-3 text-sm font-medium transition-colors ${activeTab === 'faq' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted'}`}><CircleHelp className="size-6" aria-hidden="true" />FAQ</button>
            <button type="button" onClick={() => setActiveTab('channels')} className={`flex flex-col items-center gap-1 rounded-2xl py-3 text-sm font-medium transition-colors ${activeTab === 'channels' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted'}`}><Grid2X2 className="size-6" aria-hidden="true" />Channels</button>
          </nav>
        </section>
      )}
    </div>
  )
}
