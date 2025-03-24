import ListingTemplate from "@/modules/listing/templates/ListingTemplate";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/listings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ListingTemplate />
    </div>
  );
}
