"use client";

import { useActionState } from "react";
import { sendQuoteRequest } from "@/app/actions/send-quote";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Card, 
  TextInput, 
  Select, 
  Textarea, 
  Checkbox, 
  Button, 
  Group, 
  Stack, 
  Text,
  Title,
  Badge,
  Grid,
  Alert,
} from "@mantine/core";

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button
      type="submit"
      disabled={pending}
      fullWidth
      size="xl"
      radius="xl"
      fw={700}
      leftSection={
        pending ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        )
      }
      style={{
        background: pending 
          ? '#9CA3AF' 
          : 'linear-gradient(135deg, #C9A961 0%, #D4BA7E 100%)',
        boxShadow: pending ? 'none' : '0 4px 16px rgba(201, 169, 97, 0.4)',
      }}
    >
      {pending ? "Envoi en cours..." : "Recevoir mon devis gratuit"}
    </Button>
  );
}

export function QuoteForm({ initialPostalCode }: { initialPostalCode?: string }) {
  const router = useRouter();
  const [formState, formAction, isPending] = useActionState(sendQuoteRequest, null);

  useEffect(() => {
    if (formState?.success) {
      router.push("/merci");
    }
  }, [formState, router]);

  const errors = formState?.errors as Record<string, string[]> | undefined;

  return (
    <section
      id="quote-form"
      style={{
        background: 'linear-gradient(135deg, #F8F4EB 0%, #FFFFFF 100%)',
        border: '2px solid rgba(201, 169, 97, 0.2)',
        borderRadius: '1.5rem',
        boxShadow: '0 12px 40px rgba(201, 169, 97, 0.15)',
        padding: 'clamp(1rem, 5vw, 3rem)',
        margin: '2rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '24rem',
        height: '24rem',
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

      <Stack gap="xl" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <Badge 
            size="lg" 
            radius="md" 
            mb="md"
            style={{
              background: 'linear-gradient(135deg, #C9A961 0%, #D4BA7E 100%)',
              color: '#1A1A1A',
            }}
          >
            Devis gratuit
          </Badge>
          <Title 
            order={2} 
            mb="md" 
            c="#C9A961"
            style={{ 
              fontFamily: 'var(--font-playfair, serif)',
              fontSize: 'clamp(1.5rem, 5vw, 2rem)',
            }}
          >
            Demandez votre devis personnalisé
          </Title>
          <Text size="lg" c="#4A4A4A">
            Remplissez le formulaire ci-dessous et recevez une estimation adaptée à votre tatouage
          </Text>
          <Group gap="xl" mt="lg" justify="center" wrap="wrap">
            <Group gap="xs">
              <svg className="w-4 h-4" style={{ color: '#10B981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <Text size="sm" c="#4A4A4A">Données sécurisées</Text>
            </Group>
            <Group gap="xs">
              <svg className="w-4 h-4" style={{ color: '#10B981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <Text size="sm" c="#4A4A4A">Réponse sous 24h</Text>
            </Group>
            <Group gap="xs">
              <svg className="w-4 h-4" style={{ color: '#10B981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <Text size="sm" c="#4A4A4A">100% gratuit</Text>
            </Group>
          </Group>
        </div>

        <form action={formAction} style={{ maxWidth: '64rem', margin: '0 auto', width: '100%' }}>
          <Stack gap="xl">
            {/* Tattoo Information Section */}
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Group gap="sm" mb="lg">
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#F8F4EB',
                  }}
                >
                  <svg
                    style={{ width: '1.25rem', height: '1.25rem', color: '#C9A961' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <Title order={3}>Informations sur le tatouage</Title>
              </Group>

              <Stack gap="md">
                <Select
                  label="Zone du corps"
                  placeholder="Sélectionnez une zone"
                  name="bodyZone"
                  required
                  withAsterisk
                  error={errors?.bodyZone?.[0]}
                  data={[
                    { value: "Bras", label: "Bras" },
                    { value: "Avant-bras", label: "Avant-bras" },
                    { value: "Épaule", label: "Épaule" },
                    { value: "Dos", label: "Dos" },
                    { value: "Poitrine", label: "Poitrine" },
                    { value: "Jambe", label: "Jambe" },
                    { value: "Mollet", label: "Mollet" },
                    { value: "Cheville", label: "Cheville" },
                    { value: "Main", label: "Main" },
                    { value: "Pied", label: "Pied" },
                    { value: "Cou", label: "Cou" },
                    { value: "Autre", label: "Autre" },
                  ]}
                />

                <Select
                  label="Couleur du tatouage"
                  placeholder="Sélectionnez une couleur"
                  name="tattooColor"
                  required
                  withAsterisk
                  error={errors?.tattooColor?.[0]}
                  data={[
                    { value: "Noir uniquement", label: "Noir uniquement" },
                    { value: "Noir et gris", label: "Noir et gris" },
                    { value: "Couleurs", label: "Couleurs" },
                    { value: "Couleurs vives", label: "Couleurs vives" },
                  ]}
                />

                <Select
                  label="Taille approximative"
                  placeholder="Sélectionnez une taille"
                  name="tattooSize"
                  required
                  withAsterisk
                  error={errors?.tattooSize?.[0]}
                  data={[
                    { value: "Très petit (< 5cm)", label: "Très petit (< 5cm)" },
                    { value: "Petit (5-10cm)", label: "Petit (5-10cm)" },
                    { value: "Moyen (10-20cm)", label: "Moyen (10-20cm)" },
                    { value: "Grand (20-30cm)", label: "Grand (20-30cm)" },
                    { value: "Très grand (> 30cm)", label: "Très grand (> 30cm)" },
                  ]}
                />
              </Stack>
            </Card>

            {/* Contact Information Section */}
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Group gap="sm" mb="lg">
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#F8F4EB',
                  }}
                >
                  <svg
                    style={{ width: '1.25rem', height: '1.25rem', color: '#C9A961' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <Title order={3}>Vos coordonnées</Title>
              </Group>

              <Stack gap="md">
                <Grid gutter="md">
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <TextInput
                      label="Prénom"
                      placeholder="Jean"
                      name="firstName"
                      required
                      withAsterisk
                      error={errors?.firstName?.[0]}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <TextInput
                      label="Nom"
                      placeholder="Dupont"
                      name="lastName"
                      required
                      withAsterisk
                      error={errors?.lastName?.[0]}
                    />
                  </Grid.Col>
                </Grid>

                <TextInput
                  label="Email"
                  placeholder="jean.dupont@example.com"
                  name="email"
                  type="email"
                  required
                  withAsterisk
                  error={errors?.email?.[0]}
                />

                <TextInput
                  label="Téléphone"
                  placeholder="06 12 34 56 78"
                  name="phone"
                  type="tel"
                  required
                  withAsterisk
                  error={errors?.phone?.[0]}
                />

                <TextInput
                  label="Code postal"
                  placeholder="75001"
                  name="postalCode"
                  defaultValue={initialPostalCode}
                  required
                  withAsterisk
                  error={errors?.postalCode?.[0]}
                />

                <Textarea
                  label="Message (optionnel)"
                  placeholder="Informations complémentaires sur votre tatouage..."
                  name="message"
                  rows={4}
                  maxLength={1000}
                  error={errors?.message?.[0]}
                />

                <Checkbox
                  label="J'accepte que mes données soient utilisées pour me recontacter concernant ma demande de devis."
                  name="consent"
                  value="true"
                  required
                  error={errors?.consent?.[0]}
                  styles={{
                    input: { cursor: 'pointer' },
                    label: { cursor: 'pointer', fontSize: '0.875rem', color: '#4A4A4A' },
                  }}
                />
              </Stack>
            </Card>

            {errors?._form && (
              <Alert
                color="red"
                title="Erreur"
                styles={{
                  root: { borderLeft: '4px solid #DC2626' },
                }}
              >
                {errors._form[0]}
              </Alert>
            )}

            <SubmitButton pending={isPending} />

            <Text size="xs" ta="center" c="#9CA3AF">
              * Champs obligatoires
            </Text>
          </Stack>
        </form>
      </Stack>
    </section>
  );
}
