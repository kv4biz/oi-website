//src/components/sections/our-projects.tsx
"use client";

import { useEffect, useState } from "react";
import { CalendarDays, FolderOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";
import { toast } from "sonner";
import { ourProjects } from "@/content";

interface Demo {
  id: string;
  title: string;
  description: string;
  image_url: string;
  tags: string[];
  created_at: string;
  slug: string;
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const OurProjects = () => {
  const [demos, setDemos] = useState<Demo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDemos();
  }, []);

  const fetchDemos = async () => {
    try {
      const res = await fetch("/api/demos");
      if (!res.ok) throw new Error("Failed to fetch demos");
      const data = await res.json();
      setDemos(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  // Get latest 4 demos sorted by created_at descending
  const latestProjects = [...demos]
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    )
    .slice(0, 4);

  const hasProjects = latestProjects.length > 0;

  if (loading) {
    return (
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <Skeleton className="h-10 w-48" />
              <Skeleton className="mt-4 h-6 w-96" />
            </div>
            <Skeleton className="h-10 w-32 hidden sm:block" />
          </div>
          <Separator className="mt-7 mb-10" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4">
                <Skeleton className="aspect-video w-full sm:w-40 h-32 rounded-lg" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <FadeInUp className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              {ourProjects.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              {ourProjects.description}
            </p>
          </div>
          {hasProjects && (
            <Link href="/ecosystem">
              <Button
                size="lg"
                variant="secondary"
                className="hidden sm:inline-flex"
              >
                {ourProjects.viewAllButton}
              </Button>
            </Link>
          )}
        </FadeInUp>

        <Separator className="mt-7 mb-10" />

        {hasProjects ? (
          <>
            <StaggerContainer className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {latestProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <Link href={`/ecosystem/${project.slug}`}>
                    <div className="flex flex-col gap-x-6 gap-y-4 rounded-lg bg-muted p-3 pb-4 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center sm:pb-3">
                      <div className="relative aspect-video w-full rounded-lg overflow-hidden sm:aspect-square sm:max-w-40">
                        <Image
                          alt={project.title}
                          src={project.image_url}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="px-1 sm:px-0">
                        <h3 className="font-semibold text-xl">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground text-sm line-clamp-2">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          {project.tags.map((tag) => (
                            <Badge
                              className="bg-primary/10 text-primary"
                              key={tag}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center gap-1.5 text-muted-foreground text-sm">
                          <CalendarDays className="h-4 w-4" />
                          {formatDate(project.created_at)}
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Link href="/demos" className="sm:hidden">
              <Button
                className="mx-auto mt-10 flex w-full max-w-xs"
                size="lg"
                variant="secondary"
              >
                {ourProjects.viewAllButton}
              </Button>
            </Link>
          </>
        ) : (
          <FadeInUp className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <FolderOpen className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold">
              {ourProjects.emptyState.title}
            </h3>
            <p className="mt-2 text-muted-foreground max-w-md">
              {ourProjects.emptyState.description}
            </p>
          </FadeInUp>
        )}
      </div>
    </section>
  );
};

export default OurProjects;
