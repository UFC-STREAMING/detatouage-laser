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
      className="w-full bg-[#0077b6] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#023e8a] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Envoi en cours...
        </>
      ) : (
        "Recevoir mon devis gratuit"
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
    <section id="quote-form" className="bg-white rounded-lg shadow-lg p-8 my-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#0077b6] mb-3">
          Demandez votre devis gratuit
        </h2>
        <p className="text-[#6c757d]">
          Remplissez le formulaire ci-dessous et recevez une estimation personnalisée
        </p>
      </div>

      <form action={formAction} className="space-y-6">
        {/* Tattoo Information Section */}
        <div className="bg-[#f8f9fa] rounded-lg p-6 space-y-4">
          <h3 className="font-semibold text-lg text-[#0077b6] mb-4">
            Informations sur le tatouage
          </h3>

          <div>
            <label htmlFor="bodyZone" className="block text-sm font-medium text-gray-700 mb-2">
              Zone du corps *
            </label>
            <select
              id="bodyZone"
              name="bodyZone"
              required
              className="w-full px-4 py-3 border border-[#e9ecef] rounded-lg"
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
              <p className="text-red-600 text-sm mt-1">{errors.bodyZone[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="tattooColor" className="block text-sm font-medium text-gray-700 mb-2">
              Couleur du tatouage *
            </label>
            <select
              id="tattooColor"
              name="tattooColor"
              required
              className="w-full px-4 py-3 border border-[#e9ecef] rounded-lg"
            >
              <option value="">Sélectionnez une couleur</option>
              <option value="Noir uniquement">Noir uniquement</option>
              <option value="Noir et gris">Noir et gris</option>
              <option value="Couleurs">Couleurs</option>
              <option value="Couleurs vives">Couleurs vives</option>
            </select>
            {errors?.tattooColor && (
              <p className="text-red-600 text-sm mt-1">{errors.tattooColor[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="tattooSize" className="block text-sm font-medium text-gray-700 mb-2">
              Taille approximative *
            </label>
            <select
              id="tattooSize"
              name="tattooSize"
              required
              className="w-full px-4 py-3 border border-[#e9ecef] rounded-lg"
            >
              <option value="">Sélectionnez une taille</option>
              <option value="Très petit (< 5cm)">Très petit (&lt; 5cm)</option>
              <option value="Petit (5-10cm)">Petit (5-10cm)</option>
              <option value="Moyen (10-20cm)">Moyen (10-20cm)</option>
              <option value="Grand (20-30cm)">Grand (20-30cm)</option>
              <option value="Très grand (> 30cm)">Très grand (&gt; 30cm)</option>
            </select>
            {errors?.tattooSize && (
              <p className="text-red-600 text-sm mt-1">{errors.tattooSize[0]}</p>
            )}
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-[#0077b6] mb-4">
            Vos coordonnées
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                Prénom *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-4 py-3 border border-[#e9ecef] rounded-lg"
                placeholder="Jean"
              />
              {errors?.firstName && (
                <p className="text-red-600 text-sm mt-1">{errors.firstName[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Nom *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-4 py-3 border border-[#e9ecef] rounded-lg"
                placeholder="Dupont"
              />
              {errors?.lastName && (
                <p className="text-red-600 text-sm mt-1">{errors.lastName[0]}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-[#e9ecef] rounded-lg"
              placeholder="jean.dupont@example.com"
            />
            {errors?.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 border border-[#e9ecef] rounded-lg"
              placeholder="06 12 34 56 78"
            />
            {errors?.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
              Code postal *
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              required
              defaultValue={initialPostalCode}
              maxLength={5}
              className="w-full px-4 py-3 border border-[#e9ecef] rounded-lg"
              placeholder="75001"
            />
            {errors?.postalCode && (
              <p className="text-red-600 text-sm mt-1">{errors.postalCode[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message (optionnel)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 border border-[#e9ecef] rounded-lg"
              placeholder="Informations complémentaires..."
            />
            {errors?.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message[0]}</p>
            )}
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              value="true"
              required
              className="mt-1 w-4 h-4 text-[#0077b6] border-[#e9ecef] rounded"
            />
            <label htmlFor="consent" className="text-sm text-gray-700">
              J'accepte que mes données soient utilisées pour me recontacter concernant ma demande de devis. *
            </label>
          </div>
          {errors?.consent && (
            <p className="text-red-600 text-sm mt-1">{errors.consent[0]}</p>
          )}
        </div>

        {errors?._form && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {errors._form[0]}
          </div>
        )}

        <SubmitButton pending={isPending} />

        <p className="text-xs text-center text-[#6c757d]">
          * Champs obligatoires
        </p>
      </form>
    </section>
  );
}
