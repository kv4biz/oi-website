"use client";

import { Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface ExportDropdownProps<T extends object> {
  data: T[];
  filename?: string;
}

export function ExportDropdown<T extends object>({
  data,
  filename = "contacts",
}: ExportDropdownProps<T>) {
  const exportToJSON = () => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportToCSV = () => {
    if (!data.length) return;
    const headers = Object.keys(data[0]);
    const rows = data.map((row) =>
      headers
        .map((header) =>
          JSON.stringify((row as Record<string, unknown>)[header] ?? ""),
        )
        .join(","),
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportToMarkdown = () => {
    if (!data.length) return;
    const headers = Object.keys(data[0]);
    const rows = data.map((row) =>
      headers
        .map((header) => (row as Record<string, unknown>)[header] ?? "")
        .join(" | "),
    );
    const table = [
      `| ${headers.join(" | ")} |`,
      `| ${headers.map(() => "---").join(" | ")} |`,
      ...rows.map((row) => `| ${row} |`),
    ].join("\n");
    const blob = new Blob([table], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
        <Download className="mr-2 h-4 w-4" />
        Export
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={exportToJSON}>JSON</DropdownMenuItem>
        <DropdownMenuItem onClick={exportToCSV}>CSV</DropdownMenuItem>
        <DropdownMenuItem onClick={exportToMarkdown}>Markdown</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
