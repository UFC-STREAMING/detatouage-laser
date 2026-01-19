import { z } from "zod";

export const quoteFormSchema = z.object({
  bodyZone: z.string().min(1, "Veuillez sélectionner une zone du corps"),
  tattooColor: z.string().min(1, "Veuillez sélectionner la couleur du tatouage"),
  tattooSize: z.string().min(1, "Veuillez sélectionner la taille du tatouage"),
  postalCode: z
    .string()
    .min(5, "Le code postal doit contenir 5 chiffres")
    .max(5, "Le code postal doit contenir 5 chiffres")
    .regex(/^\d{5}$/, "Le code postal doit contenir uniquement des chiffres"),
  firstName: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom ne peut pas dépasser 50 caractères"),
  lastName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères"),
  email: z
    .string()
    .email("Veuillez entrer une adresse email valide")
    .toLowerCase(),
  phone: z
    .string()
    .regex(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      "Veuillez entrer un numéro de téléphone français valide"
    ),
  message: z.string().max(1000, "Le message ne peut pas dépasser 1000 caractères").optional(),
  consent: z
    .boolean()
    .refine((val) => val === true, "Vous devez accepter la politique de confidentialité"),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
