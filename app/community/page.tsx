import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Image from 'next/image'

export const metadata = {
  title: 'Community Outreach | KITIIBWA SAFARIS',
  description: 'Our commitment to supporting local communities and conservation initiatives',
}

export default function Community() {
  const programs = [
    {
      title: 'Education for Tomorrow',
      description:
        'Providing scholarships and school infrastructure to children in communities around Bwindi and Queen Elizabeth parks.',
      image: '/images/bird-watching.png',
      impact: '500+ students supported annually',
    },
    {
      title: 'Women Empowerment Initiative',
      description:
        'Training local women in hospitality, guide services, and entrepreneurship to create economic opportunities.',
      image: '/images/safari-cottage.png',
      impact: '150+ women entrepreneurs trained',
    },
    {
      title: 'Conservation Rangers Program',
      description:
        'Employing and training local rangers for wildlife monitoring and anti-poaching efforts across protected areas.',
      image: '/images/hero-safari.png',
      impact: '200+ rangers employed',
    },
    {
      title: 'Healthcare Access Project',
      description:
        'Supporting mobile health clinics and medical facilities in underserved communities near our safari destinations.',
      image: '/images/safari-landscape.png',
      impact: '10,000+ medical consultations annually',
    },
    {
      title: 'Sustainable Livelihoods',
      description:
        'Helping local farmers adopt sustainable practices and sell products directly to our safari lodges.',
      image: '/images/gallery-1.png',
      impact: '300+ farmers in sustainable programs',
    },
    {
      title: 'Cultural Heritage Preservation',
      description:
        'Supporting local cultural programs, traditional crafts, and storytelling to preserve Uganda\'s rich heritage.',
      image: '/images/gallery-2.png',
      impact: 'Dozens of cultural events yearly',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Community Outreach</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Making a lasting difference in the lives of people who call the African wilderness home
            </p>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 md:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Commitment to Communities</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  At KITIIBWA SAFARIS, we believe that responsible tourism means giving back to the communities that share their land
                  with us. Every safari generates benefits that directly support local people through employment, education,
                  healthcare, and economic development.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We work closely with local organizations, government agencies, and community leaders to ensure our initiatives create
                  meaningful, lasting positive change. Over 15 years, we\'ve invested over $2 million into community programs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When you book a safari with us, you\'re not just experiencing Africa—you\'re contributing to the wellbeing of the
                  people and ecosystems you visit.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/safari-landscape.png"
                  alt="Community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Our Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <div key={program.title} className="bg-card rounded-lg overflow-hidden shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{program.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-semibold text-accent">{program.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Impact Since 2010</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">$2M+</div>
                <p className="opacity-90">Invested in Communities</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
                <p className="opacity-90">Lives Directly Impacted</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">6</div>
                <p className="opacity-90">Active Programs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <p className="opacity-90">Local Staff Hiring</p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">How You Can Help</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Beyond booking a safari, there are many ways to support our community initiatives and conservation efforts.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-2">Make a Donation</h3>
                <p className="text-muted-foreground mb-4">
                  Direct contributions to specific programs or general community support fund.
                </p>
                <a href="/donations" className="text-primary font-semibold hover:text-accent transition-colors">
                  Donate Now →
                </a>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-2">Volunteer Opportunities</h3>
                <p className="text-muted-foreground mb-4">
                  Join us for extended stays to participate in conservation and community projects.
                </p>
                <a href="/contact" className="text-primary font-semibold hover:text-accent transition-colors">
                  Inquire About Volunteering →
                </a>
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
