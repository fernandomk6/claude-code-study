"use server";

import { contactFormSchema, type ContactFormInput, type ContactFormResult } from "@/types/contact";

export async function submitContact(
  input: ContactFormInput,
): Promise<ContactFormResult> {
  const validation = contactFormSchema.safeParse(input);

  if (!validation.success) {
    return {
      success: false,
      message: "Verifique os campos destacados e tente novamente.",
    };
  }

  return {
    success: true,
    message: "Recebemos sua mensagem! Vamos te chamar em breve.",
  };
}
