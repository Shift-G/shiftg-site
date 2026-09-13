import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/constants";
import { JsonLd } from "@/components/seo/json-ld";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/seo-utils";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@fontsource/dm-sans/100.css";
import "@fontsource/dm-sans/200.css";
import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/dm-sans/800.css";
import "@fontsource/dm-sans/900.css";

import "@fontsource/dm-serif-display/400.css";
import "@fontsource/dm-serif-display/400-italic.css";

import "@fontsource-variable/geist-mono";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `IA e software em União da Vitória | ${SITE_NAME}`,
  },
  description:
    "Consultoria em IA, software sob medida e treinamento para empresas em União da Vitória, Porto União, São Mateus do Sul, Curitiba e região.",
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: `${SITE_NAME} AI & Data`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SHIFT+G AI & Data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a202c" />
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="facebook-domain-verification"
          content="3hvu3uxgpm31cqal9h5ospyv1t1ur0"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        <JsonLd
          data={[generateOrganizationSchema(), generateWebSiteSchema()]}
        />
      </head>
      <body suppressHydrationWarning>
        <Provider>
          <Toaster />
          {children}
        </Provider>
        <GoogleAnalytics gaId="G-MC52XBJ3FS" />
      </body>
    </html>
  );
}
