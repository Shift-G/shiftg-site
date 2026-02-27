"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  Link as ChakraLink,
  SimpleGrid,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import {
  SITE_NAME,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_ADDRESS,
  INSTAGRAM_URL,
} from "@/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg="bg.subtle" borderTop="1px" borderColor="border">
      <Container maxW="7xl" py={{ base: 10, md: 12 }}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          gap={{ base: 8, md: 10 }}
        >
          {/* Sobre */}
          <VStack align="flex-start" gap={4}>
            <Text
              fontSize="xl"
              fontWeight="400"
              bgGradient="linear-gradient(0deg, {colors.blue.500}, {colors.blue.600})"
              bgClip="text"
            >
              {SITE_NAME}
            </Text>
            <Text fontSize="sm" color="fg.muted" lineHeight="tall">
              Especialistas em IA e Analytics para empresas que querem
              multiplicar resultados. Do People Analytics ao Machine Learning
              aplicado ao seu negócio.
            </Text>
          </VStack>

          {/* Soluções */}
          <VStack align="flex-start" gap={3}>
            <Text fontWeight="300" fontSize="sm" color="fg">
              Soluções
            </Text>
            <Stack gap={2}>
              {[
                { label: "Fábrica de Software", href: "/fabrica-de-software" },
                { label: "Diagnóstico Inteligente", href: "/diagnostico-inteligente" },
                { label: "Sentinela - People Analytics", href: "/sentinela" },
                { label: "Treinamento em IA", href: "/treinamento-ia-para-sua-empresa" },
                { label: "Transformação Digital", href: "/transformacao-digital" },
              ].map((link) => (
                <ChakraLink
                  key={link.label}
                  as={Link}
                  href={link.href}
                  fontSize="sm"
                  color="fg.muted"
                  _hover={{ color: "blue.fg" }}
                  transition="color 0.2s"
                >
                  {link.label}
                </ChakraLink>
              ))}
            </Stack>
          </VStack>

          {/* Empresa */}
          <VStack align="flex-start" gap={3}>
            <Text fontWeight="300" fontSize="sm" color="fg">
              Empresa
            </Text>
            <Stack gap={2}>
              {[
                { label: "Sobre Nós", href: "/sobre" },
                { label: "Carreiras", href: "/carreiras" },
                { label: "Insights", href: "/insights" },
              ].map((link) => (
                <ChakraLink
                  key={link.label}
                  as={Link}
                  href={link.href}
                  fontSize="sm"
                  color="fg.muted"
                  _hover={{ color: "blue.fg" }}
                  transition="color 0.2s"
                >
                  {link.label}
                </ChakraLink>
              ))}
            </Stack>
          </VStack>

          {/* Contato */}
          <VStack align="flex-start" gap={3}>
            <Text fontWeight="300" fontSize="sm" color="fg">
              Contato
            </Text>
            <Stack gap={3}>
              <HStack gap={2}>
                <Mail size={16} />
                <ChakraLink
                  href={`mailto:${SITE_EMAIL}`}
                  fontSize="sm"
                  color="fg.muted"
                  _hover={{ color: "blue.fg" }}
                  transition="color 0.2s"
                >
                  {SITE_EMAIL}
                </ChakraLink>
              </HStack>
              <HStack gap={2}>
                <MessageCircle size={16} />
                <ChakraLink
                  href={`https://wa.me/${SITE_PHONE.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="sm"
                  color="fg.muted"
                  _hover={{ color: "blue.fg" }}
                  transition="color 0.2s"
                >
                  {SITE_PHONE}
                </ChakraLink>
              </HStack>
              <HStack gap={2} as="address">
                <MapPin size={16} />
                <Text
                  fontSize="sm"
                  color="fg.muted"
                  as={Link}
                  // @ts-ignore
                  href="https://share.google/pdwxAqtLixXnOV9Pj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE_ADDRESS}
                </Text>
              </HStack>
              <HStack gap={3} mt={2}>
                {/* <ChakraLink
                  href="https://linkedin.com/company/shiftg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  _hover={{ color: "blue.500" }}
                  transition="color 0.2s"
                >
                  <Linkedin size={20} />
                </ChakraLink> */}
                <ChakraLink
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  _hover={{ color: "blue.500" }}
                  transition="color 0.2s"
                >
                  <Instagram size={20} />
                </ChakraLink>
              </HStack>
            </Stack>
          </VStack>
        </SimpleGrid>

        <Flex
          mt={10}
          pt={8}
          borderTop="1px"
          borderColor="border"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text fontSize="sm" color="fg.muted">
            © {currentYear} {SITE_NAME}. Todos os direitos reservados.
          </Text>
          <HStack gap={6}>
            <ChakraLink
              as={Link}
              href="/politica-de-privacidade"
              fontSize="sm"
              color="fg.muted"
              _hover={{ color: "blue.fg" }}
              transition="color 0.2s"
            >
              Política de Privacidade
            </ChakraLink>
            <ChakraLink
              as={Link}
              href="/termos-de-uso"
              fontSize="sm"
              color="fg.muted"
              _hover={{ color: "blue.fg" }}
              transition="color 0.2s"
            >
              Termos de Uso
            </ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
