import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Image from 'next/image'

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
      image: '/images/bird-watching.png',
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
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
              Uganda: The Pearl of Africa
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Discover a land of incredible biodiversity, ancient forests, dramatic mountains, and unmatched wildlife experiences
            </p>
          </div>
        </section>

        {/* About Uganda */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Welcome to Uganda</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Uganda is often called the "Pearl of Africa" for its remarkable beauty, incredible wildlife, and warm people.
                  Straddling the equator in East-Central Africa, Uganda offers diverse landscapes from tropical forests to volcanic
                  mountains and vast savannas.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  With over 1,000 bird species and home to nearly 50% of Africa's remaining forest elephants, Uganda is a
                  biodiversity hotspot. The country is particularly renowned for mountain gorilla trekking in Bwindi, one of the
                  world's most coveted wildlife experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The country boasts a fascinating culture, hospitable people, and a rich history of conservation efforts that make
                  it an ideal destination for conscious travelers seeking authentic African experiences.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/safari-landscape.png"
                  alt="Uganda Landscape"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Facts */}
        <section className="py-16 md:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Uganda At A Glance</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-background p-6 rounded-lg text-center">
                  <p className="text-muted-foreground text-sm mb-2">{fact.label}</p>
                  <p className="text-3xl font-bold text-primary">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Attractions */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Premier Destinations</h2>

            <div className="space-y-12">
              {attractions.map((attraction, idx) => (
                <div key={attraction.name} className="grid md:grid-cols-2 gap-8 items-center">
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
                      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={attraction.image}
                          alt={attraction.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={attraction.image}
                          alt={attraction.name}
                          fill
                          className="object-cover"
                        />
                      </div>
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
              ))}
            </div>
          </div>
        </section>

        {/* Visitor Info */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Practical Information</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Getting There</h3>
                <p className="opacity-90">
                  Entebbe International Airport is the main gateway. Most flights connect through Addis Ababa, Dubai, or
                  Amsterdam. KITIIBWA can arrange airport transfers and visas assistance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Best Time to Visit</h3>
                <p className="opacity-90">
                  June-August and December-February offer the best weather. However, Uganda is beautiful year-round. Rainy
                  seasons bring lush landscapes and fewer tourists.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">What to Pack</h3>
                <p className="opacity-90">
                  Binoculars, camera, insect repellent, sun protection, and layers for mountain regions. Our packing guide will
                  be provided upon booking.
                </p>
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
