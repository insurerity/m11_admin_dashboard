import { AlertCircle } from "lucide-react";

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

interface ErrorDialogProps {
  onTryAgain: () => void;
}

export function ErrorDialog({ onTryAgain }: ErrorDialogProps) {
  const {
    error: { open, setOpen, errorMessage },
  } = useListingDialog();
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>
          <DialogTitle className="text-center text-xl">
            Error Creating Listing
          </DialogTitle>
          <DialogDescription className="text-center">
            {errorMessage}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2">
          <Button onClick={onTryAgain} className="mb-2 sm:mb-0">
            Try Again
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
