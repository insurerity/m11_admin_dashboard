import ListingTemplate from "@/modules/listing/templates/ListingTemplate";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/listings/")({
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
      <ListingTemplate />
    </div>
  );
}
