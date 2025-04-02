import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface ListingDetailsErrorProps {
  error: Error | string;
}

const ListingDetailsError = ({ error }: ListingDetailsErrorProps) => {
  const errorMessage = typeof error === "string" ? error : error.message;

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100">
          <AlertTriangle size={32} className="text-red-600" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">
            Failed to load listing details
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            We couldn't load the listing details
          </p>
          <div className="mt-1 p-2 bg-red-50 rounded-md border border-red-100">
            <p className="text-sm text-red-600 font-mono">{errorMessage}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center"
          >
            <RefreshCw size={18} />
            <span>Try Again</span>
          </Button>

          <Button
            variant={"outline"}
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 "
          >
            <span>Go Back</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailsError;
