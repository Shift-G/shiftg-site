import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { Download, Sparkles } from "lucide-react";
import Link from "next/link";
import { PROMPTS_GUIDE_PDF_URL } from "@/constants";

const HIGHLIGHTS = [
  "Frameworks prontos para estruturar qualquer pedido",
  "Exemplos reais — antes e depois",
  "Técnicas para extrair o melhor de qualquer IA",
];

export function PromptsGuideSection() {
  return (
    <Box
      as="section"
      bg="#0A0A0F"
      color="white"
      py={{ base: 20, md: "120px" }}
      px={{ base: 6, md: "60px", lg: "112px" }}
      position="relative"
      overflow="hidden"
    >
      {/* glow azul */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w={{ base: "300px", md: "560px" }}
        h={{ base: "300px", md: "560px" }}
        bg="radial-gradient(circle, rgba(0,63,205,0.35), transparent 65%)"
        pointerEvents="none"
        filter="blur(20px)"
      />
      {/* grid sutil */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
        backgroundSize="48px 48px"
        pointerEvents="none"
      />

      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 380px" }}
        gap={{ base: 12, lg: "80px" }}
        alignItems="center"
        position="relative"
        zIndex={1}
      >
        {/* texto */}
        <Box>
          <HStack
            fontFamily="mono"
            fontSize="2xs"
            fontWeight={600}
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="gold.500"
            gap="10px"
            mb={5}
          >
            <Sparkles size={14} />
            <Text>Guia gratuito · PDF</Text>
          </HStack>

          <Text
            as="h2"
            fontSize={{ base: "38px", md: "60px" }}
            fontWeight={800}
            lineHeight={1.02}
            letterSpacing="-2px"
            mb={5}
          >
            Guia de Prompts{" "}
            <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.300">
              v1.0
            </Text>
          </Text>

          <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.700" lineHeight={1.8} maxW="540px" mb={8}>
            O guia definitivo para dominar a arte de conversar com a IA. Pare de receber
            respostas genéricas — aprenda a escrever prompts que geram resultado de verdade.
          </Text>

          <VStack align="stretch" gap={3} mb={9}>
            {HIGHLIGHTS.map((item) => (
              <HStack key={item} gap={3} align="center">
                <Box w="6px" h="6px" bg="gold.500" flexShrink={0} />
                <Text fontSize="sm" fontWeight={500} color="whiteAlpha.900">
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>

          <Box
            asChild
            display="inline-flex"
            alignItems="center"
            gap="10px"
            bg="white"
            color="#0A0A0F"
            px={{ base: 7, md: 9 }}
            py={{ base: 4, md: "17px" }}
            fontWeight={700}
            fontSize="md"
            transition="all 0.2s"
            _hover={{ bg: "blue.solid", color: "white", transform: "translateY(-2px)" }}
          >
            <Link href={PROMPTS_GUIDE_PDF_URL} target="_blank" rel="noopener" download>
              Baixar o Guia de Prompts
              <Download size={18} />
            </Link>
          </Box>
        </Box>

        {/* capa do guia */}
        <Box
          display={{ base: "none", lg: "block" }}
          aspectRatio={3 / 4}
          bg="linear-gradient(160deg, #14141c 0%, #0A0A0F 100%)"
          border="1px solid"
          borderColor="whiteAlpha.200"
          p={8}
          position="relative"
          boxShadow="0 30px 80px rgba(0,0,0,0.6)"
        >
          <VStack align="stretch" justify="space-between" h="full">
            <HStack justify="space-between">
              <Text fontFamily="mono" fontSize="2xs" letterSpacing="0.18em" color="whiteAlpha.600" textTransform="uppercase">
                PDF · 2026
              </Text>
              <Box w="22px" h="22px" border="1.5px solid" borderColor="blue.solid" />
            </HStack>

            <Box>
              <Box w="40px" h="3px" bg="gold.500" mb={5} />
              <Text fontFamily="serif" fontSize="34px" lineHeight={1.05} color="white">
                Guia de
                <br />
                Prompts
              </Text>
              <Box
                display="inline-block"
                mt={4}
                bg="blue.solid"
                color="white"
                fontFamily="mono"
                fontSize="xs"
                fontWeight={700}
                letterSpacing="0.1em"
                px="10px"
                py="4px"
              >
                v1.0
              </Box>
            </Box>

            <Text fontWeight={700} letterSpacing="0.06em" color="white">
              SHIFT<Text as="span" color="blue.300">+G</Text>
            </Text>
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
}
