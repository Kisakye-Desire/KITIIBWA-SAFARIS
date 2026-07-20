import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Image from 'next/image'
import { Award, Heart, Zap } from 'lucide-react'

export const metadata = {
  title: 'Best of KITIIBWA | Curated Highlights | KITIIBWA SAFARIS',
  description: 'Our curated selection of the very best experiences, attractions, and activities',
}

export default function BestOf() {
  const highlights = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Most Magical Gorilla Encounter',
      description: 'Our signature experience in Bwindi features expert trackers, small group sizes, and unforgettable moments with mountain gorilla families.',
      details: 'Duration: Full day | Group size: Max 6 people | Season: Year-round',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Premium Wildlife Drive',
      description: 'Early morning and late afternoon drives in Queen Elizabeth Park with open-top vehicles and experienced naturalist guides.',
      details: 'Best for: Game spotting, photography | Season: Any | Guarantee: 95% wildlife sighting rate',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Luxury Sunset Experience',
      description: 'Sunset cocktails on Lake George with hippo-watching, bird activity, and breathtaking savanna views.',
      details: 'Includes: Welcome drinks, snacks | Best time: 4-6 PM | Romantic & unforgettable',
    },
  ]

  const experiences = [
    {
      name: 'Bwindi Forest Lodge Retreat',
      description: 'Immerse yourself in luxury accommodation within the gorilla forest',
      image: '/images/safari-cottage.png',
      rating: 4.9,
    },
    {
      name: 'Kazinga Channel Boat Cruise',
      description: 'Navigate waterways filled with hippos, crocodiles, and water birds',
      image: '/images/safari-landscape.png',
      rating: 4.8,
    },
    {
      name: 'Kibale Chimpanzee Trek',
      description: 'Track habituated chimp families through ancient rainforest',
      image: '/images/bird-watching.png',
      rating: 4.7,
    },
    {
      name: 'Rwenzori Mountain Hike',
      description: 'Conquer the legendary Mountains of the Moon with expert guides',
      image: '/images/gallery-3.png',
      rating: 4.9,
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Best of Kittibwa Safaris</h1>
            <p className="text-lg text-muted-foreground">
              Curated highlights and must-experience moments from Uganda&apos;s premier safari operator
            </p>
          </div>
        </section>

        {/* Signature Experiences */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Our Signature Experiences</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-accent mb-4">{highlight.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground mb-4">{highlight.description}</p>
                  <div className="pt-4 border-t border-border text-sm text-muted-foreground">
                    {highlight.details}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Experiences */}
        <section className="py-16 md:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Top Rated Experiences</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {experiences.map((exp) => (
                <div key={exp.name} className="bg-background rounded-lg overflow-hidden shadow-lg group">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-primary mb-2">{exp.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>
                    <div className="flex items-center gap-1">
                      <span className="text-accent font-bold">{exp.rating}</span>
                      <span className="text-xs text-muted-foreground">★ Rating</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Staff Picks */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Staff Favorites</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg">
                <p className="text-2xl font-bold text-primary mb-2">"Gorilla Trek Magic"</p>
                <p className="text-muted-foreground mb-4">
                  "Nothing compares to looking into a gorilla's eyes. It's a profound moment that connects you to nature in ways
                  you never expected. Our guides make the experience seamless and unforgettable."
                </p>
                <p className="font-semibold text-primary">— John Kisoro, Founder</p>
              </div>

              <div className="bg-card p-8 rounded-lg">
                <p className="text-2xl font-bold text-primary mb-2">"Sunrise Over the Savanna"</p>
                <p className="text-muted-foreground mb-4">
                  "Watching the African sun rise over the savanna while giraffes and zebras emerge from the mist is pure poetry.
                  These moments remind us why we do this work every day."
                </p>
                <p className="font-semibold text-primary">— Dr. Sarah Kamwesiga, Wildlife Biologist</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Best?</h2>
            <p className="text-lg opacity-90 mb-8">
              Book your customized safari adventure with KITIIBWA today
            </p>
            <a
              href="/packages"
              className="inline-block bg-white text-primary hover:bg-muted px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Packages
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
