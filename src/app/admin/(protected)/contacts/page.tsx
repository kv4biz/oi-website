"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { ContactsTable } from "@/components/admin/contacts/contacts-table";
import { ExportDropdown } from "@/components/admin/contacts/export-dropdown";
import { ClearButton } from "@/components/admin/contacts/clear-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

interface Contact {
  id: string;
  name: string;
  company: string | null;
  phone: string | null;
  email: string;
  message: string | null;
  created_at: string;
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/admin/contacts");
      if (!res.ok) throw new Error("Failed to fetch contacts");
      const data = await res.json();
      setContacts(data);
    } catch {
      toast.error("Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  const handleClearAll = async () => {
    const res = await fetch("/api/admin/contacts/clear", { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to clear contacts");
    await fetchContacts();
  };

  const handleDelete = async (id: string) => {
    setDeleteId(id);
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await fetch(`/api/admin/contacts/${deleteId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete contact");
      toast.success("Contact deleted");
      await fetchContacts();
    } catch {
      toast.error("Failed to delete contact");
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Contact Inquiries
          </h1>
          <p className="text-muted-foreground">
            Manage incoming contact form submissions
          </p>
        </div>
        <div className="flex gap-2">
          {contacts.length > 0 && (
            <ExportDropdown data={contacts} filename="contacts" />
          )}
          <ClearButton onClear={handleClearAll} hasData={contacts.length > 0} />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <ContactsTable
            contacts={contacts}
            loading={loading}
            onView={setSelectedContact}
            onDelete={handleDelete}
          />
        </CardContent>
      </Card>

      <Dialog
        open={!!selectedContact}
        onOpenChange={() => setSelectedContact(null)}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Contact Details</DialogTitle>
            <DialogDescription>
              Submitted on{" "}
              {selectedContact &&
                new Date(selectedContact.created_at).toLocaleString()}
            </DialogDescription>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium">Name</div>
                <div>{selectedContact.name}</div>
              </div>
              <div>
                <div className="text-sm font-medium">Email</div>
                <div>{selectedContact.email}</div>
              </div>
              {selectedContact.company && (
                <div>
                  <div className="text-sm font-medium">Company</div>
                  <div>{selectedContact.company}</div>
                </div>
              )}
              {selectedContact.phone && (
                <div>
                  <div className="text-sm font-medium">Phone</div>
                  <div>{selectedContact.phone}</div>
                </div>
              )}
              {selectedContact.message && (
                <div>
                  <div className="text-sm font-medium">Message</div>
                  <div className="text-muted-foreground whitespace-pre-wrap">
                    {selectedContact.message}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this contact?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              contact inquiry.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>
              Yes, delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
