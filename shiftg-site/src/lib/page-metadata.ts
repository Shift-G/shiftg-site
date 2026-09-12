import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/constants";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}${path}`,
      type: "website",
      locale: "pt_BR",
      siteName: SITE_NAME,
    },
    twitter: { title: `${title} | ${SITE_NAME}`, description },
  };
}
