import { useListingByPkQuery } from "@/graphql/generated";
import { Route } from "@/routes/listings/$id";
import {
  Bath,
  Bed,
  ChevronLeft,
  ChevronRight,
  Mail,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";
import ListingDetailsSkeleton from "../molecules/loaders/ListingDetailsSkeleton";
import ListingDetailsError from "../molecules/errors/ListingDetailsError";

export default function ListingDetailsTemplate() {
  const { id } = Route.useParams();
  const { data, loading, error } = useListingByPkQuery({
    variables: { id: id as string },
  });

  console.log("listing data", data);

  const listing = data?.listing_by_pk;
  const formattedDate = new Date(listing?.created_at).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (loading) {
    return <ListingDetailsSkeleton />;
  }

  if (error) {
    return <ListingDetailsError error={error} />;
  }

  return (
    <div className="">
      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="space-y-4">
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            {listing?.images && listing.images.length > 0 ? (
              <img
                src={
                  listing?.images[currentImageIndex].url || "/placeholder.svg"
                }
                alt={`Listing image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No images available
              </div>
            )}

            {listing?.images && listing.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentImageIndex((prevIndex) =>
                      prevIndex > 0 ? prevIndex - 1 : listing.images.length - 1
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex((prevIndex) =>
                      prevIndex < listing.images.length - 1 ? prevIndex + 1 : 0
                    )
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
                  {currentImageIndex + 1} / {listing.images.length}
                </div>
              </>
            )}
          </div>

          {listing?.images && listing?.images?.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {listing.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                    index === currentImageIndex
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image.url || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Listing details */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Title</p>
              <p className="font-medium">{listing?.title || "N/A"}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Nickname</p>
              <p className="font-medium">{listing?.nickname || "N/A"}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Price</p>
              <p className="font-medium">${listing?.price.toLocaleString()}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-2">
              <Users size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Guests</p>
                <p className="font-medium">{listing?.no_of_guests}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-2">
              <Bed size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Beds</p>
                <p className="font-medium">{listing?.no_of_beds}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-2">
              <Bath size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Bathrooms</p>
                <p className="font-medium">{listing?.no_of_bathrooms}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-2">
              <Star size={18} className="text-amber-400" />
              <div>
                <p className="text-sm text-gray-500">Rating</p>
                <p className="font-medium">{listing?.rating || "No ratings"}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Contact Email</p>
            <div className="flex items-center gap-2 mt-1">
              <Mail size={18} className="text-gray-400" />
              <a
                href={`mailto:${listing?.inquire_now_mail_to}`}
                className="text-blue-600 hover:underline"
              >
                {listing?.inquire_now_mail_to || "N/A"}
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Created At</p>
            <p className="font-medium">{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
