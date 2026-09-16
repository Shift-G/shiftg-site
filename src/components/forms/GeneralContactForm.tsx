"use client";
import {
  Box,
  Button,
  Field,
  Grid,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SITE_PHONE } from "@/constants";
const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome."),
  email: z.string().trim().email("Informe um e-mail válido."),
  phone: z.string().trim().optional(),
  company: z.string().trim().min(2, "Informe o nome da empresa."),
  message: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais sobre o desafio (ao menos 10 caracteres)."),
});
type ContactData = z.infer<typeof schema>;
export function GeneralContactForm({ context }: { context?: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>({ resolver: zodResolver(schema) });
  function onSubmit(data: ContactData) {
    const text = `Olá! Gostaria de agendar uma conversa estratégica com a SHIFT+G.\n\nNome: ${data.name}\nEmpresa: ${data.company}\nE-mail: ${data.email}\nTelefone: ${data.phone || "Não informado"}\nInteresse: ${context || "Transformação digital"}\n\nDesafio: ${data.message}`;
    window.location.assign(
      `https://wa.me/${SITE_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`,
    );
  }
  const inputStyles = {
    h: 14,
    rounded: "none",
    bg: "white",
    borderColor: "blackAlpha.400",
    fontSize: "md",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "blue.solid",
      outlineOffset: "2px",
    },
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack gap={6}>
        <Text as="h2" fontSize="2xl" fontWeight={500}>
          Conte o que sua empresa precisa.
        </Text>
        {context && (
          <Text fontSize="sm" color="blue.solid">
            Interesse: {context}
          </Text>
        )}
        <Field.Root invalid={!!errors.name} required>
          <Field.Label>
            Seu nome
            <Field.RequiredIndicator />
          </Field.Label>
          <Input autoComplete="name" {...register("name")} {...inputStyles} />
          <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.company} required>
          <Field.Label>
            Empresa
            <Field.RequiredIndicator />
          </Field.Label>
          <Input
            autoComplete="organization"
            {...register("company")}
            {...inputStyles}
          />
          <Field.ErrorText>{errors.company?.message}</Field.ErrorText>
        </Field.Root>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
          <Field.Root invalid={!!errors.email} required>
            <Field.Label>
              E-mail corporativo
              <Field.RequiredIndicator />
            </Field.Label>
            <Input
              type="email"
              autoComplete="email"
              {...register("email")}
              {...inputStyles}
            />
            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
          </Field.Root>
          <Field.Root>
            <Field.Label>WhatsApp (opcional)</Field.Label>
            <Input
              type="tel"
              autoComplete="tel"
              {...register("phone")}
              {...inputStyles}
            />
          </Field.Root>
        </Grid>
        <Field.Root invalid={!!errors.message} required>
          <Field.Label>
            Qual desafio você quer resolver?
            <Field.RequiredIndicator />
          </Field.Label>
          <Textarea
            {...register("message")}
            rounded="none"
            bg="white"
            borderColor="blackAlpha.400"
            minH="140px"
            fontSize="md"
            placeholder="Conte sobre o gargalo, a prioridade ou a oportunidade que você enxerga."
            _focusVisible={{
              outline: "2px solid",
              outlineColor: "blue.solid",
              outlineOffset: "2px",
            }}
          />
          <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
        </Field.Root>
        <Button
          type="submit"
          bg="blue.solid"
          color="white"
          rounded="none"
          minH={14}
          h="auto"
          py={4}
          whiteSpace="normal"
          fontSize="md"
          _hover={{ bg: "blue.700" }}
        >
          Continuar no WhatsApp
        </Button>
        <Text fontSize="sm" color="blackAlpha.700" lineHeight={1.6}>
          Vamos abrir o WhatsApp com sua mensagem pronta. Você revisa e envia
          para nossa equipe para combinar a conversa.
        </Text>
      </Stack>
    </form>
  );
}
