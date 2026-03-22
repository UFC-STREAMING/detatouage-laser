import { Business } from "@/data/businesses";
import { CrazySerpBusiness } from "@/lib/city-content";
import { Star, MapPin, Phone, Clock } from "lucide-react";
import { Card, Badge, Group, Stack, Button, Text, Title } from "@mantine/core";

interface BusinessListingsProps {
  businesses: Business[];
  serpBusinesses?: CrazySerpBusiness[];
  cityName: string;
}

export function BusinessListings({ businesses, serpBusinesses, cityName }: BusinessListingsProps) {
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

        <Stack gap="xl" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          {businesses.map((business, index) => {
            const isPremium = index === 0;
            const isFeatured = index === 1 || index === 2;
            
            return (
              <Card
                key={business.id}
                shadow={isPremium ? "xl" : isFeatured ? "md" : "sm"}
                padding={isPremium ? "xl" : isFeatured ? "lg" : "md"}
                radius="xl"
                withBorder
                style={{
                  background: isPremium 
                    ? 'linear-gradient(135deg, #FFFFFF 0%, #F8F4EB 100%)'
                    : 'white',
                  borderWidth: isPremium ? 4 : isFeatured ? 2 : 1,
                  borderColor: isPremium 
                    ? '#C9A961' 
                    : isFeatured
                    ? 'rgba(201, 169, 97, 0.3)'
                    : 'rgba(26, 26, 26, 0.1)',
                  boxShadow: isPremium
                    ? '0 12px 40px rgba(201, 169, 97, 0.25)'
                    : undefined,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {isPremium && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '16rem',
                    height: '16rem',
                    opacity: 0.05,
                    pointerEvents: 'none',
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: 'linear-gradient(to bottom right, #FBBF24, #FB923C)',
                      filter: 'blur(60px)',
                    }}></div>
                  </div>
                )}

                {index === 0 && <BestChoiceBadge />}

                <Group align="flex-start" style={{ gap: '2rem' }}>
                  <Stack style={{ flex: 2, gap: '1.5rem' }}>
                    <div>
                      <Title order={3} mb="md" c="#1A1A1A">
                        {business.name}
                      </Title>
                      {business.rating > 0 && (
                        <RatingStars rating={business.rating} reviewCount={business.reviewCount} />
                      )}
                    </div>

                    <Text size="md" c="#4A4A4A" style={{ lineHeight: 1.6 }}>
                      {business.description}
                    </Text>

                    <div>
                      <Text 
                        size="sm" 
                        fw={700} 
                        tt="uppercase" 
                        mb="sm"
                        c="#C9A961"
                        style={{ letterSpacing: '0.05em' }}
                      >
                        Services proposés
                      </Text>
                      <Group gap="xs">
                        {business.services.map((service, idx) => (
                          <Badge
                            key={idx}
                            variant="light"
                            size="lg"
                            radius="md"
                            style={{
                              background: '#F8F4EB',
                              color: '#8B6F3E',
                              fontWeight: 500,
                            }}
                          >
                            ✓ {service}
                          </Badge>
                        ))}
                      </Group>
                    </div>

                    <Stack gap="xs">
                      <Group gap="sm">
                        <MapPin size={16} color="#C9A961" />
                        <Text size="sm" c="#4A4A4A">
                          {business.address}, {business.postalCode} {business.city}
                        </Text>
                      </Group>

                      {business.phone && (
                        <Group gap="sm">
                          <Phone size={16} color="#C9A961" />
                          <Text 
                            component="a" 
                            href={`tel:${business.phone}`}
                            size="sm" 
                            c="#4A4A4A"
                            style={{ textDecoration: 'none' }}
                          >
                            {business.phone}
                          </Text>
                        </Group>
                      )}

                      {business.openingHours && (
                        <Group gap="sm">
                          <Clock size={16} color="#C9A961" />
                          <Text size="sm" c="#4A4A4A">
                            Lun-Ven: {business.openingHours.monday || 'Horaires variables'}
                          </Text>
                        </Group>
                      )}
                    </Stack>
                  </Stack>

                  <CTAColumn />
                </Group>
              </Card>
            );
          })}
        </Stack>

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
            <Card
              key={`${business.name}-${index}`}
              shadow="md"
              padding="lg"
              radius="xl"
              withBorder
              style={{
                borderWidth: index === 0 ? 2 : 1,
                borderColor: index === 0 ? '#C9A961' : 'rgba(201, 169, 97, 0.1)',
              }}
            >
              {index === 0 && <BestChoiceBadge />}

              <Title order={4} mb="sm" lineClamp={2} c="#1A1A1A">
                {business.name}
              </Title>

              {business.rating != null && business.rating > 0 && (
                <RatingStars rating={business.rating} reviewCount={business.reviewCount} />
              )}

              {business.address && (
                <Group gap="xs" mt="sm">
                  <MapPin size={16} color="#C9A961" />
                  <Text size="sm" c="#4A4A4A">
                    {business.address}
                  </Text>
                </Group>
              )}

              <Button
                component="a"
                href="#quote-form"
                fullWidth
                mt="md"
                radius="xl"
                size="md"
                fw={700}
                style={{
                  background: 'linear-gradient(135deg, #C9A961 0%, #D4BA7E 100%)',
                }}
              >
                Devis gratuit
              </Button>
            </Card>
          ))}
        </div>

        <BottomCTA cityName={cityName} />
      </div>
    </section>
  );
}

