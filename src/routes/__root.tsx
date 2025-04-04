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
  const isLoginCompletePage =
    routerState.location.href === "/login-complete" ||
    routerState.location.href.includes("/login-complete");

  if (isLoginCompletePage) {
    return (
      <React.Fragment>
        <ApolloProvider client={client}>
          <Outlet />
          <Toaster />
        </ApolloProvider>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        {routerState && isLoginPage ? (
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
