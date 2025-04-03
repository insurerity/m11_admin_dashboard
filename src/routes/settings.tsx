import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
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
});

function RouteComponent() {
  return <div>Hello settings!</div>;
}
