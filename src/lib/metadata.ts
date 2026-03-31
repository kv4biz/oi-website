//src/lib/metadata.ts
import type { Metadata } from "next";
import { pageMetadata, siteConfig } from "@/content";
import type { Demo } from "@/lib/demos";

interface StaticPageMetadataInput {
  title: string;
  description: string;
  keywords: string[];
  pathname: string;
}

export function buildStaticMetadata({
  title,
  description,
  keywords,
  pathname,
}: StaticPageMetadataInput): Metadata {
  const url =
    pathname === "/" ? siteConfig.url : `${siteConfig.url}${pathname}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export function buildDemoMetadata(demo: Demo): Metadata {
  const combinedDescription = [demo.description, demo.full_description]
    .filter(Boolean)
    .join(" ")
    .slice(0, 160);
  const description =
    combinedDescription || pageMetadata.ecosystemDetail.descriptionFallback;
  const keywords = Array.from(
    new Set([
      ...pageMetadata.ecosystemDetail.keywords,
      ...demo.tags,
      ...demo.features,
      demo.company,
      demo.industry,
      demo.topics,
    ]),
  ).filter(Boolean);
  const pathname = `${pageMetadata.ecosystemDetail.pathnamePrefix}/${demo.slug}`;
  const title = `${demo.title} | ${pageMetadata.ecosystemDetail.titleSuffix}`;
  const image = demo.image_url || siteConfig.ogImage;
  const url = `${siteConfig.url}${pathname}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${pathname}`,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: demo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
