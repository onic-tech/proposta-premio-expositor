"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Settings,
  LogOut,
  PlusCircle,
  Users
} from "lucide-react";
import { useAuth } from "@/lib/auth-context";

export function Sidebar() {
  const pathname = usePathname();
  const { logout, user } = useAuth();

  const sidebarItems = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Propostas",
      href: "/admin/proposals",
      icon: FileText,
    },
    {
      title: "Nova Proposta",
      href: "/admin/proposals/create",
      icon: PlusCircle,
    },
  ];

  return (
    <div className="flex h-screen w-64 flex-col border-r border-white/10 bg-black/40 backdrop-blur-md text-card-foreground relative z-20">
      <div className="flex h-14 items-center border-b border-white/10 px-6">
        <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
          <span className="text-xl font-bold tracking-tighter text-white">
            <span className="text-primary">ONIC</span> ADMIN
          </span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-2">
          {sidebarItems.map((item, index) => {
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                  isActive 
                    ? "bg-primary/10 text-primary border border-primary/20" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-gray-400")} />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-3 mb-4 px-2">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary border border-primary/20">
             {user?.name?.charAt(0) || "A"}
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-2">
              <p className="font-medium text-white">{user?.name || "Admin"}</p>
              {user?.role && (
                <span className="text-[10px] uppercase bg-primary/10 text-primary px-1.5 py-0.5 rounded border border-primary/20">
                  {user.role}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500">{user?.email || "admin@onic.tech"}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300"
        >
          <LogOut className="h-4 w-4" />
          Sair
        </button>
      </div>
    </div>
  );
}
