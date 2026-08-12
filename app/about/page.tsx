import Header from '@/components/header'
import Footer from '@/components/footer'
import SocialIcons from '@/components/social-icons'
import Image from 'next/image'
import { SectionHeading, AnimatedCard, TextGradient } from '@/components/ui/effects'
import ScrollReveal from '@/components/scroll-reveal'
import TextReveal from '@/components/text-reveal'
import InteractiveImage from '@/components/interactive-image'
import FeatureCard from '@/components/feature-card'


export const metadata = {
  title: 'About Kitiibwa Safaris',
  description: 'Discover Kitiibwa Safaris, a Uganda-based tour operator creating authentic wildlife, gorilla, cultural, and tailor-made journeys across East Africa.',
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
                <TextGradient className="text-sm font-semibold tracking-wider uppercase">Explore. Experience. Discover.</TextGradient>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">About Kitiibwa Safaris</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Kitiibwa Safaris is a premier Uganda-based tour operator dedicated to creating unforgettable travel experiences across Uganda and East Africa. We specialize in wildlife safaris, gorilla and chimpanzee trekking, birdwatching, cultural tours, mountain adventures, and tailor-made holiday packages.
                </p>
                <p>
                  Driven by a passion for Africa&apos;s natural beauty and rich heritage, we combine local expertise, professional guides, and exceptional service to deliver authentic, safe, and memorable journeys. Whether you&apos;re seeking a luxury escape, a family holiday, or an adventurous expedition, Kitiibwa Safaris is your trusted partner for discovering the Pearl of Africa.
                </p>
                <p className="font-semibold text-primary">Explore. Experience. Discover with Kitiibwa Safaris.</p>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Meet Our Safari Team</h2>
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
                    Alizeyuna Henry is the visionary founder and Managing Director of Kitiibwa Safaris, a Uganda-based tour company headquartered in Mukono District. Inspired by Uganda&apos;s breathtaking landscapes, diverse wildlife, and vibrant cultures, Henry established Kitiibwa Safaris with a vision of sharing authentic African adventures with travellers from around the world.
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
                  Kitiibwa Safaris was founded from a deep love for Uganda&apos;s landscapes, wildlife, cultures, and the warm welcome of its people. We create journeys that reveal the country&apos;s extraordinary variety, from misty mountain forests and gorilla encounters to open savannahs, lakes, and living cultural traditions.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our local knowledge, trusted guides, and careful planning help every traveller experience Uganda with confidence and comfort. We listen closely to what matters to you, then shape a safari that balances meaningful discovery, responsible travel, and memorable moments.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From a first visit to a return adventure, our goal is simple: to make your time in the Pearl of Africa personal, seamless, and worth remembering long after you leave.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl animate-fade-in-up card-hover" style={{ animationDelay: '0.2s' }}>
                <Image
                  src="/images/gallery-5.jpg"
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
                  To be a trusted gateway to Uganda and East Africa, creating journeys that connect travellers with extraordinary nature, culture, and people.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver safe, authentic, and thoughtfully designed safaris through local expertise, professional guiding, exceptional service, and responsible tourism.
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


        {/* Safaris Team */}
        <section className="bg-card py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-12 text-center">
              <TextGradient className="text-sm font-semibold uppercase tracking-wider">The people behind your journey</TextGradient>
              <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">Meet the Kitiibwa Safaris Team</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Our team combines local knowledge, thoughtful planning, and warm hospitality to help you discover Uganda with confidence.</p>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { name: 'Grace Mwole', role: 'Team Leader', image: '/images/team/grace-mwole.jpeg', bio: 'Grace leads our people-first work, keeping every program centered on the dignity, safety, and potential of each child.' },
                { name: 'Muwaga Hannington', role: 'Head of Operation', image: '/images/team/muwaga-hannington.jpeg', bio: 'Hannington coordinates our day-to-day operations so support reaches children, families, and partner communities with care and accountability.' },
              ].map((member) => (
                <article key={member.name} className="flex flex-col gap-5 rounded-2xl border border-border bg-background p-5 shadow-sm sm:flex-row sm:items-center">
                  <Image src={member.image} alt={`${member.name}, ${member.role}`} width={220} height={260} className="h-56 w-full rounded-xl object-cover sm:w-44" />
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                    <p className="mt-1 font-semibold text-accent">{member.role}</p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
