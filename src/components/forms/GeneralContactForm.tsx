"use client";

import {
    Box,
    Button,
    Input,
    VStack,
    Text,
    Heading,
    Textarea,
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
    email: z.string().email("Email inválido"),
    phone: z.string().optional(),
    company: z.string().min(2, "Nome da empresa é obrigatório"),
    message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
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
            const message = `*Novo Contato - Site Shift+G*
      
*Nome:* ${data.name}
*Email:* ${data.email}
*Telefone:* ${data.phone || "Não informado"}
*Empresa:* ${data.company}

*Mensagem:*
${data.message}`;

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
                        Fale Conosco
                    </Heading>
                    <Text color="gray.600">
                        Preencha o formulário abaixo e entraremos em contato o mais breve possível.
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

                    <Field label="Email corporativo" error={errors.email?.message}>
                        <Input
                            {...register("email")}
                            type="email"
                            placeholder="seu@email.com"
                            size="lg"
                            rounded="xl"
                            bg="gray.50"
                            border="1px solid"
                            borderColor="gray.200"
                            _focus={{ borderColor: "blue.500", bg: "white", outline: "none", ring: "2px", ringColor: "blue.100" }}
                        />
                    </Field>

                    <Field label="Telefone / WhatsApp" error={errors.phone?.message}>
                        <Input
                            {...register("phone")}
                            placeholder="(00) 00000-0000"
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

                    <Field label="Como podemos ajudar?" error={errors.message?.message}>
                        <Textarea
                            {...register("message")}
                            placeholder="Descreva brevemente sua necessidade..."
                            size="lg"
                            rounded="xl"
                            bg="gray.50"
                            border="1px solid"
                            borderColor="gray.200"
                            minH="120px"
                            _focus={{ borderColor: "blue.500", bg: "white", outline: "none", ring: "2px", ringColor: "blue.100" }}
                        />
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
                    loadingText="Enviando..."
                    rounded="xl"
                    fontSize="lg"
                >
                    Enviar Mensagem
                    <Send size={20} style={{ marginLeft: "8px" }} />
                </Button>
            </VStack>
        </Box>
    );
}
