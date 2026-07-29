'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Image from 'next/image'
import { Check, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { TextGradient, AnimatedCard } from '@/components/ui/effects'
import ScrollReveal from '@/components/scroll-reveal'
import { useState } from 'react'

export default function Packages() {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null)
  const packages = [
    {
      name: 'Bwindi Gorilla Encounter',
      duration: '4 Days / 3 Nights',
      price: 1900,
      image: '/images/chimp-1.jpg',
      description: 'Unforgettable 4-day gorilla trekking adventure in Bwindi Impenetrable Forest with expert guides',
      fullDescription: `Experience one of the world's most extraordinary wildlife adventures with an unforgettable 4-day journey into Uganda's breathtaking Bwindi Impenetrable Forest. Come face-to-face with a family of endangered mountain gorillas in their natural habitat—an encounter that will stay with you for a lifetime.\n\nThis carefully crafted safari combines thrilling gorilla trekking with stunning landscapes, rich cultural experiences, and the peaceful beauty of one of Africa's oldest rainforests.\n\nTravel through Uganda's picturesque rolling hills before entering the mist-covered forests of Bwindi, home to nearly half of the world's remaining mountain gorillas. Guided by experienced rangers, you'll trek through dense jungle in search of a habituated gorilla family, witnessing these magnificent creatures up close in an ethical and responsible way.`,
      included: [
        'Gorilla trekking in Bwindi Impenetrable Forest',
        'Scenic road trip through southwestern Uganda',
        'Authentic cultural experiences with local communities',
        'Guided forest walks and exceptional birdwatching',
        'Comfortable accommodation',
        'Full-board meals',
        'Professional English-speaking guide',
        'Park entrance fees',
      ],
      bestseller: true,
    },
    {
      name: '2-Day Queen Elizabeth Safari',
      duration: '2 Days / 1 Night',
      price: 650,
      image: '/images/gallery-17.jpg',
      description: 'Game drive and scenic Kazinga Channel boat cruise in Uganda\'s most iconic park',
      fullDescription: `Discover the untamed beauty of Queen Elizabeth National Park on this remarkable 2-day safari. Experience thrilling wildlife encounters, spectacular landscapes, and one of Africa's most iconic wildlife viewing destinations.\n\nYour adventure features exciting game drives across expansive savannahs, where you may encounter elephants, lions, giraffes, buffaloes, leopards, antelopes, and an abundance of birdlife. A scenic boat cruise along the Kazinga Channel showcases hippos, crocodiles, elephants along the shoreline, and countless water birds.\n\nThis perfect safari for travelers seeking Uganda's classic wildlife experience combines spectacular scenery, abundant wildlife, and unforgettable moments in nature.`,
      included: [
        'Private 4x4 safari vehicle with pop-up roof',
        'Professional English-speaking guide/driver',
        'Game drive in Queen Elizabeth National Park',
        'Boat cruise on the Kazinga Channel',
        'Mid-range lodge accommodation',
        'Full-board meals (Breakfast, Lunch & Dinner)',
        'Park entrance fees',
        'Bottled drinking water',
      ],
      bestseller: false,
    },
    {
      name: 'Murchison Falls & Rhino Tracking',
      duration: '4 Days / 3 Nights',
      price: 1200,
      image: '/images/gallery-1.jpg',
      description: 'Experience rhino tracking, game drives, and the spectacular Murchison Falls waterfall',
      fullDescription: `Discover the untamed beauty of Murchison Falls National Park, Uganda's largest and oldest national park. This unforgettable 4-day safari combines thrilling wildlife encounters, spectacular landscapes, and one of Africa's most powerful natural wonders—the mighty Nile River dramatically forced through a narrow 7-metre gorge.\n\nYour adventure begins with an exciting on-foot rhino tracking experience at Ziwa Rhino Sanctuary, Uganda's only wild rhino sanctuary. Continue to Murchison Falls for unforgettable game drives across expansive savannahs, where you may encounter elephants, lions, giraffes, buffaloes, leopards, and antelopes.\n\nCruise along the Nile to the base of the magnificent falls, then hike to the top for breathtaking panoramic views and unforgettable moments.`,
      included: [
        'Guided rhino tracking at Ziwa Rhino Sanctuary (2-3 hours)',
        'Exciting game drives in Murchison Falls National Park',
        'Nile boat cruise to the base of Murchison Falls',
        'Guided hike to the top of the falls',
        'Opportunities to spot the Big Five',
        'Stunning savannah scenery and exceptional wildlife viewing',
        'Professional English-speaking guide',
        'Accommodation and full meals',
      ],
      bestseller: false,
    },
    {
      name: 'Rwenzori Mountain Adventure',
      duration: '5 Days / 4 Nights',
      price: 2950,
      image: '/images/gallery-12.jpg',
      description: 'Conquer the legendary Mountains of the Moon - Rwenzori Mountains trekking adventure',
      fullDescription: `Experience Uganda's Wild Frontier with a trek through the legendary Rwenzori Mountains, known as the "Mountains of the Moon." This 5-day adventure offers spectacular hiking, dramatic landscapes, and unique alpine ecosystems.\n\nThe Rwenzori Mountains feature dramatic landscapes, vast savannahs, rugged mountains, and stunning natural beauty. This trek is famous for its exceptional scenery and opportunities to witness unique alpine environments.\n\nDuring your adventure, you'll trek through diverse ecosystems from lush forests to alpine meadows and glaciers, offering unforgettable views and the unique experience of conquering some of Africa's most spectacular peaks with expert guides.`,
      included: [
        'Mountain guide and experienced porters',
        'Alpine hut accommodation throughout trek',
        'All meals on trek',
        'Safety and rescue equipment',
        'Professional training and orientation',
        'Photography stops at scenic viewpoints',
        'Transportation to/from trek starting point',
        'All park permits and fees',
      ],
      bestseller: false,
    },
    {
      name: 'Chimpanzee Connection',
      duration: '3 Days / 2 Nights',
      price: 1900,
      image: '/images/chimp-3.jpg',
      description: 'Track wild chimpanzees in Kibale Forest and experience forest ecosystem',
      fullDescription: `Track habituated chimpanzee families through the ancient rainforests of Kibale Forest National Park. This 3-day adventure combines thrilling primate encounters with immersion in one of Africa's most biodiverse ecosystems.\n\nKibale Forest is an ancient tropical rainforest home to chimpanzees, monkeys, and over 375 bird species. Perfect for forest walks and primate encounters, it offers a unique window into the lives of our closest living relatives in their natural habitat.\n\nGuided by experienced trackers, you'll move through dense forest in search of habituated chimp families, witnessing these remarkable creatures in their social groups and learning about their complex behaviors and conservation.`,
      included: [
        'Chimpanzee habituation and tracking experience',
        'Forest walks and nature guides',
        'Birdwatching and primate observation',
        'Eco-lodge accommodation',
        'All meals included',
        'Park entrance fees',
        'Professional English-speaking guide',
        'Photography opportunities',
      ],
      bestseller: true,
    },
    {
      name: 'Grand Uganda Safari',
      duration: '10 Days / 9 Nights',
      price: 6500,
      image: '/images/gallery-18.jpg',
      description: 'The ultimate safari combining gorillas, wildlife, mountains, and culture',
      fullDescription: `Experience the full spectrum of Uganda's natural wonders on this comprehensive 10-day Grand Uganda Safari. This ultimate adventure combines world-class gorilla trekking, exhilarating wildlife encounters, breathtaking mountain landscapes, and authentic cultural immersion.\n\nVisit multiple national parks including Bwindi for mountain gorillas, Queen Elizabeth for the Kazinga Channel, Murchison Falls for the mighty waterfall, and more. Experience diverse ecosystems from misty rainforests to expansive savannahs.\n\nThis luxury safari is designed for travelers seeking the complete Uganda experience with comfortable accommodations, expert guides, and unforgettable moments at every turn.`,
      included: [
        'All transportation and airport transfers',
        'Gorilla and chimpanzee trekking permits',
        'All accommodations in luxury lodges',
        'All meals and premium beverages',
        'All activities and excursions',
        'Expert guides throughout journey',
        'Photography tips and professional assistance',
        'Authentic cultural experiences',
        'All park entrance fees',
      ],
      bestseller: false,
    },
    {
      name: 'Source of the Nile Explorer',
      duration: '6 Days / 5 Nights',
      price: 1250,
      image: '/images/gallery-9.jpg',
      description: 'Experience the thrill of white-water rafting and adventure at the legendary Source of the Nile in Jinja',
      fullDescription: `Discover the birthplace of the world's longest river with an unforgettable 6-day adventure through Jinja. From heart-pounding thrills to peaceful natural escapes, this experience showcases the very best of eastern Uganda along the legendary Source of the Nile.\n\nChallenge yourself on the Nile's world-renowned Grade 5 white-water rapids, take the leap with an optional bungee jump over the river, or unwind on a scenic boat cruise to the Source of the Nile. Venture into lush forests for an exhilarating canopy zipline before immersing yourself in Jinja's vibrant history, culture, and local charm.\n\nWhether you're an adventure seeker, nature lover, or cultural explorer, this safari offers the perfect blend of excitement, relaxation, and authentic Ugandan experiences.`,
      included: [
        'Visit the legendary Source of the Nile',
        'Grade V white-water rafting or scenic Nile boat cruise',
        'Forest canopy ziplining adventure',
        'Guided Jinja town and cultural tour',
        'Birdwatching and guided nature walks',
        'Mid-range accommodation',
        'Professional English-speaking guide',
        'Breakfast, selected lunches, and drinking water',
      ],
      bestseller: false,
    },
    {
      name: 'Uganda Birding Circuit',
      duration: '7 Days / 6 Nights',
      price: 2200,
      image: '/images/bird-watching.png',
      description: 'Discover Uganda\'s incredible birdlife with over 1,060 species including the iconic Shoebill and Albertine Rift endemics',
      fullDescription: `Experience Uganda's incredible birdlife on this 7-day birding safari through the country's most diverse ecosystems. Search for the iconic Shoebill, discover the rich forests of Kibale and Bwindi, and explore the bird-filled savannahs of Queen Elizabeth National Park with expert local birding guides.\n\nHome to over 1,060 bird species, Uganda is one of Africa's premier birdwatching destinations. This journey offers unforgettable sightings for both passionate birders and nature lovers, featuring endemic species found nowhere else on Earth.\n\nWith expert certified guides and carefully planned routes, you'll maximize your chances of spotting rare and elusive species while enjoying Uganda's stunning landscapes and natural beauty.`,
      included: [
        'Shoebill tracking in Mabamba Swamp',
        'Birding in Kibale Forest & Bigodi Wetland',
        'Queen Elizabeth National Park birding and boat cruise',
        'Albertine Rift endemic species in Bwindi',
        'Expert certified local birding guide',
        'Eco-lodge accommodation',
        'All meals included',
        'Park entrance fees and binoculars',
      ],
      bestseller: true,
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
                <TextGradient className="text-sm font-semibold tracking-wider uppercase">Safari Experiences</TextGradient>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Safari Packages</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Choose from our carefully curated packages or work with us to customize your perfect African safari adventure tailored to your dreams and interests.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {packages.map((pkg, idx) => (
                <ScrollReveal key={pkg.name} delay={idx * 0.08} direction={idx % 4 === 0 ? 'up' : idx % 4 === 1 ? 'left' : 'right'}>
                  <div
                    className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all relative transform hover:scale-105 hover:-translate-y-2 duration-300 card-hover group border h-full flex flex-col ${
                      pkg.bestseller ? 'border-accent ring-2 ring-accent/50' : 'border-border hover:border-accent/50'
                    }`}
                  >
                    {pkg.bestseller && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-secondary text-accent-foreground px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg">
                        BESTSELLER
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-card flex flex-col flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">{pkg.name}</h3>
                        <p className="text-accent font-semibold text-sm mb-2">{pkg.duration}</p>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{pkg.description}</p>
                      </div>

                      {/* Price */}
                      <div className="mb-6 pb-6 border-b border-border">
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-gradient">${pkg.price}</span>
                          <span className="text-muted-foreground text-sm">per person</span>
                        </div>
                      </div>

                      {/* Included */}
                      <div className="mb-4 flex-grow">
                        <p className="font-semibold text-primary text-xs mb-3 uppercase tracking-wider">Includes:</p>
                        <ul className="space-y-2">
                          {pkg.included.slice(0, 4).map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{item}</span>
                            </li>
                          ))}
                          {pkg.included.length > 4 && (
                            <li className="text-xs text-accent font-semibold">+{pkg.included.length - 4} more included</li>
                          )}
                        </ul>
                      </div>

                      {/* Expandable Full Description */}
                      {pkg.fullDescription && (
                        <div className="mb-4">
                          <button
                            onClick={() => setExpandedPackage(expandedPackage === pkg.name ? null : pkg.name)}
                            className="flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm transition-colors"
                          >
                            <span>{expandedPackage === pkg.name ? 'Hide' : 'Read'} Details</span>
                            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expandedPackage === pkg.name ? 'rotate-180' : ''}`} />
                          </button>
                          {expandedPackage === pkg.name && (
                            <div className="mt-3 pt-3 border-t border-border/50 text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap">
                              {pkg.fullDescription}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Buttons */}
                      <div className="flex gap-2">
                        <a
                          href="https://wa.me/447884181149"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:to-accent hover:from-accent text-primary-foreground py-3 rounded-lg font-semibold transition-all transform hover:scale-105 duration-300 text-center shadow-md hover:shadow-lg"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Packages */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Customize Your Perfect Safari</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <ScrollReveal delay={0} direction="up">
                <div className="bg-gradient-to-br from-accent/10 to-transparent p-8 rounded-xl text-center border border-border hover:border-accent/50 transition-all card-hover group">
                  <div className="h-14 w-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">Tell Us Your Dreams</h3>
                  <p className="text-muted-foreground">Share your travel dates, interests, and budget with our expert team</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1} direction="up">
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-xl text-center border border-border hover:border-primary/50 transition-all card-hover group">
                  <div className="h-14 w-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">We Design Your Adventure</h3>
                  <p className="text-muted-foreground">Our experts craft a personalized itinerary matching your every interest</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2} direction="up">
                <div className="bg-gradient-to-br from-secondary/10 to-transparent p-8 rounded-xl text-center border border-border hover:border-secondary/50 transition-all card-hover group">
                  <div className="h-14 w-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl text-white font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">Live Your Dream</h3>
                  <p className="text-muted-foreground">Depart knowing every detail is perfect and handled with care</p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-primary to-primary/80 hover:to-accent hover:from-accent text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg duration-300 shadow-lg"
              >
                Start Planning Your Custom Safari
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
