"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { submitContact } from "@/actions/submit-contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormInput } from "@/types/contact";

export function ContactForm() {
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const form = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      petName: "",
      message: "",
    },
  });

  async function handleSubmit(values: ContactFormInput) {
    setFeedback(null);
    const result = await submitContact(values);

    setFeedback({
      type: result.success ? "success" : "error",
      message: result.message,
    });

    if (result.success) {
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-5 rounded-2xl bg-accent-soft p-7"
        noValidate
      >
        <h3 className="font-display text-lg font-bold text-foreground">
          Peça um retorno por telefone
        </h3>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu nome</FormLabel>
              <FormControl>
                <Input placeholder="Ex.: Ana Souza" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone com DDD</FormLabel>
              <FormControl>
                <Input placeholder="(11) 98765-4321" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="petName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do pet</FormLabel>
              <FormControl>
                <Input placeholder="Ex.: Toby" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Como podemos ajudar?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Conte o que seu pet precisa e o melhor horário para retornarmos."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Enviando..." : "Enviar mensagem"}
        </Button>

        {feedback && (
          <p
            role="status"
            className={
              feedback.type === "success"
                ? "text-sm font-medium text-brand"
                : "text-sm font-medium text-red-600"
            }
          >
            {feedback.message}
          </p>
        )}
      </form>
    </Form>
  );
}
