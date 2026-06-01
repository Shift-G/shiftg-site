"use client";

import {
  Box,
  Flex,
  Grid,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Activity, ArrowRight, Network, Users } from "lucide-react";
import Link from "next/link";

/* ── Section Tag ── */
function SectionTag({ children }: { children: string }) {
  return (
    <HStack
      fontFamily="mono"
      fontSize="2xs"
      fontWeight={600}
      letterSpacing="0.16em"
      textTransform="uppercase"
      color="blue.solid"
      gap="10px"
      mb={4}
    >
      <Box w="18px" h="1.5px" bg="blue.solid" />
      <Text>{children}</Text>
    </HStack>
  );
}

interface ProductData {
  index: string;
  icon: React.ReactNode;
  tag: string;
  name: React.ReactNode;
  description: string;
  url: string;
}

const products: ProductData[] = [
  {
    index: "01",
    icon: <Network size={22} />,
    tag: "SaaS · IA Integrada",
    name: (
      <>
        Plataforma para
        <br />
        Sindicatos
      </>
    ),
    description:
      "Atendimento inteligente, automação e eficiência operacional — tudo em um único ambiente. A IA cuida do operacional para que a liderança cuide do estratégico.",
    url: "https://somosaliados.com.br/",
  },
  {
    index: "02",
    icon: <Users size={22} />,
    tag: "People Analytics",
    name: (
      <>
        ACP — Analytics
        <br />
        de Pessoas
      </>
    ),
    description:
      "Transforma dados de pessoas em decisões claras, preditivas e estratégicas. Identifica riscos, potenciais e oportunidades antes que o gestor perceba que existem.",
    url: "https://acpersonalidade.com.br/",
  },
  {
    index: "03",
    icon: <Activity size={22} />,
    tag: "Psicossocial · NR-1",
    name: "NEARONE",
    description:
      "Sistema para adequação e conformidade de risco psicossociais da normativa NR-1. Foco em saúde mental e prevenção de riscos corporativos.",
    url: "https://www.nearone.com.br",
  },
];

function ProductCard({ product }: { product: ProductData }) {
  return (
    <VStack
      align="flex-start"
      bg="off"
      px={{ base: 6, md: 9 }}
      py={{ base: 8, md: 12 }}
      position="relative"
      overflow="hidden"
      transition="background 0.25s"
      _hover={{
        bg: "stone",
        "& .prod-accent": { transform: "scaleX(1)" },
        "& .prod-icon": { borderColor: "blue.solid" },
        "& .prod-corner": { opacity: 0.8, borderColor: "gold.500" },
      }}
    >
      {/* Top accent bar */}
      <Box
        className="prod-accent"
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="2px"
        bg="gold.500"
        transform="scaleX(0)"
        transformOrigin="left"
        transition="transform 0.4s cubic-bezier(0.4,0,0.2,1)"
      />

      {/* Corner mark */}
      <Box
        className="prod-corner"
        position="absolute"
        bottom={6}
        right={6}
        w="20px"
        h="20px"
        borderRight="1.5px solid"
        borderBottom="1.5px solid"
        borderColor="gray.emphasized"
        opacity={0.4}
        transition="opacity 0.25s, border-color 0.25s"
      />

      {/* Index */}
      <Text
        fontFamily="mono"
        fontSize="2xs"
        fontWeight={600}
        letterSpacing="0.16em"
        color="fg.subtle"
        mb={8}
      >
        {product.index}
      </Text>

      {/* Icon */}
      <Box
        className="prod-icon"
        w="44px"
        h="44px"
        border="1.5px solid"
        borderColor="blackAlpha.100"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={7}
        transition="border-color 0.25s"
        color="blue.solid"
      >
        {product.icon}
      </Box>

      {/* Tag */}
      <HStack
        fontFamily="mono"
        fontSize="2xs"
        fontWeight={600}
        letterSpacing="0.14em"
        textTransform="uppercase"
        color="blue.solid"
        gap="7px"
        mb={5}
      >
        <Box w="14px" h="1.5px" bg="blue.solid" />
        <Text>{product.tag}</Text>
      </HStack>

      {/* Name */}
      <Text
        fontFamily="serif"
        fontSize={{ base: "xl", md: "xl" }}
        fontWeight={400}
        color="fg"
        lineHeight={1.2}
        letterSpacing="-0.3px"
        mb={1}
      >
        {product.name}
      </Text>

      {/* Description */}
      <Text
        fontSize="sm"
        color="fg.muted"
        lineHeight={1.82}
        flex={1}
        mt={4}
      >
        {product.description}
      </Text>

      {/* CTA */}
      <HStack
        asChild
        mt={8}
        fontFamily="mono"
        fontSize="xs"
        fontWeight={600}
        letterSpacing="0.08em"
        textTransform="uppercase"
        color="fg"
        textDecoration="none"
        gap={2}
        transition="color 0.2s, gap 0.2s"
        _hover={{ color: "blue.solid", gap: 3 }}
      >
        <Link href={product.url}>
          <Text as="span">Conhecer produto</Text>
          <ArrowRight size={12} />
        </Link>
      </HStack>
    </VStack>
  );
}

export function ProductsSection() {
  return (
    <Box
      as="section"
      py={{ base: 16, md: "100px" }}
      px={{ base: 6, md: "60px" }}
      bg="white"
      borderTop="1px solid"
      borderColor="blackAlpha.100"
      id="produtos"
    >
      {/* Header */}
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 7, lg: "80px" }}
        align={{ base: "flex-start", lg: "flex-end" }}
        mb={{ base: 10, md: 16 }}
      >
        <Box flex={1}>
          <SectionTag>Produtos</SectionTag>
          <Text
            as="h2"
            fontSize={{ base: "34px", md: "clamp(34px, 4vw, 54px)" }}
            fontWeight={800}
            lineHeight={1.04}
            letterSpacing="-1.5px"
            color="fg"
          >
            Soluções que
            <br />
            <Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="gray.emphasized">
              entregam desde
            </Text>
            <br />
            o primeiro dia.
          </Text>
        </Box>
        <Text flex={1} fontSize="md" color="fg.muted" lineHeight={1.9}>
          Desenvolvemos produtos que resolvem problemas reais — não ferramentas genéricas. Cada um nasce de uma lacuna de mercado que identificamos operando ao lado dos nossos clientes.
        </Text>
      </Flex>

      {/* Product grid */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap="2px"
      >
        {products.map((product) => (
          <ProductCard key={product.index} product={product} />
        ))}
      </Grid>
    </Box>
  );
}
