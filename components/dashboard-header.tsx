"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/navigation";




export function DashboardHeader() {
   const pathname = usePathname();

const currentPage = navItems.find((item) => {
  if (item.href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(item.href);
});

const pageTitle = currentPage?.title ?? "Dashboard";
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-card px-7">
      <h1 className="text-lg font-semibold">{pageTitle}</h1>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search patients..."
            className="h-9 w-[268px] bg-background pl-8 text-sm"
          />
        </div>

        {/* Notification Bell */}
        {/* <Button variant="outline" size="icon" className="relative h-10 w-10">
          <Bell className="h-[18px] w-[18px] text-muted-foreground" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border-2 border-card bg-destructive" />
        </Button> */}

        <Button
          variant="outline"
          size="icon"
          className="relative h-10 w-10"
        >
          <Bell className="h-5 w-5 text-muted-foreground" />

          <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-card bg-destructive" />
        </Button>

        <ThemeToggle />

        {/* User Avatar */}
        <Avatar className="h-9 w-9 cursor-pointer">
          <AvatarFallback className="bg-accent text-sm font-semibold text-accent-foreground">
            DS
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
