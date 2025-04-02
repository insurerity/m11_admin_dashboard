import { ChevronLeft, ChevronRight } from "lucide-react";

const ListingDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md animate-pulse">
      {/* Header skeleton */}
      <div className="p-6 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div>
            <div className="h-8 bg-gray-200 rounded w-64 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-40"></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="h-10 bg-gray-200 rounded-md w-24"></div>
          <div className="h-10 bg-gray-200 rounded-md w-28"></div>
          <div className="h-10 bg-gray-200 rounded-md w-24"></div>
          <div className="h-10 bg-gray-200 rounded-md w-24"></div>
        </div>
      </div>

      {/* Main content skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Image gallery skeleton */}
        <div className="space-y-4">
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <button className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-md">
              <ChevronLeft size={20} />
            </button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-md">
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
              1 / 3
            </div>
          </div>

          {/* Thumbnail strip skeleton */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-16 h-16 rounded-md bg-gray-200"
              ></div>
            ))}
          </div>
        </div>

        {/* Listing details skeleton */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
                <div className="h-6 bg-gray-200 rounded w-24"></div>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
            <div className="h-6 bg-gray-200 rounded w-48"></div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
            <div className="h-6 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailsSkeleton;
