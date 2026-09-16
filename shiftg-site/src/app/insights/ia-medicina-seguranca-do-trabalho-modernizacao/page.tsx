import { InsightArticle } from "@/components/insights/insight-article";
import { recentInsights } from "@/constants/recent-insights";
import { pageMetadata } from "@/lib/page-metadata";

const post = recentInsights.find(
  (item) => item.slug === "ia-medicina-seguranca-do-trabalho-modernizacao",
)!;
export const metadata = pageMetadata(
  post.seoTitle,
  post.description,
  `/insights/${post.slug}`,
  {
    type: "article",
    image: post.image,
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
  },
);

export default function ArticlePage() {
  return <InsightArticle post={post} />;
}
