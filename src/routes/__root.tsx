import * as React from "react";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { createRootRouteWithContext } from "@tanstack/react-router";
import {
  Outlet,
  // createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useApollo } from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client/react";
import { Toaster } from "@/components/ui/sonner";
import { AuthContextType } from "@/components/common/AuthProvider";

interface RouterWithContext {
  auth: AuthContextType;
}

// export const Route = createRootRoute({
//   component: RootComponent,
// });

export const Route = createRootRouteWithContext<RouterWithContext>()({
  component: () => <RootComponent />,
});

function RootComponent() {
  const client = useApollo();
  const routerState = useRouterState();
  const isLoginPage = routerState.location.href.includes("/login");

  console.log("router state", isLoginPage);

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
            <TanStackRouterDevtools />
          </DashboardLayout>
        )}
      </ApolloProvider>
    </React.Fragment>
  );
}
