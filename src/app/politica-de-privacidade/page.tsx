import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Page } from "@/components/layout/page";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Separator,
  Link,
} from "@chakra-ui/react";
import { ChevronRight, Mail, Phone, Shield, Info } from "lucide-react";
import { Metadata } from "next";
import { SITE_NAME, SITE_EMAIL } from "@/constants";

export const metadata: Metadata = {
  title:
    "Política de Privacidade | Harrison L. Lucetti - Consultoria Financeira",
  description:
    "Conheça nossa política de privacidade e como protegemos seus dados pessoais em nossa consultoria financeira especializada em investimentos e crédito empresarial.",
  keywords:
    "política de privacidade, LGPD, proteção de dados, consultoria financeira, Harrison Lucetti",
  openGraph: {
    title: "Política de Privacidade | Harrison L. Lucetti",
    description:
      "Transparência e segurança no tratamento dos seus dados pessoais.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <Page>
      <Navbar />

      <Box minH="100vh">
        {/* Breadcrumb */}
        <Box bg="gray.50" py={4}>
          <Container maxW="4xl">
            <HStack gap={2} fontSize="sm" color="gray.600">
              <Link href="/" color="blue.600" _hover={{ color: "blue.800" }}>
                Início
              </Link>
              <ChevronRight size={16} />
              <Text>Política de Privacidade</Text>
            </HStack>
          </Container>
        </Box>

        {/* Header */}
        <Container maxW="4xl" py={{ base: 8, md: 12 }}>
          <VStack gap={{ base: 6, md: 8 }} align="start">
            <VStack gap={4} align="start" w="full">
              <HStack gap={3}>
                <Shield size={32} color="#2563eb" />
                <Heading
                  as="h1"
                  size={{ base: "lg", md: "xl" }}
                  color="gray.900"
                  fontWeight="bold"
                >
                  Política de Privacidade
                </Heading>
              </HStack>

              <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
                Última atualização: Janeiro de 2025
              </Text>

              <Box
                bg="blue.50"
                p={4}
                borderRadius="md"
                borderLeft="4px solid"
                borderLeftColor="blue.500"
                w="full"
              >
                <HStack gap={3} align="start">
                  <Info size={20} color="#2563eb" />
                  <Text fontSize="sm" color="blue.800">
                    Este site não utiliza cookies de rastreamento ou analytics.
                    Coletamos apenas as informações essenciais para nossa
                    consultoria.
                  </Text>
                </HStack>
              </Box>
            </VStack>

            <VStack gap={{ base: 6, md: 8 }} align="start" w="full">
              {/* 1. Introdução */}
              <VStack gap={4} align="start" w="full">
                <Heading
                  as="h2"
                  size={{ base: "md", md: "lg" }}
                  color="gray.900"
                  fontWeight="semibold"
                >
                  1. Introdução
                </Heading>
                <Text color="gray.700" lineHeight="1.7">
                  A Harrison L. Lucetti Consultoria Financeira valoriza e
                  respeita sua privacidade. Esta Política de Privacidade
                  descreve como coletamos, usamos, armazenamos e protegemos suas
                  informações pessoais quando você utiliza nossos serviços de
                  consultoria em investimentos, crédito e estratégia bancária.
                </Text>
                <Text color="gray.700" lineHeight="1.7">
                  Esta política está em conformidade com a Lei Geral de Proteção
                  de Dados (LGPD - Lei 13.709/2018) e demais regulamentações
                  aplicáveis.
                </Text>
              </VStack>

              <Separator />

              {/* 2. Informações que Coletamos */}
              <VStack gap={4} align="start" w="full">
                <Heading
                  as="h2"
                  size={{ base: "md", md: "lg" }}
                  color="gray.900"
                  fontWeight="semibold"
                >
                  2. Informações que Coletamos
                </Heading>
                <Text color="gray.700" lineHeight="1.7">
                  Coletamos apenas as informações necessárias para prestar
                  nossos serviços de consultoria financeira:
                </Text>
                <VStack gap={3} align="start" pl={4} w="full">
                  <Text color="gray.700">
                    <Text as="span" fontWeight="medium">
                      • Dados de Identificação:
                    </Text>{" "}
                    Nome completo, CPF/CNPJ, RG, data de nascimento
                  </Text>
                  <Text color="gray.700">
                    <Text as="span" fontWeight="medium">
                      • Dados de Contato:
                    </Text>{" "}
                    E-mail, telefone, endereço postal
                  </Text>
                  <Text color="gray.700">
                    <Text as="span" fontWeight="medium">
                      • Dados Profissionais:
                    </Text>{" "}
                    Empresa, cargo, setor de atuação, receita aproximada
                  </Text>
                  <Text color="gray.700">
                    <Text as="span" fontWeight="medium">
                      • Dados Financeiros:
                    </Text>{" "}
                    Informações sobre patrimônio, investimentos e necessidades
                    de crédito (quando relevante para a consultoria)
                  </Text>
                </VStack>
                <Text color="gray.700" lineHeight="1.7" fontWeight="medium">
                  ⚠️ Importante: Este site não utiliza cookies, pixels de
                  rastreamento ou ferramentas de analytics que coletam dados
                  automaticamente.
                </Text>
              </VStack>

              <Separator />

              {/* 3. Como Usamos suas Informações */}
              <VStack gap={4} align="start" w="full">
                <Heading
                  as="h2"
                  size={{ base: "md", md: "lg" }}
                  color="gray.900"
                  fontWeight="semibold"
                >
                  3. Como Usamos suas Informações
                </Heading>
                <Text color="gray.700" lineHeight="1.7">
                  Utilizamos suas informações pessoais exclusivamente para:
                </Text>
                <VStack gap={2} align="start" pl={4} w="full">
                  <Text color="gray.700">
                    • Prestar serviços de consultoria em investimentos e
                    estratégia bancária
                  </Text>
                  <Text color="gray.700">
                    • Realizar diagnósticos financeiros personalizados
                  </Text>
                  <Text color="gray.700">
                    • Comunicar sobre workshops, eventos e conteúdos educativos
                  </Text>
                  <Text color="gray.700">
                    • Agendar e realizar sessões de consultoria
                  </Text>
                  <Text color="gray.700">
                    • Cumprir obrigações legais e regulamentares do setor
                    financeiro
                  </Text>
                  <Text color="gray.700">
                    • Responder a suas solicitações e dúvidas
                  </Text>
                </VStack>
              </VStack>

              <Separator />

              {/* 4. Base Legal */}
              <VStack gap={4} align="start" w="full">
                <Heading
                  as="h2"
                  size={{ base: "md", md: "lg" }}
                  color="gray.900"
                  fontWeight="semibold"
                >
                  4. Base Legal para o Tratamento
                </Heading>
                <Text color="gray.700" lineHeight="1.7">
                  O tratamento de seus dados pessoais tem como base legal:
                </Text>
                <VStack gap={3} align="start" pl={4} w="full">
                  <Text color="gray.700">
                    <Text as="span" fontWeight="medium">
                      • Consentimento:
                    </Text>{" "}
                    Para comunicações de marketing e conteúdo educativo
                  </Text>
                  <Text color="gray.700">
                    <Text as="span" fontWeight="medium">
                      • Execução de Contrato:
                    </Text>{" "}
                    Para prestação dos serviços de consultoria contratados
                  </Text>
                  <Text color="gray.700">
                    <Text as="span" fontWeight="medium">
                      • Legítimo Interesse:
                    </Text>{" "}
                    Para melhorar nossos serviços e desenvolver relacionamento
                    comercial
                  </Text>
                  <Text color="gray.700">
                    <Text as="span" fontWeight="medium">
                      • Cumprimento de Obrigação Legal:
                    </Text>
                    Quando exigido por lei ou regulamentação
                  </Text>
                </VStack>
              </VStack>

              <Separator />

              {/* 5. Compartilhamento de Dados */}
              <VStack gap={4} align="start" w="full">
                <Heading
                  as="h2"
                  size={{ base: "md", md: "lg" }}
                  color="gray.900"
                  fontWeight="semibold"
                >
                  5. Compartilhamento de Informações
                </Heading>
                <Text color="gray.700" lineHeight="1.7">
                  Seus dados pessoais podem ser compartilhados apenas nas
                  seguintes situações:
                </Text>
                <VStack gap={2} align="start" pl={4} w="full">
                  <Text color="gray.700">
                    • Com instituições financeiras parceiras, quando necessário
                    para viabilizar operações de crédito ou investimento
                  </Text>
                  <Text color="gray.700">
                    • Com prestadores de serviços que nos auxiliam (ex:
                    contabilidade, advocacia), sob rigoroso acordo de
                    confidencialidade
                  </Text>
                  <Text color="gray.700">
                    • Quando exigido por autoridades competentes ou por força de
                    lei
                  </Text>
                  <Text color="gray.700">
                    • Com seu consentimento expresso para situações específicas
                  </Text>
                </VStack>
                <Text color="gray.700" lineHeight="1.7" fontWeight="medium">
                  Nunca vendemos ou alugamos suas informações pessoais para
                  terceiros.
                </Text>
              </VStack>

              <Separator />

              {/* 6. Segurança */}
              <VStack gap={4} align="start" w="full">
                <Heading
                  as="h2"
                  size={{ base: "md", md: "lg" }}
                  color="gray.900"
                  fontWeight="semibold"
                >
                  6. Segurança e Proteção
                </Heading>
                <Text color="gray.700" lineHeight="1.7">
                  Implementamos medidas técnicas e organizacionais para proteger
                  suas informações:
                </Text>
                <VStack gap={2} align="start" pl={4} w="full">
                  <Text color="gray.700">
                    • Criptografia de dados sensíveis
                  </Text>
                  <Text color="gray.700">
                    • Acesso restrito às informações por colaboradores
                    autorizados
                  </Text>
                  <Text color="gray.700">
                    • Backup regular e seguro dos dados
                  </Text>
                  <Text color="gray.700">
                    • Monitoramento constante de segurança
                  </Text>
                  <Text color="gray.700">
                    • Treinamento regular da equipe sobre proteção de dados
                  </Text>
                </VStack>
              </VStack>

              <Separator />

              {/* 7. Seus Direitos */}
              <VStack gap={4} align="start" w="full">
                <Heading
                  as="h2"
                  size={{ base: "md", md: "lg" }}
                  color="gray.900"
                  fontWeight="semibold"
                >
                  7. Seus Direitos (LGPD)
                </Heading>
                <Text color="gray.700" lineHeight="1.7">
                  Você tem os seguintes direitos em relação aos seus dados
                  pessoais:
                </Text>
                <VStack gap={3} align="start" pl={4} w="full">
                  <Text color="gray.700">
                    <Text as="span" fontWeight="medium">
                      • Acesso:
                    </Text>{" "}
                    Confirmar a existência de tratamento e acessar seus dados
                  </Text>
                  <Text color="gray.700">
                    <Text as="span" fontWeight="medium">
                      • Correção:
                    </Text>{" "}
                    Corrigir dados incompletos, inexatos ou desatualizados
                  </Text>
                  <Text color="gray.700">
                    <Text as="span" fontWeight="medium">
                      • Eliminação:
                    </Text>{" "}
                    Solicitar a exclusão de dados desnecessários ou tratados em
                    desconformidade
                  </Text>
                  <Text color="gray.700">
                    <Text as="span" fontWeight="medium">
                      • Portabilidade:
                    </Text>{" "}
                    Receber uma cópia dos dados em formato estruturado
                  </Text>
                  <Text color="gray.700">
                    <Text as="span" fontWeight="medium">
                      • Oposição:
                    </Text>{" "}
                    Opor-se ao tratamento em determinadas situações
                  </Text>
                  <Text color="gray.700">
                    <Text as="span" fontWeight="medium">
                      • Revogação do Consentimento:
                    </Text>{" "}
                    Retirar o consentimento a qualquer momento
                  </Text>
                </VStack>
              </VStack>

              <Separator />

              {/* 8. Retenção de Dados */}
              <VStack gap={4} align="start" w="full">
                <Heading
                  as="h2"
                  size={{ base: "md", md: "lg" }}
                  color="gray.900"
                  fontWeight="semibold"
                >
                  8. Retenção de Dados
                </Heading>
                <Text color="gray.700" lineHeight="1.7">
                  Mantemos suas informações pessoais apenas pelo tempo
                  necessário para:
                </Text>
                <VStack gap={2} align="start" pl={4} w="full">
                  <Text color="gray.700">
                    • Cumprir as finalidades para as quais foram coletadas
                  </Text>
                  <Text color="gray.700">
                    • Atender obrigações legais (mínimo de 5 anos para dados
                    financeiros)
                  </Text>
                  <Text color="gray.700">
                    • Exercer direitos em processos judiciais
                  </Text>
                  <Text color="gray.700">
                    • Manter histórico de relacionamento quando aplicável
                  </Text>
                </VStack>
              </VStack>

              <Separator />



              {/* 10. Alterações */}
              <VStack gap={4} align="start" w="full">
                <Heading
                  as="h2"
                  size={{ base: "md", md: "lg" }}
                  color="gray.900"
                  fontWeight="semibold"
                >
                  10. Alterações nesta Política
                </Heading>
                <Text color="gray.700" lineHeight="1.7">
                  Esta Política de Privacidade pode ser atualizada
                  periodicamente para refletir mudanças em nossas práticas ou na
                  legislação. Alterações significativas serão comunicadas por
                  e-mail ou através de nosso site.
                </Text>
                <Text color="gray.700" lineHeight="1.7">
                  Recomendamos que você revise esta política regularmente para
                  se manter informado sobre como protegemos suas informações.
                </Text>
              </VStack>

              {/* Chamada para Ação */}
              <Box bg="blue.50" p={6} borderRadius="md" w="full" mt={8}>
                <VStack gap={4} align="center" textAlign="center">
                  <Heading size="md" color="blue.900">
                    Dúvidas sobre Privacidade?
                  </Heading>
                  <Text color="blue.800" lineHeight="1.6">
                    Nossa equipe está disponível para esclarecer qualquer
                    questão sobre o tratamento dos seus dados pessoais.
                  </Text>
                  <Link
                    href={`mailto:${SITE_EMAIL}`}
                    color="blue.600"
                    fontWeight="semibold"
                    fontSize="lg"
                    _hover={{ color: "blue.800" }}
                  >
                    Entre em Contato
                  </Link>
                </VStack>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </Page>
  );
}
