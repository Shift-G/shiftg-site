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
import { TransformationSection } from "@/components/sections/transformation-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProductSlider } from "@/components/sections/product-slider";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ProcessSection } from "@/components/sections/process-section";
import { AboutSection } from "@/components/sections/about-section";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";

import { SITE_NAME, SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Consultoria Estratégica de Tecnologia e IA`,
  description:
    "Transforme sua empresa com Inteligência Artificial e Estratégia de Dados. A Shift+G oferece consultoria especializada para elevar eficiência, escala e competitividade.",
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
    "consultoria de dados",
    "machine learning para empresas"
  ],
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
  openGraph: {
    title: `${SITE_NAME} | Consultoria Estratégica de Tecnologia e IA`,
    description:
      "Estratégia, IA e arquitetura para elevar eficiência, escala e competitividade da sua empresa.",
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Consultoria de Tecnologia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Consultoria Estratégica de Tecnologia`,
    description:
      "Estratégia, IA e arquitetura para elevar eficiência, escala e competitividade.",
    images: ["/og-image.png"],
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



export default function HomePage() {
  // Structured Data for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };

  const servicesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Serviços SHIFT+G",
    description: "Soluções de tecnologia e inteligência artificial",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Fábrica de Software",
        url: `${SITE_URL}/fabrica-de-software`,
        description: "Desenvolvimento de software sob medida",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Diagnóstico Inteligente",
        url: `${SITE_URL}/diagnostico-inteligente`,
        description: "Análise e diagnóstico de processos com IA",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Sentinela",
        url: `${SITE_URL}/sentinela`,
        description: "Plataforma de People Analytics",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Treinamento IA",
        url: `${SITE_URL}/treinamento-ia-para-sua-empresa`,
        description: "Capacitação em inteligência artificial",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Transformação Digital",
        url: `${SITE_URL}/transformacao-digital`,
        description: "Consultoria em transformação digital",
      },
    ],
  };

  return (
    <Page>
      <Navbar />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />

      <VStack gap={0} w="full" as="main" align="stretch">
        {/* Hero */}
        <Hero />

        {/* Transformation Section (O Que Fazemos) */}
        <TransformationSection />

        {/* Serviços - Bento Grid */}
        <ServicesSection />

        {/* Produtos - Seção completa com slider */}
        <ProductSlider />

        {/* Como a Shift+G Pensa Tecnologia - Full viewport */}
        <PhilosophySection />

        {/* Como Trabalhamos - Seção visual com números */}
        <ProcessSection />

        {/* Sobre + Liderança unificados */}
        <AboutSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Final */}
        <CTASection />
      </VStack>

      <Footer />
    </Page>
  );
}
