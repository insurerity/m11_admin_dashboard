import { Check, ExternalLink } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useListingDialog } from "../../hooks";

interface SuccessDialogProps {
  onCreateAnother: () => void;
}

export function SuccessDialog({ onCreateAnother }: SuccessDialogProps) {
  const {
    success: { open, setOpen, listingId, listingTitle, successMessage },
  } = useListingDialog();
  const navigate = useNavigate();

  const handleViewListing = () => {
    navigate({
      to: `/listings/${listingId}`,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(!isOpen)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <DialogTitle className="text-center text-xl">
            {listingTitle}
          </DialogTitle>
          <DialogDescription className="text-center">
            {successMessage}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2">
          <Button onClick={handleViewListing} className="mb-2 sm:mb-0">
            View Listing
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={onCreateAnother}>
            Create Another Listing
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
