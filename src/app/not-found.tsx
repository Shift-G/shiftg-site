import { Metadata } from "next";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Home, ArrowLeft, Search, MessageCircle } from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_PHONE } from "@/constants";

export const metadata: Metadata = {
  title: "Página não encontrada | " + SITE_NAME,
  description: "A página que você está procurando não foi encontrada.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundPage() {
  return (
    <Page>
      <Navbar />

      <Box
        as="main"
        minH="80vh"
        display="flex"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        {/* Elementos geométricos decorativos - seguindo padrão do projeto */}
        <Box
          position="absolute"
          top="15%"
          right="10%"
          w={{ base: "80px", md: "120px" }}
          h={{ base: "80px", md: "120px" }}
          borderRadius="full"
          bg="blue.500/8"
          backdropFilter="blur(10px)"
          animation="float 8s ease-in-out infinite"
          zIndex={0}
        />

        <Box
          position="absolute"
          bottom="20%"
          left="5%"
          w={{ base: "60px", md: "80px" }}
          h={{ base: "60px", md: "80px" }}
          borderRadius="lg"
          bg="blue.500/8"
          backdropFilter="blur(10px)"
          animation="float 6s ease-in-out infinite reverse"
          zIndex={0}
        />

        <Container maxW="5xl" position="relative" zIndex={1}>
          <VStack
            gap={{ base: 8, md: 12 }}
            textAlign="center"
            py={{ base: 16, md: 20 }}
          >
            {/* Número 404 */}
            <Box>
              <Text
                fontSize={{ base: "8xl", md: "9xl", lg: "10xl" }}
                fontWeight="900"
                lineHeight="none"
                letterSpacing="tight"
                bgGradient="linear-gradient(135deg, blue.500, blue.700, blue.500)"
                bgClip="text"
                opacity={0.1}
                position="absolute"
                transform="translate(-50%, -50%)"
                left="50%"
                top="50%"
                zIndex={-1}
              >
                404
              </Text>

              <Heading
                as="h1"
                size={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="800"
                lineHeight="shorter"
                letterSpacing="tight"
                color="fg"
                mb={4}
              >
                Página não encontrada
              </Heading>
            </Box>

            {/* Descrição */}
            <VStack gap={4} maxW="2xl">
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="fg.muted"
                lineHeight="tall"
                fontWeight="400"
              >
                A página que você está procurando não existe ou foi movida. Mas
                não se preocupe, temos várias outras páginas interessantes para
                você explorar.
              </Text>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="fg.muted"
                lineHeight="tall"
                fontWeight="400"
              >
                Que tal conhecer nossas soluções de IA e analytics?
              </Text>
            </VStack>

            {/* Botões de ação */}
            <VStack gap={6} w="full" maxW="lg">
              <HStack
                gap={4}
                w="full"
                flexDir={{ base: "column", sm: "row" }}
                justify="center"
              >
                <Link href="/" passHref style={{ width: "100%" }}>
                  <Button
                    size="lg"
                    px={8}
                    py={6}
                    rounded="xl"
                    fontWeight="600"
                    fontSize="lg"
                    bg="blue.500"
                    color="white"
                    border="none"
                    _hover={{
                      bg: "blue.600",
                      transform: "translateY(-2px)",
                    }}
                    _active={{
                      transform: "translateY(0px)",
                    }}
                    transition="all 0.2s ease"
                    w={{ base: "full", sm: "auto" }}
                  >
                    <Home size={18} style={{ marginRight: "8px" }} />
                    Ir para o início
                  </Button>
                </Link>

                <Button
                  as={Link}
                  href="/"
                  size="lg"
                  px={8}
                  py={6}
                  rounded="xl"
                  fontWeight="600"
                  fontSize="lg"
                  variant="outline"
                  borderColor="border"
                  color="fg"
                  _hover={{
                    bg: "surface",
                    borderColor: "blue.500",
                    color: "blue.500",
                    transform: "translateY(-2px)",
                  }}
                  _active={{
                    transform: "translateY(0px)",
                  }}
                  transition="all 0.2s ease"
                  w={{ base: "full", sm: "auto" }}
                >
                  <ArrowLeft size={18} style={{ marginRight: "8px" }} />
                  Voltar
                </Button>
              </HStack>

              {/* Links úteis */}
              <VStack gap={3} pt={4}>
                <Text fontSize="sm" color="fg.muted" fontWeight="500">
                  Ou explore estas seções:
                </Text>

                <HStack gap={6} wrap="wrap" justify="center" fontSize="sm">
                  <Link href="/#solucoes">
                    <Text
                      color="blue.500"
                      fontWeight="500"
                      _hover={{
                        textDecoration: "underline",
                        color: "blue.600",
                      }}
                      transition="color 0.2s ease"
                    >
                      Soluções
                    </Text>
                  </Link>

                  <Link href="/insights">
                    <Text
                      color="blue.500"
                      fontWeight="500"
                      _hover={{
                        textDecoration: "underline",
                        color: "blue.600",
                      }}
                      transition="color 0.2s ease"
                    >
                      Insights
                    </Text>
                  </Link>

                  <Link href="/fabrica-de-software">
                    <Text
                      color="blue.500"
                      fontWeight="500"
                      _hover={{
                        textDecoration: "underline",
                        color: "blue.600",
                      }}
                      transition="color 0.2s ease"
                    >
                      Fábrica de Software
                    </Text>
                  </Link>

                  <Link href="/carreiras">
                    <Text
                      color="blue.500"
                      fontWeight="500"
                      _hover={{
                        textDecoration: "underline",
                        color: "blue.600",
                      }}
                      transition="color 0.2s ease"
                    >
                      Carreiras
                    </Text>
                  </Link>
                </HStack>
              </VStack>
            </VStack>

            {/* CTA de contato */}
            <Box
              mt={8}
              p={6}
              rounded="2xl"
              bg="surface"
              border="1px solid"
              borderColor="border"
              maxW="md"
              w="full"
            >
              <VStack gap={4}>
                <Text
                  fontSize="md"
                  color="fg"
                  fontWeight="500"
                  textAlign="center"
                >
                  Precisa de ajuda específica?
                </Text>

                <Link
                  href={`https://wa.me/${SITE_PHONE.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  passHref
                >
                  <Button
                    size="md"
                    px={6}
                    py={4}
                    rounded="xl"
                    fontWeight="600"
                    fontSize="md"
                    variant="outline"
                    borderColor="blue.500"
                    color="blue.500"
                    _hover={{
                      bg: "blue.50",
                      _dark: { bg: "blue.500/10" },
                    }}
                    _active={{
                      transform: "scale(0.98)",
                    }}
                    transition="all 0.2s ease"
                    w="full"
                  >
                    <MessageCircle size={16} style={{ marginRight: "8px" }} />
                    Fale conosco no WhatsApp
                  </Button>
                </Link>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Page>
  );
}
