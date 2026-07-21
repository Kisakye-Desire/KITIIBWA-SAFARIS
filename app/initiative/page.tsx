'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import { TextGradient } from '@/components/ui/effects'
import FeatureCard from '@/components/feature-card'
import ImpactGallery from '@/components/impact-gallery'

export default function Initiative() {
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
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 100% 0%, #2D5F3F 0%, transparent 50%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="mb-4">
                <TextGradient className="text-sm font-semibold tracking-wider uppercase">Social Impact</TextGradient>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Kitiibwa Children Initiative</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Creating positive impact through wildlife conservation, education, community empowerment, and sustainable development across Uganda's communities and ecosystems.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background via-card/50 to-background relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 0% 100%, #D4A574 0%, transparent 60%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    At KITIIBWA SAFARIS, we believe responsible tourism goes beyond wildlife viewing. It means actively giving back to the communities and ecosystems that make these experiences possible.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our initiatives focus on three pillars: protecting Uganda's natural heritage, empowering local communities, and preserving cultural traditions. Every safari booking contributes a portion of revenue toward these vital programs.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We partner with local NGOs, government agencies, and community leaders to ensure sustainable impact and transparent resource allocation.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl card-hover">
                  <Image
                    src="/images/gallery-6.png"
                    alt="Community Conservation Efforts"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Our Programs */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Programs</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Making a tangible difference across conservation, education, health, and community development across Uganda
                </p>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {programs.map((program, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1} direction={idx % 2 === 0 ? 'up' : 'down'}>
                  <div className="bg-background rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-accent/50 group overflow-hidden relative card-hover flex flex-col h-full">
                    {/* Gradient accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Program icon header */}
                    <div className="bg-gradient-to-br from-primary/10 to-accent/5 p-6 flex items-center gap-4 border-b border-border">
                      <div className="text-5xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">{program.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{program.title}</h3>
                        <p className="text-xs text-accent font-semibold">{program.yearsActive} active</p>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-1">{program.description}</p>
                      <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border border-primary/10 group-hover:border-accent/30 transition-all duration-300 mt-auto">
                        <p className="text-primary font-semibold text-xs mb-2 uppercase tracking-wider">Impact to date</p>
                        <p className="text-muted-foreground text-sm font-medium">{program.detailedImpact}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 md:py-24 bg-gradient-safari text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #D4A574 0%, transparent 70%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">Our Impact</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto">
              <ScrollReveal delay={0} direction="up">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 card-hover text-center w-full">
                  <div className="text-5xl md:text-6xl font-bold mb-3 text-accent animate-fade-in-up">100</div>
                  <p className="opacity-95 text-sm font-medium text-center">People Directly Helped</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1} direction="up">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 card-hover text-center w-full">
                  <div className="text-5xl md:text-6xl font-bold mb-3 text-accent animate-fade-in-up" style={{ animationDelay: '0.1s' }}>200</div>
                  <p className="opacity-95 text-sm font-medium text-center">Lives Reached Through Programs</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Make a Difference CTA */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/20 rounded-2xl p-8 md:p-12 text-center border border-accent/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 card-hover">
                <div className="mb-4 inline-flex items-center justify-center">
                  <Heart className="h-12 w-12 text-accent animate-pulse-subtle" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Make a Difference</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
                  Your donation directly supports wildlife conservation, community education, healthcare initiatives, and sustainable livelihoods across Uganda. Every contribution creates lasting, measurable positive change.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/donations"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg duration-300 shadow-lg"
                  >
                    Donate Now
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg duration-300 shadow-lg"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Impact Gallery */}
        <ImpactGallery />

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background via-card/50 to-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
            </ScrollReveal>
            <div className="space-y-4">
              {[
                {
                  q: 'How are funds utilized?',
                  a: 'All donations are transparently allocated toward direct community programs, conservation efforts, educational initiatives, and healthcare support. We maintain detailed records and share annual impact reports.'
                },
                {
                  q: 'Can I visit the outreach programs?',
                  a: 'Yes! Many of our safaris include community visits and conservation site tours. Contact us to arrange specific outreach experiences during your safari.'
                },
                {
                  q: 'Do donations receive tax benefits?',
                  a: 'We are registered as a legitimate charitable organization. Donors can inquire about tax deductibility status for their country of residence.'
                },
                {
                  q: 'How can I volunteer?',
                  a: 'We welcome passionate volunteers! Contact our outreach coordinator at dynamicyoo@gmail.com or call +256 708898424 to discuss volunteer opportunities.'
                }
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg card-hover">
                    <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">{item.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Success Stories</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal delay={0} direction="left">
                <div className="bg-gradient-to-br from-accent/10 to-secondary/5 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-accent/50 card-hover">
                  <div className="h-12 w-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center mb-4 text-xl font-bold">
                    👩‍💼
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Kasuni Women's Cooperative</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Through our women empowerment program, Kasuni and 49 other women learned tourism hospitality skills. Today, they run a successful cooperative providing services to lodges and earning sustainable income.
                  </p>
                  <p className="text-accent font-semibold text-sm">📈 Average income: 4x increase in 2 years</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15} direction="right">
                <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/50 card-hover">
                  <div className="h-12 w-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4 text-xl font-bold">
                    🎓
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Bwindi School Scholarship Fund</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We've sponsored 200+ students through primary and secondary education in Bwindi communities. 85% of scholarship recipients complete secondary school and pursue higher education.
                  </p>
                  <p className="text-primary font-semibold text-sm">🎯 Next goal: 500 students by 2028</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
