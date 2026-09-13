import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { ArrowDown, ArrowRight, Layers3 } from "lucide-react";
import { type Project } from "@/constants/projects";
import { EditorialImage, type EditorialVisual } from "./editorial-media";

export const projectVisuals: Record<
  string,
  { image: EditorialVisual; caption: string }
> = {
  nearone: {
    image: "equipe",
    caption: "Pessoas, trabalho e informação conectados ao cuidado.",
  },
  somosaliados: {
    image: "pratica",
    caption: "O conhecimento do sindicato mais próximo de quem precisa dele.",
  },
  thiago: {
    image: "equipe",
    caption: "Inteligência artificial no contexto da atuação política.",
  },
  aderis: {
    image: "dados",
    caption: "Informação organizada. Responsabilidades bem definidas.",
  },
  cobres: {
    image: "dados",
    caption: "Tecnologia aplicada à continuidade da operação de cobrança.",
  },
  pontes: {
    image: "saude",
    caption: "Conectar o atendimento é aproximar as pessoas do cuidado.",
  },
  somabem: {
    image: "saude",
    caption: "Uma rede que aproxima empresas, pessoas e benefícios.",
  },
};
export function ProjectVisual({ project }: { project: Project }) {
  const visual = projectVisuals[project.slug];
  return (
    <Box>
      <Box position="relative">
        <EditorialImage visual={visual.image} portrait priority />
        <Flex
          position="absolute"
          top={5}
          left={5}
          right={5}
          justify="space-between"
          align="start"
          gap={4}
        >
          <Flex bg="white" p={4} w="190px" h="76px" align="center">
            <Image
              src={`/images/products/${project.logo}`}
              alt={project.name}
              maxW="full"
              maxH="48px"
              objectFit="contain"
            />
          </Flex>
          <Box bg="blue.solid" color="white" p={3}>
            <Layers3 size={22} strokeWidth={1.5} aria-hidden="true" />
          </Box>
        </Flex>
      </Box>
      <Box bg="blue.solid" color="white" p={{ base: 6, md: 8 }}>
        <Text fontFamily="mono" fontSize="xs" mb={3}>
          {project.stage || "ECOSSISTEMA SHIFT+G"}
        </Text>
        <Text fontSize="xl" lineHeight={1.35}>
          {visual.caption}
        </Text>
      </Box>
    </Box>
  );
}
export function ProjectFlow({ project }: { project: Project }) {
  return (
    <Box bg="black" color="white" p={{ base: 6, md: 10 }} mt={12}>
      <Flex justify="space-between" gap={5} wrap="wrap" mb={8}>
        <Text
          as="h2"
          fontFamily="mono"
          fontSize="sm"
          fontWeight={500}
          color="whiteAlpha.800"
        >
          {project.name.toUpperCase()} / FRENTES DA APLICAÇÃO
        </Text>
        <Text fontFamily="mono" fontSize="xs" color="whiteAlpha.700">
          VISÃO DO PROJETO
        </Text>
      </Flex>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={{ base: 5, md: 8 }}
      >
        {project.pillars.map((pillar, index) => (
          <Box key={pillar.title}>
            <Flex align="center" gap={4} mb={5}>
              <Flex
                align="center"
                justify="center"
                w={12}
                h={12}
                bg="blue.solid"
                fontFamily="mono"
                fontSize="sm"
              >
                0{index + 1}
              </Flex>
              <Box h="1px" flex={1} bg="whiteAlpha.400" />
              {index < 2 && <ArrowRight size={18} aria-hidden="true" />}
            </Flex>
            <Text as="h3" fontSize="xl" fontWeight={500}>
              {pillar.title}
            </Text>
            <Text mt={4} fontSize="sm" lineHeight={1.8} color="whiteAlpha.800">
              {pillar.text}
            </Text>
            {index < 2 && (
              <Box
                display={{ base: "block", md: "none" }}
                mt={5}
                color="whiteAlpha.700"
              >
                <ArrowDown size={18} aria-hidden="true" />
              </Box>
            )}
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
