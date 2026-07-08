'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import { TextGradient } from '@/components/ui/effects'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage('Thank you! We\'ll get back to you soon.')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setSubmitMessage('Error sending message. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again.')
    }

    setIsSubmitting(false)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 80% 50%, #D4A574 0%, transparent 60%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="animate-fade-in-up mb-4">
              <TextGradient className="text-sm font-semibold tracking-wider uppercase">Let's Connect</TextGradient>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Get in Touch</h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Have questions? Our team is ready to help plan your perfect safari adventure
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-primary">Phone</p>
                      <p className="text-muted-foreground">Uganda: +256 708898424</p>
                      <p className="text-muted-foreground">UK: +44 7498605656</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-primary">Email</p>
                      <p className="text-muted-foreground">dynamicyoo@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-primary">Address</p>
                      <p className="text-muted-foreground">Mukono District, Uganda</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-primary">Operating Hours</p>
                      <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM EAT</p>
                      <p className="text-muted-foreground">Saturday: 9:00 AM - 4:00 PM EAT</p>
                      <p className="text-muted-foreground">Sunday: Closed (Emergency line available)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">Quick Response</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Need immediate assistance? Chat with us on WhatsApp or call our emergency line
                  </p>
                  <a
                    href="https://wa.me/256763705967"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:text-accent transition-colors"
                  >
                    Message on WhatsApp →
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Safari inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your safari dreams..."
                    />
                  </div>

                  {submitMessage && (
                    <div
                      className={`p-4 rounded-lg text-center font-semibold ${
                        submitMessage.includes('Thank')
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-accent text-primary-foreground py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Our Location</h2>
            <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Map placeholder - Bwindi Impenetrable National Park, Uganda. Contact us for exact coordinates and directions.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
