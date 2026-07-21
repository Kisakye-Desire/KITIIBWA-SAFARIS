'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { Heart, Users, Leaf, BookOpen, Copy, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/scroll-reveal'
import { TextGradient } from '@/components/ui/effects'

type PaymentMethod = 'mobileMoney' | 'bank' | 'card'
type MobileNetwork = 'airtel' | 'mtn'

export default function Donations() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mobileMoney')
  const [mobileNetwork, setMobileNetwork] = useState<MobileNetwork>('mtn')
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const mobileMoneyDetails = {
    airtel: {
      name: 'Airtel Money',
      number: '0708898424',
      accountName: 'KITIIBWA SAFARIS',
      instructions: [
        'Dial *185# on your phone',
        'Select "Send Money"',
        'Enter number: 0708898424',
        'Enter the amount you wish to donate',
        'Confirm with your PIN',
        'Screenshot the confirmation and send to us on WhatsApp',
      ],
      color: 'from-red-500/20 to-orange-500/10',
      border: 'border-red-400/30',
      badge: 'bg-red-500',
    },
    mtn: {
      name: 'MTN Mobile Money',
      number: '0763705967',
      accountName: 'KITIIBWA SAFARIS',
      instructions: [
        'Dial *165# on your phone',
        'Select "Transfer Money" then "To MTN Number"',
        'Enter number: 0763705967',
        'Enter the amount you wish to donate',
        'Confirm with your PIN',
        'Screenshot the confirmation and send to us on WhatsApp',
      ],
      color: 'from-yellow-400/20 to-yellow-300/10',
      border: 'border-yellow-400/30',
      badge: 'bg-yellow-400',
    },
  }

  const bankDetails = {
    bank: 'Centenary Bank Uganda',
    accountName: 'KITIIBWA SAFARIS',
    accountNumber: '3204835515',
    branch: 'Mukono Branch',
    swiftCode: 'CENBUGKA',
    currency: 'UGX / USD',
  }

  const activeMobile = mobileMoneyDetails[mobileNetwork]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 80% 50%, #D4A574 0%, transparent 60%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="mb-4">
                <TextGradient className="text-sm font-semibold tracking-wider uppercase">Make a Difference</TextGradient>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance flex items-center gap-3">
                <Heart className="h-10 w-10 text-accent flex-shrink-0" />
                Support Our Mission
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Your donation directly supports wildlife conservation, community education, children&apos;s welfare, healthcare initiatives, and sustainable livelihoods across Uganda&apos;s communities.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* How Your Donation Helps */}
        <section className="py-16 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">How Your Donation Makes a Difference</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <ScrollReveal delay={0}>
                <div className="bg-background p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-border">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">Conservation Rangers</h3>
                  <p className="text-xs text-muted-foreground">Feeds a conservation ranger for one day — protecting Uganda&apos;s wildlife</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-background p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-border">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">School Supplies</h3>
                  <p className="text-xs text-muted-foreground">Provides school supplies for children in rural communities around national parks</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-background p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-border">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">Forest Restoration</h3>
                  <p className="text-xs text-muted-foreground">Plants trees for forest restoration and habitat protection for wildlife</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-background p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-border">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">Medical Care</h3>
                  <p className="text-xs text-muted-foreground">Provides medical care for community members in areas with limited healthcare access</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Donation Payment Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-primary mb-3">Choose Your Payment Method</h2>
                <p className="text-muted-foreground">Select the most convenient way to make your donation</p>
              </div>
            </ScrollReveal>

            {/* Payment Method Tabs */}
            <ScrollReveal>
              <div className="flex gap-3 justify-center mb-8 flex-wrap">
                {[
                  { key: 'mobileMoney', label: 'Mobile Money', icon: '📱' },
                  { key: 'bank', label: 'Bank Transfer', icon: '🏦' },
                  { key: 'card', label: 'Card (Stripe)', icon: '💳' },
                ].map(({ key, label, icon }) => (
                  <button
                    key={key}
                    onClick={() => setPaymentMethod(key as PaymentMethod)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all border-2 ${
                      paymentMethod === key
                        ? 'border-primary bg-primary/10 text-primary shadow-md'
                        : 'border-border text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    <span>{icon}</span>
                    {label}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Mobile Money Panel */}
            {paymentMethod === 'mobileMoney' && (
              <ScrollReveal>
                <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
                  {/* Network selector */}
                  <div className="border-b border-border p-6">
                    <p className="font-semibold text-primary mb-4">Select Mobile Network</p>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setMobileNetwork('mtn')}
                        className={`p-4 rounded-xl border-2 font-bold text-sm transition-all ${
                          mobileNetwork === 'mtn'
                            ? 'border-yellow-400 bg-yellow-400/10 text-yellow-700 dark:text-yellow-300'
                            : 'border-border text-muted-foreground hover:border-yellow-400/50'
                        }`}
                      >
                        <div className="text-2xl mb-1">📶</div>
                        MTN Mobile Money
                        <div className="text-xs mt-1 opacity-70">0763705967</div>
                      </button>
                      <button
                        onClick={() => setMobileNetwork('airtel')}
                        className={`p-4 rounded-xl border-2 font-bold text-sm transition-all ${
                          mobileNetwork === 'airtel'
                            ? 'border-red-400 bg-red-400/10 text-red-700 dark:text-red-300'
                            : 'border-border text-muted-foreground hover:border-red-400/50'
                        }`}
                      >
                        <div className="text-2xl mb-1">📡</div>
                        Airtel Money
                        <div className="text-xs mt-1 opacity-70">0708898424</div>
                      </button>
                    </div>
                  </div>

                  {/* Payment details */}
                  <div className={`p-6 bg-gradient-to-br ${activeMobile.color}`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-primary text-lg">{activeMobile.name}</h3>
                      <span className={`px-3 py-1 ${activeMobile.badge} text-white text-xs font-bold rounded-full`}>
                        {mobileNetwork === 'mtn' ? 'MTN' : 'Airtel'}
                      </span>
                    </div>

                    {/* Number to send to */}
                    <div className={`bg-card rounded-xl p-5 border ${activeMobile.border} mb-4`}>
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-2">Send to this number</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-primary">{activeMobile.number}</p>
                          <p className="text-sm text-muted-foreground">{activeMobile.accountName}</p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(activeMobile.number, 'phone')}
                          className="flex items-center gap-1.5 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-semibold transition-colors"
                        >
                          {copiedField === 'phone' ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                          {copiedField === 'phone' ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>

                    {/* Instructions */}
                    <div className="space-y-2">
                      <p className="font-semibold text-primary text-sm mb-3">Step-by-step instructions:</p>
                      {activeMobile.instructions.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-sm text-muted-foreground">{step}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                      <p className="text-sm text-green-700 dark:text-green-300 font-semibold">
                        After sending, please WhatsApp us the confirmation screenshot at{' '}
                        <a href="https://wa.me/447884181149" className="underline" target="_blank" rel="noopener noreferrer">+44 7884 181149</a>
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Bank Transfer Panel */}
            {paymentMethod === 'bank' && (
              <ScrollReveal>
                <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
                  <div className="p-6 bg-gradient-to-br from-blue-500/10 to-primary/5">
                    <h3 className="font-bold text-primary text-lg mb-6 flex items-center gap-2">
                      <span className="text-2xl">🏦</span>
                      Centenary Bank Transfer
                    </h3>

                    <div className="space-y-3">
                      {[
                        { label: 'Bank Name', value: bankDetails.bank, copyKey: 'bank' },
                        { label: 'Account Name', value: bankDetails.accountName, copyKey: 'accountName' },
                        { label: 'Account Number', value: bankDetails.accountNumber, copyKey: 'accountNumber' },
                        { label: 'Branch', value: bankDetails.branch, copyKey: null },
                        { label: 'Swift Code', value: bankDetails.swiftCode, copyKey: 'swift' },
                        { label: 'Currency', value: bankDetails.currency, copyKey: null },
                      ].map(({ label, value, copyKey }) => (
                        <div key={label} className="bg-background rounded-xl p-4 border border-border flex items-center justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">{label}</p>
                            <p className="font-bold text-primary">{value}</p>
                          </div>
                          {copyKey && (
                            <button
                              onClick={() => copyToClipboard(value, copyKey)}
                              className="flex items-center gap-1.5 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-semibold transition-colors flex-shrink-0"
                            >
                              {copiedField === copyKey ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                              {copiedField === copyKey ? 'Copied!' : 'Copy'}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-xl">
                      <p className="text-sm text-foreground font-semibold mb-1">Important:</p>
                      <p className="text-sm text-muted-foreground">
                        Please include your name and &quot;DONATION&quot; as the payment reference. After transferring, send us your receipt via WhatsApp at{' '}
                        <a href="https://wa.me/447884181149" className="text-accent underline" target="_blank" rel="noopener noreferrer">+44 7884 181149</a>
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Card Payment Panel */}
            {paymentMethod === 'card' && (
              <ScrollReveal>
                <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
                  <div className="p-8 text-center">
                    <div className="text-5xl mb-4">💳</div>
                    <h3 className="font-bold text-primary text-xl mb-3">Card Payment via Stripe</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Securely donate using your credit or debit card through Stripe. Accepts Visa, Mastercard, and American Express worldwide.
                    </p>

                    {/* School fees calculator */}
                    <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-xl p-6 mb-6 text-left border border-accent/20">
                      <h4 className="font-bold text-primary mb-4">School Fees Support Calculator</h4>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-2">Number of Children</label>
                          <input
                            type="number"
                            defaultValue={1}
                            min={1}
                            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-2">Terms (max 3)</label>
                          <input
                            type="number"
                            defaultValue={1}
                            min={1}
                            max={3}
                            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Fee: $40/term per child</p>
                    </div>

                    <Link
                      href="/donations/stripe"
                      className="inline-block w-full bg-gradient-to-r from-primary to-accent text-primary-foreground py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                    >
                      Proceed to Secure Payment
                    </Link>
                    <p className="text-xs text-muted-foreground mt-3">Secured by Stripe. Your details are never stored by us.</p>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-card">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
            </ScrollReveal>

            <div className="space-y-4">
              {[
                {
                  q: 'How does KITIIBWA use donations?',
                  a: '100% of donations go directly to our conservation, community development, education, and healthcare programs. We maintain transparency and provide impact reports.',
                },
                {
                  q: 'Is my donation tax-deductible?',
                  a: 'KITIIBWA is a registered nonprofit. Donations may be tax-deductible depending on your country. Consult your tax professional or contact us for documentation.',
                },
                {
                  q: 'How do I confirm my mobile money donation?',
                  a: 'After sending via mobile money or bank transfer, please screenshot your confirmation and send it to us on WhatsApp at +44 7884 181149 so we can acknowledge your donation.',
                },
                {
                  q: 'Can I sponsor specific programs?',
                  a: 'Yes! You can designate your donation to specific programs like education, healthcare, or conservation. Contact us for sponsorship options.',
                },
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="bg-background rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300">
                    <h3 className="text-base font-bold text-primary mb-2">{item.q}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Learn More About Our Impact</h2>
            <p className="text-lg opacity-90 mb-8">
              Explore our community outreach programs and see exactly where your donation goes
            </p>
            <Link
              href="/initiative"
              className="inline-block bg-white text-primary hover:bg-accent hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Our Programs
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
