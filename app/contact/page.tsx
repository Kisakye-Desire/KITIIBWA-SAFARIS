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
    country: 'uganda',
    contactPerson: 'general',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Basic validation
      if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
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
        setSubmitMessage('Thank you! We\'ll contact you within 24 hours.')
        setFormData({ name: '', email: '', phone: '', country: 'uganda', contactPerson: 'general', subject: '', message: '' })
        // Keep message visible for 5 seconds
        setTimeout(() => setSubmitMessage(''), 5000)
      } else {
        setSubmitMessage(data.error || 'Error sending message. Please try again.')
      }
    } catch (error) {
      console.error('[Contact Form Error]', error)
      setSubmitMessage('Connection error. Please check your internet and try again.')
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

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Uganda Office */}
                  <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-3 w-3 bg-accent rounded-full"></div>
                      <h3 className="font-bold text-primary text-lg">Uganda Office</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                        <p className="text-muted-foreground">+256 702 345273</p>
                      </div>
                      <div className="flex gap-3">
                        <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                        <p className="text-muted-foreground">Mukono Access Clinic, Mukono District</p>
                      </div>
                    </div>
                  </div>

                  {/* UK Office */}
                  <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-3 w-3 bg-secondary rounded-full"></div>
                      <h3 className="font-bold text-primary text-lg">UK Office</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                        <p className="text-muted-foreground">+44 7884 181149</p>
                      </div>
                      <div className="flex gap-3">
                        <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                        <p className="text-muted-foreground">WhatsApp & Calls Available</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
                  <h3 className="font-bold text-primary mb-2">Email for Messages</h3>
                  <p className="text-muted-foreground mb-3">All messages will be sent to:</p>
                  <p className="text-primary font-semibold text-lg">kisakyedhisayar@gmail.com</p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                      Full Name *
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
                      Email Address *
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
                    <label htmlFor="country" className="block text-sm font-semibold text-primary mb-2">
                      Which Location? *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="uganda">Uganda Office</option>
                      <option value="uk">UK Office</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-semibold text-primary mb-2">
                      Subject/Inquiry Type *
                    </label>
                    <select
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="safari">Safari Booking</option>
                      <option value="donation">Donation/Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your inquiry..."
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
            <div className="w-full h-96 bg-muted rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8215387865253!2d32.5500359!3d0.3334357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db8a5d1234567%3A0x1234567890abcdef!2sMukono%20Access%20Clinic!5e0!3m2!1sen!2sug!4v1234567890123"
              ></iframe>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Mukono Access Clinic, Mukono District, Uganda. For exact directions and turn-by-turn navigation, contact us on WhatsApp.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
