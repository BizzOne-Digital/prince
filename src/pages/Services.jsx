import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import './Services.css';

const services = [
  {
    title: 'House Washing',
    description: 'Complete exterior wash removing dirt, algae, mildew, and buildup. Starting at $389.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    path: '/services/house-washing',
    icon: '🏠',
    price: '$389',
    detail: 'Our most popular service. Restore your home\'s exterior beauty safely and effectively.',
  },
  {
    title: 'Driveway Cleaning',
    description: 'Remove oil stains, grime, and weather buildup. Restore curb appeal from the ground up.',
    image: 'https://images.unsplash.com/photo-1590332763512-de1ebc7929b1?w=800&q=80',
    path: '/services/driveway-cleaning',
    icon: '🚗',
    detail: 'Powerful cleaning that removes deep-set stains and restores your driveway\'s original look.',
  },
  {
    title: 'Patio & Deck Cleaning',
    description: 'Make your outdoor spaces guest-ready. Remove dirt, moss, and weather stains from patios and decks.',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80',
    path: '/services/patio-deck-cleaning',
    icon: '🪴',
    detail: 'Transform your outdoor living space into a clean, welcoming area for family and guests.',
  },
  {
    title: 'Siding Cleaning',
    description: 'Gentle soft washing to remove algae, dust, and buildup from all siding types.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    path: '/services/siding-cleaning',
    icon: '🏡',
    detail: 'Safe, low-pressure soft wash technique that cleans without damaging your siding.',
  },
  {
    title: 'Walkway Cleaning',
    description: 'Safer, cleaner walkways that make great first impressions. Remove grime and weather buildup.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    path: '/services/walkway-cleaning',
    icon: '🚶',
    detail: 'Clean, safe walkways that enhance your property\'s curb appeal and first impression.',
  },
  {
    title: 'Exterior Surface Cleaning',
    description: 'Custom cleaning for all exterior surfaces around your home. Professional results every time.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    path: '/services/exterior-surface-cleaning',
    icon: '✨',
    detail: 'Comprehensive cleaning for any exterior surface — we\'ll assess and treat it the right way.',
  },
];

export default function Services() {
  return (
    <main>
      <PageHero
        title="Professional Property Services"
        subtitle="From house washing to exterior surface cleaning — we cover every inch of your home's exterior."
        bgImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        breadcrumbs={[{ name: 'Services' }]}
        badge="What We Offer"
        size="medium"
        ctaText="Book Your Service"
        ctaLink="/booking"
      />

      {/* Price Banner */}
      <section className="services-price-banner">
        <div className="container">
          <AnimatedSection animation="reveal" className="services-price-banner__inner">
            <div className="services-price-banner__icon">🏠</div>
            <div className="services-price-banner__text">
              <h2 className="services-price-banner__title">House Washing Starting at $389</h2>
              <p className="services-price-banner__sub">Free estimates for all services · No hidden charges</p>
            </div>
            <a href="/booking" className="btn btn--primary">
              Get Your Free Estimate <span className="btn-icon">→</span>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section section--soft">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <div className="section-eyebrow">All Services</div>
            <h2 className="section-title">Everything Your Property Needs</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Professional, reliable, and affordable pressure washing services for homeowners
              in Surrey, White Rock, Langley, and surrounding areas.
            </p>
          </AnimatedSection>

          <div className="services-page__grid">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} animation="reveal" delay={i * 0.08}>
                <ServiceCard {...s} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section section--white">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <div className="section-eyebrow">Why Pranvue</div>
            <h2 className="section-title">The Right Choice For Your Home</h2>
            <div className="divider" />
          </AnimatedSection>

          <div className="grid grid--3">
            {[
              { icon: '💰', title: 'Free Estimates', desc: 'No obligation, no pressure. Get a clear quote before any work begins.' },
              { icon: '🛡️', title: 'Safe Techniques', desc: 'We use the right pressure and method for each surface to prevent damage.' },
              { icon: '⚡', title: 'Fast & Efficient', desc: 'We respect your time. Most jobs are completed in a single visit.' },
              { icon: '📞', title: 'Responsive Team', desc: 'Quick replies and easy communication from first contact to completion.' },
              { icon: '🌿', title: 'Property Safe', desc: 'We protect your landscaping, windows, and property while we work.' },
              { icon: '✅', title: 'Satisfaction Guaranteed', desc: 'We\'re not done until you\'re completely satisfied with the results.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} animation="reveal" delay={i * 0.09} className="value-card">
                <div className="value-card__icon">{item.icon}</div>
                <h3 className="value-card__title">{item.title}</h3>
                <p className="value-card__desc">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
