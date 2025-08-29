import { Metadata } from "next";
import {
  Container,
  Heading,
  Text,
  VStack,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { SITE_NAME, SITE_EMAIL } from "@/constants";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Termos de Uso da ${SITE_NAME} AI & Data`,
};

export default function TermosDeUso() {
  return (
    <Page>
      <Navbar />
      
      <Container maxW="4xl" py={{ base: 12, md: 16 }}>
        <VStack align="flex-start" gap={8}>
          <Box>
            <Heading as="h1" size="2xl" mb={2}>
              Termos de Uso
            </Heading>
            <Text color="fg.muted" fontSize="sm">
              Última atualização: 15 de dezembro de 2024
            </Text>
          </Box>

          <VStack align="flex-start" gap={6} w="full">
            <Box>
              <Heading as="h2" size="lg" mb={4}>
                1. Aceitação dos Termos
              </Heading>
              <Text color="fg.muted" lineHeight="tall">
                Ao acessar e usar este site, você aceita e concorda em cumprir 
                os termos e condições estabelecidos nestes Termos de Uso. Se você 
                não concordar com alguma parte destes termos, não deve usar nosso site.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                2. Uso do Site
              </Heading>
              <Text color="fg.muted" lineHeight="tall">
                Este site é fornecido pela SHIFT+G para fins informativos sobre 
                nossos serviços de inteligência artificial e análise de dados. 
                Você pode usar este site apenas para fins legais e de acordo com 
                estes Termos de Uso.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                3. Propriedade Intelectual
              </Heading>
              <Text color="fg.muted" lineHeight="tall">
                Todo o conteúdo deste site, incluindo textos, gráficos, logos, 
                ícones, imagens, clipes de áudio, downloads digitais e compilações 
                de dados, é propriedade da SHIFT+G ou de seus fornecedores de conteúdo 
                e está protegido pelas leis brasileiras e internacionais de direitos autorais.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                4. Serviços Oferecidos
              </Heading>
              <Text color="fg.muted" lineHeight="tall">
                A SHIFT+G oferece serviços de desenvolvimento de software sob medida, 
                inteligência artificial, análise de dados e consultoria tecnológica. 
                Os termos específicos de cada serviço serão estabelecidos em contratos 
                individuais com cada cliente.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                5. Limitação de Responsabilidade
              </Heading>
              <Text color="fg.muted" lineHeight="tall">
                A SHIFT+G não será responsável por quaisquer danos diretos, indiretos, 
                incidentais, especiais, consequenciais ou punitivos resultantes do uso 
                ou incapacidade de usar este site ou nossos serviços.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                6. Privacidade
              </Heading>
              <Text color="fg.muted" lineHeight="tall">
                Sua privacidade é importante para nós. Nossa{" "}
                <ChakraLink
                  as={Link}
                  href="/politica-de-privacidade"
                  color="blue.500"
                  _hover={{ textDecoration: "underline" }}
                >
                  Política de Privacidade
                </ChakraLink>{" "}
                explica como coletamos, usamos e protegemos suas informações quando 
                você usa nosso site e serviços.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                7. Modificações dos Termos
              </Heading>
              <Text color="fg.muted" lineHeight="tall">
                A SHIFT+G reserva-se o direito de modificar estes termos a qualquer 
                momento. As modificações entrarão em vigor imediatamente após a 
                publicação no site. O uso continuado do site após quaisquer alterações 
                constitui sua aceitação dos novos Termos de Uso.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                8. Lei Aplicável
              </Heading>
              <Text color="fg.muted" lineHeight="tall">
                Estes Termos de Uso são regidos e interpretados de acordo com as 
                leis do Brasil, e você se submete irrevogavelmente à jurisdição 
                exclusiva dos tribunais deste país.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                9. Contato
              </Heading>
              <Text color="fg.muted" lineHeight="tall">
                Se você tiver alguma dúvida sobre estes Termos de Uso, entre em 
                contato conosco através do e-mail:{" "}
                <ChakraLink
                  href={`mailto:${SITE_EMAIL}`}
                  color="blue.500"
                  _hover={{ textDecoration: "underline" }}
                >
                  {SITE_EMAIL}
                </ChakraLink>
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Container>

      <Footer />
    </Page>
  );
}
