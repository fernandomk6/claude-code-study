import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo."),
  phone: z
    .string()
    .trim()
    .min(10, "Informe um telefone válido com DDD."),
  petName: z
    .string()
    .trim()
    .min(1, "Informe o nome do seu pet."),
  message: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais sobre o que você precisa.")
    .max(500, "Mensagem muito longa, tente resumir em até 500 caracteres."),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export type ContactFormResult = {
  success: boolean;
  message: string;
};
