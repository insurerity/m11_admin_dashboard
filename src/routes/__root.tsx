import * as React from "react";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <DashboardLayout>
        <Outlet />
        <TanStackRouterDevtools />
      </DashboardLayout>
    </React.Fragment>
  );
}
