"use client";

import {
  Box,
  Grid,
  Text,
  Flex,
  Link as ChakraLink,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  MapPin,
  Instagram,
} from "lucide-react";
import {
  SITE_NAME,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_ADDRESS,
  INSTAGRAM_URL,
  SITE_CITY,
  SITE_STATE,
  SITE_COUNTRY,
  SITE_ZIP,
} from "@/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg="off" borderTop="1px solid" borderColor="blackAlpha.200" color="fg">
      <Grid
        templateColumns={{ base: "1fr", lg: "2fr 1fr 1fr 1.5fr" }}
      >
        {/* Col 1 - Marca & Descrição */}
        <Box
          p={{ base: 6, md: 8, lg: 10 }}
          borderRight={{ lg: "1px solid" }}
          borderBottom={{ base: "1px solid", lg: "none" }}
          borderColor="blackAlpha.200"
        >
          <HStack gap={3} mb={6}>
            <Box w="6px" h="6px" bg="blue.solid" />
            <Text fontFamily="mono" fontSize="2xs" fontWeight={800} letterSpacing="0.1em" textTransform="uppercase" color="blue.solid">
              {SITE_NAME}
            </Text>
          </HStack>
          <Text fontSize="sm" color="fg.muted" lineHeight={1.8} maxW="400px">
            Operacionais de I.A e Software B2B de vanguarda. Reconstruímos o back-office da sua operação extraindo inteligência pura de sistemas estáticos e acelerando sua escala por vias automatizadas.
          </Text>
        </Box>

        {/* Col 2 - Soluções */}
        <Box
          p={{ base: 6, md: 8, lg: 10 }}
          borderRight={{ lg: "1px solid" }}
          borderBottom={{ base: "1px solid", lg: "none" }}
          borderColor="blackAlpha.200"
        >
          <Text fontFamily="mono" fontSize="2xs" fontWeight={700} color="fg.subtle" mb={6} textTransform="uppercase">
            Setores de Engenharia
          </Text>
          <VStack align="flex-start" gap={4}>
            {[
              { label: "Software & SaaS", href: "/fabrica-de-software" },
              { label: "Auditoria de Back-Office", href: "/diagnostico-inteligente" },
              { label: "Sentinela (Monitoramento)", href: "/sentinela" },
              { label: "Treinamento de IA para sua Empresa", href: "/treinamento-ia-para-sua-empresa" },
              { label: "Digital Core", href: "/transformacao-digital" },
            ].map((link) => (
              <ChakraLink
                key={link.label}
                asChild
                fontSize="sm"
                fontWeight={500}
                color="fg"
                display="inline-flex"
                alignItems="center"
                gap={2}
                _hover={{ color: "blue.solid" }}
                transition="all 0.2s"
              >
                <Link href={link.href}>
                  {link.label}
                </Link>
              </ChakraLink>
            ))}
          </VStack>
        </Box>

        {/* Col 3 - Frameworks e Institucional */}
        <Box
          p={{ base: 6, md: 8, lg: 10 }}
          borderRight={{ lg: "1px solid" }}
          borderBottom={{ base: "1px solid", lg: "none" }}
          borderColor="blackAlpha.200"
        >
          <Text fontFamily="mono" fontSize="2xs" fontWeight={700} color="fg.subtle" mb={6} textTransform="uppercase">
            Matriz Operacional
          </Text>
          <VStack align="flex-start" gap={4}>
            {[
              { label: "Missão SHIFT+G", href: "/sobre" },
              { label: "Painel de Carreiras", href: "/carreiras" },
              { label: "Intel & Logs (Blog)", href: "/insights" },
              { label: "Requisição de Contato", href: "/contato" },
            ].map((link) => (
              <ChakraLink
                key={link.label}
                asChild
                fontSize="sm"
                fontWeight={500}
                color="fg"
                display="inline-flex"
                alignItems="center"
                gap={2}
                _hover={{ color: "blue.solid" }}
                transition="all 0.2s"
              >
                <Link href={link.href}>
                  {link.label}
                </Link>
              </ChakraLink>
            ))}
          </VStack>
        </Box>

        {/* Col 4 - Target & Intel */}
        <Box
          p={{ base: 6, md: 8, lg: 10 }}
        >
          <Text fontFamily="mono" fontSize="2xs" fontWeight={700} color="fg.subtle" mb={6} textTransform="uppercase">
            Protocolos de Comunicação
          </Text>

          <VStack align="flex-start" gap={6}>
            <Box>
              <Text fontSize="xs" fontWeight={700} color="fg.muted" mb={1}>ENDEREÇAMENTO DIRETO</Text>
              <ChakraLink
                href={`mailto:${SITE_EMAIL}`}
                fontSize="sm"
                fontWeight={600}
                color="fg"
                _hover={{ color: "blue.solid" }}
              >
                {SITE_EMAIL}
              </ChakraLink>
            </Box>

            <Box>
              <Text fontSize="xs" fontWeight={700} color="fg.muted" mb={1}>LINHA SEGURA</Text>
              <ChakraLink
                href={`https://wa.me/${SITE_PHONE.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                fontSize="sm"
                fontWeight={600}
                color="fg"
                _hover={{ color: "blue.solid" }}
              >
                {SITE_PHONE}
              </ChakraLink>
            </Box>

            <Box>
              <HStack gap={2} mb={2} align="flex-start">
                <Box mt="2px"><MapPin size={12} color="var(--chakra-colors-fg-muted)" /></Box>
                <Text fontSize="xs" fontWeight={700} color="fg.muted">QG ESTRATÉGICO</Text>
              </HStack>
              <ChakraLink
                href="https://share.google/pdwxAqtLixXnOV9Pj"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ textDecoration: "none" }}
              >
                <Text fontSize="sm" color="fg" fontWeight={500} _hover={{ color: 'blue.solid' }} transition="color 0.2s">
                  {SITE_ADDRESS}<br />
                  {SITE_CITY} - {SITE_STATE}, {SITE_COUNTRY}<br />
                  {SITE_ZIP}
                </Text>
              </ChakraLink>
            </Box>
          </VStack>
        </Box>

      </Grid>

      {/* Roda-pé de Compliance */}
      <Flex
        px={{ base: 6, md: 8, lg: 10 }}
        py={6}
        borderTop="1px solid"
        borderColor="blackAlpha.200"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        gap={4}
        bg="white"
      >
        <Text fontFamily="mono" fontSize="xs" color="fg.muted" fontWeight={500}>
          © {currentYear} {SITE_NAME}. STRICT COMPLIANCE PROTOCOL ENABLED.
        </Text>
        <HStack gap={6}>
          <ChakraLink
            asChild
            fontFamily="mono"
            fontSize="2xs"
            color="fg.muted"
            textTransform="uppercase"
            _hover={{ color: "blue.solid" }}
            transition="color 0.2s"
          >
            <Link href="/politica-de-privacidade">
              Data Privacy
            </Link>
          </ChakraLink>
          <ChakraLink
            asChild
            fontFamily="mono"
            fontSize="2xs"
            color="fg.muted"
            textTransform="uppercase"
            _hover={{ color: "blue.solid" }}
            transition="color 0.2s"
          >
            <Link href="/termos-de-uso">
              TOS
            </Link>
          </ChakraLink>
          <ChakraLink
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            color="fg.muted"
            _hover={{ color: "blue.solid" }}
            transition="color 0.2s"
          >
            <Instagram size={16} />
          </ChakraLink>
        </HStack>
      </Flex>
    </Box>
  );
}
