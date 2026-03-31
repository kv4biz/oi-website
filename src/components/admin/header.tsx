"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AdminBreadcrumb } from "@/components/admin/breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";

export function AdminHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4 flex-1">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <AdminBreadcrumb />
      </div>
      <div className="px-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
