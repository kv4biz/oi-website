//src/components/admin/demos/demo-dailog.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  DemoFormFields,
  type AdminDemo,
  type DemoFormData,
} from "./demo-form-fields";

interface DemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingDemo: AdminDemo | null;
  formData: Partial<DemoFormData>;
  onFormChange: (data: Partial<DemoFormData>) => void;
  onSubmit: () => void;
  // new: optional demoId from the editingDemo (if exists)
}

export function DemoDialog({
  open,
  onOpenChange,
  editingDemo,
  formData,
  onFormChange,
  onSubmit,
}: DemoDialogProps) {
  const demoId = editingDemo?.id; // only present when editing

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
  w-full max-w-[95vw] sm:max-w-lg md:max-w-2xl lg:max-w-4xl max-h-[90vh] flex flex-col p-4 sm:p-6"
      >
        <DialogHeader>
          <DialogTitle>{editingDemo ? "Edit Demo" : "Create Demo"}</DialogTitle>
          <DialogDescription>
            Fill in the details for your demo.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto pr-2">
          <DemoFormFields
            formData={formData}
            onChange={onFormChange}
            demoId={demoId}
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={onSubmit}>
            {editingDemo ? "Update" : "Create"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
