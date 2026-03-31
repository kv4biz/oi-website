"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { DemoActions } from "./demo-actions";
import type { AdminDemo } from "./demo-form-fields";

interface DemoTableProps {
  demos: AdminDemo[];
  loading: boolean;
  onEdit: (demo: AdminDemo) => void;
  onDelete: (id: string) => void;
  onPreview: (demo: AdminDemo) => void;
}

export function DemoTable({
  demos,
  loading,
  onEdit,
  onDelete,
  onPreview,
}: DemoTableProps) {
  if (loading) {
    return (
      <div className="space-y-2">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="w-32">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {demos.map((demo) => (
            <TableRow key={demo.id}>
              <TableCell className="font-medium">{demo.title}</TableCell>
              <TableCell>
                <div className="flex gap-1 flex-wrap">
                  {demo.tags?.slice(0, 1).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                  {demo.tags?.length > 1 && (
                    <Badge variant="outline">+{demo.tags.length - 1}</Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>
                {new Date(demo.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <DemoActions
                  demo={demo}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onPreview={onPreview}
                />
              </TableCell>
            </TableRow>
          ))}
          {demos.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center text-muted-foreground"
              >
                No demos yet. Click New Demo to create one.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
