import * as React from "react";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useApollo } from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client/react";
import { Toaster } from "@/components/ui/sonner";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const client = useApollo();
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <DashboardLayout>
          <Outlet />
          <Toaster />
          <TanStackRouterDevtools />
        </DashboardLayout>
      </ApolloProvider>
    </React.Fragment>
  );
}
