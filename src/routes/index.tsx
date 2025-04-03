import { DashboardStats } from "@/modules/dashboard/molecules/DashboardStats";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
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
  return (
    <div>
      <DashboardStats />
    </div>
  );
}
