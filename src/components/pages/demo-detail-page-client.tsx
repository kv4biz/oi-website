//src/components/pages/demo-detail-page-client.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Tag, ExternalLink, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";
import { ecosystemDetailPage } from "@/content";
import type { Demo } from "@/lib/demos";

interface DemoDetailPageClientProps {
  demo: Demo;
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export function DemoDetailPageClient({ demo }: DemoDetailPageClientProps) {
  return (
    <main className="max-w-7xl mx-auto py-10 px-6 flex flex-col gap-4 lg:flex-row lg:gap-6">
      <article className="mx-auto flex-1">
        <FadeInUp>
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link href="/ecosystem" />}>
                  Ecosystem
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{demo.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Link
            href="/ecosystem"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">{ecosystemDetailPage.backLink}</span>
          </Link>
        </FadeInUp>

        <StaggerContainer>
          <StaggerItem>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted mb-8">
              <Image
                alt={demo.title}
                src={demo.image_url}
                fill
                className="object-cover"
              />
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {demo.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-primary/10 text-primary"
                >
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <CalendarDays className="h-4 w-4" />
              {formatDate(demo.created_at)}
            </div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4">
              {demo.title}
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-muted-foreground text-lg mb-6">
              {demo.description}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-xl font-semibold mt-8 mb-4">
                {ecosystemDetailPage.sections.overview}
              </h2>
              <p>{demo.full_description}</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                {ecosystemDetailPage.sections.keyFeatures}
              </h2>
              <ul>
                {demo.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                {ecosystemDetailPage.sections.howItWorks.title}
              </h2>
              <p>{ecosystemDetailPage.sections.howItWorks.description}</p>
            </div>
          </StaggerItem>

          <div className="mt-8 hidden lg:block">
            <StaggerItem>
              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="text-lg font-semibold mb-2">
                  {ecosystemDetailPage.ctaBox.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {ecosystemDetailPage.ctaBox.description.replace(
                    "{title}",
                    demo.title,
                  )}
                </p>
                <Link href={`/ecosystem/${demo.slug}/request`}>
                  <Button>{ecosystemDetailPage.ctaBox.buttonText}</Button>
                </Link>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </article>

      <aside className="lg:w-96 mt-4 lg:mt-12">
        <FadeInUp>
          <Card className="flex flex-col items-start rounded-lg border bg-muted/50 p-6">
            <div className="mb-6 w-full">
              <div className="mb-4 flex items-center justify-between border-b pb-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {ecosystemDetailPage.sidebar.title}
                </h3>
                <Badge variant="outline" className="text-xs">
                  {ecosystemDetailPage.sidebar.availableBadge}
                </Badge>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {ecosystemDetailPage.sidebar.labels.company}
                  </div>
                  <div className="text-sm">{demo.company}</div>
                </div>
                <div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {ecosystemDetailPage.sidebar.labels.industry}
                  </div>
                  <div className="text-sm">{demo.industry}</div>
                </div>
                <div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {ecosystemDetailPage.sidebar.labels.location}
                  </div>
                  <div className="text-sm">{demo.location}</div>
                </div>
                <div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {ecosystemDetailPage.sidebar.labels.companySize}
                  </div>
                  <div className="text-sm">{demo.company_size}</div>
                </div>
                <div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {ecosystemDetailPage.sidebar.labels.website}
                  </div>
                  <a
                    href={demo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {demo.website} <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {ecosystemDetailPage.sidebar.labels.topics}
                  </div>
                  <div className="text-sm">{demo.topics}</div>
                </div>
              </div>
            </div>

            <div className="w-full border-t pt-6">
              <Link href={`/ecosystem/${demo.slug}/request`}>
                <Button className="w-full">
                  {ecosystemDetailPage.sidebar.requestButton}
                </Button>
              </Link>
            </div>
          </Card>
        </FadeInUp>
      </aside>
    </main>
  );
}
