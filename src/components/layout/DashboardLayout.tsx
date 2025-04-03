import type * as React from "react";
import {
  BoxIcon,
  LayoutDashboard,
  LogOut,
  Settings,
  TerminalIcon,
} from "lucide-react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { LoadingSpinner } from "../ui/loading";

// This type represents a navigation item in the sidebar
type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
  isActive?: boolean;
};

function isActiveRoute(
  navHref: string,
  currentPath: string = window.location.pathname
): boolean {
  // Special case for root path
  if (navHref === "/") {
    return currentPath === "/";
  }
  // Check if the current path exactly matches or starts with the navHref plus a slash.
  return currentPath === navHref || currentPath.startsWith(`${navHref}/`);
}

const currentPath = window.location.pathname;

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    isActive: isActiveRoute("/", currentPath),
  },
  {
    title: "Listings",
    href: "/listings",
    icon: BoxIcon,
    isActive: isActiveRoute("/listings", currentPath),
  },
  {
    title: "Logs",
    href: "/logs",
    icon: TerminalIcon,
    isActive: isActiveRoute("/logs", currentPath),
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    isActive: isActiveRoute("/settings", currentPath),
  },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  // You can add more props as needed, such as:
  // currentPath?: string - to determine active routes dynamically
  // user?: UserType - to display user info in the sidebar
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("M11_ACCESS_TOKEN");
      // Redirect to login page or home page after logout
      navigate({
        to: "/login",
      });
    } catch {
      toast.error("Login failed. Try again later");
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!user) {
    navigate({
      to: "/login",
    });
  }

  return (
    <SidebarProvider>
      {/* Sidebar with inset variant */}
      <Sidebar variant="inset">
        <SidebarHeader className="border-b border-sidebar-border">
          <div className="flex items-center gap-2 pr-4 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
              <LayoutDashboard className="h-4 w-4" />
            </div>
            <div className="font-semibold ">M11 Admin Dashboard</div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={item.isActive}>
                  <a href={item.href} className="transition-colors">
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="border-t border-sidebar-border">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-col text-left text-sm">
                  <span className="font-medium">
                    {user?.displayName ?? "M11 Admin"}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {user?.email}
                  </span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarSeparator className="my-1" />
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={handleLogout}
                className="text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      {/* Main content area */}
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-6" />
          <div className="font-medium">Dashboard</div>
        </header>

        <main className="flex-1 p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
