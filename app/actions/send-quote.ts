"use server";

import { transporter, emailConfig } from "@/lib/email/config";
import { generateLeadEmailHTML, generateLeadEmailText } from "@/lib/email/templates";
import { quoteFormSchema, QuoteFormData } from "@/lib/validation/quote-schema";
import { redirect } from "next/navigation";

export async function sendQuoteRequest(prevState: any, formData: FormData) {
  try {
    // Extract and validate form data
    const rawData = {
      bodyZone: formData.get("bodyZone") as string,
      tattooColor: formData.get("tattooColor") as string,
      tattooSize: formData.get("tattooSize") as string,
      postalCode: formData.get("postalCode") as string,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: (formData.get("message") as string) || undefined,
      consent: formData.get("consent") === "true",
    };

    // Validate with Zod
    const validationResult = quoteFormSchema.safeParse(rawData);

    if (!validationResult.success) {
      return {
        success: false,
        errors: validationResult.error.flatten().fieldErrors,
      };
    }

    const data: QuoteFormData = validationResult.data;

    // Prepare email options
    const mailOptions = {
      from: emailConfig.from,
      to: emailConfig.to,
      subject: `Nouvelle demande de devis - ${data.firstName} ${data.lastName}`,
      text: generateLeadEmailText(data),
      html: generateLeadEmailHTML(data),
      replyTo: data.email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success - redirect will be handled in component
    return { success: true };
  } catch (error) {
    console.error("Error sending quote request:", error);
    return {
      success: false,
      errors: {
        _form: ["Une erreur est survenue. Veuillez réessayer plus tard."],
      },
    };
  }
}
