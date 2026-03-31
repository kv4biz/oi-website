"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import type { AdminDemo } from "@/components/admin/demos/demo-form-fields";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { DemoTable } from "@/components/admin/demos/demo-table";
import { DemoDialog } from "@/components/admin/demos/demo-dailog";
import { DemoPreviewDialog } from "@/components/admin/demos/demo-preview-dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function AdminDemosPage() {
  const router = useRouter();
  const [demos, setDemos] = useState<AdminDemo[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingDemo, setEditingDemo] = useState<AdminDemo | null>(null);
  const [formData, setFormData] = useState<Partial<AdminDemo>>({});

  // Preview state
  const [previewDemo, setPreviewDemo] = useState<AdminDemo | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  // Delete confirmation state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [demoToDelete, setDemoToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchDemos();
  }, []);

  const fetchDemos = async () => {
    try {
      const res = await fetch("/api/demos");
      if (!res.ok) throw new Error("Failed to fetch demos");
      const data = await res.json();
      setDemos(data);
    } catch {
      toast.error("Failed to load demos");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (demo?: AdminDemo) => {
    if (demo) {
      setEditingDemo(demo);
      setFormData(demo);
    } else {
      setEditingDemo(null);
      setFormData({});
    }
    setDialogOpen(true);
  };

  const handleFormChange = (data: Partial<AdminDemo>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = async () => {
    try {
      const url = editingDemo
        ? `/api/admin/demos/${editingDemo.id}`
        : "/api/admin/demos";
      const method = editingDemo ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save demo");

      toast.success(editingDemo ? "Demo updated" : "Demo created");
      setDialogOpen(false);
      fetchDemos();
      router.refresh();
    } catch {
      toast.error("Failed to save demo");
    }
  };

  const handleDeleteClick = (id: string) => {
    setDemoToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!demoToDelete) return;
    try {
      const res = await fetch(`/api/admin/demos/${demoToDelete}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      toast.success("Demo deleted");
      fetchDemos();
      router.refresh();
    } catch {
      toast.error("Failed to delete demo");
    } finally {
      setDeleteDialogOpen(false);
      setDemoToDelete(null);
    }
  };

  const handlePreview = (demo: AdminDemo) => {
    setPreviewDemo(demo);
    setPreviewOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Demos</h1>
          <p className="text-muted-foreground">Manage your demo content</p>
        </div>
        <Button onClick={() => handleOpenDialog()}>
          <Plus className="mr-2 h-4 w-4" /> New Demo
        </Button>
      </div>

      <DemoTable
        demos={demos}
        loading={loading}
        onEdit={handleOpenDialog}
        onDelete={handleDeleteClick}
        onPreview={handlePreview}
      />

      <DemoDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        editingDemo={editingDemo}
        formData={formData}
        onFormChange={handleFormChange}
        onSubmit={handleSubmit}
      />

      <DemoPreviewDialog
        demo={previewDemo}
        open={previewOpen}
        onOpenChange={setPreviewOpen}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              demo.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
