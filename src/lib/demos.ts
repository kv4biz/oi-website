//src/lib/demos.ts
import { cache } from "react";
import { createClient, createBuildTimeClient } from "@/lib/supabase/server";

export interface Demo {
  id: string;
  title: string;
  slug: string;
  description: string;
  full_description: string;
  image_url: string;
  tags: string[];
  features: string[];
  company: string;
  industry: string;
  location: string;
  company_size: string;
  website: string;
  topics: string;
  created_at: string;
}

export const getDemoBySlug = cache(async (slug: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("demos")
    .select("*")
    .eq("slug", slug)
    .single<Demo>();

  if (error) {
    return null;
  }

  return data;
});

export const getAllDemos = cache(async (buildTime = false) => {
  const supabase = buildTime ? createBuildTimeClient() : await createClient();
  const { data, error } = await supabase
    .from("demos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return [];
  }

  return data as Demo[];
});
