'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function Outreach() {
  const programs = [
    {
      title: 'Wildlife Conservation',
      description: 'Our flagship conservation initiative focuses on protecting critical habitats across Uganda\'s national parks. We partner with conservationists to combat poaching, restore ecosystems, and ensure endangered species like mountain gorillas and African elephants thrive. Through anti-poaching patrols, habitat restoration projects, and wildlife monitoring, we\'re safeguarding Uganda\'s natural legacy for generations to come.',
      detailedImpact: '500+ hectares protected | 50+ anti-poaching rangers employed | 30+ species monitored',
      yearsActive: '15 years',
      icon: '🌿',
    },
    {
      title: 'Community Education',
      description: 'We believe education is the key to sustainable development. Our scholarship program supports underprivileged children from villages surrounding our operating areas, providing access to primary and secondary education. We also conduct environmental awareness programs teaching young people about conservation and sustainable practices.',
      detailedImpact: '200+ students supported | 30 schools partnered | 10,000+ youth educated',
      yearsActive: '12 years',
      icon: '📚',
    },
    {
      title: 'Women Empowerment',
      description: 'We empower women as leaders in tourism and conservation. Through comprehensive training programs, we equip women with skills in hospitality, nature guiding, business management, and conservation. Many of our guides and lodge managers are women who have transformed their lives and become role models in their communities.',
      detailedImpact: '100+ women trained | 60% employed in tourism | 40+ businesses started',
      yearsActive: '10 years',
      icon: '👩‍💼',
    },
    {
      title: 'Healthcare Initiatives',
      description: 'In partnership with local health centers, we provide medical support to remote communities with limited access to healthcare. Our initiatives include mobile health clinics, maternal and child health programs, emergency medical support, and health education focusing on disease prevention and wellness in underserved areas.',
      detailedImpact: '5,000+ lives reached | 20 health camps organized | 500+ emergencies supported',
      yearsActive: '8 years',
      icon: '🏥',
    },
    {
      title: 'Sustainable Livelihoods',
      description: 'We create economic opportunities while protecting the environment through eco-friendly livelihood programs. From beekeeping to eco-tourism micro-enterprises, we help local families generate sustainable income without harming wildlife. Our programs reduce dependency on subsistence hunting and promote conservation-friendly practices.',
      detailedImpact: '150+ families employed | 50+ enterprises launched | $200K+ generated',
      yearsActive: '9 years',
      icon: '🌱',
    },
    {
      title: 'Cultural Preservation',
      description: 'We celebrate and preserve Uganda\'s rich cultural heritage by supporting indigenous communities and traditional practices. Our programs document cultural knowledge, support traditional artisans, promote cultural tourism, and ensure younger generations learn their heritage. We work closely with cultural leaders to maintain authentic traditions.',
      detailedImpact: '20+ cultural groups supported | 100+ artisans empowered | 5 cultural centers',
      yearsActive: '11 years',
      icon: '🎭',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">KITIIBWA Outreach</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Creating positive impact through conservation, education, and community empowerment
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  At KITIIBWA SAFARIS, we believe responsible tourism goes beyond wildlife viewing. It means actively giving back to the communities and ecosystems that make these experiences possible.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our outreach initiatives focus on three pillars: protecting Uganda's natural heritage, empowering local communities, and preserving cultural traditions. Every safari booking contributes a portion of revenue toward these vital programs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We partner with local NGOs, government agencies, and community leaders to ensure sustainable impact and transparent resource allocation.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/real-buffalo.jpg"
                  alt="Community Conservation Efforts"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Programs */}
        <section className="py-16 md:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Making a difference across conservation, education, health, and community development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {programs.map((program, idx) => (
                <div key={idx} className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-accent">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{program.icon}</div>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">{program.yearsActive}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded">
                    <p className="text-primary font-semibold text-sm mb-2">Impact to date:</p>
                    <p className="text-muted-foreground text-sm font-medium">{program.detailedImpact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">1,000+</div>
                <p className="opacity-90 text-sm">People Directly Helped</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
                <p className="opacity-90 text-sm">Lives Reached Through Programs</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <p className="opacity-90 text-sm">Hectares Protected</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">$500K+</div>
                <p className="opacity-90 text-sm">Funds Allocated to Outreach</p>
              </div>
            </div>
          </div>
        </section>

        {/* Make a Difference CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 md:p-12 text-center">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Make a Difference</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your donation directly supports wildlife conservation, community education, healthcare, and sustainable livelihoods in Uganda. Every contribution matters and creates lasting positive change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/donations"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Donate Now
                </Link>
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-card">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">How are funds utilized?</h3>
                <p className="text-muted-foreground">
                  All donations are transparently allocated toward direct community programs, conservation efforts, educational initiatives, and healthcare support. We maintain detailed records and share annual impact reports.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Can I visit the outreach programs?</h3>
                <p className="text-muted-foreground">
                  Yes! Many of our safaris include community visits and conservation site tours. Contact us to arrange specific outreach experiences during your safari.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Do donations receive tax benefits?</h3>
                <p className="text-muted-foreground">
                  We are registered as a legitimate charitable organization. Donors can inquire about tax deductibility status for their country of residence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">How can I volunteer?</h3>
                <p className="text-muted-foreground">
                  We welcome passionate volunteers! Contact our outreach coordinator at dynamicyoo@gmail.com or call +256 708898424 to discuss volunteer opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-3">Kasuni Women's Cooperative</h3>
                <p className="text-muted-foreground mb-4">
                  Through our women empowerment program, Kasuni and 49 other women learned tourism hospitality skills. Today, they run a successful cooperative providing services to lodges and earning sustainable income.
                </p>
                <p className="text-accent font-semibold text-sm">Average income: 4x increase in 2 years</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-3">Bwindi School Scholarship Fund</h3>
                <p className="text-muted-foreground mb-4">
                  We've sponsored 200+ students through primary and secondary education in Bwindi communities. 85% of scholarship recipients complete secondary school and pursue higher education.
                </p>
                <p className="text-accent font-semibold text-sm">Next goal: 500 students by 2028</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
