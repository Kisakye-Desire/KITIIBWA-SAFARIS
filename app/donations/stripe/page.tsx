'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function StripeDonationPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setError('')
    const form = new FormData(event.currentTarget)
    const amount = Number(form.get('amount'))

    try {
      const response = await fetch('/api/donations/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          donorName: form.get('donorName'),
          donorEmail: form.get('donorEmail'),
          amount,
          currency: 'USD',
          message: form.get('message'),
          successUrl: `${window.location.origin}/donations?status=success`,
          cancelUrl: `${window.location.origin}/donations?status=cancelled`,
        }),
      })
      const data = await response.json()
      if (!response.ok || !data.url) throw new Error(data.error || 'Stripe is temporarily unavailable.')
      window.location.assign(data.url)
    } catch (submissionError) {
      setStatus('error')
      setError(submissionError instanceof Error ? submissionError.message : 'Stripe is temporarily unavailable.')
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <section>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Secure card donation</p>
            <h1 className="text-4xl font-bold text-primary md:text-5xl">Support children through Stripe</h1>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">Your donation helps Kitiibwa Safaris provide education, care, school support, and opportunities for children in Uganda.</p>
            <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/10 p-5 text-sm text-foreground">
              <p className="font-semibold">Prefer mobile money?</p>
              <p className="mt-2 text-muted-foreground">Airtel Money: <strong>0702 345273</strong> · MTN Mobile Money: <strong>0773525452</strong></p>
              <p className="mt-1 text-muted-foreground">Both are registered to Muwaga Hannington.</p>
            </div>
            <Link href="/donations" className="mt-6 inline-flex text-sm font-semibold text-primary underline underline-offset-4">Return to all donation methods</Link>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 shadow-xl md:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">Full name<input name="donorName" required className="rounded-lg border border-border bg-background px-3 py-3 font-normal outline-none ring-primary focus:ring-2" /></label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">Email address<input name="donorEmail" type="email" required className="rounded-lg border border-border bg-background px-3 py-3 font-normal outline-none ring-primary focus:ring-2" /></label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">Donation amount (USD)<input name="amount" type="number" min="1" step="0.01" required className="rounded-lg border border-border bg-background px-3 py-3 font-normal outline-none ring-primary focus:ring-2" /></label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">Message (optional)<textarea name="message" rows={3} className="rounded-lg border border-border bg-background px-3 py-3 font-normal outline-none ring-primary focus:ring-2" /></label>
              {status === 'error' && (
                <div role="alert" className="rounded-lg border border-accent/30 bg-accent/10 p-4 text-sm text-foreground">
                  <p className="font-semibold">We couldn&apos;t start the card payment.</p>
                  <p className="mt-1 text-muted-foreground">{error} Please check your details and try again.</p>
                  <p className="mt-3">You can also donate via Airtel Money <strong>0702 345273</strong> or MTN Mobile Money <strong>0773 525452</strong>, both registered to Muwaga Hannington.</p>
                </div>
              )}
              <button type="submit" disabled={status === 'loading'} className="rounded-lg bg-primary px-5 py-3 font-bold text-primary-foreground transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60">{status === 'loading' ? 'Connecting to Stripe…' : 'Continue to secure payment'}</button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
