import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/constants";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  options: { type?: "website" | "article"; image?: string } = {},
): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const socialTitle = `${title} | ${SITE_NAME}`;
  const images = [
    {
      url: options.image ?? "/opengraph-image",
      width: 1200,
      height: 630,
      alt: socialTitle,
    },
  ];
  return {
    // Root page shares a segment with the layout, so its title template does not apply.
    title: path === "/" ? { absolute: socialTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      type: options.type ?? "website",
      locale: "pt_BR",
      siteName: SITE_NAME,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images,
    },
  };
}
