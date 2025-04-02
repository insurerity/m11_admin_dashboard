import { DashboardStats } from "@/modules/dashboard/molecules/DashboardStats";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <DashboardStats />
    </div>
  );
}
