//src/app/(public)/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/hero";
import WhatWeDo from "@/components/sections/what-we-do";
import HowWeWork from "@/components/sections/how-we-work";
import OurProjects from "@/components/sections/our-projects";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import { pageMetadata } from "@/content";
import { buildStaticMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildStaticMetadata(pageMetadata.home);

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HowWeWork />
      <OurProjects />
      <Testimonials />
      <CTA />
    </>
  );
}
