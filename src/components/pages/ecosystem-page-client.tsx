//src/components/pages/ecosystem-page-client.tsx
"use client";

import { useMemo, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { FadeInUp } from "@/components/ui/motion";
import { DemoGrid } from "@/components/admin/demos/demo-grid";
import { DemoSearchFilter } from "@/components/admin/demos/demo-search-filter";
import CTA from "@/components/sections/cta";
import { ecosystemPage } from "@/content";

interface DemoListItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
  tags: string[];
  created_at: string;
  slug: string;
}

const ITEMS_PER_PAGE = 6;

interface EcosystemPageClientProps {
  initialDemos: DemoListItem[];
}

export function EcosystemPageClient({
  initialDemos,
}: EcosystemPageClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const allTags = useMemo(
    () => Array.from(new Set(initialDemos.flatMap((demo) => demo.tags))),
    [initialDemos],
  );

  const filteredDemos = useMemo(() => {
    return initialDemos.filter((demo) => {
      const matchesSearch =
        searchQuery === "" ||
        demo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        demo.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag =
        selectedTag === null || demo.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [initialDemos, searchQuery, selectedTag]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleTagChange = (tag: string | null) => {
    setSelectedTag(tag);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeInUp className="text-center mb-12">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {ecosystemPage.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {ecosystemPage.description}
          </p>
        </FadeInUp>

        <DemoSearchFilter
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          selectedTag={selectedTag}
          onTagChange={handleTagChange}
          allTags={allTags}
        />

        <Separator className="mb-8" />

        <DemoGrid
          demos={filteredDemos}
          visibleCount={visibleCount}
          hasMore={visibleCount < filteredDemos.length}
          onLoadMore={handleLoadMore}
        />
      </div>
      <CTA />
    </main>
  );
}
