import ListingDetailsTemplate from "@/modules/listing/templates/ListingDetailsTemplate";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Copy, Eye, EyeOff, MoreVertical, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/listings/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const navigate = Route.useNavigate();
  const isPublished = true;
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  // Reset delete confirmation when dropdown closes
  const handleDropdownOpenChange = (open: boolean) => {
    if (!open) {
      setShowDeleteConfirm(false);
    }
  };

  function onUpdate() {
    navigate({
      to: `/listings/new`,
      search: { id },
    });
  }
  function handleTogglePublish() {}
  function onClone() {}

  function handleDelete() {}

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
          <DropdownMenu onOpenChange={handleDropdownOpenChange}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MoreVertical size={20} />
                <span className="sr-only">Actions</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onUpdate()}>
                <Pencil className="mr-2 h-4 w-4" />
                <span>Edit Listing</span>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => handleTogglePublish()}>
                {isPublished ? (
                  <>
                    <EyeOff className="mr-2 h-4 w-4" />
                    <span>Unpublish Listing</span>
                  </>
                ) : (
                  <>
                    <Eye className="mr-2 h-4 w-4" />
                    <span>Publish Listing</span>
                  </>
                )}
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => onClone()}>
                <Copy className="mr-2 h-4 w-4" />
                <span>Clone Listing</span>
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
    </div>
  );
}
