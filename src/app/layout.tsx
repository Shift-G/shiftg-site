import { Provider } from "@/components/ui/provider";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://shiftg.com.br"),
  title: {
    template: "%s | SHIFT+G AI & Data",
    default: "SHIFT+G | Inteligência Artificial e Dados sob medida",
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
  authors: [{ name: "SHIFT+G" }],
  creator: "SHIFT+G",
  publisher: "SHIFT+G",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://shiftg.com.br",
    siteName: "SHIFT+G AI & Data",
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
              "name": "SHIFT+G AI & Data",
              "alternateName": "SHIFT+G",
              "url": "https://shiftg.com.br",
              "logo": "https://shiftg.com.br/apple-icon.png",
              "description": "Desenvolvemos soluções de software que transformam dados complexos em decisões estratégicas, entregando autonomia e eficiência para sua empresa.",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contato@shiftg.com.br",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              },
              "sameAs": [
                "https://linkedin.com/company/shiftg",
                "https://instagram.com/shiftg.ai"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Curitiba",
                "addressRegion": "PR",
                "addressCountry": "BR"
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
        <GoogleAnalytics gaId="G-20NRBTFTPV" />
      </body>
    </html>
  );
}
