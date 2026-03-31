//src/app/(public)/ecosystem/[demoSlug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoDetailPageClient } from "@/components/pages/demo-detail-page-client";
import { getDemoBySlug, getAllDemos } from "@/lib/demos";
import { buildDemoMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  const demos = await getAllDemos(true);
  return demos.map((demo) => ({
    demoSlug: demo.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ demoSlug: string }>;
}): Promise<Metadata> {
  const { demoSlug } = await params;
  const demo = await getDemoBySlug(demoSlug);

  if (!demo) {
    return {
      title: "Demo Not Found",
      description: "The requested ecosystem demo could not be found.",
    };
  }

  return buildDemoMetadata(demo);
}

export default async function DemoDetailPage({
  params,
}: {
  params: Promise<{ demoSlug: string }>;
}) {
  const { demoSlug } = await params;
  const demo = await getDemoBySlug(demoSlug);

  if (!demo) {
    notFound();
  }

  return <DemoDetailPageClient demo={demo} />;
}
