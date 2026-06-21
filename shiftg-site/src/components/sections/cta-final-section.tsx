import {
  Box,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTAFinalSection() {
  return (
    <Box
      as="section"
      py={{ base: 20, md: "120px" }}
      px={{ base: 6, md: "60px" }}
      bg="white"
      borderTop="1px solid"
      borderColor="blackAlpha.100"
      textAlign="center"
      position="relative"
      overflow="hidden"
      id="contato"
    >
      <VStack gap={{ base: 5, md: 6 }} position="relative" zIndex={1}>
        {/* Subtitle */}
        <HStack
          fontFamily="mono"
          fontSize="2xs"
          fontWeight={600}
          letterSpacing="0.16em"
          textTransform="uppercase"
          color="blue.solid"
          gap={3}
          justify="center"
        >
          <Box w="22px" h="1px" bg="blue.solid" />
          <Text>Próximo passo</Text>
          <Box w="22px" h="1px" bg="blue.solid" />
        </HStack>

        {/* Heading */}
        <Text
          as="h2"
          fontSize={{ base: "40px", md: "clamp(44px, 6vw, 88px)" }}
          fontWeight={800}
          lineHeight={0.93}
          letterSpacing="-3px"
          color="fg"
        >
          Quando estiver
          <br />
          <Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="gray.emphasized">
            pronto para
          </Text>
          <br />
          <Text as="span" color="blue.solid">
            outro nível.
          </Text>
        </Text>

        {/* Description */}
        <Text fontSize="md" color="fg.muted" lineHeight={1.82}>
          Uma conversa de 30 minutos pode mudar a direção da sua operação.
        </Text>

        {/* CTA button */}
        <Box
          asChild
          display="inline-flex"
          alignItems="center"
          gap="9px"
          bg="blue.solid"
          color="white"
          px={{ base: 8, md: 10 }}
          py={{ base: 4, md: "16px" }}
          fontWeight={600}
          fontSize="md"
          textDecoration="none"
          transition="all 0.22s"
          _hover={{ opacity: 0.88, transform: "translateY(-2px)" }}
          mt={6}
        >
          <Link href="/contato">
            Agendar consulta executiva
            <ArrowRight size={14} />
          </Link>
        </Box>
      </VStack>
    </Box>
  );
}
