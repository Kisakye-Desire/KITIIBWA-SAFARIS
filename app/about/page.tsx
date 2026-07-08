import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import SocialIcons from '@/components/social-icons'
import Image from 'next/image'

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
      image: '/images/team-member-1.png',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Dr. Sarah Kamwesiga',
      role: 'Wildlife Biologist & Lead Guide',
      bio: 'Dr. Sarah holds a PhD in Conservation Biology from Makerere University. She leads our educational safari programs and has published research on East African primate behavior. Her expertise ensures every guest gains deep insights into wildlife ecology and gorilla conservation efforts.',
      image: '/images/team-member-2.png',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Michael Okello',
      role: 'Senior Naturalist Guide',
      bio: 'Michael is an award-winning nature guide with intimate knowledge of Queen Elizabeth Park and Murchison Falls. His storytelling ability combined with ornithological expertise makes him a favorite among wildlife and bird watching enthusiasts seeking authentic safari experiences.',
      image: '/images/team-member-1.png',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Grace Namutebi',
      role: 'Hospitality & Lodge Manager',
      bio: 'Grace ensures every guest experiences genuine African hospitality. With 15 years in luxury lodge management, her attention to detail and warmth create unforgettable experiences both in the field and at our premium safari cottages throughout Uganda.',
      image: '/images/team-member-2.png',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
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
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">About KITIIBWA SAFARIS</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Pioneering premium African safari experiences with a commitment to conservation and community empowerment
            </p>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-16 md:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Meet The Founder</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/team-member-1.png"
                  alt="Alizeyuna Henry - Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Alizeyuna Henry</h3>
                <p className="text-accent font-semibold mb-6">Founder & Managing Director</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Alizeyuna Henry is the visionary founder and Managing Director of Kitiibwa Safaris, a Uganda-based tour company headquartered in Mukono District. Inspired by Uganda&apos;s breathtaking landscapes, diverse wildlife, and vibrant cultures, Henry established Kitiibwa Safaris with a vision of sharing authentic African adventures with travellers from around the world.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  With hands-on experience exploring Uganda&apos;s national parks and natural attractions, Henry is passionate about creating memorable safari experiences that combine adventure, conservation, and genuine local hospitality. His commitment to quality service and personalized travel ensures that every journey reflects the beauty and spirit of the Pearl of Africa.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Under his leadership, Kitiibwa Safaris continues to promote responsible tourism by connecting visitors with Uganda&apos;s incredible wildlife, scenic landscapes, and rich cultural heritage while supporting sustainable travel practices.
                </p>
                <p className="text-primary italic font-semibold">
                  &quot;Every safari is more than a journey—it&apos;s an opportunity to experience the wild, connect with nature, and create memories that last a lifetime.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
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
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/real-giraffe.jpg"
                  alt="Uganda Wildlife"
                  fill
                  className="object-cover"
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
        <section className="py-16 md:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-accent rounded mb-4 flex items-center justify-center">
                  <span className="text-xl">🌿</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Conservation</h3>
                <p className="text-muted-foreground text-sm">
                  We are committed to protecting Uganda's wildlife and ecosystems for future generations through sustainable practices.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-accent rounded mb-4 flex items-center justify-center">
                  <span className="text-xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Community</h3>
                <p className="text-muted-foreground text-sm">
                  We invest in local communities, creating opportunities and supporting development through authentic engagement.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-accent rounded mb-4 flex items-center justify-center">
                  <span className="text-xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  We maintain the highest standards in service, safety, and professionalism across all our operations.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-accent rounded mb-4 flex items-center justify-center">
                  <span className="text-xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Authenticity</h3>
                <p className="text-muted-foreground text-sm">
                  We provide genuine connections with local cultures and authentic African experiences, not staged performances.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-accent rounded mb-4 flex items-center justify-center">
                  <span className="text-xl">🗺️</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Adventure</h3>
                <p className="text-muted-foreground text-sm">
                  We believe in the transformative power of exploration and discovery in pristine natural environments.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-accent rounded mb-4 flex items-center justify-center">
                  <span className="text-xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  We continuously improve our offerings while respecting traditional ways of life and cultural heritage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">Our Expert Team</h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                Meet the passionate professionals dedicated to creating unforgettable safari experiences and protecting Uganda's natural heritage.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-accent font-semibold text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
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
              ))}
            </div>
          </div>
        </section>

        {/* By The Numbers */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">By The Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">2,000+</div>
                <p className="opacity-90">Happy Guests</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <p className="opacity-90">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <p className="opacity-90">Professional Staff</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
                <p className="opacity-90">Prime Destinations</p>
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
