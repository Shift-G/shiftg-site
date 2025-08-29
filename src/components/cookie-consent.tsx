"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  Link,
  Container,
} from "@chakra-ui/react";
import { CookieIcon, ExternalLinkIcon } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookie-consent");
    if (!hasConsented) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Store minimal consent only
    localStorage.setItem("cookie-consent", "minimal");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg="bg.panel"
      borderTopWidth={1}
      borderColor="border"
      boxShadow="lg"
      zIndex={100}
      py={4}
      px={{ base: 4, md: 0 }}
      style={{
        animation: "slideUp 0.3s ease-out",
      }}
    >
      <style jsx global>{`
        @keyframes slideUp {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
      <Container maxW="7xl">
        <VStack gap={4} align="stretch">
          <HStack gap={4} align="flex-start">
            <Box color="green.500" mt={1}>
              <CookieIcon size={24} />
            </Box>
            <VStack gap={2} align="flex-start">
              <Text fontWeight="bold" fontSize="lg">
                Utilizamos cookies para melhorar sua experiência
              </Text>
              <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>
                Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência, 
                personalizar conteúdo e analisar o tráfego do site. Ao clicar em "Aceitar todos", 
                você concorda com o uso de cookies para esses fins. Você pode ajustar suas 
                preferências a qualquer momento visitando nossa{" "}
                <Link
                  href="/politica-de-privacidade"
                  color="green.500"
                  display="inline-flex"
                  alignItems="center"
                  _hover={{ textDecoration: "underline" }}
                >
                  Política de Privacidade
                  <ExternalLinkIcon size={12} style={{ marginLeft: "4px" }} />
                </Link>
                .
              </Text>
            </VStack>
          </HStack>
          <HStack gap={4} justify={{ base: "flex-start", md: "flex-end" }}>
            <Button
              size="sm"
              variant="outline"
              onClick={handleDecline}
              colorPalette="gray"
            >
              Apenas essenciais
            </Button>
            <Button
              size="sm"
              colorPalette="green"
              onClick={handleAccept}
            >
              Aceitar todos
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
} 