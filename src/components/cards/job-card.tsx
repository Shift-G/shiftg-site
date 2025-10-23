"use client";

import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Badge,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { CAREERS_EMAIL } from "@/constants";

interface JobCardProps {
  title: string;
  department: string;
  type: string;
  level: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  icon: React.ReactNode;
  featured?: boolean;
}

export function JobCard({
  title,
  department,
  type,
  level,
  salary,
  description,
  requirements,
  responsibilities,
  icon,
  featured = false,
}: JobCardProps) {
  return (
    <Box
      w="full"
      p={{ base: 6, md: 8 }}
      rounded="2xl"
      bg={featured ? "{colors.blue.500/10}" : "{colors.whiteAlpha.50}"}
      border="1px solid"
      borderColor={featured ? "{colors.blue.500/30}" : "{colors.whiteAlpha.200}"}
      position="relative"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-4px)",
        borderColor: "{colors.blue.500/40}",
        bg: featured ? "{colors.blue.500/15}" : "{colors.whiteAlpha.100}",
      }}
    >
      {featured && (
        <Badge
          position="absolute"
          top={-3}
          right={4}
          px={3}
          py={1}
          rounded="full"
          bg="{colors.blue.500}"
          color="white"
          fontSize="xs"
          fontWeight="300"
          textTransform="uppercase"
        >
          Destaque
        </Badge>
      )}

      <VStack align="flex-start" gap={6}>
        <HStack justify="space-between" w="full" wrap="wrap" gap={4}>
          <HStack gap={4}>
            <Box
              p={3}
              rounded="xl"
              bg={featured ? "{colors.blue.500}" : "{colors.blue.500/10}"}
              color={featured ? "white" : "blue.solid"}
              transition="all 0.3s ease"
            >
              {icon}
            </Box>
            <VStack align="flex-start" gap={1}>
              <Heading as="h3" size="xl" fontWeight="300" color="fg">
                {title}
              </Heading>
              <HStack gap={4} wrap="wrap">
                <Badge variant="outline" colorPalette="blue">
                  {department}
                </Badge>
                <Badge variant="outline" colorPalette="gray">
                  {level}
                </Badge>
                <Badge variant="outline" colorPalette="green">
                  {type}
                </Badge>
              </HStack>
            </VStack>
          </HStack>
          <Text
            fontSize="lg"
            fontWeight="300"
            color="blue.solid"
            textAlign="right"
          >
            {salary}
          </Text>
        </HStack>

        <Text fontSize="lg" color="fg.muted" lineHeight="tall">
          {description}
        </Text>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} w="full">
          <VStack align="flex-start" gap={4}>
            <Text fontWeight="300" color="fg">
              Requisitos:
            </Text>
            <List.Root gap={2}>
              {requirements.map((req, idx) => (
                <ListItem key={idx} color="fg.muted" fontSize="sm">
                  {req}
                </ListItem>
              ))}
            </List.Root>
          </VStack>

          <VStack align="flex-start" gap={4}>
            <Text fontWeight="300" color="fg">
              Responsabilidades:
            </Text>
            <List.Root gap={2}>
              {responsibilities.map((resp, idx) => (
                <ListItem key={idx} color="fg.muted" fontSize="sm">
                  {resp}
                </ListItem>
              ))}
            </List.Root>
          </VStack>
        </SimpleGrid>

        <Link
          href={`mailto:${CAREERS_EMAIL}?subject=Candidatura - ${title}&body=Olá! Tenho interesse na vaga de ${title}. Segue meu currículo em anexo.`}
          passHref
        >
          <Button
            size="lg"
            variant={featured ? "solid" : "outline"}
            colorPalette="blue"
            mt={4}
            _hover={{
              transform: "translateY(-2px)",
            }}
            transition="all 0.3s ease"
          >
            Candidatar-se para esta vaga
            <ChevronRight size={18} style={{ marginLeft: "8px" }} />
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}
