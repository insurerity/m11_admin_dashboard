import { createFileRoute } from "@tanstack/react-router";
import ListingTemplate from "@/modules/listing/templates/ListingTemplate";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ListingTemplate />
    </div>
  );
}
