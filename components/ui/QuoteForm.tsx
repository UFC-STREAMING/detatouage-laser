"use client";

import { useActionState } from "react";
import { sendQuoteRequest } from "@/app/actions/send-quote";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-primary btn-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Envoi en cours...
        </>
      ) : (
        <>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Recevoir mon devis gratuit
        </>
      )}
    </button>
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
      className="card my-8 md:my-16 p-4 sm:p-6 md:p-8 lg:p-12"
      style={{
        background: 'linear-gradient(135deg, var(--color-primary-lighter), var(--color-white))',
      }}
    >
      <div className="text-center mb-12">
        <span className="badge badge-primary mb-4">Devis gratuit</span>
        <h2 className="mb-4">
          Demandez votre <span className="text-gradient">devis personnalisé</span>
        </h2>
        <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
          Remplissez le formulaire ci-dessous et recevez une estimation adaptée à votre tatouage
        </p>
      </div>

      <form action={formAction} className="space-y-8 max-w-4xl mx-auto">
        {/* Tattoo Information Section */}
        <div
          className="card"
          style={{ background: 'var(--color-white)' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'var(--color-primary-lighter)' }}
            >
              <svg
                className="w-5 h-5"
                style={{ color: 'var(--color-primary)' }}
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
            <h3 className="text-xl font-semibold">Informations sur le tatouage</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="bodyZone">
                Zone du corps *
              </label>
              <select
                id="bodyZone"
                name="bodyZone"
                required
              >
                <option value="">Sélectionnez une zone</option>
                <option value="Bras">Bras</option>
                <option value="Avant-bras">Avant-bras</option>
                <option value="Épaule">Épaule</option>
                <option value="Dos">Dos</option>
                <option value="Poitrine">Poitrine</option>
                <option value="Jambe">Jambe</option>
                <option value="Mollet">Mollet</option>
                <option value="Cheville">Cheville</option>
                <option value="Main">Main</option>
                <option value="Pied">Pied</option>
                <option value="Cou">Cou</option>
                <option value="Autre">Autre</option>
              </select>
              {errors?.bodyZone && (
                <p className="text-sm mt-2" style={{ color: 'var(--color-error)' }}>
                  {errors.bodyZone[0]}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="tattooColor">
                Couleur du tatouage *
              </label>
              <select
                id="tattooColor"
                name="tattooColor"
                required
              >
                <option value="">Sélectionnez une couleur</option>
                <option value="Noir uniquement">Noir uniquement</option>
                <option value="Noir et gris">Noir et gris</option>
                <option value="Couleurs">Couleurs</option>
                <option value="Couleurs vives">Couleurs vives</option>
              </select>
              {errors?.tattooColor && (
                <p className="text-sm mt-2" style={{ color: 'var(--color-error)' }}>
                  {errors.tattooColor[0]}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="tattooSize">
                Taille approximative *
              </label>
              <select
                id="tattooSize"
                name="tattooSize"
                required
              >
                <option value="">Sélectionnez une taille</option>
                <option value="Très petit (< 5cm)">Très petit (&lt; 5cm)</option>
                <option value="Petit (5-10cm)">Petit (5-10cm)</option>
                <option value="Moyen (10-20cm)">Moyen (10-20cm)</option>
                <option value="Grand (20-30cm)">Grand (20-30cm)</option>
                <option value="Très grand (> 30cm)">Très grand (&gt; 30cm)</option>
              </select>
              {errors?.tattooSize && (
                <p className="text-sm mt-2" style={{ color: 'var(--color-error)' }}>
                  {errors.tattooSize[0]}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div
          className="card"
          style={{ background: 'var(--color-white)' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'var(--color-primary-lighter)' }}
            >
              <svg
                className="w-5 h-5"
                style={{ color: 'var(--color-primary)' }}
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
            <h3 className="text-xl font-semibold">Vos coordonnées</h3>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="Jean"
                />
                {errors?.firstName && (
                  <p className="text-sm mt-2" style={{ color: 'var(--color-error)' }}>
                    {errors.firstName[0]}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="lastName">
                  Nom *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Dupont"
                />
                {errors?.lastName && (
                  <p className="text-sm mt-2" style={{ color: 'var(--color-error)' }}>
                    {errors.lastName[0]}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="jean.dupont@example.com"
              />
              {errors?.email && (
                <p className="text-sm mt-2" style={{ color: 'var(--color-error)' }}>
                  {errors.email[0]}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone">
                Téléphone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="06 12 34 56 78"
              />
              {errors?.phone && (
                <p className="text-sm mt-2" style={{ color: 'var(--color-error)' }}>
                  {errors.phone[0]}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="postalCode">
                Code postal *
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                required
                defaultValue={initialPostalCode}
                maxLength={5}
                placeholder="75001"
              />
              {errors?.postalCode && (
                <p className="text-sm mt-2" style={{ color: 'var(--color-error)' }}>
                  {errors.postalCode[0]}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message">
                Message (optionnel)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Informations complémentaires sur votre tatouage..."
              />
              {errors?.message && (
                <p className="text-sm mt-2" style={{ color: 'var(--color-error)' }}>
                  {errors.message[0]}
                </p>
              )}
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                value="true"
                required
                className="mt-1 w-5 h-5 rounded"
                style={{
                  accentColor: 'var(--color-primary)'
                }}
              />
              <label
                htmlFor="consent"
                className="text-sm cursor-pointer"
                style={{ color: 'var(--text-secondary)', fontWeight: 400 }}
              >
                J'accepte que mes données soient utilisées pour me recontacter concernant ma demande de devis. *
              </label>
            </div>
            {errors?.consent && (
              <p className="text-sm" style={{ color: 'var(--color-error)' }}>
                {errors.consent[0]}
              </p>
            )}
          </div>
        </div>

        {errors?._form && (
          <div
            className="p-4 rounded-xl border-l-4"
            style={{
              background: '#FEE2E2',
              borderColor: 'var(--color-error)',
              color: '#991B1B'
            }}
          >
            {errors._form[0]}
          </div>
        )}

        <SubmitButton pending={isPending} />

        <p className="text-xs text-center" style={{ color: 'var(--text-tertiary)' }}>
          * Champs obligatoires
        </p>
      </form>
    </section>
  );
}
