import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Image from 'next/image'
import ScrollReveal from '@/components/scroll-reveal'
import InteractiveImage from '@/components/interactive-image'
import FeatureCard from '@/components/feature-card'
import { TextGradient } from '@/components/ui/effects'
import Link from 'next/link'

export const metadata = {
  title: 'Uganda | Destination Guide | KITIIBWA SAFARIS',
  description: 'Explore Uganda - Pearl of Africa with KITIIBWA SAFARIS',
}

export default function Uganda() {
  const attractions = [
    {
      name: 'Bwindi Impenetrable National Park',
      description:
        'Home to nearly half of the world\'s mountain gorillas. Trekking here is a life-changing experience with dense forest and unique biodiversity.',
      location: 'Southwestern Uganda',
      bestSeason: 'June-August, December-February',
      highlights: 'Mountain gorilla trekking, forest walks, bird watching',
      image: '/images/hero-safari.png',
    },
    {
      name: 'Queen Elizabeth National Park',
      description:
        'Uganda\'s most visited national park featuring vast savannas, the Kazinga Channel with hippos and birds, and tree-climbing lions.',
      location: 'Western Uganda',
      bestSeason: 'All year round',
      highlights: 'Wildlife drives, boat cruises, bird watching, fishing',
      image: '/images/safari-landscape.png',
    },
    {
      name: 'Rwenzori Mountains',
      description:
        'The legendary "Mountains of the Moon" offering spectacular hiking, dramatic landscapes, and unique alpine ecosystems.',
      location: 'Western Uganda',
      bestSeason: 'June-August, December-January',
      highlights: 'Mountain trekking, scenic views, waterfalls',
      image: '/images/gallery-3.png',
    },
    {
      name: 'Kibale Forest National Park',
      description:
        'Ancient tropical rainforest home to chimpanzees, monkeys, and over 375 bird species. Perfect for forest walks and primate encounters.',
      location: 'Western Uganda',
      bestSeason: 'June-August, December-February',
      highlights: 'Chimpanzee tracking, forest walks, bird watching',
      image: '/images/chimp-2.jpg',
    },
  ]

  const facts = [
    { label: 'Total Area', value: '241,038 km²' },
    { label: 'Population', value: '45+ million' },
    { label: 'Wildlife Species', value: '1,000+' },
    { label: 'Bird Species', value: '1,000+' },
    { label: 'National Parks', value: '10' },
    { label: 'Official Language', value: 'English' },
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
                <TextGradient className="text-sm font-semibold tracking-wider uppercase">Destination Guide</TextGradient>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
                Uganda: The Pearl of Africa
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Discover a land of incredible biodiversity, ancient forests, dramatic mountains, and unmatched wildlife experiences. From mountain gorillas to tree-climbing lions, Uganda awaits your adventure.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* About Uganda */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background via-card/50 to-background relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 0% 100%, #D4A574 0%, transparent 60%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Welcome to Uganda</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Uganda is often called the "Pearl of Africa" for its remarkable beauty, incredible wildlife, and warm people. Straddling the equator in East-Central Africa, Uganda offers diverse landscapes from tropical forests to volcanic mountains and vast savannas.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    With over 1,000 bird species and home to nearly 50% of Africa's remaining forest elephants, Uganda is a biodiversity hotspot. The country is particularly renowned for mountain gorilla trekking in Bwindi, one of the world's most coveted wildlife experiences.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    The country boasts a fascinating culture, hospitable people, and a rich history of conservation efforts that make it an ideal destination for conscious travelers seeking authentic African experiences.
                  </p>
                  <Link href="/packages" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group">
                    Explore Our Packages <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl card-hover">
                  <Image
                    src="/images/safari-landscape.png"
                    alt="Uganda Landscape"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Key Facts */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Uganda At A Glance</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facts.map((fact, idx) => (
                <ScrollReveal key={fact.label} delay={idx * 0.08} direction={idx % 3 === 0 ? 'up' : idx % 3 === 1 ? 'left' : 'right'}>
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 border border-border hover:border-accent/50 card-hover group overflow-hidden relative">
                    {/* Gradient accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <p className="text-muted-foreground text-xs mb-3 font-semibold uppercase tracking-widest">{fact.label}</p>
                    <p className="text-5xl font-bold text-gradient">{fact.value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Attractions */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Premier Destinations</h2>
            </ScrollReveal>

            <div className="space-y-12">
              {attractions.map((attraction, idx) => (
                <ScrollReveal key={attraction.name} delay={idx * 0.1} direction={idx % 2 === 0 ? 'left' : 'right'}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                  {idx % 2 === 0 ? (
                    <>
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">{attraction.name}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{attraction.description}</p>

                        <div className="space-y-2 mb-4">
                          <div>
                            <p className="text-sm font-semibold text-primary">Location</p>
                            <p className="text-muted-foreground">{attraction.location}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-primary">Best Season</p>
                            <p className="text-muted-foreground">{attraction.bestSeason}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-primary">Highlights</p>
                            <p className="text-muted-foreground">{attraction.highlights}</p>
                          </div>
                        </div>
                      </div>
                      <InteractiveImage
                        src={attraction.image}
                        alt={attraction.name}
                        width={400}
                        height={320}
                        className="h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
                      />
                    </>
                  ) : (
                    <>
                      <InteractiveImage
                        src={attraction.image}
                        alt={attraction.name}
                        width={400}
                        height={320}
                        className="h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">{attraction.name}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{attraction.description}</p>

                        <div className="space-y-2 mb-4">
                          <div>
                            <p className="text-sm font-semibold text-primary">Location</p>
                            <p className="text-muted-foreground">{attraction.location}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-primary">Best Season</p>
                            <p className="text-muted-foreground">{attraction.bestSeason}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-primary">Highlights</p>
                            <p className="text-muted-foreground">{attraction.highlights}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Visitor Info */}
        <section className="py-16 md:py-24 bg-gradient-safari text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #D4A574 0%, transparent 70%)',
          }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center animate-fade-in-up">Practical Information</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0} direction="up">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 card-hover group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">✈️</div>
                  <h3 className="text-xl font-bold mb-3">Getting There</h3>
                  <p className="opacity-90 leading-relaxed text-sm">
                    Entebbe International Airport is the main gateway. Most flights connect through Addis Ababa, Dubai, or Amsterdam. KITIIBWA can arrange airport transfers and visa assistance.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100} direction="up">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 card-hover group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌞</div>
                  <h3 className="text-xl font-bold mb-3">Best Time to Visit</h3>
                  <p className="opacity-90 leading-relaxed text-sm">
                    June-August and December-February offer the best weather. However, Uganda is beautiful year-round. Rainy seasons bring lush landscapes and fewer tourists.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200} direction="up">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 card-hover group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎒</div>
                  <h3 className="text-xl font-bold mb-3">What to Pack</h3>
                  <p className="opacity-90 leading-relaxed text-sm">
                    Binoculars, camera, insect repellent, sun protection, and layers for mountain regions. Our packing guide will be provided upon booking.
                  </p>
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
