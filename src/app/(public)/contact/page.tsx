//src/app/(public)/contact/page.tsx
import type { Metadata } from "next";
import { ContactPageClient } from "@/components/pages/contact-page-client";
import { pageMetadata } from "@/content";
import { buildStaticMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildStaticMetadata(pageMetadata.contact);

export default function ContactPage() {
  return <ContactPageClient />;
}
