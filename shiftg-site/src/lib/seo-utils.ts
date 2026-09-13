import {
  SITE_NAME,
  SITE_URL,
  SITE_EMAIL,
  SITE_CITY,
  SITE_STATE,
  SITE_COUNTRY,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  SITE_PHONE,
  SITE_ADDRESS,
  SITE_ZIP,
} from "@/constants";

import { SERVICE_AREAS } from "@/constants/service-areas";

/**
 * SEO Utilities for generating structured data (JSON-LD) schemas
 */

export interface Author {
  "@type": "Organization" | "Person";
  name: string;
  url?: string;
}

export interface Article {
  "@context": "https://schema.org";
  "@type": "Article" | "BlogPosting";
  headline: string;
  description: string;
  image: string;
  datePublished?: string;
  dateModified?: string;
  author: Author;
  publisher: {
    "@type": "Organization";
    name: string;
    logo: {
      "@type": "ImageObject";
      url: string;
    };
  };
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
}

export interface Service {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  provider: {
    "@id": string;
  };
  areaServed: ReturnType<typeof generateAreaServed>;
  serviceType: string;
  url: string;
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface BreadcrumbList {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

/**
 * Generate Organization schema
 */
export function generateAreaServed() {
  return [
    ...SERVICE_AREAS.map(({ name, state }) => ({
      "@type": "City",
      name,
      containedInPlace: {
        "@type": "State",
        name: state === "PR" ? "Paraná" : "Santa Catarina",
      },
    })),
    { "@type": "Country", name: "Brasil" },
  ];
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: `${SITE_NAME} AI & Data`,
    url: SITE_URL,
    logo: `${SITE_URL}/apple-icon.png`,
    image: `${SITE_URL}/opengraph-image`,
    description:
      "Consultoria em inteligência artificial, transformação digital, software sob medida e treinamento para empresas. Sede em União da Vitória, com atendimento em Porto União, São Mateus do Sul, Curitiba e região.",
    foundingDate: "2020",
    telephone: `+${SITE_PHONE.replace(/\D/g, "")}`,
    email: SITE_EMAIL,
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_EMAIL,
      telephone: `+${SITE_PHONE.replace(/\D/g, "")}`,
      contactType: "sales",
      availableLanguage: ["pt-BR"],
    },
    sameAs: [LINKEDIN_URL, INSTAGRAM_URL],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_ADDRESS,
      addressLocality: SITE_CITY,
      addressRegion: SITE_STATE,
      postalCode: SITE_ZIP,
      addressCountry: SITE_COUNTRY === "Brasil" ? "BR" : SITE_COUNTRY,
    },
    areaServed: generateAreaServed(),
  };
}

/** WebSite identity. No SearchAction: Insights has no working site search. */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: `${SITE_NAME} AI & Data`,
    url: SITE_URL,
    inLanguage: "pt-BR",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/**
 * Generate Article schema for blog posts
 */
export function generateArticleSchema(params: {
  title: string;
  description: string;
  image: string;
  datePublished?: string;
  dateModified?: string;
  url: string;
  authorName?: string;
}): Article {
  const {
    title,
    description,
    image,
    datePublished,
    dateModified,
    url,
    authorName = SITE_NAME,
  } = params;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: new URL(image, SITE_URL).toString(),
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/apple-icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

/**
 * Generate Service schema
 */
export function generateServiceSchema(params: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}): Service {
  const { name, description, serviceType, url } = params;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: generateAreaServed(),
    serviceType: serviceType,
    url: url,
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  items: BreadcrumbItem[],
): BreadcrumbList {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.item}`,
    })),
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate ItemList schema for collections
 */
export function generateItemListSchema(params: {
  name: string;
  description: string;
  items: Array<{ name: string; url: string; description?: string }>;
}) {
  const { name, description, items } = params;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: name,
    description: description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${SITE_URL}${item.url}`,
      description: item.description,
    })),
  };
}
