"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import Image from "next/image";

interface ImageUploaderProps {
  value?: string; // current image URL
  onChange: (url: string | undefined) => void;
  demoId?: string; // optional, for organising uploads
}

/**
 * Extract storage path from a Supabase public URL.
 * Returns null if the URL is not from the demo-images bucket.
 */
function extractStoragePath(url: string): string | null {
  try {
    const urlObj = new URL(url);
    // Supabase storage URLs contain /storage/v1/object/public/bucket-name/path
    const match = urlObj.pathname.match(
      /\/storage\/v1\/object\/public\/demo-images\/(.+)/,
    );
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

export function ImageUploader({ value, onChange, demoId }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const supabase = createClient();

  const deleteImage = async (imageUrl: string) => {
    const path = extractStoragePath(imageUrl);
    if (!path) return; // Not a Supabase storage URL, skip deletion

    try {
      const { error } = await supabase.storage
        .from("demo-images")
        .remove([path]);
      if (error) {
        console.error("Failed to delete old image:", error);
      }
    } catch (err) {
      console.error("Error deleting image:", err);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate image type
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file.");
      return;
    }

    // Limit size to 5 MB
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be less than 5 MB.");
      return;
    }

    setUploading(true);
    try {
      // Delete old image if replacing
      if (value) {
        await deleteImage(value);
      }

      // Build a unique file path
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const folder = demoId ? `demos/${demoId}` : "demos/temp";
      const filePath = `${folder}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("demo-images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from("demo-images").getPublicUrl(filePath);

      onChange(publicUrl);
      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload image");
    } finally {
      setUploading(false);
      e.target.value = ""; // clear input so same file can be re‑selected
    }
  };

  const handleRemoveImage = async () => {
    if (value) {
      await deleteImage(value);
    }
    onChange(undefined);
  };

  return (
    <div className="space-y-2">
      <Label>Demo Image</Label>
      <div className="flex flex-col sm:flex-row items-start gap-4">
        {value ? (
          <div className="relative w-32 h-32 rounded-md overflow-hidden border shrink-0">
            <Image
              src={value}
              alt="Demo preview"
              fill
              className="object-cover"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-1 right-1 bg-black/50 rounded-full p-1 hover:bg-black/70 transition"
            >
              <X className="h-4 w-4 text-white" />
            </button>
          </div>
        ) : (
          <div className="w-32 h-32 rounded-md border bg-muted flex items-center justify-center text-muted-foreground shrink-0">
            No image
          </div>
        )}
        <div className="flex-1">
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
          />
          {uploading && (
            <p className="text-sm text-muted-foreground mt-1">Uploading...</p>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            Upload an image (max 5 MB). Recommended size: 1200×800.
          </p>
        </div>
      </div>
    </div>
  );
}
