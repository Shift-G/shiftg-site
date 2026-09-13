import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Frame } from "./editorial";
import { BrandLogo } from "./brand-logo";
import {
  SITE_EMAIL,
  SITE_PHONE,
  SITE_ADDRESS,
  SITE_CITY,
  SITE_STATE,
  SITE_ZIP,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  INSTITUTIONAL_PDF_URL,
} from "@/constants";
const groups = [
  {
    title: "O que fazemos",
    links: [
      ["Transformação digital", "/transformacao-digital"],
      ["IA in company", "/treinamento-ia-para-sua-empresa"],
      ["Ecossistema", "/ecossistema"],
      ["Desenvolvimento de software", "/fabrica-de-software"],
      ["Construa seu SaaS", "/fabrica-de-software/construa-seu-saas"],
      ["Diagnóstico inteligente", "/diagnostico-inteligente"],
      ["Projetos em clientes", "/#clientes"],
    ],
  },
  {
    title: "SHIFT+G",
    links: [
      ["Sobre nós", "/sobre"],
      ["Atendimento regional", "/atendimento"],
      ["Contato", "/contato"],
      ["Insights", "/insights"],
      ["Medidor de prompt", "/medidor-de-prompt"],
      ["Carreiras", "/carreiras"],
      ["Material institucional", INSTITUTIONAL_PDF_URL],
    ],
  },
];
export function Footer() {
  return (
    <Box
      as="footer"
      bg="off"
      color="black"
      borderTop="1px solid"
      borderColor="blackAlpha.200"
      py={12}
    >
      <Frame>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1.4fr 1fr 1fr",
            xl: "1.5fr 1fr 1fr 1.4fr",
          }}
          gap={10}
          pb={12}
        >
          <Stack gap={5} align="start">
            <Box w="150px" css={{ "& svg": { width: "100%", height: "64px" } }}>
              <BrandLogo />
            </Box>
            <Text fontSize="md" maxW="280px" color="blackAlpha.700">
              Transformação digital com IA aplicada e governança de dados.
            </Text>
            <Text fontFamily="mono" fontSize="sm">
              DE UNIÃO DA VITÓRIA.
              <br />
              PARA TODO O PAÍS.
            </Text>
          </Stack>
          {groups.map((group) => (
            <Stack key={group.title} gap={4}>
              <Text
                fontFamily="mono"
                fontSize="sm"
                color="blackAlpha.700"
                mb={2}
              >
                {group.title}
              </Text>
              {group.links.map(([label, href]) => (
                <Box
                  asChild
                  key={href}
                  fontSize="sm"
                  _hover={{ color: "blue.solid" }}
                >
                  <Link href={href}>{label}</Link>
                </Box>
              ))}
            </Stack>
          ))}
          <Stack align="start" gap={4}>
            <Text fontFamily="mono" fontSize="sm" color="blackAlpha.700" mb={2}>
              Vamos conversar
            </Text>
            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
            <a href={`https://wa.me/${SITE_PHONE.replace(/\D/g, "")}`}>
              {SITE_PHONE}
            </a>
            <Text fontSize="sm" color="blackAlpha.700">
              {SITE_ADDRESS}
              <br />
              {SITE_CITY}, {SITE_STATE} · CEP {SITE_ZIP}
            </Text>
            <Box
              asChild
              fontSize="sm"
              color="blackAlpha.700"
              _hover={{ color: "blue.solid" }}
            >
              <Link href="/atendimento">
                Atendimento em Porto União, São Mateus do Sul, Curitiba e
                região.
              </Link>
            </Box>
            <Flex gap={5}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Flex>
          </Stack>
        </Grid>
        <Flex
          pt={6}
          borderTop="1px solid"
          borderColor="blackAlpha.200"
          justify="space-between"
          gap={5}
          wrap="wrap"
          fontSize="sm"
          color="blackAlpha.700"
        >
          <Text>
            © {new Date().getFullYear()} SHIFT+G. Todos os direitos reservados.
          </Text>
          <Flex gap={6} wrap="wrap">
            <Link href="/politica-de-privacidade">Privacidade</Link>
            <Link href="/termos-de-uso">Termos de uso</Link>
          </Flex>
        </Flex>
      </Frame>
    </Box>
  );
}
