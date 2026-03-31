"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import type { AdminDemo } from "./demo-form-fields";

interface DemoPreviewDialogProps {
  demo: AdminDemo | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoPreviewDialog({
  demo,
  open,
  onOpenChange,
}: DemoPreviewDialogProps) {
  if (!demo) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-[95vw] sm:max-w-lg md:max-w-2xl lg:max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{demo.title}</DialogTitle>
          <DialogDescription>Preview of the demo</DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4 py-4">
            {/* Image */}
            {demo.image_url && (
              <div className="relative w-full h-64 rounded-md overflow-hidden border">
                <Image
                  src={demo.image_url}
                  alt={demo.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {/* Short Description */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                Short Description
              </h3>
              <p className="text-sm">{demo.description}</p>
            </div>
            {/* Full Description */}
            {demo.full_description && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Full Description
                </h3>
                <p className="text-sm whitespace-pre-wrap">
                  {demo.full_description}
                </p>
              </div>
            )}
            {/* Tags */}
            {demo.tags && demo.tags.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-1">
                  {demo.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {/* Features */}
            {demo.features && demo.features.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Features
                </h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {demo.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            {/* Meta fields */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {demo.company && (
                <div>
                  <span className="text-muted-foreground">Company:</span>{" "}
                  {demo.company}
                </div>
              )}
              {demo.industry && (
                <div>
                  <span className="text-muted-foreground">Industry:</span>{" "}
                  {demo.industry}
                </div>
              )}
              {demo.location && (
                <div>
                  <span className="text-muted-foreground">Location:</span>{" "}
                  {demo.location}
                </div>
              )}
              {demo.company_size && (
                <div>
                  <span className="text-muted-foreground">Company Size:</span>{" "}
                  {demo.company_size}
                </div>
              )}
              {demo.website && (
                <div>
                  <span className="text-muted-foreground">Website:</span>{" "}
                  <a
                    href={demo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {demo.website}
                  </a>
                </div>
              )}
              {demo.topics && (
                <div>
                  <span className="text-muted-foreground">Topics:</span>{" "}
                  {demo.topics}
                </div>
              )}
            </div>
            {/* Demo URL */}
            {demo.demo_url && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Demo URL
                </h3>
                <a
                  href={demo.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline break-all"
                >
                  {demo.demo_url}
                </a>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
