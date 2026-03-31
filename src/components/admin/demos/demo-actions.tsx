"use client";

import { Edit, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AdminDemo } from "./demo-form-fields";

interface DemoActionsProps {
  demo: AdminDemo;
  onEdit: (demo: AdminDemo) => void;
  onDelete: (id: string) => void;
  onPreview: (demo: AdminDemo) => void;
}

export function DemoActions({
  demo,
  onEdit,
  onDelete,
  onPreview,
}: DemoActionsProps) {
  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="sm" onClick={() => onPreview(demo)}>
        <Eye className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm" onClick={() => onEdit(demo)}>
        <Edit className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm" onClick={() => onDelete(demo.id)}>
        <Trash2 className="h-4 w-4 text-red-500" />
      </Button>
    </div>
  );
}
