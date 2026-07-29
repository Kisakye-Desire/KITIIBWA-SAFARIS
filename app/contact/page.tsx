'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Globe } from 'lucide-react'
import { useState } from 'react'
import { TextGradient, SectionHeading } from '@/components/ui/effects'
import ScrollReveal from '@/components/scroll-reveal'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'uganda',
    contactPerson: 'general',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
        setSubmitStatus('error')
        setSubmitMessage('Please fill in all required fields.')
        setIsSubmitting(false)
        return
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage("Thank you! Your message has been sent. We'll get back to you within 24 hours.")
        setFormData({ name: '', email: '', phone: '', country: 'uganda', contactPerson: 'general', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Error sending message. Please try contacting us on WhatsApp.')
      }
    } catch (error) {
      console.error('[Contact Form Error]', error)
      setSubmitStatus('error')
      setSubmitMessage('Connection error. Please contact us directly on WhatsApp or email.')
    }

    setIsSubmitting(false)
  }

  const officeInfo = {
    uganda: {
      label: 'Uganda Office',
      flag: '🇺🇬',
      phone: '+256 702 345273',
      whatsapp: '+256 702 345273',
      email: 'info@kitiibwasafaris.com',
      address: 'Mukono Town, Kampala Jinja Road, Opposite Harred Petrol Station, Uganda',
      hours: 'Mon–Fri: 8:00 AM – 6:00 PM EAT',
      color: 'from-yellow-500/20 to-red-500/10',
      border: 'border-yellow-500/30',
      mapUrl: 'https://maps.app.goo.gl/Rj61wwRRMbw7RREW8',
    },
    uk: {
      label: 'UK Representative',
      flag: '🇬🇧',
      phone: '+44 7884 181149',
      whatsapp: '+44 7884 181149',
      email: 'info@kitiibwasafaris.com',
      address: 'United Kingdom',
      hours: 'Mon–Fri: 9:00 AM – 5:00 PM GMT',
      color: 'from-blue-500/20 to-red-500/10',
      border: 'border-blue-500/30',
    },
  }

  const activeOffice = officeInfo[formData.country as keyof typeof officeInfo] || officeInfo.uganda
  const waNumber = formData.country === 'uk' ? '447884181149' : '447884181149'
  const waLink = `https://wa.me/${waNumber}?text=Hello%20KITIIBWA%20SAFARIS%2C%20I%20found%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20safari%20services.`

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-16 md:py-28 bg-gradient-to-b from-primary/15 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 80% 50%, #D4A574 0%, transparent 60%), radial-gradient(circle at 20% 80%, #2D5F3F 0%, transparent 50%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="mb-4">
                <TextGradient className="text-sm font-semibold tracking-wider uppercase">Get in Touch</TextGradient>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance leading-tight">
                Let&apos;s Plan Your<br />
                <span className="text-accent">Perfect Safari</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Whether you&apos;re dreaming of gorilla trekking, wildlife safaris, or community experiences — our team in Uganda and the UK is ready to help bring your adventure to life.
              </p>
            </ScrollReveal>

            {/* Quick contact pills */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-sm transition-all hover:scale-105 shadow-lg"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href="mailto:info@kitiibwasafaris.com?subject=KITIIBWA%20SAFARIS%20Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-110 shadow-lg active:scale-95"
                  title="Click to open your email client and send to info@kitiibwasafaris.com"
                >
                  <Mail className="h-5 w-5" />
                  Email Us Directly
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Office Selector + Contact Cards */}
        <section className="py-12 bg-gradient-to-b from-background to-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Our Offices</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Uganda Office */}
              <ScrollReveal delay={0}>
                <div className="bg-gradient-to-br from-yellow-500/10 to-red-500/5 border border-yellow-500/25 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">🇺🇬</span>
                    <div>
                      <h3 className="font-bold text-primary text-xl">Uganda Office</h3>
                      <p className="text-sm text-accent font-semibold">Main Operations</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Phone</p>
                        <a href="tel:+256702345273" className="text-foreground hover:text-accent transition-colors font-semibold">+256 702 345273</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Address</p>
                        <p className="text-foreground text-sm">Mukono Access Clinic, Mukono District, Uganda</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Hours (EAT)</p>
                        <p className="text-foreground text-sm">Mon–Fri: 8:00 AM – 6:00 PM</p>
                        <p className="text-foreground text-sm">Saturday: 9:00 AM – 2:00 PM</p>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/447884181149?text=Hello%20KITIIBWA%20SAFARIS%20Uganda%20office%2C%20I%20would%20like%20to%20inquire%20about%20a%20safari."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-semibold transition-all"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp Uganda
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* UK Office */}
              <ScrollReveal delay={0.1}>
                <div className="bg-gradient-to-br from-blue-500/10 to-red-500/5 border border-blue-500/25 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">🇬🇧</span>
                    <div>
                      <h3 className="font-bold text-primary text-xl">UK Representative</h3>
                      <p className="text-sm text-accent font-semibold">International Inquiries</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                        <a href="tel:+447884181149" className="text-foreground hover:text-accent transition-colors font-semibold">+44 7884 181149</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Email</p>
                        <a href="mailto:info@kitiibwasafaris.com" className="text-foreground hover:text-accent transition-colors text-sm">info@kitiibwasafaris.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Location</p>
                        <p className="text-foreground text-sm">United Kingdom</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Hours (GMT)</p>
                        <p className="text-foreground text-sm">Mon–Fri: 9:00 AM – 5:00 PM</p>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/447884181149?text=Hello%20KITIIBWA%20SAFARIS%20UK%20representative%2C%20I%20would%20like%20to%20inquire%20about%20a%20safari."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-semibold transition-all"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp UK
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/5 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Left Info */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <TextGradient className="text-sm font-semibold tracking-wider uppercase mb-3">Send a Message</TextGradient>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-balance">We&apos;d Love to Hear From You</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Fill in the form and choose which office you&apos;d like to contact. We respond to all inquiries within 24 hours. For urgent matters, use WhatsApp for the fastest response.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-sm">Fastest Response</p>
                        <p className="text-muted-foreground text-xs">WhatsApp: +44 7884 181149</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-primary text-sm mb-2">Location</p>
                        <p className="text-muted-foreground text-xs mb-3">{officeInfo[country as keyof typeof officeInfo].address}</p>
                        {officeInfo[country as keyof typeof officeInfo]?.mapUrl && (
                          <a 
                            href={officeInfo[country as keyof typeof officeInfo].mapUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-xs font-semibold transition-colors"
                          >
                            View on Google Maps →
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-sm">Email</p>
                        <p className="text-muted-foreground text-xs">info@kitiibwasafaris.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-sm">Response Time</p>
                        <p className="text-muted-foreground text-xs">Within 24 hours (business days)</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <ScrollReveal delay={0.1}>
                  <div className="bg-card rounded-2xl p-8 md:p-10 shadow-xl border border-border">
                    <h3 className="text-xl font-bold text-primary mb-6">Send Us a Message</h3>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Office Selection */}
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-3">Which office would you like to contact? *</label>
                        <div className="grid grid-cols-2 gap-3">
                          {['uganda', 'uk'].map((office) => (
                            <button
                              key={office}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, country: office }))}
                              className={`p-3 rounded-xl border-2 transition-all flex items-center gap-2 font-semibold text-sm ${
                                formData.country === office
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-border hover:border-primary/50 text-muted-foreground'
                              }`}
                            >
                              <span>{office === 'uganda' ? '🇺🇬' : '🇬🇧'}</span>
                              <span>{office === 'uganda' ? 'Uganda' : 'UK'}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name + Email row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      {/* Phone + Inquiry Type */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        <div>
                          <label htmlFor="contactPerson" className="block text-sm font-semibold text-primary mb-2">Inquiry Type *</label>
                          <select
                            id="contactPerson"
                            name="contactPerson"
                            value={formData.contactPerson}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                          >
                            <option value="general">General Inquiry</option>
                            <option value="safari">Safari Booking</option>
                            <option value="donation">Donation / Support</option>
                            <option value="partnership">Partnership Opportunity</option>
                          </select>
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                          placeholder="What is this regarding?"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                          placeholder="Tell us about your inquiry, travel dates, group size, or any special requirements..."
                        />
                      </div>

                      {/* Status Message */}
                      {submitStatus !== 'idle' && (
                        <div className={`p-4 rounded-xl flex items-start gap-3 ${
                          submitStatus === 'success'
                            ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
                            : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
                        }`}>
                          <span className="flex-shrink-0 font-bold">{submitStatus === 'success' ? '✓' : '!'}</span>
                          <p className="text-sm font-medium">{submitMessage}</p>
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:to-accent hover:from-accent text-primary-foreground py-3.5 rounded-xl font-bold text-base transition-all transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-muted-foreground">
                        Your message will be sent to <span className="text-primary font-semibold">info@kitiibwasafaris.com</span>. We respond within 24 hours.
                      </p>
                    </form>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-12 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-primary mb-6">Find Us in Uganda</h2>
            </ScrollReveal>
            <div className="w-full h-80 bg-muted rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8215387865253!2d32.5500359!3d0.3334357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db8a5d1234567%3A0x1234567890abcdef!2sMukono%20Access%20Clinic!5e0!3m2!1sen!2sug!4v1234567890123"
              />
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Mukono Access Clinic, Mukono District, Uganda. Contact us on WhatsApp for exact directions.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
