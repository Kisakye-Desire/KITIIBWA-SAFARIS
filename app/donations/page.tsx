'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { Heart, Users, Leaf, BookOpen } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Donations() {
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [donorName, setDonorName] = useState('')
  const [donorEmail, setDonorEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const presetAmounts = [40, 120, 250, 500, 1000, 2500]
  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount

  const handleDonate = async () => {
    setErrorMessage('')

    // Validation
    if (!donorName.trim()) {
      setErrorMessage('Please enter your name')
      return
    }
    if (!donorEmail.trim()) {
      setErrorMessage('Please enter your email')
      return
    }
    if (!finalAmount || finalAmount <= 0) {
      setErrorMessage('Please select a valid donation amount')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(donorEmail)) {
      setErrorMessage('Please enter a valid email address')
      return
    }

    setIsProcessing(true)

    try {
      const response = await fetch('/api/donations/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          donorName,
          donorEmail,
          amount: finalAmount,
          currency,
          message: message || null,
        }),
      })

      const data = await response.json()

      if (response.ok && data.url) {
        // Redirect to Stripe checkout
        window.location.href = data.url
      } else {
        setErrorMessage(data.error || 'Failed to process donation. Please try again.')
      }
    } catch (error) {
      console.error('[Donation Error]', error)
      setErrorMessage('Connection error. Please check your internet and try again.')
    }

    setIsProcessing(false)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 flex items-center gap-3">
              <Heart className="h-10 w-10 text-accent" />
              Support Our Mission
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Your donation directly supports conservation, community development, and sustainable tourism in Uganda
            </p>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">How Your Donation Makes a Difference</h2>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-background p-6 rounded-lg text-center">
                <BookOpen className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-sm font-semibold text-primary mb-2">$40</p>
                <p className="text-xs text-muted-foreground">One Term School Fees for a Child</p>
              </div>

              <div className="bg-background p-6 rounded-lg text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-sm font-semibold text-primary mb-2">$120</p>
                <p className="text-xs text-muted-foreground">Full Year Sponsorship for One Student</p>
              </div>

              <div className="bg-background p-6 rounded-lg text-center">
                <Leaf className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-sm font-semibold text-primary mb-2">$500</p>
                <p className="text-xs text-muted-foreground">Community Healthcare & Conservation Programs</p>
              </div>

              <div className="bg-background p-6 rounded-lg text-center">
                <Heart className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-sm font-semibold text-primary mb-2">$1,000</p>
                <p className="text-xs text-muted-foreground">Full Scholarship + Life Skills Training</p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-primary mb-8">Make Your Donation</h2>

              {/* Amount Selection */}
              <div className="mb-8">
                <p className="font-semibold text-primary mb-4">Select Amount</p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount('')
                      }}
                      className={`py-2 px-3 rounded-lg font-semibold transition-colors ${
                        selectedAmount === amount && !customAmount
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="flex gap-2 mb-4">
                  <div className="flex-1">
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        if (e.target.value) setSelectedAmount(0)
                      }}
                      placeholder="Custom amount"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="UGX">UGX</option>
                  </select>
                </div>
              </div>

              {/* Donor Info */}
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Full Name</label>
                  <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email Address</label>
                  <input
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Message (Optional)</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Add a message with your donation"
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-600 text-sm">{errorMessage}</p>
                </div>
              )}

              {/* Total */}
              <div className="mb-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-muted-foreground text-sm mb-2">Total Donation</p>
                <p className="text-3xl font-bold text-primary">
                  {currency} {finalAmount}
                </p>
                <p className="text-xs text-muted-foreground mt-2">100% of your donation supports our programs</p>
              </div>

              {/* Button */}
              <button
                onClick={handleDonate}
                disabled={isProcessing}
                className={`w-full ${
                  isProcessing
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'bg-accent hover:bg-primary text-accent-foreground'
                } py-3 rounded-lg font-bold text-lg transition-colors`}
              >
                {isProcessing ? 'Processing...' : `Donate ${currency} ${finalAmount}`}
              </button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Secure payment through Stripe. Your information is safe and never shared.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-card">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-primary mb-2">How does KITIIBWA use donations?</h3>
                <p className="text-muted-foreground">
                  100% of donations go directly to our conservation, community development, education, and healthcare programs.
                  We maintain transparency and provide annual impact reports.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Is my donation tax-deductible?</h3>
                <p className="text-muted-foreground">
                  KITIIBWA is a registered nonprofit. Donations may be tax-deductible depending on your country. Consult with your
                  tax professional or contact us for documentation.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Can I sponsor specific programs?</h3>
                <p className="text-muted-foreground">
                  Yes! You can designate your donation to support specific programs like education, healthcare, or conservation
                  rangers. Contact us for sponsorship options.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Will I receive a receipt?</h3>
                <p className="text-muted-foreground">
                  Yes, a donation receipt will be sent to your email immediately after successful payment.
                </p>
              </div>
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
              href="/community"
              className="inline-block bg-white text-primary hover:bg-muted px-8 py-3 rounded-lg font-semibold transition-colors"
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
