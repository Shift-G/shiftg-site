import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { Download, FileText } from "lucide-react";
import Link from "next/link";
import { INSTITUTIONAL_PDF_URL } from "@/constants";

const HIGHLIGHTS = [
  "Quem somos e como atuamos",
  "Nossos pilares e método de trabalho",
  "Soluções de IA, dados e software",
];

export function MaterialSection() {
  return (
    <Box
      as="section"
      py={{ base: 16, md: "110px" }}
      px={{ base: 6, md: "60px", lg: "112px" }}
      bg="stone"
      borderTop="1px solid"
      borderColor="blackAlpha.100"
      position="relative"
      overflow="hidden"
    >
      {/* grid pattern de fundo (mesma linguagem das outras seções) */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="linear-gradient(#00000004 1px, transparent 1px), linear-gradient(90deg, #00000004 1px, transparent 1px)"
        backgroundSize="40px 40px"
        pointerEvents="none"
      />

      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 420px" }}
        gap={{ base: 10, lg: "80px" }}
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
            color="blue.solid"
            gap="10px"
            mb={4}
          >
            <Box w="18px" h="1.5px" bg="blue.solid" />
            <Text>Material institucional</Text>
          </HStack>

          <Text
            as="h2"
            fontSize={{ base: "32px", md: "44px" }}
            fontWeight={800}
            lineHeight={1.1}
            letterSpacing="-1px"
            color="fg"
            mb={5}
          >
            Conheça a Shift+G{" "}
            <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.solid">
              em um documento.
            </Text>
          </Text>

          <Text fontSize="md" color="fg.muted" lineHeight={1.8} mb={7} maxW="520px">
            Baixe nosso material institucional e leve para sua equipe quem somos, como
            trabalhamos e o que entregamos — pronto para compartilhar.
          </Text>

          <VStack align="stretch" gap={3}>
            {HIGHLIGHTS.map((item) => (
              <HStack key={item} gap={3} align="center">
                <Box w="6px" h="6px" bg="blue.solid" flexShrink={0} />
                <Text fontSize="sm" fontWeight={600} color="fg">
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>

        {/* card de download */}
        <Box bg="white" border="1px solid" borderColor="blackAlpha.200" p={{ base: 7, md: 9 }}>
          <VStack align="stretch" gap={6}>
            <HStack justify="space-between" align="flex-start">
              <Box color="blue.solid">
                <FileText size={36} strokeWidth={1.5} />
              </Box>
              <Text fontFamily="mono" fontSize="2xs" color="fg.subtle" letterSpacing="0.1em">
                PDF
              </Text>
            </HStack>

            <Box>
              <Text fontSize="lg" fontWeight={800} color="fg" letterSpacing="-0.4px" lineHeight={1.2}>
                Material Institucional
              </Text>
              <Text fontSize="sm" color="fg.muted" mt={1}>
                SHIFT+G · Arquitetamos inteligência
              </Text>
            </Box>

            <Box
              asChild
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              gap="10px"
              bg="blue.solid"
              color="white"
              py="16px"
              fontWeight={700}
              fontSize="sm"
              transition="all 0.2s"
              _hover={{ bg: "blue.fg" }}
            >
              <Link href={INSTITUTIONAL_PDF_URL} target="_blank" rel="noopener" download>
                Baixar material
                <Download size={16} />
              </Link>
            </Box>
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
}
