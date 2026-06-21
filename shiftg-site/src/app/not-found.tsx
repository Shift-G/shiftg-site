import { Metadata } from "next";
import {
  Box,
  VStack,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Terminal, MoveLeft, TerminalSquare } from "lucide-react";
import Link from "next/link";
import { SITE_NAME } from "@/constants";

export const metadata: Metadata = {
  title: "404 Error | " + SITE_NAME,
  description: "Fatal Error: Resource Not Found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundPage() {
  return (
    <Page>
      <Navbar />

      <VStack gap={0} w="full" as="main" align="stretch" bg="off" minH="calc(100vh - 100px)" justify="center">

        {/* ── Content Body ── */}
        <Box px={{ base: 6, md: 10 }} py={{ base: 16, md: 24 }}>
          <VStack maxW="800px" mx="auto" align="stretch" gap={10}>

            {/* Box Callout Error */}
            <Box p={8} bg="blackAlpha.200" border="1px solid" borderColor="blackAlpha.200" position="relative">
              <Box position="absolute" top={0} left={0} w="4px" h="full" bg="red.500" />
              <HStack gap={4} mb={4}>
                <Terminal size={20} color="var(--chakra-colors-red-500)" />
                <Text fontFamily="mono" fontSize="xs" fontWeight={700} color="red.500">EXCEPTION CATCHED</Text>
              </HStack>
              <Text fontSize="md" fontWeight={500} color="fg" lineHeight={1.6}>
                ERROR 404: O diretório, arquivo ou cluster de inteligência que você requisitou não está mapeado no nosso banco de dados ou foi destituído pelos engenheiros responsáveis.
              </Text>
            </Box>

            {/* Title and Back Link */}
            <Box pt={4}>
              <Heading
                as="h1"
                fontSize={{ base: "60px", md: "80px", lg: "120px" }}
                fontWeight={800}
                lineHeight={1}
                letterSpacing="-4px"
                color="fg"
                mb={6}
              >
                404.
                <Text as="span" display="block" fontSize={{ base: "32px", md: "48px" }} color="fg.muted" letterSpacing="-2px">
                  Target Unreachable.
                </Text>
              </Heading>

              <VStack align="flex-start" gap="1px" bg="blackAlpha.200" border="1px solid" borderColor="blackAlpha.200">
                <Box bg="white" w="full" p={6}>
                  <Link href="/">
                    <HStack
                      gap={4}
                      color="fg"
                      _hover={{ color: "blue.solid" }}
                      transition="color 0.2s"
                    >
                      <TerminalSquare size={20} />
                      <Text fontFamily="mono" fontSize="sm" fontWeight={700}>ABORTAR E RETORNAR AO MENU ROOT</Text>
                    </HStack>
                  </Link>
                </Box>
                <Box bg="white" w="full" p={6}>
                  <Link href="/insights">
                    <HStack
                      gap={4}
                      color="fg.muted"
                      _hover={{ color: "blue.solid" }}
                      transition="color 0.2s"
                    >
                      <MoveLeft size={20} />
                      <Text fontFamily="mono" fontSize="sm" fontWeight={700}>LER LOGS DE RELATÓRIOS (BLOG)</Text>
                    </HStack>
                  </Link>
                </Box>
              </VStack>
            </Box>

          </VStack>
        </Box>

      </VStack>

      <Footer />
    </Page>
  );
}
