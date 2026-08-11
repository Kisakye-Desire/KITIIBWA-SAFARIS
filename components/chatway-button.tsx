'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { ArrowUpRight, ChevronLeft, MessageCircle, Send, Smile, X } from 'lucide-react'

const CHATWAY_URL = 'https://go.chatway.app/conversations'

type Message = {
  id: number
  text: string
  author: 'visitor' | 'team'
  time: string
}

function timeLabel() {
  return new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(new Date())
}

export default function ChatwayButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hi, how can we help?', author: 'team', time: timeLabel() },
  ])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = draft.trim()
    if (!text) return

    setMessages((current) => [...current, { id: Date.now(), text, author: 'visitor', time: timeLabel() }])
    setDraft('')
    // Chatway's dashboard is authenticated and exposes no public visitor API.
    // The inline thread remains visitor-facing until a Chatway widget/site ID is configured.
  }

  return (
    <>
      {isOpen ? (
        <section className="fixed bottom-4 left-4 z-50 flex h-[min(670px,calc(100vh-2rem))] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.5rem] border border-primary/20 bg-background text-foreground shadow-2xl" aria-label="Chat with Kitiibwa Safaris">
          <header className="flex items-center gap-3 border-t-4 border-primary bg-card px-4 py-3">
            <button type="button" onClick={() => setIsOpen(false)} className="rounded-full p-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground" aria-label="Close chat">
              <ChevronLeft className="size-6" />
            </button>
            <Image src="/images/team/chat-avatar.jpeg" alt="Sedrick from Kitiibwa Safaris" width={48} height={48} className="size-12 rounded-full object-cover" />
            <div className="min-w-0 flex-1">
              <h2 className="truncate text-xl font-bold">Sedrick</h2>
              <p className="flex items-center gap-1.5 text-sm text-primary"><span className="size-2.5 rounded-full bg-primary" />ONLINE</p>
            </div>
            <a href={CHATWAY_URL} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" aria-label="Open Chatway operator portal">
              <ArrowUpRight className="size-5" />
            </a>
            <button type="button" onClick={() => setIsOpen(false)} className="rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" aria-label="Close chat">
              <X className="size-6" />
            </button>
          </header>

          <div className="flex flex-1 flex-col gap-4 overflow-y-auto bg-background px-4 py-5" aria-live="polite">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.author === 'visitor' ? 'justify-end' : 'items-start gap-2'}`}>
                {message.author === 'team' && <Image src="/images/team/chat-avatar.jpeg" alt="" width={34} height={34} className="mt-1 size-8 rounded-full object-cover" />}
                <div className={`max-w-[82%] rounded-2xl px-4 py-3 text-lg leading-tight ${message.author === 'visitor' ? 'rounded-br-md bg-accent text-accent-foreground' : 'rounded-tl-md bg-muted text-foreground'}`}>
                  <p>{message.text}</p>
                  <p className={`mt-1 text-xs font-semibold ${message.author === 'visitor' ? 'text-accent-foreground/70' : 'text-muted-foreground'}`}>{message.time}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border bg-card p-4">
            <div className="flex items-center gap-2 rounded-full border border-primary bg-background px-3 py-1.5 focus-within:ring-2 focus-within:ring-primary/30">
              <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Write your message..." className="min-w-0 flex-1 bg-transparent px-1 py-2 text-base outline-none placeholder:text-muted-foreground" aria-label="Write your message" />
              <button type="button" className="rounded-full p-2 text-muted-foreground" aria-label="Add an attachment"><ArrowUpRight className="size-5" /></button>
              <button type="button" className="rounded-full p-2 text-muted-foreground" aria-label="Add an emoji"><Smile className="size-5" /></button>
              <button type="submit" className="rounded-full bg-accent p-3 text-accent-foreground transition hover:bg-accent/90" aria-label="Send message"><Send className="size-5" /></button>
            </div>
            <p className="pt-4 text-center text-sm text-muted-foreground">Powered by <span className="font-semibold">chatway</span></p>
          </form>
        </section>
      ) : (
        <button type="button" onClick={() => setIsOpen(true)} className="fixed bottom-6 left-6 z-40 flex items-center gap-3 rounded-full border border-border bg-card px-3 py-2 text-foreground shadow-xl transition-transform hover:scale-105" aria-label="Open chat with Kitiibwa Safaris" title="Chat with Kitiibwa Safaris">
          <span className="relative shrink-0"><Image src="/images/team/chat-avatar.jpeg" alt="Kitiibwa Safaris support assistant" width={40} height={40} className="size-10 rounded-full object-cover" /><MessageCircle className="absolute -right-0.5 -top-0.5 size-4 rounded-full bg-primary p-0.5 text-primary-foreground" aria-hidden="true" /></span>
          <span className="hidden flex-col items-start gap-0.5 pr-2 sm:flex"><span className="flex items-center gap-1 text-sm font-semibold"><MessageCircle className="size-4 text-primary" aria-hidden="true" />Chat with us</span><span className="text-xs text-muted-foreground">Message our safari team on Chatway</span></span>
          <Send className="mr-1 size-4 text-primary sm:hidden" aria-hidden="true" />
        </button>
      )}
    </>
  )
}
