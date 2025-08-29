import { Provider } from "@/components/ui/provider";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_EMAIL, INSTAGRAM_URL, SITE_CITY, SITE_COUNTRY, SITE_STATE } from "@/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME} AI & Data`,
    default: `${SITE_NAME} | Inteligência Artificial e Dados sob medida`,
  },
  description:
    "Desenvolvemos soluções de software que transformam dados complexos em decisões estratégicas, entregando autonomia e eficiência para sua empresa.",
  keywords: [
    "inteligência artificial",
    "IA",
    "data science",
    "análise de dados",
    "people analytics",
    "automação",
    "business intelligence",
    "machine learning",
    "software sob medida",
    "transformação digital",
  ],
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
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SHIFT+G AI & Data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shiftg",
    creator: "@shiftg",
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
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": `${SITE_NAME} AI & Data`,
              "alternateName": SITE_NAME,
              "url": SITE_URL,
              "logo": `${SITE_URL}/apple-icon.png`,
              "description": "Desenvolvemos soluções de software que transformam dados complexos em decisões estratégicas, entregando autonomia e eficiência para sua empresa.",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": SITE_EMAIL,
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              },
              "sameAs": [
                "https://linkedin.com/company/shiftg",
                INSTAGRAM_URL
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": SITE_CITY,
                "addressRegion": SITE_STATE,
                "addressCountry": SITE_COUNTRY
              }
            })
          }}
        />
      </head>
      <body className={poppins.className}>
        <Provider>
          <Toaster />
          {children}
        </Provider>
        <GoogleAnalytics gaId="G-MC52XBJ3FS" />
      </body>
    </html>
  );
}
