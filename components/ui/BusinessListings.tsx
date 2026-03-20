import { Business } from "@/data/businesses";
import { CrazySerpBusiness } from "@/lib/city-content";
import { Star, MapPin, Phone, Clock, Tag } from "lucide-react";

interface BusinessListingsProps {
  businesses: Business[];
  serpBusinesses?: CrazySerpBusiness[];
  cityName: string;
}

export function BusinessListings({ businesses, serpBusinesses, cityName }: BusinessListingsProps) {
  // Prefer rich businesses from businesses.ts; fall back to CrazySERP data
  if (businesses.length > 0) {
    return <RichBusinessCards businesses={businesses} cityName={cityName} />;
  }

  if (serpBusinesses && serpBusinesses.length > 0) {
    return <SerpBusinessCards businesses={serpBusinesses} cityName={cityName} />;
  }

  return null;
}

function RichBusinessCards({ businesses, cityName }: { businesses: Business[]; cityName: string }) {
  return (
    <section className="section bg-white">
      <div className="container">
        <BusinessHeader count={businesses.length} cityName={cityName} />

        <div className="space-y-8 max-w-5xl mx-auto">
          {businesses.map((business, index) => {
            // Hiérarchie visuelle: #1 Premium XL, #2-3 Featured, #4+ Standard
            const isPremium = index === 0;
            const isFeatured = index === 1 || index === 2;
            
            return (
            <div
              key={business.id}
              className={`group rounded-3xl transition-all duration-300 ${
                isPremium 
                  ? 'p-8 md:p-10 hover:shadow-2xl border-4 relative overflow-hidden' 
                  : isFeatured
                  ? 'p-6 md:p-8 hover:shadow-xl border-2'
                  : 'p-5 md:p-6 hover:shadow-lg border'
              }`}
              style={{
                background: isPremium 
                  ? 'linear-gradient(135deg, #FFFFFF 0%, #F8F4EB 100%)'
                  : 'white',
                borderColor: isPremium 
                  ? '#C9A961' 
                  : isFeatured
                  ? 'rgba(201, 169, 97, 0.3)'
                  : 'rgba(26, 26, 26, 0.1)',
                boxShadow: isPremium
                  ? '0 12px 40px rgba(201, 169, 97, 0.25)'
                  : undefined,
              }}
            >
              {/* Background accent premium */}
              {isPremium && (
                <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-300 blur-3xl"></div>
                </div>
              )}
              
              {index === 0 && <BestChoiceBadge />}

              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                      {business.name}
                    </h3>
                    {business.rating > 0 && (
                      <RatingStars rating={business.rating} reviewCount={business.reviewCount} />
                    )}
                  </div>

                  <p className="mb-6 leading-relaxed text-base" style={{ color: 'var(--text-secondary)' }}>
                    {business.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold mb-3 text-sm uppercase tracking-wide"
                        style={{ color: 'var(--color-primary)' }}>
                      Services proposés
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {business.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg text-sm font-medium"
                          style={{
                            background: 'var(--color-primary-lighter)',
                            color: 'var(--color-primary-dark)'
                          }}
                        >
                          ✓ {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>
                        {business.address}, {business.postalCode} {business.city}
                      </span>
                    </div>

                    {business.phone && (
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                        <a href={`tel:${business.phone}`}
                           className="hover:underline"
                           style={{ color: 'var(--text-secondary)' }}>
                          {business.phone}
                        </a>
                      </div>
                    )}

                    {business.openingHours && (
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                        <span style={{ color: 'var(--text-secondary)' }}>
                          Lun-Ven: {business.openingHours.monday || 'Horaires variables'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <CTAColumn />
              </div>
            </div>
          );
          })}
        </div>

        <BottomCTA cityName={cityName} />
      </div>
    </section>
  );
}

function SerpBusinessCards({ businesses, cityName }: { businesses: CrazySerpBusiness[]; cityName: string }) {
  return (
    <section className="section bg-white">
      <div className="container">
        <BusinessHeader count={businesses.length} cityName={cityName} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {businesses.map((business, index) => (
            <div
              key={`${business.name}-${index}`}
              className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border-2"
              style={{
                borderColor: index === 0 ? 'var(--color-primary)' : 'rgba(0, 119, 182, 0.1)',
              }}
            >
              {index === 0 && <BestChoiceBadge />}

              <h3 className="text-lg font-bold mb-3 line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                {business.name}
              </h3>

              {business.rating != null && business.rating > 0 && (
                <RatingStars rating={business.rating} reviewCount={business.reviewCount} />
              )}

              {business.category && (
                <div className="flex items-center gap-2 mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <Tag className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                  <span>{business.category}</span>
                </div>
              )}

              {business.address && (
                <div className="flex items-start gap-2 mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                  <span>{business.address}</span>
                </div>
              )}

              <a
                href="#quote-form"
                className="block text-center mt-4 px-4 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
                  color: '#ffffff'
                }}
              >
                Devis gratuit
              </a>
            </div>
          ))}
        </div>

        <BottomCTA cityName={cityName} />
      </div>
    </section>
  );
}

function BusinessHeader({ count, cityName }: { count: number; cityName: string }) {
  return (
    <div className="text-center mx-auto mb-16 max-w-3xl" style={{ textAlign: 'center' }}>
      <span className="badge badge-primary mb-4 inline-flex items-center gap-2">
        Top entreprises
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
        Les meilleurs centres de détatouage à {cityName}
      </h2>
      <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
        Découvrez les {count} centres les mieux notés pour votre détatouage laser à {cityName}.
        Comparez leurs services et demandez votre devis gratuit.
      </p>
    </div>
  );
}

function BestChoiceBadge() {
  return (
    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 relative z-10"
         style={{
           background: 'linear-gradient(135deg, #C9A961, #D4BA7E)',
           color: '#1A1A1A',
           boxShadow: '0 8px 32px rgba(201, 169, 97, 0.4)',
           letterSpacing: '0.05em',
         }}>
      <span className="text-xl">★</span>
      <span className="text-sm font-bold uppercase">Meilleur Choix Premium</span>
    </div>
  );
}

function RatingStars({ rating, reviewCount }: { rating: number; reviewCount: number | null }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < Math.floor(rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <span className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>
        {rating}/5
      </span>
      {reviewCount != null && (
        <span style={{ color: 'var(--text-tertiary)' }}>
          ({reviewCount} avis)
        </span>
      )}
    </div>
  );
}

function CTAColumn() {
  return (
    <div className="flex flex-col justify-center gap-4">
      <a
        href="#quote-form"
        className="block text-center px-6 py-4 rounded-full font-bold transition-all duration-200 hover:shadow-xl hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
          color: '#ffffff'
        }}
      >
        Obtenir un devis gratuit
      </a>

      <div className="text-center p-4 rounded-lg"
           style={{ background: 'var(--color-primary-lighter)' }}>
        <p className="text-xs font-medium" style={{ color: 'var(--color-primary-dark)' }}>
          💡 Devis gratuit et sans engagement
        </p>
      </div>
    </div>
  );
}

function BottomCTA({ cityName }: { cityName: string }) {
  return (
    <div className="mt-16 text-center max-w-3xl mx-auto p-8 rounded-2xl"
         style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
      <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
        Vous n'arrivez pas à choisir ?
      </h3>
      <p className="mb-6 text-lg" style={{ color: 'var(--text-secondary)' }}>
        Remplissez notre formulaire et recevez jusqu'à 3 devis personnalisés
        des meilleurs centres de {cityName}.
      </p>
      <a
        href="#quote-form"
        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full transition-all duration-200 hover:shadow-xl hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
          color: '#ffffff'
        }}
      >
        Comparer les devis gratuitement
      </a>
    </div>
  );
}
