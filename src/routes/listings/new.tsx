import { Button } from "@/components/ui/button";
import { NewListingForm } from "@/modules/listing/molecules/NewListingForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/listings/new")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="w-full flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">Create a New Listing</h1>
            <p className="text-muted-foreground mt-2">
              Fill out the form below to add a new listing to your listings on
              M11's marketplace
            </p>
          </div>

          <Button variant="outline">Cancel</Button>
        </div>
      </div>
      <div>
        <NewListingForm />
      </div>
    </div>
  );
}
