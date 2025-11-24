import { Metadata } from "next";
import {
  SimpleGrid,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { ServiceCard } from "@/components/cards/service-card";
import { Hero } from "@/components/sections/hero";
import { ProductSlider } from "@/components/sections/product-slider";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ProcessSection } from "@/components/sections/process-section";
import { AboutSection } from "@/components/sections/about-section";
import { CTASection } from "@/components/sections/cta-section";
import {
  Compass,
  Brain,
  Wrench,
  GraduationCap,
  Package,
} from "lucide-react";
import { SITE_NAME, SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Consultoria Estratégica de Tecnologia`,
  description:
    "Inteligência, eficiência e visão aplicadas ao que realmente importa. Estratégia, IA e arquitetura para elevar eficiência, escala e competitividade.",
  keywords: [
    "consultoria estratégica tecnologia",
    "inteligência artificial empresarial",
    "arquitetura de soluções",
    "automação inteligente",
    "IA aplicada negócios",
    "transformação digital",
    "people analytics",
    "treinamentos IA",
    "soluções corporativas",
  ],
  openGraph: {
    title: `${SITE_NAME} | Consultoria Estratégica de Tecnologia`,
    description:
      "Estratégia, IA e arquitetura para elevar eficiência, escala e competitividade da sua empresa.",
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Consultoria Estratégica de Tecnologia`,
    description:
      "Estratégia, IA e arquitetura para elevar eficiência, escala e competitividade.",
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

const services = [
  {
    icon: <Compass size={24} />,
    title: "Consultoria Estratégica de Tecnologia",
    description:
      "Diagnóstico, arquitetura e direcionamento estratégico para empresas que precisam evoluir com método e impacto. Clareza para decidir. Estrutura para crescer.",
  },
  {
    icon: <Brain size={24} />,
    title: "IA Aplicada ao Negócio",
    description:
      "Automação de processos críticos, fluxos inteligentes, modelos preditivos e ferramentas que elevam a maturidade tecnológica. IA prática, eficiente e orientada a resultado.",
  },
  {
    icon: <Wrench size={24} />,
    title: "Soluções Sob Medida",
    description:
      "Arquitetura e implementação de soluções corporativas para desafios específicos. Tecnologia desenhada para resolver problemas reais — com baixo atrito cultural e alta adaptação.",
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Treinamentos In Company de IA",
    description:
      "Programas executivos e operacionais para capacitar líderes e equipes a extrair o máximo da inteligência artificial. Formação sob medida, com conteúdos aplicáveis no dia a dia.",
  },
  {
    icon: <Package size={24} />,
    title: "Produtos de Alta Performance",
    description:
      "Ferramentas inteligentes criadas para acelerar processos, reduzir custos e fortalecer decisões.",
  },
];

export default function HomePage() {
  return (
    <Page>
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* O Que Fazemos */}
      <Section id="o-que-fazemos">
        <VStack gap={{ base: 4, md: 6 }} textAlign="center" maxW="4xl" mx="auto">
          <Heading
            as="h2"
            size={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="fg"
            letterSpacing="tight"
          >
            Transformamos operações, processos e decisões com inteligência aplicada.
          </Heading>
          <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="tall" maxW="2xl">
            A Shift+G ajuda líderes a operar com mais clareza, eficiência e escala.
            Aplicamos arquitetura, automação e IA para reduzir esforço, eliminar gargalos
            e criar vantagem competitiva sustentável.
          </Text>
        </VStack>
      </Section>

      {/* Serviços */}
      <Section
        id="servicos"
        title="Serviços"
        centered
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </SimpleGrid>
      </Section>

      {/* Produtos - Seção completa com slider */}
      <ProductSlider />

      {/* Como a Shift+G Pensa Tecnologia - Full viewport */}
      <PhilosophySection />

      {/* Como Trabalhamos - Seção visual com números */}
      <ProcessSection />

      {/* Sobre + Liderança unificados */}
      <AboutSection />

      {/* CTA Final */}
      <CTASection />

      <Footer />
    </Page>
  );
}
