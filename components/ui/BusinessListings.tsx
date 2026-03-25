import { Business } from "@/data/businesses";
import { CrazySerpBusiness } from "@/lib/city-content";
import { StarIcon } from "@heroicons/react/24/solid";
import { MapPinIcon, PhoneIcon, ClockIcon, TagIcon } from "@heroicons/react/24/outline";

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
    <section className="py-12 bg-white">
      <div className="container">
        <BusinessHeader count={businesses.length} cityName={cityName} />

        <div className="space-y-8 max-w-5xl mx-auto">
          {businesses.map((business, index) => (
            <div
              key={business.id}
              className="group bg-white rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl border-2"
              style={{
                borderColor: index === 0 ? 'var(--color-primary)' : 'rgba(0, 119, 182, 0.1)',
              }}
            >
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
                      <MapPinIcon className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>
                        {business.address}, {business.postalCode} {business.city}
                      </span>
                    </div>

                    {business.phone && (
                      <div className="flex items-center gap-3 text-sm">
                        <PhoneIcon className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                        <a href={`tel:${business.phone}`}
                           className="hover:underline"
                           style={{ color: 'var(--text-secondary)' }}>
                          {business.phone}
                        </a>
                      </div>
                    )}

                    {business.openingHours && (
                      <div className="flex items-center gap-3 text-sm">
                        <ClockIcon className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
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
          ))}
        </div>

        <BottomCTA cityName={cityName} />
      </div>
    </section>
  );
}

function SerpBusinessCards({ businesses, cityName }: { businesses: CrazySerpBusiness[]; cityName: string }) {
  return (
    <section className="py-12 bg-white">
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
                  <TagIcon className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                  <span>{business.category}</span>
                </div>
              )}

              {business.address && (
                <div className="flex items-start gap-2 mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <MapPinIcon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                  <span>{business.address}</span>
                </div>
              )}

              {/* Lien discret vers formulaire */}
              <a
                href="#quote-form"
                className="block text-center mt-4 text-sm font-semibold underline transition-colors"
                style={{ color: 'var(--color-primary)' }}
              >
                En savoir plus
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
    <div className="text-center mx-auto mb-10 max-w-3xl" style={{ textAlign: 'center' }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
        Les meilleurs centres de détatouage à {cityName}
      </h2>
      <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
        {count} centres certifiés à {cityName} — comparez leurs services et avis clients.
      </p>
    </div>
  );
}

function BestChoiceBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
         style={{
           background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))',
           color: '#ffffff'
         }}>
      <span className="text-lg">🏆</span>
      <span className="text-sm font-bold">Meilleur choix</span>
    </div>
  );
}

function RatingStars({ rating, reviewCount }: { rating: number; reviewCount: number | null }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon
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
      <div className="text-center p-4 rounded-lg"
           style={{ background: 'var(--color-primary-lighter)' }}>
        <p className="text-xs font-medium" style={{ color: 'var(--color-primary-dark)' }}>
          Consultation initiale gratuite et sans engagement
        </p>
      </div>
    </div>
  );
}

function BottomCTA({ cityName }: { cityName: string }) {
  return (
    <div className="mt-10 text-center max-w-2xl mx-auto p-6 rounded-xl"
         style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
      <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
        Besoin d&apos;aide pour choisir ?{" "}
        <a href="#quote-form" className="font-semibold underline" style={{ color: 'var(--color-primary)' }}>
          Remplissez notre formulaire
        </a>{" "}
        pour recevoir une recommandation personnalisée à {cityName}.
      </p>
    </div>
  );
}
