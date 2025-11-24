import { Metadata } from "next";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  HStack,
  Link,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GeneralContactForm } from "@/components/forms/GeneralContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE_EMAIL, SITE_PHONE } from "@/constants";

export const metadata: Metadata = {
  title: "Contato | Shift+G",
  description: "Entre em contato conosco para saber mais sobre nossas soluções em IA, desenvolvimento de software e transformação digital.",
};

function ContactHero() {
  return (
    <Box
      as="section"
      w="full"
      position="relative"
      py={{ base: 20, md: 32 }}
      overflow="hidden"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        opacity={0.4}
        backgroundImage="radial-gradient(circle at 20% 30%, #3b82f6 0%, transparent 40%), radial-gradient(circle at 80% 70%, #8b5cf6 0%, transparent 40%)"
        backgroundSize="100% 100%"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 12, lg: 20 }} alignItems="start">
          <VStack align="start" gap={8}>
            <VStack align="start" gap={4}>
              <Heading
                as="h1"
                size={{ base: "4xl", md: "5xl" }}
                fontWeight="700"
                letterSpacing="-0.04em"
                lineHeight="1.1"
              >
                Vamos construir o futuro do seu negócio?
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="gray.600"
                lineHeight="tall"
              >
                Estamos prontos para entender seus desafios e propor as melhores soluções em tecnologia e inovação.
              </Text>
            </VStack>

            <VStack align="start" gap={6} w="full" pt={4}>
              <HStack gap={4} align="flex-start">
                <Box p={3} bg="blue.50" color="blue.600" rounded="xl">
                  <Phone size={24} />
                </Box>
                <VStack align="start" gap={0}>
                  <Text fontWeight="bold" fontSize="lg">Telefone / WhatsApp</Text>
                  <Link href={`https://wa.me/${SITE_PHONE.replace(/\D/g, '')}`} color="blue.600" fontSize="lg">
                    {SITE_PHONE}
                  </Link>
                </VStack>
              </HStack>

              <HStack gap={4} align="flex-start">
                <Box p={3} bg="purple.50" color="purple.600" rounded="xl">
                  <Mail size={24} />
                </Box>
                <VStack align="start" gap={0}>
                  <Text fontWeight="bold" fontSize="lg">Email</Text>
                  <Link href={`mailto:${SITE_EMAIL}`} color="blue.600" fontSize="lg">
                    {SITE_EMAIL}
                  </Link>
                </VStack>
              </HStack>

              <HStack gap={4} align="flex-start">
                <Box p={3} bg="green.50" color="green.600" rounded="xl">
                  <MapPin size={24} />
                </Box>
                <VStack align="start" gap={0}>
                  <Text fontWeight="bold" fontSize="lg">Localização</Text>
                  <Text color="gray.600" fontSize="lg">São Paulo, SP - Brasil</Text>
                  <Text color="gray.500" fontSize="sm">Atendimento global remoto</Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>

          <Box position="relative">
            {/* Decorative blob behind form */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="120%"
              h="120%"
              bgGradient="radial(blue.200, transparent 70%)"
              opacity={0.5}
              filter="blur(40px)"
              zIndex={-1}
            />
            <GeneralContactForm />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default function ContactPage() {
  return (
    <Page>
      <Navbar />
      <VStack gap={0} w="full" as="main" align="stretch">
        <ContactHero />
      </VStack>
      <Footer />
    </Page>
  );
}
