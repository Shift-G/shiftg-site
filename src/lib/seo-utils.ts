import { SITE_NAME, SITE_URL, SITE_EMAIL, SITE_CITY, SITE_STATE, SITE_COUNTRY, INSTAGRAM_URL } from "@/constants";

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
  datePublished: string;
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
    "@type": "Organization";
    name: string;
    url: string;
  };
  areaServed: string;
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
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `${SITE_NAME} AI & Data`,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/apple-icon.png`,
    description:
      "Desenvolvemos soluções de software que transformam dados complexos em decisões estratégicas, entregando autonomia e eficiência para sua empresa.",
    foundingDate: "2020",
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_EMAIL,
      contactType: "customer service",
      availableLanguage: ["Portuguese", "English"],
    },
    sameAs: [
      "https://linkedin.com/company/shiftg",
      INSTAGRAM_URL,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CITY,
      addressRegion: SITE_STATE,
      addressCountry: SITE_COUNTRY,
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
  };
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE_NAME} AI & Data`,
    url: SITE_URL,
    description:
      "Consultoria estratégica de tecnologia e inteligência artificial para empresas que buscam transformação digital.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/insights?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate Article schema for blog posts
 */
export function generateArticleSchema(params: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
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
    image: `${SITE_URL}${image}`,
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
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Brasil",
    serviceType: serviceType,
    url: url,
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  items: BreadcrumbItem[]
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
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
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
