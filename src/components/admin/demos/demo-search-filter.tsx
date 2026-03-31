//src/components/admin/demos/demo-search-filter.tsx
"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ecosystemPage } from "@/content";

interface DemoSearchFilterProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedTag: string | null;
  onTagChange: (tag: string | null) => void;
  allTags: string[];
}

export function DemoSearchFilter({
  searchQuery,
  onSearchChange,
  selectedTag,
  onTagChange,
  allTags,
}: DemoSearchFilterProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-xs">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder={ecosystemPage.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>
      {allTags.length > 0 && (
        <Select
          value={selectedTag ?? "all"}
          onValueChange={(value) => {
            if (value === "all") onTagChange(null);
            else onTagChange(value);
          }}
        >
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder={ecosystemPage.filterPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{ecosystemPage.allTagsLabel}</SelectItem>
            {allTags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
}
