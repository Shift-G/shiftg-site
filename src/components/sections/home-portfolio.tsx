import { Box, Text } from "@chakra-ui/react";
import { Accent, Eyebrow, Title } from "@/components/layout/editorial";
import { projects } from "@/constants/projects";
import { HomeProjectCard } from "./home-project-card";
import { ProjectCarousel } from "./project-carousel";

export function HomePortfolio() {
  return (
    <Box
      as="section"
      id="ecossistema"
      aria-label="Nosso ecossistema"
      bg="white"
      color="black"
      pt={{ base: 14, md: 20 }}
      pb={{ base: 8, md: 10 }}
      borderTop="1px solid"
      borderColor="blackAlpha.200"
      scrollMarginTop="100px"
    >
      <ProjectCarousel
        heading={
          <Box>
            <Eyebrow>Nosso ecossistema</Eyebrow>
            <Title>
              Diferentes desafios.
              <br />
              <Accent>Inteligência em comum.</Accent>
            </Title>
            <Text mt={5} color="blackAlpha.700" fontSize="lg" maxW="560px">
              Produtos próprios e colaborações que levam nossa tecnologia a
              diferentes setores.
            </Text>
          </Box>
        }
      >
        {projects.map((project, index) => (
          <HomeProjectCard key={project.slug} project={project} index={index} />
        ))}
      </ProjectCarousel>
    </Box>
  );
}
