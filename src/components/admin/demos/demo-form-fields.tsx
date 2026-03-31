//src/components/admin/demos/demo-form-fields.tsx
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImageUploader } from "./image-uploader";

export interface DemoFormData {
  title: string;
  slug: string;
  description: string;
  full_description?: string;
  image_url?: string;
  demo_url: string;
  tags: string[];
  features: string[];
  company?: string;
  industry?: string;
  location?: string;
  company_size?: string;
  website?: string;
  topics?: string;
}

export interface AdminDemo extends DemoFormData {
  id: string;
  created_at: string;
}

interface DemoFormFieldsProps {
  formData: Partial<DemoFormData>;
  onChange: (data: Partial<DemoFormData>) => void;
  demoId?: string; // optional, used for organising uploads
}

export function DemoFormFields({
  formData,
  onChange,
  demoId,
}: DemoFormFieldsProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(",").map((t) => t.trim());
    onChange({ tags });
  };

  const handleFeaturesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const features = e.target.value
      .split("\n")
      .map((f) => f.trim())
      .filter(Boolean);
    onChange({ features });
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange({ title: value });
    // Auto-generate slug if slug is empty or matches previous auto-generated value
    if (
      !formData.slug ||
      formData.slug === generateSlug(formData.title || "")
    ) {
      onChange({ title: value, slug: generateSlug(value) });
    }
  };

  return (
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title *</Label>
        <Input
          id="title"
          name="title"
          value={formData.title || ""}
          onChange={handleTitleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="slug">Slug *</Label>
        <Input
          id="slug"
          name="slug"
          value={formData.slug || ""}
          onChange={handleChange}
          placeholder="auto-generated-from-title"
        />
        <p className="text-xs text-muted-foreground">
          URL-friendly identifier. Auto-generated from title, but can be
          customized.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Short Description *</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          rows={5}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="full_description">Full Description</Label>
        <Textarea
          id="full_description"
          name="full_description"
          value={formData.full_description || ""}
          onChange={handleChange}
          rows={5}
        />
      </div>
      <ImageUploader
        value={formData.image_url}
        onChange={(url) => onChange({ image_url: url })}
        demoId={demoId}
      />
      <div className="space-y-2">
        <Label htmlFor="demo_url">Demo URL *</Label>
        <Input
          id="demo_url"
          name="demo_url"
          value={formData.demo_url || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tags">Tags (comma separated)</Label>
        <Input
          id="tags"
          name="tags"
          value={formData.tags?.join(", ") || ""}
          onChange={handleTagsChange}
          placeholder="AI, Automation, ..."
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="features">Features (one per line)</Label>
        <Textarea
          id="features"
          name="features"
          value={formData.features?.join("\n") || ""}
          onChange={handleFeaturesChange}
          rows={5}
          placeholder="Real-time tracking&#10;Predictive analytics&#10;..."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            value={formData.company || ""}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
          <Input
            id="industry"
            name="industry"
            value={formData.industry || ""}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={formData.location || ""}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company_size">Company Size</Label>
          <Input
            id="company_size"
            name="company_size"
            value={formData.company_size || ""}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            name="website"
            value={formData.website || ""}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="topics">Topics</Label>
          <Input
            id="topics"
            name="topics"
            value={formData.topics || ""}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
