import type { ReactNode } from "react";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  Accent,
  Action,
  EditorialSection,
  Eyebrow,
  Frame,
  Title,
} from "@/components/layout/editorial";

export const editorialVisuals = {
  telemedicina: {
    file: "shiftg-medicos-on-telemedicina.png",
    alt: "Cena ilustrativa de uma médica em teleconsulta em um consultório com elementos geométricos azuis e brancos",
    position: "center",
  },
  saude: {
    file: "shiftg-saude-conectada.png",
    alt: "Cena ilustrativa de uma equipe administrativa de saúde organizando o atendimento",
    position: "65% center",
  },
  engenharia: {
    file: "shiftg-engenharia-digital.png",
    alt: "Cena ilustrativa de profissionais desenvolvendo uma solução digital",
    position: "center",
  },
  dados: {
    file: "shiftg-arquitetura-dados.png",
    alt: "Ilustração conceitual de estruturas conectadas por pontes azuis, representando arquitetura e integração de dados",
    position: "65% center",
  },
  equipe: {
    file: "shiftg-institucional.png",
    alt: "Cena ilustrativa de líderes e especialistas trabalhando juntos em uma decisão de negócio",
    position: "65% center",
  },
  pratica: {
    file: "shiftg-in-company.png",
    alt: "Cena ilustrativa de uma equipe trabalhando sobre processos e ferramentas digitais",
    position: "center",
  },
};
export type EditorialVisual = keyof typeof editorialVisuals;

export function EditorialImage({
  visual,
  priority = false,
  portrait = false,
  caption,
}: {
  visual: EditorialVisual;
  priority?: boolean;
  portrait?: boolean;
  caption?: string;
}) {
  const image = editorialVisuals[visual];
  return (
    <Box as="figure" w="full" minW={0}>
      <Box
        position="relative"
        w="full"
        aspectRatio={
          portrait ? { base: "4/3", lg: "1/1" } : { base: "4/3", md: "16/9" }
        }
        overflow="hidden"
        bg="off"
      >
        <NextImage
          src={`/images/editorial/${image.file}`}
          alt={image.alt}
          fill
          priority={priority}
          sizes={
            portrait
              ? "(min-width: 1280px) 45vw, 100vw"
              : "(min-width: 1280px) 1152px, 100vw"
          }
          style={{ objectFit: "cover", objectPosition: image.position }}
        />
      </Box>
      {caption && (
        <Flex
          as="figcaption"
          gap={3}
          py={4}
          borderBottom="1px solid"
          borderColor="blackAlpha.200"
          align="start"
        >
          <Box color="blue.solid" flexShrink={0}>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Box>
          <Text
            fontFamily="mono"
            fontSize="xs"
            color="blackAlpha.700"
            lineHeight={1.7}
          >
            {caption}
          </Text>
        </Flex>
      )}
    </Box>
  );
}

export function IllustratedHero({
  eyebrow,
  title,
  accent,
  description,
  visual,
  caption,
  tags,
  href = "/contato",
  cta = "Agendar uma conversa estratégica",
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  visual: EditorialVisual;
  caption: string;
  tags: string[];
  href?: string;
  cta?: string;
}) {
  return (
    <Box as="section" bg="white" py={{ base: 10, md: 16 }}>
      <Frame wide>
        <Grid
          templateColumns={{ base: "1fr", lg: "1.15fr 1fr" }}
          gap={{ base: 10, lg: 14 }}
          alignItems="center"
        >
          <Box>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading
              as="h1"
              fontSize={{ base: "3rem", md: "4.5rem", xl: "5.5rem" }}
              fontWeight={500}
              letterSpacing="-0.045em"
              lineHeight={1.06}
            >
              {title}
              <br />
              <Accent>{accent}</Accent>
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight={1.75}
              color="blackAlpha.700"
              mt={8}
              maxW="640px"
            >
              {description}
            </Text>
            <Box mt={9}>
              <Action href={href}>{cta}</Action>
            </Box>
            <Flex wrap="wrap" gap={3} mt={10}>
              {tags.map((tag, i) => (
                <Flex
                  key={tag}
                  gap={3}
                  borderTop="1px solid"
                  borderColor="blackAlpha.200"
                  py={3}
                  pr={4}
                >
                  <Text fontFamily="mono" fontSize="xs" color="blue.solid">
                    0{i + 1}
                  </Text>
                  <Text fontSize="sm">{tag}</Text>
                </Flex>
              ))}
            </Flex>
          </Box>
          <Box>
            <EditorialImage visual={visual} portrait priority />
            <Box bg="blue.solid" color="white" p={{ base: 6, md: 8 }}>
              <Text fontFamily="mono" fontSize="xs" mb={3}>
                SHIFT+G / DA VISÃO À APLICAÇÃO
              </Text>
              <Text fontSize="xl" lineHeight={1.35} letterSpacing="-0.025em">
                {caption}
              </Text>
            </Box>
          </Box>
        </Grid>
      </Frame>
    </Box>
  );
}

export function VisualStory({
  visual,
  eyebrow,
  title,
  description,
  children,
}: {
  visual: EditorialVisual;
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <EditorialSection muted>
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={{ base: 8, lg: 14 }}
        alignItems="center"
      >
        <EditorialImage visual={visual} portrait />
        <Box>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title>{title}</Title>
          <Text mt={7} fontSize="lg" lineHeight={1.8} color="blackAlpha.700">
            {description}
          </Text>
          {children && <Box mt={8}>{children}</Box>}
        </Box>
      </Grid>
    </EditorialSection>
  );
}
