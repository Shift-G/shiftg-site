"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Badge,
  AspectRatio,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Product {
  title: string;
  description: string;
  badge?: string;
  image?: string;
}

const products: Product[] = [
  {
    title: "ACP — People Analytics Inteligente",
    description:
      "Transforma dados de pessoas em decisões claras, preditivas e estratégicas.",
    badge: "ANALYTICS",
    image: "/images/products/acp.jpg",
  },
  {
    title: "SaaS para Sindicatos com IA Integrada",
    description:
      "Atendimento inteligente, automação e eficiência operacional — tudo em um único ambiente.",
    badge: "SAAS",
    image: "/images/products/sindicatos.jpg",
  },
  {
    title: "Sentinela — RHaaS de Alta Eficiência",
    description:
      "Terceirização inteligente que substitui até 90% do RH/DP. Escala, controle e previsibilidade.",
    badge: "RHAAS",
    image: "/images/products/sentinela.jpg",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <Box
      bg={{ base: "{colors.whiteAlpha.50}", _dark: "{colors.whiteAlpha.50}" }}
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor={{ base: "{colors.whiteAlpha.200}", _dark: "{colors.whiteAlpha.200}" }}
      rounded="xl"
      overflow="hidden"
      h="full"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        borderColor: "{colors.blue.500/30}",
        bg: { base: "{colors.whiteAlpha.100}", _dark: "{colors.whiteAlpha.100}" },
      }}
    >
      {/* Image area */}
      <AspectRatio ratio={16 / 9} w="full">
        <Box
          bg="{colors.blue.500/10}"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {product.image ? (
            <Box
              as="img"
              src={product.image}
              alt={product.title}
              w="full"
              h="full"
              objectFit="cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <Text color="fg.muted" fontSize="xs">
              Imagem do produto
            </Text>
          )}
        </Box>
      </AspectRatio>

      {/* Content */}
      <VStack align="start" gap={3} p={{ base: 5, md: 6 }}>
        {product.badge && (
          <Badge
            colorPalette="blue"
            variant="subtle"
            fontSize="xs"
            px={2}
            py={1}
            rounded="md"
          >
            {product.badge}
          </Badge>
        )}

        <VStack align="start" gap={2}>
          <Heading as="h3" size="sm" color="fg" lineHeight="tight">
            {product.title}
          </Heading>
          <Text color="fg.muted" fontSize="sm" lineHeight="tall">
            {product.description}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}

export function ProductSlider() {
  return (
    <Box as="section" py={{ base: 12, md: 16 }}>
      <Container maxW="7xl">
        <VStack gap={{ base: 8, md: 10 }}>
          {/* Section header */}
          <VStack gap={3} textAlign="center">
            <Heading
              as="h2"
              size={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="fg"
            >
              Produtos
            </Heading>
            <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }}>
              Soluções que entregam eficiência imediata.
            </Text>
          </VStack>

          {/* Slider */}
          <Box
            w="full"
            css={{
              "& .swiper": {
                paddingBottom: "3rem",
                overflow: "visible",
              },
              "& .swiper-slide": {
                height: "auto",
              },
              "& .swiper-pagination": {
                bottom: "0",
              },
              "& .swiper-pagination-bullet": {
                background: "var(--chakra-colors-white-alpha-400)",
                opacity: 1,
              },
              "& .swiper-pagination-bullet-active": {
                background: "var(--chakra-colors-blue-solid)",
              },
            }}
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 32,
                },
              }}
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
