import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/logs")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.loading && !context.auth.user) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/logs"!</div>;
}
