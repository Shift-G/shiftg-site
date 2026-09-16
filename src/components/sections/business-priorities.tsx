"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  ArrowDown,
  ArrowUpRight,
  Blocks,
  Network,
  ScanLine,
} from "lucide-react";
import {
  Accent,
  Action,
  EditorialSection,
  Eyebrow,
  Title,
} from "@/components/layout/editorial";

const priorities = [
  {
    label: "Ganhar eficiência",
    icon: Network,
    title: "Uma operação que acompanha a sua ambição.",
    description:
      "Sistemas isolados, tarefas manuais e informação dispersa consomem a capacidade do time. Conectamos processos, dados e IA para mudar essa rotina.",
    context: "Processos fragmentados · Retrabalho · Dados dispersos",
    steps: [
      "Mapear o que trava a operação",
      "Integrar sistemas e aplicar IA",
      "Acompanhar com dados e governança",
    ],
    delivery: "Fluxos integrados, automações e informação para decidir.",
    href: "/transformacao-digital",
    cta: "Explorar transformação digital",
  },
  {
    label: "Criar novos produtos",
    icon: Blocks,
    title: "Conhecimento do negócio que vira produto digital.",
    description:
      "Transformamos oportunidades identificadas na operação em soluções próprias. Da definição do problema à construção da plataforma, trabalhamos junto de quem conhece o mercado.",
    context: "Oportunidade de mercado · Conhecimento próprio · Novo serviço",
    steps: [
      "Definir o problema e o público",
      "Construir e validar a solução",
      "Evoluir com o uso e o aprendizado",
    ],
    delivery: "Software sob medida, plataformas e novos serviços digitais.",
    href: "/ecossistema",
    cta: "Conhecer os nossos projetos",
  },
  {
    label: "Preparar o time para IA",
    icon: ScanLine,
    title: "A inteligência artificial entra na rotina do seu time.",
    description:
      "Entramos na empresa por um período para trabalhar sobre desafios reais. O time aprende aplicando IA nos próprios processos, com orientação sobre dados, uso e responsabilidades.",
    context: "Gargalos reais · Aprendizado prático · Adoção responsável",
    steps: [
      "Escolher o gargalo com a equipe",
      "Trabalhar e aprender lado a lado",
      "Incorporar o aprendizado à rotina",
    ],
    delivery:
      "Pessoas capacitadas e aplicações construídas no contexto da empresa.",
    href: "/treinamento-ia-para-sua-empresa",
    cta: "Conhecer o programa in company",
  },
];

export function BusinessPriorities() {
  const [selected, setSelected] = useState(0);
  const active = priorities[selected];
  return (
    <EditorialSection id="prioridades">
      <Flex
        justify="space-between"
        align="end"
        gap={8}
        direction={{ base: "column", lg: "row" }}
        mb={12}
      >
        <Box maxW="740px">
          <Eyebrow>Da estratégia à execução</Eyebrow>
          <Title>
            Onde sua empresa
            <br />
            precisa <Accent>avançar?</Accent>
          </Title>
        </Box>
        <Text
          maxW="320px"
          fontSize="lg"
          lineHeight={1.7}
          color="blackAlpha.700"
        >
          O ponto de partida é o seu negócio. A tecnologia entra para mover o
          que importa.
        </Text>
      </Flex>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap="1px"
        bg="blackAlpha.200"
        border="1px solid"
        borderColor="blackAlpha.200"
        role="group"
        aria-label="Escolha uma prioridade para explorar"
      >
        {priorities.map((item, index) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.label}
              onClick={() => setSelected(index)}
              aria-pressed={selected === index}
              aria-controls="priority-detail"
              h="auto"
              whiteSpace="normal"
              rounded="none"
              justifyContent="space-between"
              gap={4}
              p={{ base: 5, md: 6 }}
              bg={selected === index ? "blue.solid" : "white"}
              color={selected === index ? "white" : "black"}
              _hover={{ bg: selected === index ? "blue.solid" : "off" }}
              _focusVisible={{
                outline: "2px solid",
                outlineColor: "black",
                outlineOffset: "-4px",
              }}
            >
              <Flex align="center" gap={3}>
                <Icon size={20} aria-hidden="true" />
                <Text as="span" textAlign="left" fontSize="md">
                  {item.label}
                </Text>
              </Flex>
              <Text as="span" fontFamily="mono" fontSize="xs">
                0{index + 1}
              </Text>
            </Button>
          );
        })}
      </Grid>
      <Box
        id="priority-detail"
        role="region"
        aria-label={active.label}
        aria-live="polite"
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          border="1px solid"
          borderTop="none"
          borderColor="blackAlpha.200"
        >
          <Stack justify="space-between" gap={8} p={{ base: 6, md: 10 }}>
            <Box>
              <Text fontFamily="mono" fontSize="xs" color="blue.solid" mb={6}>
                PRIORIDADE / 0{selected + 1}
              </Text>
              <Heading
                as="h3"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight={500}
                letterSpacing="-0.035em"
                lineHeight={1.2}
              >
                {active.title}
              </Heading>
              <Text mt={6} lineHeight={1.8} color="blackAlpha.700">
                {active.description}
              </Text>
            </Box>
            <Action secondary href={active.href}>
              {active.cta}
            </Action>
          </Stack>
          <Box
            bg="off"
            p={{ base: 6, md: 10 }}
            borderLeft={{ lg: "1px solid" }}
            borderTop={{ base: "1px solid", lg: "none" }}
            borderColor="blackAlpha.200"
          >
            <Text fontFamily="mono" fontSize="xs" color="blackAlpha.700" mb={4}>
              DO DESAFIO À APLICAÇÃO
            </Text>
            <Text fontSize="sm" lineHeight={1.7} color="blackAlpha.700" mb={6}>
              {active.context}
            </Text>
            <Stack gap={0}>
              {active.steps.map((step, index) => (
                <Box key={step}>
                  {index > 0 && (
                    <Flex justify="center" py={2} color="blue.solid">
                      <ArrowDown size={18} aria-hidden="true" />
                    </Flex>
                  )}
                  <Flex
                    bg="white"
                    border="1px solid"
                    borderColor="blackAlpha.200"
                    p={4}
                    gap={4}
                    align="center"
                  >
                    <Text fontFamily="mono" fontSize="xs" color="blue.solid">
                      0{index + 1}
                    </Text>
                    <Text fontSize="sm" fontWeight={500}>
                      {step}
                    </Text>
                  </Flex>
                </Box>
              ))}
            </Stack>
            <Flex
              mt={6}
              pt={5}
              borderTop="1px solid"
              borderColor="blackAlpha.300"
              align="start"
              gap={3}
            >
              <Box color="blue.solid" flexShrink={0}>
                <ArrowUpRight size={22} aria-hidden="true" />
              </Box>
              <Text fontSize="sm" lineHeight={1.7}>
                {active.delivery}
              </Text>
            </Flex>
          </Box>
        </Grid>
      </Box>
      <Grid
        templateColumns={{ base: "1fr 1fr", md: "repeat(4, 1fr)" }}
        gap={6}
        mt={10}
      >
        {[
          ["01", "Visão de negócio"],
          ["02", "Engenharia de software"],
          ["03", "Inteligência artificial"],
          ["04", "Governança de dados"],
        ].map(([number, label]) => (
          <Flex key={number} gap={3} align="start">
            <Text fontFamily="mono" fontSize="xs" color="blue.solid">
              {number} /
            </Text>
            <Text fontSize="sm">{label}</Text>
          </Flex>
        ))}
      </Grid>
    </EditorialSection>
  );
}
