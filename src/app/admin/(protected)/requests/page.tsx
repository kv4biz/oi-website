"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { RequestTable } from "@/components/admin/requests/request-table";
import { ExportDropdown } from "@/components/admin/requests/export-dropdown";
import { ClearButton } from "@/components/admin/requests/clear-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Request {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string | null;
  discover_source: string | null;
  created_at: string;
  demos: { title: string } | null;
}

export default function AdminRequestsPage() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const res = await fetch("/api/admin/requests");
      if (!res.ok) throw new Error("Failed to fetch requests");
      const data = await res.json();
      setRequests(data);
    } catch {
      toast.error("Failed to load requests");
    } finally {
      setLoading(false);
    }
  };

  const handleClearAll = async () => {
    const res = await fetch("/api/admin/requests", { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to clear requests");
    await fetchRequests(); // refresh
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Demo Requests</h1>
          <p className="text-muted-foreground">Manage incoming demo requests</p>
        </div>
        <div className="flex gap-2">
          {requests.length > 0 && (
            <ExportDropdown data={requests} filename="demo-requests" />
          )}
          <ClearButton onClear={handleClearAll} hasData={requests.length > 0} />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <RequestTable
            requests={requests}
            loading={loading}
            onView={setSelectedRequest}
          />
        </CardContent>
      </Card>

      <Dialog
        open={!!selectedRequest}
        onOpenChange={() => setSelectedRequest(null)}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Request Details</DialogTitle>
            <DialogDescription>
              Submitted on{" "}
              {selectedRequest &&
                new Date(selectedRequest.created_at).toLocaleString()}
            </DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium">Name</div>
                <div>{selectedRequest.name}</div>
              </div>
              <div>
                <div className="text-sm font-medium">Email</div>
                <div>{selectedRequest.email}</div>
              </div>
              {selectedRequest.company && (
                <div>
                  <div className="text-sm font-medium">Company</div>
                  <div>{selectedRequest.company}</div>
                </div>
              )}
              {selectedRequest.discover_source && (
                <div>
                  <div className="text-sm font-medium">Discovered from</div>
                  <Badge variant="outline">
                    {selectedRequest.discover_source}
                  </Badge>
                </div>
              )}
              {selectedRequest.message && (
                <div>
                  <div className="text-sm font-medium">Message</div>
                  <div className="text-muted-foreground whitespace-pre-wrap">
                    {selectedRequest.message}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
