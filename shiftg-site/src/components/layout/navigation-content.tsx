"use client";

import { Box, Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import {
  ArrowUpRight,
  Blocks,
  Building2,
  ChartNoAxesCombined,
  Code2,
  GraduationCap,
  Lightbulb,
  ScanLine,
  Users,
} from "lucide-react";
import { projects } from "@/constants/projects";

export type NavigationGroup = "solucoes" | "ecossistema" | "shiftg";
export const navigationGroups: {
  id: NavigationGroup;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
}[] = [
  {
    id: "solucoes",
    label: "Soluções",
    eyebrow: "VISÃO + EXECUÇÃO",
    title: "Da decisão à mudança na operação.",
    description:
      "Conheça as frentes que conectam estratégia, tecnologia e pessoas.",
  },
  {
    id: "ecossistema",
    label: "Ecossistema",
    eyebrow: `${String(projects.length).padStart(2, "0")} PROJETOS / IA APLICADA`,
    title: "Tecnologia que já tem nome e aplicação.",
    description: "Produtos próprios e colaborações, em diferentes setores.",
  },
  {
    id: "shiftg",
    label: "A SHIFT+G",
    eyebrow: "EMPRESA + CONHECIMENTO",
    title: "Conheça quem constrói com você.",
    description:
      "Nossa atuação, nossas relações e as ideias que orientam o trabalho.",
  },
];
const solutionLinks = [
  {
    label: "Transformação digital",
    text: "Processos, sistemas e dados conectados.",
    href: "/transformacao-digital",
    icon: ChartNoAxesCombined,
  },
  {
    label: "IA in company",
    text: "Aprendizado aplicado aos gargalos do time.",
    href: "/treinamento-ia-para-sua-empresa",
    icon: GraduationCap,
  },
  {
    label: "Fábrica de software",
    text: "Tecnologia sob medida para a operação.",
    href: "/fabrica-de-software",
    icon: Code2,
  },
  {
    label: "Construa seu SaaS",
    text: "Do conhecimento do negócio ao produto.",
    href: "/fabrica-de-software/construa-seu-saas",
    icon: Blocks,
  },
  {
    label: "Diagnóstico inteligente",
    text: "Clareza para definir o próximo passo.",
    href: "/diagnostico-inteligente",
    icon: ScanLine,
  },
];
const companyLinks = [
  {
    label: "Atendimento regional",
    text: "União da Vitória, Porto União, Curitiba e região.",
    href: "/atendimento",
    icon: Building2,
  },
  {
    label: "Sobre a SHIFT+G",
    text: "Estratégia, engenharia e proximidade.",
    href: "/sobre",
    icon: Building2,
  },
  {
    label: "Clientes e parcerias",
    text: "Conheça o trabalho nas empresas.",
    href: "/#clientes",
    icon: Users,
  },
  {
    label: "Insights",
    text: "Perspectivas sobre IA, dados e negócios.",
    href: "/insights",
    icon: Lightbulb,
  },
  {
    label: "Carreiras",
    text: "Faça parte da próxima transformação.",
    href: "/carreiras",
    icon: Code2,
  },
  {
    label: "Medidor de prompt",
    text: "Explore nossa ferramenta de avaliação.",
    href: "/medidor-de-prompt",
    icon: ScanLine,
  },
];
const features = {
  solucoes: {
    label: "EM DESTAQUE / TODO O BRASIL",
    title: "IA dentro da sua empresa. Conhecimento dentro do seu time.",
    text: "Trabalhamos ao lado da equipe sobre os desafios da sua operação.",
    cta: "Conhecer o programa",
    href: "/treinamento-ia-para-sua-empresa",
    image: "shiftg-in-company.png",
  },
  ecossistema: {
    label: "CENTELHA PR 2026 / SELECIONADO",
    title: "Pontes: conexões para a saúde pública.",
    text: "Projeto em validação para conectar consórcios de saúde e apoiar a redução do absenteísmo com IA.",
    cta: "Explorar o Pontes",
    href: "/projetos/pontes",
    image: null,
  },
  shiftg: {
    label: "A NOSSA ATUAÇÃO",
    title: "Ao lado de quem decide. Junto de quem faz.",
    text: "Do sul do Brasil, construímos a transformação com empresas de todo o país.",
    cta: "Conheça a SHIFT+G",
    href: "/sobre",
    image: "shiftg-institucional.png",
  },
};

export function NavigationContent({
  group,
  onNavigate,
  mobile = false,
  pathname,
}: {
  group: NavigationGroup;
  onNavigate: () => void;
  mobile?: boolean;
  pathname: string;
}) {
  const info = navigationGroups.find((item) => item.id === group)!;
  const feature = features[group];
  const links = group === "solucoes" ? solutionLinks : companyLinks;
  return (
    <Grid
      templateColumns={mobile ? "1fr" : "0.85fr 2fr 1fr"}
      gap={mobile ? 6 : 8}
    >
      {!mobile && (
        <Stack gap={5} pr={4}>
          <Text
            fontFamily="mono"
            fontSize="xs"
            color="blue.solid"
            letterSpacing="0.06em"
          >
            {info.eyebrow}
          </Text>
          <Text
            fontSize="2xl"
            lineHeight={1.2}
            fontWeight={500}
            letterSpacing="-0.035em"
          >
            {info.title}
          </Text>
          <Text fontSize="sm" lineHeight={1.7} color="blackAlpha.700">
            {info.description}
          </Text>
          <Text
            fontFamily="mono"
            fontSize="xs"
            mt="auto"
            color="blackAlpha.600"
          >
            SHIFT+G / AI & DATA
          </Text>
        </Stack>
      )}
      <Stack gap={4}>
        <Grid
          templateColumns={mobile ? "1fr" : "repeat(2, minmax(0, 1fr))"}
          gap={2}
        >
          {group === "ecossistema"
            ? projects.map((project) => (
                <Box
                  asChild
                  key={project.slug}
                  p={3}
                  border="1px solid"
                  borderColor="blackAlpha.200"
                  _hover={{ bg: "off", borderColor: "blue.solid" }}
                  _focusVisible={{
                    outline: "2px solid",
                    outlineColor: "blue.solid",
                  }}
                >
                  <Link
                    href={`/projetos/${project.slug}`}
                    onClick={onNavigate}
                    aria-current={
                      pathname === `/projetos/${project.slug}`
                        ? "page"
                        : undefined
                    }
                  >
                    <Flex align="center" justify="space-between" gap={3} mb={3}>
                      <Image
                        src={`/images/products/${project.logo}`}
                        alt=""
                        w="100px"
                        h="32px"
                        objectFit="contain"
                        objectPosition="left center"
                      />
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Flex>
                    <Text fontSize="sm" fontWeight={600}>
                      {project.name}
                    </Text>
                    <Text fontSize="xs" color="blackAlpha.700" mt={1}>
                      {project.category}
                    </Text>
                  </Link>
                </Box>
              ))
            : links.map((item) => {
                const Icon = item.icon;
                return (
                  <Box
                    asChild
                    key={item.href}
                    p={4}
                    border="1px solid"
                    borderColor="blackAlpha.200"
                    _hover={{ bg: "off", borderColor: "blue.solid" }}
                    _focusVisible={{
                      outline: "2px solid",
                      outlineColor: "blue.solid",
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      <Flex
                        justify="space-between"
                        align="center"
                        gap={3}
                        mb={4}
                        color="blue.solid"
                      >
                        <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </Flex>
                      <Text fontSize="sm" fontWeight={600}>
                        {item.label}
                      </Text>
                      <Text
                        fontSize="xs"
                        lineHeight={1.6}
                        color="blackAlpha.700"
                        mt={2}
                      >
                        {item.text}
                      </Text>
                    </Link>
                  </Box>
                );
              })}
          <Box
            asChild
            bg="off"
            p={4}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            gap={4}
            _hover={{ bg: "blue.solid", color: "white" }}
          >
            <Link
              href={group === "ecossistema" ? "/ecossistema" : "/contato"}
              onClick={onNavigate}
            >
              <ArrowUpRight size={22} aria-hidden="true" />
              <Text fontSize="sm" fontWeight={600}>
                {group === "ecossistema"
                  ? "Ver todo o ecossistema"
                  : "Vamos conversar sobre sua empresa"}
              </Text>
            </Link>
          </Box>
        </Grid>
      </Stack>
      {!mobile && (
        <Box
          asChild
          bg="blue.solid"
          color="white"
          display="flex"
          flexDirection="column"
          _hover={{ bg: "black" }}
          transition="background 200ms ease"
        >
          <Link href={feature.href} onClick={onNavigate}>
            {feature.image ? (
              <Image
                src={`/images/editorial/${feature.image}`}
                alt=""
                w="full"
                h="130px"
                objectFit="cover"
              />
            ) : (
              <Flex
                h="100px"
                p={6}
                justify="space-between"
                align="center"
                borderBottom="1px solid"
                borderColor="whiteAlpha.400"
              >
                <Text fontSize="4xl" letterSpacing="-0.04em">
                  Pontes.
                </Text>
                <ArrowUpRight size={40} strokeWidth={1} aria-hidden="true" />
              </Flex>
            )}
            <Stack p={5} gap={4} flex={1}>
              <Text fontFamily="mono" fontSize="xs" lineHeight={1.7}>
                {feature.label}
              </Text>
              <Text fontSize="xl" lineHeight={1.25} letterSpacing="-0.025em">
                {feature.title}
              </Text>
              <Text fontSize="sm" lineHeight={1.6} color="whiteAlpha.800">
                {feature.text}
              </Text>
              <Flex
                pt={5}
                mt="auto"
                borderTop="1px solid"
                borderColor="whiteAlpha.400"
                gap={3}
                justify="space-between"
                align="center"
              >
                <Text fontSize="sm">{feature.cta}</Text>
                <ArrowUpRight size={18} aria-hidden="true" />
              </Flex>
            </Stack>
          </Link>
        </Box>
      )}
    </Grid>
  );
}
