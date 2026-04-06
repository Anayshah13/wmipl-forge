"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { usePathname } from "next/navigation";

const queryClient = new QueryClient();

function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavbar = pathname === "/insights";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LayoutShell>{children}</LayoutShell>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
