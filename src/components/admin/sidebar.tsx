"use client";

import * as React from "react";
import {
  LayoutDashboard,
  Package,
  Users,
  Mail,
  MessageSquare,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavUser } from "@/components/admin/nav-user";
import { Icon } from "../icon";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/demos", label: "Demos", icon: Package },
  { href: "/admin/requests", label: "Requests", icon: Users },
  { href: "/admin/contacts", label: "Contacts", icon: MessageSquare },
  { href: "/admin/subscribers", label: "Subscribers", icon: Mail },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* ✅ Clean text header (no icon) */}
      <SidebarHeader className="px-3 py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="w-full">
              {/* Logo */}
              <div className="flex aspect-square size-8 items-center justify-center rounded-sm ">
                <Icon />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">Ocean Intuition</span>
                <span className="text-xs text-muted-foreground">
                  Admin Panel
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu className="p-2 gap-1">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                tooltip={item.label}
                render={
                  <a href={item.href} className="flex items-center gap-2" />
                }
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* ✅ Keep user section clean */}
      <SidebarFooter className="p-2">
        <NavUser />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
