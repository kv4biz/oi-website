"use client";

import { useEffect, useState } from "react";
import { Download, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { SubscriberTable } from "@/components/admin/subscribers/subscriber-table";

interface Subscriber {
  id: string;
  email: string;
  subscribed_at: string;
}

export default function AdminSubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [clearDialogOpen, setClearDialogOpen] = useState(false);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const res = await fetch("/api/admin/subscribers");
      if (!res.ok) throw new Error("Failed to fetch subscribers");
      const data = await res.json();
      setSubscribers(data);
    } catch {
      toast.error("Failed to load subscribers");
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard");
  };

  const deleteSubscriber = async (id: string) => {
    if (!confirm("Are you sure you want to delete this subscriber?")) return;
    try {
      const res = await fetch(`/api/admin/subscribers/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      toast.success("Subscriber deleted");
      fetchSubscribers();
    } catch {
      toast.error("Failed to delete subscriber");
    }
  };

  const clearAllSubscribers = async () => {
    try {
      const res = await fetch("/api/admin/subscribers/clear", {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to clear subscribers");
      toast.success("All subscribers cleared");
      fetchSubscribers();
    } catch {
      toast.error("Failed to clear subscribers");
    } finally {
      setClearDialogOpen(false);
    }
  };

  // Export functions
  const exportToJSON = () => {
    const data = JSON.stringify(subscribers, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `subscribers_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Exported as JSON");
  };

  const exportToCSV = () => {
    const headers = ["Email", "Subscribed Date"];
    const rows = subscribers.map((sub) => [
      sub.email,
      new Date(sub.subscribed_at).toLocaleDateString(),
    ]);
    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `subscribers_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Exported as CSV");
  };

  const exportToMarkdown = () => {
    let md = "# Subscribers\n\n";
    md += "| Email | Subscribed Date |\n";
    md += "|-------|-----------------|\n";
    subscribers.forEach((sub) => {
      md += `| ${sub.email} | ${new Date(sub.subscribed_at).toLocaleDateString()} |\n`;
    });
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `subscribers_${new Date().toISOString().split("T")[0]}.md`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Exported as Markdown");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Subscribers</h1>
          <p className="text-muted-foreground">Manage newsletter subscribers</p>
        </div>
        <div className="flex gap-2">
          {subscribers.length > 0 && (
            <>
              <Button
                variant="destructive"
                onClick={() => setClearDialogOpen(true)}
              >
                <Trash2 className="mr-2 h-4 w-4" /> Clear All
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="outline" />}>
                  <Download className="mr-2 h-4 w-4" /> Export
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={exportToJSON}>
                    JSON
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={exportToCSV}>CSV</DropdownMenuItem>
                  <DropdownMenuItem onClick={exportToMarkdown}>
                    Markdown
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <SubscriberTable
            subscribers={subscribers}
            loading={loading}
            onCopyEmail={copyEmail}
            onDelete={deleteSubscriber}
          />
        </CardContent>
      </Card>

      <AlertDialog open={clearDialogOpen} onOpenChange={setClearDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete all
              subscribers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={clearAllSubscribers}>
              Delete All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
