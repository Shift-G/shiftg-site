import { Metadata } from "next";
import { VStack } from "@chakra-ui/react";
import { Page } from "@/components/layout/page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroHome } from "@/components/sections/hero-home";
import { Plumb } from "@/components/ui/plumb";
import { EcosystemSection } from "@/components/sections/ecosystem-section";
import { ProductsSection } from "@/components/sections/products-section";
import { PillarsSection } from "@/components/sections/pillars-section";
import { MethodSection } from "@/components/sections/method-section";
import { IdentitySection } from "@/components/sections/identity-section";
import { TeamSection } from "@/components/sections/team-section";
import { CTAFinalSection } from "@/components/sections/cta-final-section";

import { SITE_NAME, SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Maturidade Tecnológica para Empresas que Querem Ir Além`,
  description:
    "Elevamos a maturidade tecnológica da sua organização — consultoria, IA, treinamento, RH e desenvolvimento. Tudo que a transformação exige, lado a lado com você.",
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
    "machine learning para empresas",
    "maturidade tecnológica",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
  openGraph: {
    title: `${SITE_NAME} — Maturidade Tecnológica para Empresas que Querem Ir Além`,
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
    title: `${SITE_NAME} — Maturidade Tecnológica`,
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
        <HeroHome />

        {/* Divider */}
        <Plumb />

        {/* Ecossistema — Animated transformation flowchart */}
        <EcosystemSection />

        {/* Produtos */}
        <ProductsSection />

        {/* Três Pilares */}
        <PillarsSection />

        {/* Método */}
        <MethodSection />

        {/* Identidade — Origem do nome */}
        <IdentitySection />

        {/* Time — Fundadores */}
        <TeamSection />

        {/* CTA Final */}
        <CTAFinalSection />
      </VStack>

      <Footer />
    </Page>
  );
}
