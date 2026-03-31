//src/app/(public)/ecosystem/page.tsx
import type { Metadata } from "next";
import { EcosystemPageClient } from "@/components/pages/ecosystem-page-client";
import { pageMetadata } from "@/content";
import { buildStaticMetadata } from "@/lib/metadata";
import { getAllDemos } from "@/lib/demos";

export const metadata: Metadata = buildStaticMetadata(pageMetadata.ecosystem);

export default async function DemosPage() {
  const demos = await getAllDemos();

  return <EcosystemPageClient initialDemos={demos} />;
}
