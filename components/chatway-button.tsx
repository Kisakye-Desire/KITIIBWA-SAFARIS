'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Circle, Maximize2, MessageCircle, Send, X } from 'lucide-react'

const CHATWAY_URL = 'https://go.chatway.app/conversations'

export default function ChatwayButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen ? (
        <section
          className="fixed bottom-4 left-4 z-50 flex w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl"
          aria-label="Kitiibwa Children Initiative chat"
        >
          <header className="bg-accent px-5 pb-6 pt-4 text-accent-foreground">
            <div className="flex items-center justify-between">
              <Image
                src="/images/team/chat-avatar.jpeg"
                alt="Kitiibwa support team"
                width={48}
                height={48}
                className="size-12 rounded-full border-2 border-accent-foreground/70 object-cover"
              />
              <div className="flex items-center gap-2">
                <a
                  href={CHATWAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 transition hover:bg-accent-foreground/10"
                  aria-label="Open Chatway conversations"
                  title="Open full Chatway conversations"
                >
                  <Maximize2 className="size-5" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 transition hover:bg-accent-foreground/10"
                  aria-label="Close chat"
                >
                  <X className="size-6" />
                </button>
              </div>
            </div>
            <h2 className="mt-7 max-w-xs text-3xl font-bold leading-tight text-balance">
              Our team is here for you
            </h2>
          </header>

          <div className="flex flex-col gap-4 bg-background p-4">
            <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="relative">
                  <Image
                    src="/images/team/chat-avatar.jpeg"
                    alt="Support team avatar"
                    width={44}
                    height={44}
                    className="size-11 rounded-full object-cover"
                  />
                  <Circle className="absolute -bottom-0.5 -right-0.5 size-3.5 fill-primary text-card" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">Kitiibwa Support</p>
                  <p className="text-sm text-muted-foreground">Online · replies as soon as possible</p>
                </div>
              </div>
              <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">ONLINE</span>
            </div>

            <div className="rounded-xl bg-muted px-4 py-3 text-sm leading-relaxed">
              Hi, how can we help? Send us a message and our team will respond as soon as possible.
            </div>

            <a
              href={CHATWAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 font-semibold text-accent-foreground transition hover:bg-accent/90"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Continue to Chatway
              <Send className="size-4" aria-hidden="true" />
            </a>

            <p className="text-center text-xs text-muted-foreground">Powered by Chatway</p>
          </div>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-40 flex items-center gap-3 rounded-full border border-border bg-card px-3 py-2 text-foreground shadow-xl transition-transform hover:scale-105"
          aria-label="Open chat with Kitiibwa Children Initiative support"
          title="Chat with our team"
        >
          <span className="relative shrink-0">
            <Image
              src="/images/team/chat-avatar.jpeg"
              alt="Kitiibwa support assistant"
              width={40}
              height={40}
              className="size-10 rounded-full object-cover"
            />
            <Circle className="absolute -right-0.5 -top-0.5 size-3 fill-primary text-card" aria-hidden="true" />
          </span>
          <span className="hidden flex-col items-start gap-0.5 pr-2 sm:flex">
            <span className="flex items-center gap-1 text-sm font-semibold">
              <MessageCircle className="size-4 text-primary" aria-hidden="true" />
              Chat with us
            </span>
            <span className="text-xs text-muted-foreground">Online · replies as soon as possible</span>
          </span>
        </button>
      )}
    </>
  )
}
