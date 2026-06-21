"use client";

import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  Heading,
  chakra,
  createListCollection,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Send } from "lucide-react";
import { SITE_PHONE } from "@/constants";
import { toaster } from "@/components/ui/toaster";

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  company: z.string().min(2, "Nome da empresa é obrigatório"),
  employees: z.string().min(1, "Selecione a quantidade de funcionários"),
  industry: z.string().min(2, "Ramo de atuação é obrigatório"),
  maturity: z.string().min(1, "Selecione o nível de maturidade"),
});

type FormData = z.infer<typeof formSchema>;

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <VStack align="start" gap={2} w="full">
    <Text fontWeight="medium" color="gray.700" fontSize="sm">
      {label}
    </Text>
    {children}
    {error && (
      <Text color="red.500" fontSize="xs">
        {error}
      </Text>
    )}
  </VStack>
);

export function ContactForm() {
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
      const message = `*Novo Contato - Treinamento de IA In Company*
      
*Nome:* ${data.name}
*Empresa:* ${data.company}
*Funcionários:* ${data.employees}
*Ramo:* ${data.industry}
*Maturidade em IA:* ${data.maturity}

Gostaria de saber mais sobre o treinamento.`;

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
      rounded="3xl"
      shadow="xl"
      border="1px solid"
      borderColor="gray.100"
      w="full"
      maxW="xl"
      mx="auto"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="6px"
        bgGradient="linear(to-r, blue.500, purple.600)"
      />

      <VStack gap={8} as="form" onSubmit={handleSubmit(onSubmit)} align="stretch">
        <VStack gap={2} align="start">
          <Heading size="lg" fontWeight="bold" color="gray.800">
            Vamos conversar?
          </Heading>
          <Text color="gray.600">
            Preencha os dados abaixo para receber um contato dos nossos especialistas.
          </Text>
        </VStack>

        <VStack gap={5}>
          <Field label="Nome completo" error={errors.name?.message}>
            <Input
              {...register("name")}
              placeholder="Seu nome"
              size="lg"
              rounded="xl"
              bg="gray.50"
              border="1px solid"
              borderColor="gray.200"
              _focus={{ borderColor: "blue.500", bg: "white", outline: "none", ring: "2px", ringColor: "blue.100" }}
            />
          </Field>

          <Field label="Nome da empresa" error={errors.company?.message}>
            <Input
              {...register("company")}
              placeholder="Sua empresa"
              size="lg"
              rounded="xl"
              bg="gray.50"
              border="1px solid"
              borderColor="gray.200"
              _focus={{ borderColor: "blue.500", bg: "white", outline: "none", ring: "2px", ringColor: "blue.100" }}
            />
          </Field>

          <Field label="Ramo de atuação" error={errors.industry?.message}>
            <Input
              {...register("industry")}
              placeholder="Ex: Tecnologia, Varejo, Indústria..."
              size="lg"
              rounded="xl"
              bg="gray.50"
              border="1px solid"
              borderColor="gray.200"
              _focus={{ borderColor: "blue.500", bg: "white", outline: "none", ring: "2px", ringColor: "blue.100" }}
            />
          </Field>

          <Field label="Quantidade de funcionários" error={errors.employees?.message}>
            <chakra.select
              {...register("employees")}
              w="full"
              h="12"
              px={4}
              rounded="xl"
              bg="gray.50"
              border="1px solid"
              borderColor="gray.200"
              _focus={{ borderColor: "blue.500", bg: "white", outline: "none", ring: "2px", ringColor: "blue.100" }}
              color="gray.700"
            >
              <option value="">Selecione uma opção</option>
              <option value="1-10">1 a 10</option>
              <option value="11-50">11 a 50</option>
              <option value="51-200">51 a 200</option>
              <option value="201-500">201 a 500</option>
              <option value="501+">Mais de 500</option>
            </chakra.select>
          </Field>

          <Field label="Nível de maturidade em IA" error={errors.maturity?.message}>
            <chakra.select
              {...register("maturity")}
              w="full"
              h="12"
              px={4}
              rounded="xl"
              bg="gray.50"
              border="1px solid"
              borderColor="gray.200"
              _focus={{ borderColor: "blue.500", bg: "white", outline: "none", ring: "2px", ringColor: "blue.100" }}
              color="gray.700"
            >
              <option value="">Selecione uma opção</option>
              <option value="Nenhum conhecimento">Nenhum conhecimento</option>
              <option value="Iniciante (curiosidade)">Iniciante (apenas curiosidade)</option>
              <option value="Pouco aplicado (testes isolados)">Pouco aplicado (testes isolados)</option>
              <option value="Em uso (algumas áreas)">Em uso (algumas áreas)</option>
              <option value="Avançado (integrado ao negócio)">Avançado (integrado ao negócio)</option>
            </chakra.select>
          </Field>
        </VStack>

        <Button
          type="submit"
          size="xl"
          h={14}
          w="full"
          colorPalette="blue"
          bgGradient="linear(to-r, blue.600, purple.600)"
          _hover={{
            bgGradient: "linear(to-r, blue.700, purple.700)",
            transform: "translateY(-2px)",
            shadow: "lg"
          }}
          transition="all 0.2s"
          loading={loading}
          loadingText="Preparando..."
          rounded="xl"
          fontSize="lg"
        >
          Solicitar Proposta
          <Send size={20} style={{ marginLeft: "8px" }} />
        </Button>
      </VStack>
    </Box>
  );
}
