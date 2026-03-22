import { Metadata } from "next";
import { Container, Grid, Card, Text, Timeline, Group, Stack, rem } from "@mantine/core";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { DepartmentGrid } from "@/components/ui/DepartmentGrid";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { getAllDepartments } from "@/data/cities";
import { Sparkles, Shield, Clock, Award, Zap, Heart, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Détatouage Laser en France : Spécialistes Certifiés | Détatouage Laser",
  description:
    "Centre de détatouage laser certifié en France. Technologie Q-Switched pour un retrait efficace et sécurisé. Devis gratuit partout en France.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const departments = getAllDepartments();

  const benefitsData = [
    {
      icon: Sparkles,
      title: "Technologie avancée",
      description: "Laser Q-Switched de dernière génération pour des résultats optimaux",
    },
    {
      icon: Shield,
      title: "Sûr et efficace",
      description: "Protocole médical sécurisé et certifié",
    },
    {
      icon: Clock,
      title: "Séances rapides",
      description: "15 à 30 minutes selon la zone traitée",
    },
    {
      icon: Award,
      title: "Expertise reconnue",
      description: "Plus de 10 ans d'expérience dans le détatouage",
    },
  ];

  const comfortData = [
    {
      icon: Heart,
      title: "La sensation",
      description: "Comparable à un élastique qui claque sur la peau. L'intensité varie selon la zone et votre sensibilité.",
    },
    {
      icon: Shield,
      title: "Crème anesthésiante",
      description: "Application 30 minutes avant la séance pour minimiser considérablement l'inconfort.",
    },
    {
      icon: Sparkles,
      title: "Glace pendant traitement",
      description: "Utilisation de glace pendant le laser pour un confort maximal. La plupart des patients trouvent cela supportable.",
    },
  ];

  const testimonials = [
    {
      name: "Sophie M.",
      location: "Paris",
      text: "Après 7 séances, mon tatouage au poignet a complètement disparu. L'équipe est professionnelle et rassurante.",
      rating: 5,
    },
    {
      name: "Marc L.",
      location: "Lyon",
      text: "Service impeccable. Les résultats sont visibles dès la première séance. Je recommande vivement.",
      rating: 5,
    },
    {
      name: "Laura D.",
      location: "Marseille",
      text: "Équipe à l'écoute, prix corrects. Mon tatouage s'estompe progressivement comme prévu.",
      rating: 5,
    },
  ];

  return (
    <>
      <FAQSchema />

      {/* Hero Section - Mantine */}
      <HeroSection
        imageSrc="/images/Accueil-detatouage.webp"
        imageAlt="Centre de détatouage laser en France"
        title="Détatouage Laser Médical"
        subtitle="Technologie Discovery Pico Plus certifiée. Effacement sûr et efficace de tous types de tatouages."
        ctaText="Consultation Gratuite"
        ctaHref="#quote-form"
      />

      {/* Benefits Section - Mantine Grid + Cards */}
      <section className="section bg-white">
        <Container size="xl">
          <Stack align="center" gap="xl" mb={rem(60)}>
            <span className="badge badge-primary">Notre expertise</span>
            <Text
              ta="center"
              size="2.5rem"
              fw={700}
              maw={800}
              style={{ lineHeight: 1.2 }}
            >
              Pourquoi choisir notre <span className="text-gradient">technologie laser</span> ?
            </Text>
            <Text ta="center" size="lg" c="dimmed" maw={800}>
              Une technologie de pointe et une expertise reconnue pour des résultats optimaux
            </Text>
          </Stack>

          <Grid gutter="xl">
            {benefitsData.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 3 }}>
                  <Card shadow="sm" padding="xl" radius="lg" h="100%" withBorder>
                    <Stack align="center" gap="md">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ background: 'var(--color-primary-lighter)' }}
                      >
                        <Icon className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
                      </div>
                      <Text size="lg" fw={600} ta="center">
                        {benefit.title}
                      </Text>
                      <Text size="sm" c="dimmed" ta="center">
                        {benefit.description}
                      </Text>
                    </Stack>
                  </Card>
                </Grid.Col>
              );
            })}
          </Grid>
        </Container>
      </section>

      {/* Process Section - Mantine Timeline */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <Container size="xl">
          <Stack align="center" gap="xl" mb={rem(60)}>
            <span className="badge badge-primary">Le processus</span>
            <Text
              ta="center"
              size="2.5rem"
              fw={700}
              maw={800}
              style={{ lineHeight: 1.2 }}
            >
              Comment fonctionne le <span className="text-gradient">détatouage laser</span> ?
            </Text>
          </Stack>

          {/* Explication technique */}
          <Card
            shadow="md"
            padding="xl"
            radius="lg"
            mb={rem(48)}
            maw={900}
            mx="auto"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary-lighter), var(--color-white))',
            }}
          >
            <Group align="flex-start" gap="lg">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--color-primary)' }}
              >
                <Zap className="w-6 h-6 text-white" />
              </div>
              <Stack gap="md" style={{ flex: 1 }}>
                <Text size="xl" fw={600}>
                  Fragmentation de l'encre par le laser
                </Text>
                <Text c="dimmed">
                  Le laser Q-Switched émet des impulsions ultra-courtes qui <strong>fragmentent les pigments d'encre</strong> en particules microscopiques.
                  Ces particules sont ensuite naturellement éliminées par votre système lymphatique.
                </Text>
                <Text c="dimmed">
                  Le laser cible uniquement l'encre sans endommager la peau environnante,
                  garantissant un traitement <strong>sûr et efficace</strong>.
                </Text>
              </Stack>
            </Group>
          </Card>

          {/* Timeline Mantine */}
          <Container size="md">
            <Timeline
              active={3}
              bulletSize={60}
              lineWidth={3}
              color="var(--color-primary)"
              styles={{
                itemBullet: {
                  background: 'var(--color-primary)',
                  color: 'white',
                  fontSize: rem(24),
                  fontWeight: 700,
                },
              }}
            >
              <Timeline.Item title="Consultation" bullet="1">
                <Text c="dimmed" size="sm">
                  Évaluation du tatouage et plan de traitement personnalisé adapté à votre peau
                </Text>
              </Timeline.Item>

              <Timeline.Item title="Traitement laser" bullet="2" mt={rem(30)}>
                <Text c="dimmed" size="sm">
                  Séances de 15-30 minutes espacées de 6-8 semaines pour une efficacité optimale
                </Text>
              </Timeline.Item>

              <Timeline.Item title="Élimination" bullet="3" mt={rem(30)}>
                <Text c="dimmed" size="sm">
                  L'encre fragmentée est éliminée naturellement par votre organisme
                </Text>
              </Timeline.Item>
            </Timeline>
          </Container>
        </Container>
      </section>

      {/* Comfort Section */}
      <section className="section bg-white">
        <Container size="xl">
          <Stack align="center" gap="xl" mb={rem(60)}>
            <span className="badge badge-primary">Confort</span>
            <Text
              ta="center"
              size="2.5rem"
              fw={700}
              maw={800}
              style={{ lineHeight: 1.2 }}
            >
              Est-ce <span className="text-gradient">douloureux</span> ?
            </Text>
            <Text ta="center" size="lg" c="dimmed" maw={800}>
              Une expérience supportable avec des solutions pour minimiser l'inconfort
            </Text>
          </Stack>

          <Grid gutter="xl">
            {comfortData.map((item, index) => {
              const Icon = item.icon;
              return (
                <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                  <Card shadow="sm" padding="xl" radius="lg" h="100%" withBorder>
                    <Stack align="center" gap="md">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ background: 'var(--color-primary-lighter)' }}
                      >
                        <Icon className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
                      </div>
                      <Text size="lg" fw={600} ta="center">
                        {item.title}
                      </Text>
                      <Text size="sm" c="dimmed" ta="center">
                        {item.description}
                      </Text>
                    </Stack>
                  </Card>
                </Grid.Col>
              );
            })}
          </Grid>
        </Container>
      </section>

      {/* Session Duration Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <Container size="xl">
          <Stack align="center" gap="xl" mb={rem(60)}>
            <span className="badge badge-primary">Durée du traitement</span>
            <Text
              ta="center"
              size="2.5rem"
              fw={700}
              maw={800}
              style={{ lineHeight: 1.2 }}
            >
              Combien de séances <span className="text-gradient">nécessaires</span> ?
            </Text>
            <Text ta="center" size="lg" c="dimmed" maw={800}>
              La durée varie selon plusieurs facteurs, mais voici ce que vous devez savoir
            </Text>
          </Stack>

          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" withBorder>
                <Stack align="center" gap="md">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: 'var(--color-primary-lighter)' }}
                  >
                    <Clock className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <Text size="lg" fw={600} ta="center">
                    Tatouages noirs
                  </Text>
                  <Text size="3rem" fw={700} style={{ color: 'var(--color-primary)' }}>
                    5-8
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    séances - Les plus faciles à traiter. Le laser absorbe mieux le noir.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" withBorder>
                <Stack align="center" gap="md">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: 'var(--color-primary-lighter)' }}
                  >
                    <Sparkles className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <Text size="lg" fw={600} ta="center">
                    Tatouages colorés
                  </Text>
                  <Text size="3rem" fw={700} style={{ color: 'var(--color-secondary)' }}>
                    8-12
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    séances - Certaines couleurs (vert, bleu clair) sont plus résistantes au laser.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" withBorder>
                <Stack align="center" gap="md">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: 'var(--color-primary-lighter)' }}
                  >
                    <Award className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <Text size="lg" fw={600} ta="center">
                    Entre chaque séance
                  </Text>
                  <Text size="3rem" fw={700} style={{ color: 'var(--color-primary)' }}>
                    6-8
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    semaines - Temps nécessaire pour que votre corps élimine l'encre fragmentée.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      {/* Testimonials - Mantine Cards Grid */}
      <section className="section bg-white">
        <Container size="xl">
          <Stack align="center" gap="xl" mb={rem(60)}>
            <span className="badge badge-primary">Témoignages</span>
            <Text
              ta="center"
              size="2.5rem"
              fw={700}
              maw={800}
              style={{ lineHeight: 1.2 }}
            >
              Ce que disent nos <span className="text-gradient">patients</span>
            </Text>
          </Stack>

          <Grid gutter="xl">
            {testimonials.map((testimonial, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                <Card shadow="md" padding="xl" radius="lg" h="100%" withBorder>
                  <Stack gap="md">
                    <Group gap="xs">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} style={{ color: 'var(--color-secondary)' }}>★</span>
                      ))}
                    </Group>
                    <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                      "{testimonial.text}"
                    </Text>
                    <div>
                      <Text fw={600} size="sm">
                        {testimonial.name}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {testimonial.location}
                      </Text>
                    </div>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </section>

      {/* CTA Section Finale */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <Container size="md">
          <Card
            shadow="xl"
            padding="3rem"
            radius="lg"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
            }}
          >
            <Stack align="center" gap="xl">
              <Text
                ta="center"
                size="2.5rem"
                fw={700}
                c="white"
                style={{ lineHeight: 1.2 }}
              >
                Prêt à effacer votre tatouage ?
              </Text>
              <Text ta="center" size="lg" c="white" opacity={0.95}>
                Obtenez votre devis gratuit et personnalisé en moins de 24h
              </Text>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-3 px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #C9A961, #D4BA7E)',
                  color: '#1A1A1A',
                }}
              >
                Devis Gratuit
              </a>
            </Stack>
          </Card>
        </Container>
      </section>

      {/* Quote Form */}
      <div className="section bg-white">
        <div className="container">
          <QuoteForm />
        </div>
      </div>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mx-auto mb-16" style={{ maxWidth: '800px' }}>
            <span className="badge badge-primary mb-4">FAQ</span>
            <h2 className="mb-6">
              Questions <span className="text-gradient">fréquentes</span>
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Trouvez les réponses aux questions les plus courantes sur le détatouage laser
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="card group">
              <summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold" style={{ color: 'var(--color-primary)' }}>
                Combien coûte un détatouage ?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
                Le prix varie selon la surface du tatouage. Comptez en moyenne entre 80€ et 300€ par séance. Nous proposons des devis gratuits et personnalisés.
              </p>
            </details>

            <details className="card group">
              <summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold" style={{ color: 'var(--color-primary)' }}>
                Peut-on retatouer sur un détatouage ?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
                Oui, le "cover" est tout à fait possible une fois la peau complètement cicatrisée après le traitement laser.
              </p>
            </details>

            <details className="card group">
              <summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold" style={{ color: 'var(--color-primary)' }}>
                Est-ce que le détatouage fait mal ?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
                La sensation est comparable à un claquement d'élastique. Une crème anesthésiante est appliquée avant la séance pour minimiser l'inconfort.
              </p>
            </details>

            <details className="card group">
              <summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold" style={{ color: 'var(--color-primary)' }}>
                Comment est la peau après un détatouage ?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
                Des rougeurs et un effet "givre" (frosting) apparaissent immédiatement, suivis de croûtelles pendant quelques jours. La cicatrisation complète prend 2-3 semaines.
              </p>
            </details>

            <details className="card group">
              <summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold" style={{ color: 'var(--color-primary)' }}>
                Combien de temps entre les séances ?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
                Il faut laisser 6 à 8 semaines minimum entre chaque séance pour permettre au système lymphatique d'éliminer l'encre fragmentée.
              </p>
            </details>

            <details className="card group">
              <summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold" style={{ color: 'var(--color-primary)' }}>
                Les résultats sont-ils garantis ?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
                Le laser Q-Switched est la technique la plus efficace, mais les résultats varient selon le type d'encre, la profondeur et votre peau. Un bilan gratuit vous permettra d'avoir une estimation précise.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Department Grid */}
      <DepartmentGrid departments={departments} />
    </>
  );
}
