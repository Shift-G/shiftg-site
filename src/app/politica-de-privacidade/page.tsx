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
    "Política de Privacidade | Shift+G",
  description:
    "Conheça nossa política de privacidade e como protegemos seus dados pessoais em nossos serviços de desenvolvimento de software, automações inteligentes e inteligência artificial.",
  keywords:
    "política de privacidade, LGPD, proteção de dados, desenvolvimento de software, automação, inteligência artificial, Shift+G",
  openGraph: {
    title: "Política de Privacidade | Shift+G",
    description:
      "Transparência e segurança no tratamento dos seus dados pessoais em nossos serviços de tecnologia e automação.",
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
                  fontWeight="semibold"
                >
                  1. Introdução
                </Heading>
                <Text color="fg.muted" lineHeight="1.7">
                  A Shift+G valoriza e
                  respeita sua privacidade. Esta Política de Privacidade
                  descreve como coletamos, usamos, armazenamos e protegemos suas
                  informações pessoais quando você utiliza nossos serviços de
                  desenvolvimento de software, automações inteligentes, analytics
                  e inteligência artificial.
                </Text>
                <Text color="fg.muted" lineHeight="1.7">
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
                  fontWeight="semibold"
                >
                  2. Informações que Coletamos
                </Heading>
                <Text color="fg.muted" lineHeight="1.7">
                  Coletamos apenas as informações necessárias para prestar
                  nossos serviços de desenvolvimento de software e tecnologia:
                </Text>
                <VStack gap={3} align="start" pl={4} w="full">
                  <Text color="fg.muted">
                    <Text as="span" fontWeight="medium">
                      • Dados de Identificação:
                    </Text>{" "}
                    Nome completo, CPF/CNPJ, RG, data de nascimento
                  </Text>
                  <Text color="fg.muted">
                    <Text as="span" fontWeight="medium">
                      • Dados de Contato:
                    </Text>{" "}
                    E-mail, telefone, endereço postal
                  </Text>
                  <Text color="fg.muted">
                    <Text as="span" fontWeight="medium">
                      • Dados Profissionais:
                    </Text>{" "}
                    Empresa, cargo, setor de atuação, necessidades tecnológicas
                  </Text>
                  <Text color="fg.muted">
                    <Text as="span" fontWeight="medium">
                      • Dados de Projeto:
                    </Text>{" "}
                    Requisitos técnicos, escopo do projeto, informações sobre
                    sistemas existentes (quando relevante para o desenvolvimento)
                  </Text>
                </VStack>
                <Text color="fg.muted" lineHeight="1.7" fontWeight="medium">
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
                  fontWeight="semibold"
                >
                  3. Como Usamos suas Informações
                </Heading>
                <Text color="fg.muted" lineHeight="1.7">
                  Utilizamos suas informações pessoais exclusivamente para:
                </Text>
                <VStack gap={2} align="start" pl={4} w="full">
                  <Text color="fg.muted">
                    • Desenvolver software personalizado e automações inteligentes
                  </Text>
                  <Text color="fg.muted">
                    • Criar soluções de analytics e inteligência artificial
                  </Text>
                  <Text color="fg.muted">
                    • Comunicar sobre projetos, atualizações e conteúdos técnicos
                  </Text>
                  <Text color="fg.muted">
                    • Agendar e realizar reuniões de projeto e consultoria técnica
                  </Text>
                  <Text color="fg.muted">
                    • Cumprir obrigações legais e contratuais de desenvolvimento
                  </Text>
                  <Text color="fg.muted">
                    • Responder a suas solicitações e dúvidas técnicas
                  </Text>
                  <Text color="fg.muted">
                    • Fornecer suporte técnico e manutenção de sistemas
                  </Text>
                </VStack>
              </VStack>

              <Separator />

              {/* 4. Base Legal */}
              <VStack gap={4} align="start" w="full">
                <Heading
                  as="h2"
                  size={{ base: "md", md: "lg" }}
                  fontWeight="semibold"
                >
                  4. Base Legal para o Tratamento
                </Heading>
                <Text color="fg.muted" lineHeight="1.7">
                  O tratamento de seus dados pessoais tem como base legal:
                </Text>
                <VStack gap={3} align="start" pl={4} w="full">
                  <Text color="fg.muted">
                    <Text as="span" fontWeight="medium">
                      • Consentimento:
                    </Text>{" "}
                    Para comunicações de marketing e conteúdo técnico
                  </Text>
                  <Text color="fg.muted">
                    <Text as="span" fontWeight="medium">
                      • Execução de Contrato:
                    </Text>{" "}
                    Para desenvolvimento e entrega dos projetos de software contratados
                  </Text>
                  <Text color="fg.muted">
                    <Text as="span" fontWeight="medium">
                      • Legítimo Interesse:
                    </Text>{" "}
                    Para melhorar nossos serviços e desenvolver relacionamento
                    comercial
                  </Text>
                  <Text color="fg.muted">
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
                  fontWeight="semibold"
                >
                  5. Compartilhamento de Informações
                </Heading>
                <Text color="fg.muted" lineHeight="1.7">
                  Seus dados pessoais podem ser compartilhados apenas nas
                  seguintes situações:
                </Text>
                <VStack gap={2} align="start" pl={4} w="full">
                  <Text color="fg.muted">
                    • Com fornecedores de tecnologia e infraestrutura (ex: AWS, Google Cloud)
                    necessários para hospedar e operar os sistemas desenvolvidos
                  </Text>
                  <Text color="fg.muted">
                    • Com prestadores de serviços que nos auxiliam (ex:
                    contabilidade, advocacia), sob rigoroso acordo de
                    confidencialidade
                  </Text>
                  <Text color="fg.muted">
                    • Com parceiros técnicos especializados quando necessário para
                    o desenvolvimento de funcionalidades específicas
                  </Text>
                  <Text color="fg.muted">
                    • Quando exigido por autoridades competentes ou por força de
                    lei
                  </Text>
                  <Text color="fg.muted">
                    • Com seu consentimento expresso para situações específicas
                  </Text>
                </VStack>
                <Text color="fg.muted" lineHeight="1.7" fontWeight="medium">
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
                  fontWeight="semibold"
                >
                  6. Segurança e Proteção
                </Heading>
                <Text color="fg.muted" lineHeight="1.7">
                  Implementamos medidas técnicas e organizacionais para proteger
                  suas informações:
                </Text>
                <VStack gap={2} align="start" pl={4} w="full">
                  <Text color="fg.muted">
                    • Criptografia de dados sensíveis em trânsito e em repouso
                  </Text>
                  <Text color="fg.muted">
                    • Acesso restrito às informações por colaboradores
                    autorizados com autenticação multifator
                  </Text>
                  <Text color="fg.muted">
                    • Backup regular e seguro dos dados em ambiente protegido
                  </Text>
                  <Text color="fg.muted">
                    • Monitoramento constante de segurança e logs de auditoria
                  </Text>
                  <Text color="fg.muted">
                    • Infraestrutura em nuvem com certificações de segurança
                  </Text>
                  <Text color="fg.muted">
                    • Treinamento regular da equipe sobre proteção de dados e segurança
                  </Text>
                </VStack>
              </VStack>

              <Separator />

              {/* 7. Seus Direitos */}
              <VStack gap={4} align="start" w="full">
                <Heading
                  as="h2"
                  size={{ base: "md", md: "lg" }}
                  fontWeight="semibold"
                >
                  7. Seus Direitos (LGPD)
                </Heading>
                <Text color="fg.muted" lineHeight="1.7">
                  Você tem os seguintes direitos em relação aos seus dados
                  pessoais:
                </Text>
                <VStack gap={3} align="start" pl={4} w="full">
                  <Text color="fg.muted">
                    <Text as="span" fontWeight="medium">
                      • Acesso:
                    </Text>{" "}
                    Confirmar a existência de tratamento e acessar seus dados
                  </Text>
                  <Text color="fg.muted">
                    <Text as="span" fontWeight="medium">
                      • Correção:
                    </Text>{" "}
                    Corrigir dados incompletos, inexatos ou desatualizados
                  </Text>
                  <Text color="fg.muted">
                    <Text as="span" fontWeight="medium">
                      • Eliminação:
                    </Text>{" "}
                    Solicitar a exclusão de dados desnecessários ou tratados em
                    desconformidade
                  </Text>
                  <Text color="fg.muted">
                    <Text as="span" fontWeight="medium">
                      • Portabilidade:
                    </Text>{" "}
                    Receber uma cópia dos dados em formato estruturado
                  </Text>
                  <Text color="fg.muted">
                    <Text as="span" fontWeight="medium">
                      • Oposição:
                    </Text>{" "}
                    Opor-se ao tratamento em determinadas situações
                  </Text>
                  <Text color="fg.muted">
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
                  fontWeight="semibold"
                >
                  8. Retenção de Dados
                </Heading>
                <Text color="fg.muted" lineHeight="1.7">
                  Mantemos suas informações pessoais apenas pelo tempo
                  necessário para:
                </Text>
                <VStack gap={2} align="start" pl={4} w="full">
                  <Text color="fg.muted">
                    • Cumprir as finalidades para as quais foram coletadas
                  </Text>
                  <Text color="fg.muted">
                    • Atender obrigações legais e contratuais (mínimo de 5 anos para
                    documentos contratuais)
                  </Text>
                  <Text color="fg.muted">
                    • Exercer direitos em processos judiciais
                  </Text>
                  <Text color="fg.muted">
                    • Manter histórico de projetos para suporte técnico
                  </Text>
                  <Text color="fg.muted">
                    • Garantir continuidade do suporte e manutenção dos sistemas
                  </Text>
                </VStack>
              </VStack>

              <Separator />

              {/* 10. Alterações */}
              <VStack gap={4} align="start" w="full">
                <Heading
                  as="h2"
                  size={{ base: "md", md: "lg" }}
                  fontWeight="semibold"
                >
                  10. Alterações nesta Política
                </Heading>
                <Text color="fg.muted" lineHeight="1.7">
                  Esta Política de Privacidade pode ser atualizada
                  periodicamente para refletir mudanças em nossas práticas ou na
                  legislação. Alterações significativas serão comunicadas por
                  e-mail ou através de nosso site.
                </Text>
                <Text color="fg.muted" lineHeight="1.7">
                  Recomendamos que você revise esta política regularmente para
                  se manter informado sobre como protegemos suas informações.
                </Text>
              </VStack>

              {/* Chamada para Ação */}
              <Box bg="blue.subtle" p={6} borderRadius="md" w="full" mt={8}>
                <VStack gap={4} align="center" textAlign="center">
                  <Heading size="md">Dúvidas sobre Privacidade?</Heading>
                  <Text color="blue.fg" lineHeight="1.6">
                    Nossa equipe está disponível para esclarecer qualquer
                    questão sobre o tratamento dos seus dados pessoais.
                  </Text>
                  <Link
                    href={`mailto:${SITE_EMAIL}`}
                    color="blue.600"
                    fontWeight="semibold"
                    fontSize="lg"
                    _hover={{ color: "blue.fg" }}
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
