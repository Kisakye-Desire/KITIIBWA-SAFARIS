import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import SocialIcons from '@/components/social-icons'
import Image from 'next/image'
import { SectionHeading, AnimatedCard, TextGradient } from '@/components/ui/effects'
import ScrollReveal from '@/components/scroll-reveal'
import TextReveal from '@/components/text-reveal'
import InteractiveImage from '@/components/interactive-image'
import FeatureCard from '@/components/feature-card'


export const metadata = {
  title: 'About Us | KITIIBWA SAFARIS',
  description: 'Learn about KITIIBWA SAFARIS - Our mission, values, and expert team',
}

export default function About() {
  const teamMembers = [
    {
      name: 'Alizeyuna Henry',
      role: 'Founder & Managing Director',
      bio: 'Alizeyuna Henry is the visionary founder and Managing Director of Kitiibwa Safaris. Headquartered in Mukono District, Alizeyuna established the company with a passion for sharing Uganda\'s breathtaking landscapes, diverse wildlife, and vibrant cultures with travelers worldwide. With hands-on experience exploring Uganda\'s national parks, Alizeyuna is committed to creating memorable safari experiences that combine adventure, conservation, and genuine local hospitality.',
      image: '/images/ceo-profile.jpg',
      facebook: 'https://facebook.com/alizeyunahenry',
      instagram: 'https://www.instagram.com/kitiibwa_safaris_?utm_source=qr',
    },
  ]

  const coreValues = [
    {
      title: 'Adventure',
      description: 'We believe in the transformative power of exploration and discovery in pristine natural environments.',
    },
    {
      title: 'Conservation',
      description: 'We are committed to protecting Uganda\'s wildlife and ecosystems for future generations through sustainable practices.',
    },
    {
      title: 'Authenticity',
      description: 'We provide genuine connections with local communities and authentic African experiences, not staged performances.',
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in service, safety, and professionalism across all our operations.',
    },
    {
      title: 'Community',
      description: 'We invest in local communities, creating opportunities and supporting development in areas we operate.',
    },
    {
      title: 'Innovation',
      description: 'We continuously improve our offerings by embracing new ideas while respecting traditional ways of life.',
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
                <TextGradient className="text-sm font-semibold tracking-wider uppercase">Our Journey</TextGradient>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">About KITIIBWA SAFARIS</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Pioneering premium African safari experiences with a commitment to conservation, community empowerment, and authentic cultural connections that transform lives and protect our planet.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 0% 100%, #D4A574 0%, transparent 60%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Meet The Founder</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <InteractiveImage
                  src="/images/ceo-profile.jpg"
                  alt="Alizeyuna Henry - Founder"
                  width={400}
                  height={500}
                  className="h-96 rounded-lg overflow-hidden shadow-2xl"
                />
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="space-y-6">
                  <div>
                    <TextReveal className="text-2xl font-bold text-primary mb-2">Alizeyuna Henry</TextReveal>
                    <p className="text-accent font-semibold text-lg">Founder & Managing Director</p>
                  </div>
                  <TextReveal delay={0.1} stagger>
                    Alizeyuna Henry is the visionary founder and Managing Director of Kitiibwa Safaris, a Uganda-based tour company headquartered in Mukono District. Inspired by Uganda's breathtaking landscapes, diverse wildlife, and vibrant cultures, Henry established Kitiibwa Safaris with a vision of sharing authentic African adventures with travellers from around the world.
                  </TextReveal>
                  <TextReveal delay={0.2} stagger>
                    With hands-on experience exploring Uganda's national parks and natural attractions, Henry is passionate about creating memorable safari experiences that combine adventure, conservation, and genuine local hospitality. His commitment to quality service and personalized travel ensures that every journey reflects the beauty and spirit of the Pearl of Africa.
                  </TextReveal>
                  <TextReveal delay={0.3} stagger>
                    Under his leadership, Kitiibwa Safaris continues to promote responsible tourism by connecting visitors with Uganda's incredible wildlife, scenic landscapes, and rich cultural heritage while supporting sustainable travel practices.
                  </TextReveal>
                  <div className="p-6 bg-gradient-to-r from-accent/10 to-secondary/5 rounded-lg border-l-4 border-accent hover:shadow-lg transition-shadow duration-300">
                    <p className="text-primary italic font-semibold">
                      &quot;Every safari is more than a journey—it&apos;s an opportunity to experience the wild, connect with nature, and create memories that last a lifetime.&quot;
                    </p>
                  </div>
                  <SocialIcons
                    facebook="https://facebook.com/alizeyunahenry"
                    instagram="https://www.instagram.com/kitiibwa_safaris_?utm_source=qr"
                    twitter="https://twitter.com/kitiibwasafaris"
                    size="lg"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 100% 50%, #2D5F3F 0%, transparent 60%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  KITIIBWA SAFARIS was born from a passion to share Uganda's untamed beauty responsibly. Our mission has always been to create transformative safari experiences that leave guests awestruck while supporting local communities and conservation efforts.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The word &quot;KITIIBWA&quot; means &quot;to be proud&quot; in Luganda, reflecting our pride in Uganda's
                  natural heritage and our commitment to sustainable tourism practices.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we operate across Uganda's most pristine destinations, from the misty forests of Bwindi to the
                  vast savannas of Queen Elizabeth, with a team of dedicated guides and hospitality professionals committed
                  to excellence.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl animate-fade-in-up card-hover" style={{ animationDelay: '0.2s' }}>
                <Image
                  src="/images/gallery-6.png"
                  alt="Uganda Wildlife"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Africa's most respected safari company, recognized for creating transformative wildlife experiences that inspire conservation, empower communities, and foster a deep appreciation for the natural world. We envision a future where responsible tourism protects Uganda's magnificent ecosystems while connecting people across cultures through authentic adventure.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To curate exceptional safari experiences that showcase Uganda's incredible wildlife and landscapes while supporting conservation efforts and uplifting local communities. We're committed to delivering personalized service, sustainable tourism practices, and unforgettable journeys that create lasting memories and positive impact on both our guests and the environments we operate in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Our Core Values</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon="🌿"
                title="Conservation"
                description="We are committed to protecting Uganda's wildlife and ecosystems for future generations through sustainable practices."
                delay={0}
              />
              <FeatureCard
                icon="🤝"
                title="Community"
                description="We invest in local communities, creating opportunities and supporting development through authentic engagement."
                delay={50}
              />
              <FeatureCard
                icon="⭐"
                title="Excellence"
                description="We maintain the highest standards in service, safety, and professionalism across all our operations."
                delay={100}
              />
              <FeatureCard
                icon="🌍"
                title="Authenticity"
                description="We provide genuine connections with local cultures and authentic African experiences, not staged performances."
                delay={150}
              />
              <FeatureCard
                icon="🗺️"
                title="Adventure"
                description="We believe in the transformative power of exploration and discovery in pristine natural environments."
                delay={200}
                highlight
              />
              <FeatureCard
                icon="💡"
                title="Innovation"
                description="We continuously improve our offerings while respecting traditional ways of life and cultural heritage."
                delay={250}
                highlight
              />
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">Our Expert Team</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                  Meet the passionate professionals dedicated to creating unforgettable safari experiences and protecting Uganda's natural heritage.
                </p>
              </ScrollReveal>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, idx) => (
                <ScrollReveal key={member.name} delay={idx * 0.1} direction={idx % 2 === 0 ? 'up' : 'down'}>
                  <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group border border-border hover:border-accent/50">
                    {/* Gradient accent bar at top */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-accent transition-colors">{member.name}</h3>
                      <p className="text-accent font-semibold text-sm mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">{member.bio}</p>
                      {(member.facebook || member.instagram || member.linkedin || member.twitter) && (
                        <div className="pt-3 border-t border-border">
                          <SocialIcons
                            facebook={member.facebook}
                            instagram={member.instagram}
                            linkedin={member.linkedin}
                            twitter={member.twitter}
                            size="sm"
                          />
                        </div>
                      )}
                    </div>
                  </div>
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
