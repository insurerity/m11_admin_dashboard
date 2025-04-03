import * as React from "react";
import {
  Outlet,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useApollo } from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client/react";
import { Toaster } from "@/components/ui/sonner";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const client = useApollo();
  const routerState = useRouterState();
  const isLoginPage = routerState.location.href === "/login";

  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        {isLoginPage ? (
          <>
            <Outlet />
            <Toaster />
          </>
        ) : (
          <DashboardLayout>
            <Outlet />
            <Toaster />
          </DashboardLayout>
        )}
      </ApolloProvider>
    </React.Fragment>
  );
}
