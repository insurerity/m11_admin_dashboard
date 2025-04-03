import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { NewListingForm } from "@/modules/listing/molecules/NewListingForm";
import { createApolloClient } from "@/lib/apollo";
import { createFileRoute } from "@tanstack/react-router";
import { GET_LISTING_BY_PK } from "@/lib/gqlQueries";

export const Route = createFileRoute("/listings/new")({
  component: RouteComponent,

  loader: async (ctx) => {
    const searchParams = new URLSearchParams(ctx.location.search);
    const id = searchParams.get("id");

    if (id) {
      const client = createApolloClient();
      const { data } = await client.query({
        query: GET_LISTING_BY_PK,
        variables: {
          id,
        },
      });

      return data?.listing_by_pk;
    }
  },
});

function RouteComponent() {
  return (
    <div className="p-6">
      <div>
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

      <Separator className="mt-2 mb-8" />
      <div>
        <NewListingForm />
      </div>
    </div>
  );
}
