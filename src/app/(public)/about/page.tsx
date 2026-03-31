//src/app/(public)/about/page.tsx
import type { Metadata } from "next";
import { About3 } from "@/components/about3";
import CTA from "@/components/sections/cta";
import { aboutPage, pageMetadata } from "@/content";
import { buildStaticMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildStaticMetadata(pageMetadata.about);

export default function AboutPage() {
  return (
    <main className="pt-10 lg:pt-32">
      <About3
        title={aboutPage.title}
        description={aboutPage.description}
        mainImage={aboutPage.mainImage}
        secondaryImage={aboutPage.secondaryImage}
        breakout={aboutPage.breakout}
        companies={null}
        achievementsTitle={aboutPage.achievementsTitle}
        achievementsDescription={aboutPage.achievementsDescription}
        achievements={aboutPage.achievements}
        contentSections={aboutPage.contentSections}
      />
      <CTA />
    </main>
  );
}
