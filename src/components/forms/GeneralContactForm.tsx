"use client";

import {
  Box,
  Input,
  VStack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SITE_PHONE } from "@/constants";
import { toaster } from "@/components/ui/toaster";

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  company: z.string().min(2, "Nome da empresa é obrigatório"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <VStack align="start" gap={2} w="full">
    <Text fontFamily="mono" fontSize="2xs" fontWeight={600} letterSpacing="0.05em" color="fg.subtle" textTransform="uppercase">
      {label}
    </Text>
    {children}
    {error && (
      <Text color="red.500" fontSize="xs" fontWeight={500}>
        {error}
      </Text>
    )}
  </VStack>
);

export function GeneralContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    setLoading(true);

    try {
      const message = `*Protocolo de Contato - SHIFT+G*\n\n*Nome:* ${data.name}\n*Email:* ${data.email}\n*Telefone:* ${data.phone || "Não informado"}\n*Empresa:* ${data.company}\n\n*Mensagem:*\n${data.message}`;

      const encodedMessage = encodeURIComponent(message);
      const cleanPhone = SITE_PHONE.replace(/\D/g, "");
      const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

      toaster.create({
        title: "Redirecionando para o WhatsApp...",
        type: "success",
        duration: 3000,
      });
    } catch (error) {
      toaster.create({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        type: "error",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      bg="white"
      p={{ base: 6, md: 10 }}
      w="full"
      maxW="xl"
      mx="auto"
    >
      <VStack gap={8} as="form" onSubmit={handleSubmit(onSubmit)} align="stretch">
        <VStack gap={2} align="start" mb={4}>
          <Text as="h3" fontSize="2xl" fontWeight={800} color="fg" letterSpacing="-0.5px">
            Iniciar Diagnóstico
          </Text>
          <Text color="fg.muted" fontSize="sm" lineHeight={1.6}>
            Nossa equipe técnica analisa cada requisição para garantir que os especialistas adequados assumam a chamada.
          </Text>
        </VStack>

        <VStack gap={5}>
          <Field label="Nome completo" error={errors.name?.message}>
            <Input
              {...register("name")}
              placeholder="Nome Completo"
              size="lg"
              rounded="none"
              bg="off"
              border="1px solid"
              borderColor="blackAlpha.200"
              _placeholder={{ color: "blackAlpha.400" }}
              _focus={{ borderColor: "blue.solid", bg: "white", outline: "none", boxShadow: "none" }}
            />
          </Field>

          <Field label="Email corporativo" error={errors.email?.message}>
            <Input
              {...register("email")}
              type="email"
              placeholder="seu@dominio.com.br"
              size="lg"
              rounded="none"
              bg="off"
              border="1px solid"
              borderColor="blackAlpha.200"
              _placeholder={{ color: "blackAlpha.400" }}
              _focus={{ borderColor: "blue.solid", bg: "white", outline: "none", boxShadow: "none" }}
            />
          </Field>

          <Field label="Telefone / WhatsApp" error={errors.phone?.message}>
            <Input
              {...register("phone")}
              placeholder="(00) 00000-0000"
              size="lg"
              rounded="none"
              bg="off"
              border="1px solid"
              borderColor="blackAlpha.200"
              _placeholder={{ color: "blackAlpha.400" }}
              _focus={{ borderColor: "blue.solid", bg: "white", outline: "none", boxShadow: "none" }}
            />
          </Field>

          <Field label="Nome da empresa" error={errors.company?.message}>
            <Input
              {...register("company")}
              placeholder="Nome da Empresa"
              size="lg"
              rounded="none"
              bg="off"
              border="1px solid"
              borderColor="blackAlpha.200"
              _placeholder={{ color: "blackAlpha.400" }}
              _focus={{ borderColor: "blue.solid", bg: "white", outline: "none", boxShadow: "none" }}
            />
          </Field>

          <Field label="Como podemos ajudar?" error={errors.message?.message}>
            <Textarea
              {...register("message")}
              placeholder="Descreva o escopo primário do seu desafio..."
              size="lg"
              rounded="none"
              bg="off"
              border="1px solid"
              borderColor="blackAlpha.200"
              minH="120px"
              _placeholder={{ color: "blackAlpha.400" }}
              _focus={{ borderColor: "blue.solid", bg: "white", outline: "none", boxShadow: "none" }}
            />
          </Field>
        </VStack>

        <Box
          as="button"
          type="submit"
          mt={4}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          bg="blue.solid"
          color="white"
          px="28px"
          py="16px"
          fontWeight={600}
          fontSize="sm"
          transition="all 0.2s"
          _hover={{ bg: "blue.fg" }}
          disabled={loading}
          cursor={loading ? "not-allowed" : "pointer"}
          opacity={loading ? 0.7 : 1}
        >
          {loading ? "Processando..." : "Submeter Requisição"}
          {!loading && <ArrowRight size={14} />}
        </Box>
      </VStack>
    </Box>
  );
}
