'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { Heart, Users, Leaf, BookOpen, Copy, CheckCircle2, ChevronRight, GraduationCap, HandHeart } from 'lucide-react'
import { useState } from 'react'
import ScrollReveal from '@/components/scroll-reveal'
import { TextGradient } from '@/components/ui/effects'

type DonationType = 'school-fees' | 'general' | null
type FeesPackage = 'termly' | 'yearly'
type PaymentMethod = 'mobileMoney' | 'bank' | 'card'
type MobileNetwork = 'airtel' | 'mtn'

const TERM_FEE = 40   // USD per child per term
const TERMS_PER_YEAR = 3

export default function Donations() {
  // Step 1: choose donation type
  const [donationType, setDonationType] = useState<DonationType>(null)

  // School-fees state
  const [feesPackage, setFeesPackage] = useState<FeesPackage>('termly')
  const [numChildren, setNumChildren] = useState(1)
  const [numTerms, setNumTerms] = useState(1)

  // General donation custom amount
  const [customAmount, setCustomAmount] = useState<string>('')
  const [currency, setCurrency] = useState<'USD' | 'UGX' | 'GBP' | 'EUR'>('USD')

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mobileMoney')
  const [mobileNetwork, setMobileNetwork] = useState<MobileNetwork>('mtn')
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [showPayment, setShowPayment] = useState(false)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  // Calculated fees
  const termsCount = feesPackage === 'yearly' ? TERMS_PER_YEAR : Math.min(numTerms, TERMS_PER_YEAR)
  const totalFees = numChildren * termsCount * TERM_FEE
  const displayAmount = donationType === 'general' && customAmount ? parseFloat(customAmount) : (donationType === 'school-fees' ? totalFees : 0)
  const currencySymbol = { USD: '$', UGX: 'USH', GBP: '£', EUR: '€' }[currency]
  const amountLabel =
    donationType === 'school-fees'
      ? `${currencySymbol}${totalFees} ${currency} (${numChildren} child${numChildren > 1 ? 'ren' : ''} × ${termsCount} term${termsCount > 1 ? 's' : ''} × ${currencySymbol}${TERM_FEE})`
      : donationType === 'general' && customAmount
      ? `${currencySymbol}${displayAmount} ${currency}`
      : 'Enter your desired amount'

  const mobileMoneyDetails = {
    airtel: {
      name: 'Airtel Money',
      number: '0702345273',
      accountName: 'Muwaga Hannington',
      instructions: [
        'Dial *185# on your phone',
        'Select "Send Money"',
        `Enter number: 0702 345273`,
        donationType === 'school-fees' ? `Enter amount: ${totalFees} USD equivalent in UGX` : 'Enter the amount you wish to donate',
        'Confirm with your PIN',
        'Screenshot the confirmation and send to us on WhatsApp',
      ],
      colorClass: 'from-red-500/20 to-orange-500/10',
      borderClass: 'border-red-400/30',
      badgeClass: 'bg-red-500',
    },
    mtn: {
      name: 'MTN Mobile Money',
      number: '0773525452',
      accountName: 'Muwaga Hannington',
      instructions: [
        'Dial *165# on your phone',
        'Select "Transfer Money" then "To MTN Number"',
        `Enter number: 0773 525452`,
        donationType === 'school-fees' ? `Enter amount: ${totalFees} USD equivalent in UGX` : 'Enter the amount you wish to donate',
        'Confirm with your PIN',
        'Screenshot the confirmation and send to us on WhatsApp',
      ],
      colorClass: 'from-yellow-400/20 to-yellow-300/10',
      borderClass: 'border-yellow-400/30',
      badgeClass: 'bg-yellow-400',
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
                Your donation helps children in Uganda access education, school support, essential care, and the encouragement they need to grow into confident, hopeful adults.
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
              {[
                { icon: Users, title: 'Conservation Rangers', desc: 'Feeds and equips a conservation ranger, protecting Uganda\'s wildlife every single day.' },
                { icon: BookOpen, title: 'School Supplies', desc: 'Provides school supplies for children in rural communities around national parks.' },
                { icon: Leaf, title: 'Forest Restoration', desc: 'Plants trees for forest restoration and habitat protection for wildlife.' },
                { icon: Heart, title: 'Medical Care', desc: 'Provides medical care for community members in areas with limited healthcare access.' },
              ].map(({ icon: Icon, title, desc }, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="bg-background p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-border h-full flex flex-col">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 flex-shrink-0">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-bold text-primary mb-2">{title}</h3>
                    <p className="text-xs text-muted-foreground flex-1">{desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── STEP 1: Donation Type ── */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/5 to-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

            {/* Step indicator */}
            <ScrollReveal>
              <div className="flex items-center gap-3 justify-center mb-10">
                <span className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${!showPayment ? 'bg-primary text-primary-foreground border-primary' : 'bg-primary/20 text-primary border-primary/30'}`}>1</span>
                <div className={`h-0.5 w-16 transition-all ${showPayment ? 'bg-primary' : 'bg-border'}`} />
                <span className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${showPayment ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted text-muted-foreground border-border'}`}>2</span>
              </div>
            </ScrollReveal>

            {!showPayment ? (
              <>
                <ScrollReveal>
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-primary mb-3">What would you like to support?</h2>
                    <p className="text-muted-foreground">Choose the type of donation, then we&apos;ll show you the payment details</p>
                  </div>
                </ScrollReveal>

                {/* Donation type cards */}
                <ScrollReveal>
                  <div className="grid sm:grid-cols-2 gap-5 mb-8">
                    {/* School Fees */}
                    <button
                      onClick={() => setDonationType('school-fees')}
                      className={`text-left rounded-2xl border-2 p-6 transition-all duration-200 hover:shadow-lg ${
                        donationType === 'school-fees'
                          ? 'border-primary bg-primary/5 shadow-md'
                          : 'border-border hover:border-primary/40'
                      }`}
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                        <GraduationCap className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-bold text-primary text-lg mb-2">Sponsor School Fees</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Pay termly or yearly school fees for a child in need.
                        <span className="block mt-2 font-semibold text-accent">${TERM_FEE} USD / term per child</span>
                        <span className="text-xs text-muted-foreground">A school year has {TERMS_PER_YEAR} terms &mdash; full year = ${TERM_FEE * TERMS_PER_YEAR}</span>
                      </p>
                    </button>

                    {/* General Donation */}
                    <button
                      onClick={() => setDonationType('general')}
                      className={`text-left rounded-2xl border-2 p-6 transition-all duration-200 hover:shadow-lg ${
                        donationType === 'general'
                          ? 'border-primary bg-primary/5 shadow-md'
                          : 'border-border hover:border-primary/40'
                      }`}
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                        <HandHeart className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-bold text-primary text-lg mb-2">General Donation</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Support our conservation, medical, and community programs.
                        <span className="block mt-2 font-semibold text-accent">Any amount is welcomed</span>
                        <span className="text-xs text-muted-foreground">Every contribution creates lasting impact</span>
                      </p>
                    </button>
                  </div>
                </ScrollReveal>

                {/* School fees calculator — shown only when school-fees is selected */}
                {donationType === 'school-fees' && (
                  <ScrollReveal>
                    <div className="bg-card rounded-2xl border border-border shadow-lg p-8 mb-8">
                      <h3 className="font-bold text-primary text-xl mb-6 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-accent" />
                        Calculate School Fees
                      </h3>

                      {/* Package type */}
                      <div className="mb-6">
                        <label className="block text-sm font-semibold text-primary mb-3">Payment frequency</label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { value: 'termly', label: 'Termly', sub: `$${TERM_FEE} per child` },
                            { value: 'yearly', label: 'Full Year', sub: `$${TERM_FEE * TERMS_PER_YEAR} per child (3 terms)` },
                          ].map(opt => (
                            <button
                              key={opt.value}
                              onClick={() => setFeesPackage(opt.value as FeesPackage)}
                              className={`p-4 rounded-xl border-2 text-left transition-all ${
                                feesPackage === opt.value
                                  ? 'border-primary bg-primary/5'
                                  : 'border-border hover:border-primary/40'
                              }`}
                            >
                              <p className="font-bold text-primary text-sm">{opt.label}</p>
                              <p className="text-xs text-muted-foreground mt-0.5">{opt.sub}</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Number of children */}
                      <div className="mb-6">
                        <label className="block text-sm font-semibold text-primary mb-2">Number of children to sponsor</label>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setNumChildren(c => Math.max(1, c - 1))}
                            className="w-10 h-10 rounded-full border-2 border-border hover:border-primary/50 flex items-center justify-center font-bold text-primary transition-all"
                          >
                            &minus;
                          </button>
                          <span className="text-2xl font-bold text-primary w-10 text-center">{numChildren}</span>
                          <button
                            onClick={() => setNumChildren(c => c + 1)}
                            className="w-10 h-10 rounded-full border-2 border-border hover:border-primary/50 flex items-center justify-center font-bold text-primary transition-all"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Terms (only for termly) */}
                      {feesPackage === 'termly' && (
                        <div className="mb-6">
                          <label className="block text-sm font-semibold text-primary mb-2">Number of terms (max {TERMS_PER_YEAR})</label>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setNumTerms(t => Math.max(1, t - 1))}
                              className="w-10 h-10 rounded-full border-2 border-border hover:border-primary/50 flex items-center justify-center font-bold text-primary transition-all"
                            >
                              &minus;
                            </button>
                            <span className="text-2xl font-bold text-primary w-10 text-center">{numTerms}</span>
                            <button
                              onClick={() => setNumTerms(t => Math.min(TERMS_PER_YEAR, t + 1))}
                              className="w-10 h-10 rounded-full border-2 border-border hover:border-primary/50 flex items-center justify-center font-bold text-primary transition-all"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Total */}
                      <div className="bg-gradient-to-r from-accent/10 to-primary/5 rounded-xl p-5 border border-accent/20">
                        <p className="text-sm text-muted-foreground mb-1">Total amount</p>
                        <p className="text-3xl font-bold text-primary">${totalFees} <span className="text-lg font-normal text-muted-foreground">USD</span></p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {numChildren} child{numChildren > 1 ? 'ren' : ''} &times; {termsCount} term{termsCount > 1 ? 's' : ''} &times; ${TERM_FEE}/term
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* General donation custom amount */}
                {donationType === 'general' && (
                  <ScrollReveal>
                    <div className="bg-card rounded-2xl border border-border shadow-lg p-8 mb-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <HandHeart className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-primary text-xl mb-4">Enter Your Donation Amount</h3>
                          <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                            Support our conservation efforts, medical programs, or community development. Any amount — large or small — makes a real difference.
                          </p>
                          
                          {/* Currency & Amount Input */}
                          <div className="mb-6">
                            <label className="block text-sm font-semibold text-primary mb-3">Select Currency</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                              {(['USD', 'UGX', 'GBP', 'EUR'] as const).map((curr) => (
                                <button
                                  key={curr}
                                  onClick={() => setCurrency(curr)}
                                  className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                                    currency === curr
                                      ? 'border-accent bg-accent/10 text-accent'
                                      : 'border-border hover:border-accent/50 text-foreground'
                                  }`}
                                >
                                  {curr}
                                </button>
                              ))}
                            </div>

                            <label className="block text-sm font-semibold text-primary mb-3">Enter Amount</label>
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-semibold text-primary">{currencySymbol}</span>
                              <input
                                type="number"
                                value={customAmount}
                                onChange={(e) => setCustomAmount(e.target.value)}
                                placeholder="Enter amount..."
                                className="flex-1 px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                                min="0.01"
                                step="0.01"
                              />
                            </div>
                          </div>

                          {/* Suggested amounts */}
                          <div className="mt-5">
                            <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Suggested Amounts</p>
                            <div className="grid grid-cols-3 gap-3">
                              {[
                                { amount: '10', label: 'School supplies' },
                                { amount: '25', label: 'Medical care' },
                                { amount: '50', label: 'Tree planting' },
                              ].map(({ amount, label }) => (
                                <button
                                  key={amount}
                                  onClick={() => setCustomAmount(amount)}
                                  className={`p-3 rounded-lg border-2 transition-all text-center ${
                                    customAmount === amount
                                      ? 'border-accent bg-accent/10'
                                      : 'border-border hover:border-accent/50'
                                  }`}
                                >
                                  <p className="font-bold text-accent">${amount}</p>
                                  <p className="text-xs text-muted-foreground mt-1">{label}</p>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Proceed button */}
                {donationType && (donationType === 'school-fees' || (donationType === 'general' && customAmount)) && (
                  <ScrollReveal>
                    <button
                      onClick={() => setShowPayment(true)}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-[1.01]"
                    >
                      Continue to Payment
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </ScrollReveal>
                )}
              </>
            ) : (
              <>
                {/* ── STEP 2: Payment Details ── */}
                <ScrollReveal>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-primary mb-2">Payment Details</h2>
                    <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-sm text-foreground font-medium">
                      {donationType === 'school-fees' ? (
                        <>
                          <GraduationCap className="h-4 w-4 text-accent" />
                          School Fees &mdash; {amountLabel}
                        </>
                      ) : (
                        <>
                          <HandHeart className="h-4 w-4 text-accent" />
                          General Donation &mdash; any amount
                        </>
                      )}
                    </div>
                    <button
                      onClick={() => setShowPayment(false)}
                      className="block mx-auto mt-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      &larr; Change donation type
                    </button>
                  </div>
                </ScrollReveal>

                {/* Payment Method Tabs */}
                <ScrollReveal>
                  <div className="flex gap-3 justify-center mb-8 flex-wrap">
                    {[
                      { key: 'mobileMoney', label: 'Mobile Money', icon: '📱' },
                      { key: 'bank', label: 'Bank Transfer', icon: '🏦' },
                      { key: 'card', label: 'Card / Stripe', icon: '💳' },
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
                            <div className="text-xs mt-1 opacity-70">0773525452 · Muwaga Hannington</div>
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
                            <div className="text-xs mt-1 opacity-70">0702345273 · Muwaga Hannington</div>
                          </button>
                        </div>
                      </div>

                      <div className={`p-6 bg-gradient-to-br ${activeMobile.colorClass}`}>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-primary text-lg">{activeMobile.name}</h3>
                          <span className={`px-3 py-1 ${activeMobile.badgeClass} text-white text-xs font-bold rounded-full`}>
                            {mobileNetwork === 'mtn' ? 'MTN' : 'Airtel'}
                          </span>
                        </div>

                        <div className={`bg-card rounded-xl p-5 border ${activeMobile.borderClass} mb-4`}>
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

                        {donationType === 'school-fees' && (
                          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-4">
                            <p className="text-sm font-semibold text-primary mb-1">Reference to include in your transfer</p>
                            <p className="text-sm text-muted-foreground">
                              &quot;SCHOOL FEES &ndash; {numChildren} child{numChildren > 1 ? 'ren' : ''} &ndash; {termsCount} term{termsCount > 1 ? 's' : ''}&quot;
                            </p>
                          </div>
                        )}

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

                        {donationType === 'school-fees' && (
                          <div className="mb-5 bg-accent/10 border border-accent/20 rounded-xl p-4">
                            <p className="text-sm font-semibold text-primary mb-1">Transfer reference</p>
                            <p className="text-sm text-muted-foreground">
                              Use &quot;SCHOOL FEES &ndash; {numChildren} child{numChildren > 1 ? 'ren' : ''} &ndash; {termsCount} term{termsCount > 1 ? 's' : ''}&quot; as your payment description
                            </p>
                            <p className="text-sm font-bold text-accent mt-2">Amount: ${totalFees} USD</p>
                          </div>
                        )}

                        <div className="space-y-3">
                          {[
                            { label: 'Bank Name', value: bankDetails.bank, copyKey: null },
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
                            Include your name and &quot;DONATION&quot; or &quot;SCHOOL FEES&quot; as the payment reference. After transferring, send us your receipt via WhatsApp at{' '}
                            <a href="https://wa.me/447884181149" className="text-accent underline" target="_blank" rel="noopener noreferrer">+44 7884 181149</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Card / Stripe Panel */}
                {paymentMethod === 'card' && (
                  <ScrollReveal>
                    <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
                      <div className="p-8 text-center">
                        <div className="text-5xl mb-4">💳</div>
                        <h3 className="font-bold text-primary text-xl mb-3">Secure Card Payment via Stripe</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          Securely donate using your credit or debit card through Stripe. Accepts Visa, Mastercard, and American Express worldwide.
                        </p>
                        {donationType === 'school-fees' && (
                          <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 mb-6 text-left">
                            <p className="text-sm font-semibold text-primary mb-2">Your donation summary</p>
                            <p className="text-3xl font-bold text-accent">${totalFees} USD</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {numChildren} child{numChildren > 1 ? 'ren' : ''} &times; {termsCount} term{termsCount > 1 ? 's' : ''} &times; ${TERM_FEE}/term
                            </p>
                          </div>
                        )}
                        {donationType === 'general' && (
                          <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 mb-6 text-left">
                            <p className="text-sm font-semibold text-primary">General donation &mdash; any amount is welcome</p>
                            <p className="text-xs text-muted-foreground mt-1">You will enter your amount on the Stripe checkout page</p>
                          </div>
                        )}
                        <a
                          href="/donations/stripe"
                          className="inline-block w-full bg-gradient-to-r from-primary to-accent text-primary-foreground py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                        >
                          Proceed to Secure Payment
                        </a>
                        <p className="text-xs text-muted-foreground mt-3">Secured by Stripe. Your details are never stored by us.</p>
                      </div>
                    </div>
                  </ScrollReveal>
                )}
              </>
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
                  a: '100% of donations go directly to our conservation, community development, education, and healthcare programs. We maintain transparency with all donors.',
                },
                {
                  q: 'How much are school fees per child?',
                  a: `School fees are $${TERM_FEE} USD per term per child. A full school year consists of ${TERMS_PER_YEAR} terms, totalling $${TERM_FEE * TERMS_PER_YEAR} USD per year per child.`,
                },
                {
                  q: 'Can I sponsor a specific child?',
                  a: 'Yes! After completing your donation, WhatsApp us at +44 7884 181149 and we will connect you with a specific child and provide regular updates on their progress.',
                },
                {
                  q: 'Is my donation tax-deductible?',
                  a: 'Tax deductibility depends on your country of residence. Please consult your local tax authority. We can provide donation receipts upon request.',
                },
              ].map(({ q, a }, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <details className="group bg-background rounded-xl border border-border p-5 cursor-pointer hover:border-accent/50 transition-colors">
                    <summary className="font-semibold text-primary list-none flex justify-between items-center">
                      {q}
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0 ml-3" />
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
