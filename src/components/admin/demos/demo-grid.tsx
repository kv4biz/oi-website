//src/components/admin/demos/demo-grid.tsx
"use client";

import { CalendarDays, FolderOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  StaggerContainer,
  StaggerItem,
  FadeInUp,
} from "@/components/ui/motion";
import { ecosystemPage } from "@/content";

interface Demo {
  id: string;
  title: string;
  description: string;
  image_url: string;
  tags: string[];
  created_at: string;
  slug: string;
}

interface DemoGridProps {
  demos: Demo[];
  visibleCount: number;
  hasMore: boolean;
  onLoadMore: () => void;
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const MAX_VISIBLE_TAGS = 3;

export function DemoGrid({
  demos,
  visibleCount,
  hasMore,
  onLoadMore,
}: DemoGridProps) {
  if (demos.length === 0) {
    return (
      <FadeInUp className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <FolderOpen className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold">
          {ecosystemPage.emptyState.title}
        </h3>
        <p className="mt-2 text-muted-foreground max-w-md">
          {ecosystemPage.emptyState.description}
        </p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => window.location.reload()}
        >
          {ecosystemPage.emptyState.clearButton}
        </Button>
      </FadeInUp>
    );
  }

  const visibleDemos = demos.slice(0, visibleCount);

  return (
    <>
      <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleDemos.map((demo) => {
          const visibleTags = demo.tags.slice(0, MAX_VISIBLE_TAGS);
          const remainingTagsCount = demo.tags.length - MAX_VISIBLE_TAGS;

          return (
            <StaggerItem key={demo.id}>
              <div className="group flex flex-col rounded-xl bg-muted overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/5">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    alt={demo.title}
                    src={demo.image_url}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-semibold text-xl">{demo.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm line-clamp-2 flex-1">
                    {demo.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {visibleTags.map((tag) => (
                      <Badge className="bg-primary/10 text-primary" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                    {remainingTagsCount > 0 && (
                      <Badge variant="secondary">+{remainingTagsCount}</Badge>
                    )}
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-muted-foreground text-sm">
                    <CalendarDays className="h-4 w-4" />
                    {formatDate(demo.created_at)}
                  </div>
                  <Link href={`/ecosystem/${demo.slug}`} className="mt-5">
                    <Button className="w-full">
                      {ecosystemPage.viewMoreButton}
                    </Button>
                  </Link>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg" onClick={onLoadMore}>
            {ecosystemPage.loadMoreButton}
          </Button>
        </div>
      )}
    </>
  );
}
