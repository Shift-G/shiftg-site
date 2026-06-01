"use client";

import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const faqs = [
  {
    question: "A Shift+G atende apenas grandes empresas?",
    answer:
      "Não. Embora tenhamos experiência com grandes corporações, nossa metodologia é adaptável para médias empresas que buscam estruturar seu crescimento com tecnologia e inteligência.",
  },
  {
    question: "Como funciona o diagnóstico inicial?",
    answer:
      "Realizamos uma imersão de 1 a 2 semanas para entender seus processos, dados e cultura. Ao final, entregamos um mapa de oportunidades com ROI estimado e plano de ação.",
  },
  {
    question: "Qual a diferença entre a consultoria e os produtos?",
    answer:
      "A consultoria é um serviço personalizado de estratégia e implementação. Os produtos (como ACP e Aliados) são ferramentas SaaS prontas para resolver dores específicas de gestão e operação.",
  },
  {
    question: "Vocês desenvolvem software sob medida?",
    answer:
      "Sim, mas com foco estratégico. Não somos uma fábrica de software tradicional. Desenvolvemos soluções de arquitetura crítica e inteligência que geram diferencial competitivo.",
  },
];

export function FAQSection() {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="gray.50/50">
      <Container maxW="5xl">
        <VStack gap={{ base: 12, md: 16 }}>
          <VStack gap={4} textAlign="center">
            <Heading as="h2" size="3xl" fontWeight="bold" color="gray.900" letterSpacing="-0.02em">
              Dúvidas Frequentes
            </Heading>
            <Text fontSize="xl" color="fg.muted">
              Respostas diretas para quem valoriza clareza.
            </Text>
          </VStack>
          <AccordionRoot collapsible variant="enclosed" size="lg">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionItemTrigger cursor="pointer" _hover={{ color: "blue.600" }}>
                  <Heading size="xl" fontWeight="semibold" color="gray.900" textAlign="left">
                    {faq.question}
                  </Heading>
                </AccordionItemTrigger>
                <AccordionItemContent>
                  <Text color="fg.muted" fontSize="lg" lineHeight="tall" pt={2} pb={8}>
                    {faq.answer}
                  </Text>
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </VStack>
      </Container>
    </Box>
  );
}
