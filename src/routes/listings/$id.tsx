import ListingDetailsTemplate from "@/modules/listing/templates/ListingDetailsTemplate";
import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { EyeOff, Globe, MoreVertical, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { DeleteConfirmationModal } from "@/components/common/DeleteConfirmationModal";
import {
  useDeleteListingMutation,
  useUpdateListingByPkMutation,
} from "@/graphql/generated";
import { createApolloClient } from "@/lib/apollo";
import { GETT_LISTING_STATUS } from "@/lib/gqlQueries";
import { ConfirmationModal } from "@/components/common/ConfirmationModal";

export const Route = createFileRoute("/listings/$id")({
  component: RouteComponent,

  loader: async (ctx) => {
    const id = ctx.params?.id;

    if (id) {
      const client = createApolloClient();
      const { data } = await client.query({
        query: GETT_LISTING_STATUS,
        variables: {
          id,
        },
      });

      return data?.listing_by_pk;
    }
  },
});

function RouteComponent() {
  const [actionDeleteListing, { loading }] = useDeleteListingMutation();
  const [actionPublishListing, { loading: publishLoading }] =
    useUpdateListingByPkMutation();
  const { id } = Route.useParams();
  const navigate = Route.useNavigate();
  const status = Route.useLoaderData();
  const [showPublish, setShowPublish] = useState(false);
  const isProd = status?.isProd;

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  function onUpdate() {
    navigate({
      to: `/listings/new`,
      search: { id },
    });
  }

  function handleDelete() {
    return setShowDeleteConfirm((prev) => !prev);
  }

  async function onDeleteListing() {
    actionDeleteListing({
      variables: {
        id: id,
      },
      onCompleted() {
        setShowDeleteConfirm(false);
        toast.success("Listing deleted successfully");
        navigate({
          to: `/listings`,
        });
      },
      onError() {
        setShowDeleteConfirm(false);
        toast.error("Error deleting listing");
      },
    });
  }

  async function onPublish() {
    actionPublishListing({
      variables: {
        id: id,
        _set: {
          isProd: !isProd,
        },
      },
      onError(error) {
        console.log("error", error);
        toast.error("Error publishing listing");
        setShowPublish(false);
      },
      onCompleted() {
        setShowPublish(false);
        toast.success(
          isProd
            ? "Listing unpublished successfully"
            : "Listing published successfully"
        );
        navigate({
          to: `/listings`,
        });
      },
    });
  }

  return (
    <div className="w-full px-[32px]">
      <div className="w-full flex flex-row justify-between items-start pt-[24px] ">
        <div className="flex flex-col">
          <p className="text-3xl font-medium text-gray-900 tracking-tight">
            Listing Details
          </p>
          <p className="text-gray-500 font-medium text-base">
            Manage your listing
          </p>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MoreVertical size={20} />
                <span className="sr-only">Actions</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onUpdate()}>
                <Pencil className="mr-2 h-4 w-4" />
                <span>Update Listing</span>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setShowPublish(true)}>
                {isProd ? (
                  <EyeOff className="mr-2 h-4 w-4" />
                ) : (
                  <Globe className="mr-2 h-4 w-4" />
                )}
                <span>{isProd ? "Unpublish" : "Publish"}</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={handleDelete}
                className={
                  showDeleteConfirm
                    ? "text-destructive font-medium"
                    : "text-destructive"
                }
              >
                <Trash2 className="mr-2 h-4 w-4" />
                <span>
                  {showDeleteConfirm ? "Confirm Delete" : "Delete Listing"}
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Separator className="my-4" />
      <div className="w-full mt-[32px]">
        <ListingDetailsTemplate />
      </div>

      <DeleteConfirmationModal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={onDeleteListing}
        confirmLoading={loading}
        description="Are you sure you want to delete this listing? This action cannot be undone."
      />
      <ConfirmationModal
        isOpen={showPublish}
        onClose={() => setShowPublish(false)}
        onConfirm={onPublish}
        confirmLoading={publishLoading}
        description={
          isProd
            ? "Are you sure you want to unpublish this listing?"
            : "Are you sure you want to publish this listing?"
        }
        title={isProd ? "Unpublish Listing" : "Publish Listing"}
        confirmText={isProd ? "Unpublish" : "Publish"}
        cancelText="Cancel"
      />
    </div>
  );
}
