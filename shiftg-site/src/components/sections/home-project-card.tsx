import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/constants/projects";

const coverBackgrounds = ["off", "blue.50", "gold.50"] as const;

export function HomeProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Box
      asChild
      display="flex"
      flexDirection="column"
      w="full"
      h="full"
      minW={0}
      bg="white"
      color="black"
      rounded="none"
      border="1px solid"
      borderColor="blackAlpha.200"
      textDecoration="none"
      _hover={{
        "& [data-project-cover]": { bg: "stone" },
        "& [data-project-arrow]": { color: "blue.solid" },
      }}
      _focusVisible={{
        outline: "3px solid",
        outlineColor: "blue.solid",
        outlineOffset: "-3px",
      }}
    >
      <Link href={`/projetos/${project.slug}`}>
        <Flex
          data-project-cover=""
          position="relative"
          h={{ base: "180px", md: "220px" }}
          flexShrink={0}
          align="center"
          justify="center"
          overflow="hidden"
          px={6}
          pt={6}
          bg={coverBackgrounds[index % coverBackgrounds.length]}
          borderBottom="1px solid"
          borderColor="blackAlpha.200"
          transition="background 200ms ease"
        >
          <Text
            position="absolute"
            top={5}
            left={{ base: 6, md: 8 }}
            right={6}
            fontFamily="mono"
            fontSize="xs"
            color="blackAlpha.700"
            letterSpacing="0.04em"
          >
            {project.category}
          </Text>
          <Text
            aria-hidden="true"
            position="absolute"
            right={4}
            bottom={-3}
            fontSize={{ base: "8xl", md: "9xl" }}
            fontWeight={500}
            letterSpacing="-0.08em"
            lineHeight={1}
            color="blackAlpha.100"
            userSelect="none"
          >
            {String(index + 1).padStart(2, "0")}
          </Text>
          <Image
            position="relative"
            src={`/images/products/${project.logo}`}
            alt=""
            w="230px"
            maxW="full"
            h="76px"
            objectFit="contain"
            loading="lazy"
          />
        </Flex>
        <Flex direction="column" flex={1} p={{ base: 6, md: 8 }} gap={4}>
          <Heading
            as="h3"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight={500}
            letterSpacing="-0.035em"
            lineHeight={1.15}
          >
            {project.name}
          </Heading>
          <Text
            flex={1}
            minH="4.8em"
            fontSize="lg"
            lineHeight={1.6}
            color="blackAlpha.700"
          >
            {project.headline}
          </Text>
          <Flex
            justify="space-between"
            align="center"
            gap={4}
            pt={5}
            mt={2}
            borderTop="1px solid"
            borderColor="blackAlpha.200"
          >
            <Text fontSize="xs" color="blackAlpha.700">
              {project.partner ? `Com ${project.partner}` : project.ownership}
            </Text>
            <Flex
              data-project-arrow=""
              align="center"
              gap={2}
              flexShrink={0}
              transition="color 200ms ease"
            >
              <Text fontSize="sm">Conhecer</Text>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Flex>
          </Flex>
        </Flex>
      </Link>
    </Box>
  );
}