function BusinessHeader({ count, cityName }: { count: number; cityName: string }) {
  return (
    <div className="text-center mx-auto mb-16 max-w-3xl">
      <Badge 
        size="lg" 
        radius="md" 
        mb="md"
        style={{
          background: 'linear-gradient(135deg, #C9A961 0%, #D4BA7E 100%)',
          color: '#1A1A1A',
        }}
      >
        Top entreprises
      </Badge>
      <Title order={2} mb="md" c="#C9A961" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}>
        Les meilleurs centres de détatouage à {cityName}
      </Title>
      <Text size="lg" c="#4A4A4A">
        Découvrez les {count} centres les mieux notés pour votre détatouage laser à {cityName}.
        Comparez leurs services et demandez votre devis gratuit.
      </Text>
    </div>
  );
}

function BestChoiceBadge() {
  return (
    <Badge
      size="lg"
      radius="xl"
      mb="lg"
      leftSection={<span>★</span>}
      style={{
        background: 'linear-gradient(135deg, #C9A961, #D4BA7E)',
        color: '#1A1A1A',
        boxShadow: '0 8px 32px rgba(201, 169, 97, 0.4)',
        letterSpacing: '0.05em',
        fontWeight: 700,
        textTransform: 'uppercase',
        fontSize: '0.75rem',
      }}
    >
      Meilleur Choix Premium
    </Badge>
  );
}

function RatingStars({ rating, reviewCount }: { rating: number; reviewCount: number | null }) {
  return (
    <Group gap="sm" mb="sm">
      <Group gap={4}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            fill={i < Math.floor(rating) ? '#FBBF24' : 'transparent'}
            color={i < Math.floor(rating) ? '#FBBF24' : '#D1D5DB'}
          />
        ))}
      </Group>
      <Text fw={700} size="lg" c="#C9A961">
        {rating}/5
      </Text>
      {reviewCount != null && (
        <Text size="sm" c="#9CA3AF">
          ({reviewCount} avis)
        </Text>
      )}
    </Group>
  );
}

function CTAColumn() {
  return (
    <Stack style={{ minWidth: '15rem', justifyContent: 'center', gap: '1rem' }}>
      <Button
        component="a"
        href="#quote-form"
        size="lg"
        radius="xl"
        fw={700}
        style={{
          background: 'linear-gradient(135deg, #C9A961 0%, #D4BA7E 100%)',
          boxShadow: '0 4px 16px rgba(201, 169, 97, 0.3)',
        }}
      >
        Obtenir un devis gratuit
      </Button>

      <Card 
        padding="md" 
        radius="md"
        style={{ background: '#F8F4EB' }}
      >
        <Text size="xs" fw={500} c="#8B6F3E" ta="center">
          💡 Devis gratuit et sans engagement
        </Text>
      </Card>
    </Stack>
  );
}

function BottomCTA({ cityName }: { cityName: string }) {
  return (
    <Card
      mt="xl"
      padding="xl"
      radius="xl"
      style={{ 
        maxWidth: '48rem', 
        margin: '4rem auto 0',
        background: '#F5F5F5',
        textAlign: 'center',
      }}
    >
      <Title order={3} mb="md" c="#1A1A1A">
        Vous n'arrivez pas à choisir ?
      </Title>
      <Text size="lg" mb="lg" c="#4A4A4A">
        Remplissez notre formulaire et recevez jusqu'à 3 devis personnalisés
        des meilleurs centres de {cityName}.
      </Text>
      <Button
        component="a"
        href="#quote-form"
        size="xl"
        radius="xl"
        fw={700}
        style={{
          background: 'linear-gradient(135deg, #C9A961 0%, #D4BA7E 100%)',
          boxShadow: '0 4px 16px rgba(201, 169, 97, 0.3)',
        }}
      >
        Comparer les devis gratuitement
      </Button>
    </Card>
  );
}
