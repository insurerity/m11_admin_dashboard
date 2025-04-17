import { Badge } from "@/components/ui/badge";
import { AllListingsQuery } from "@/graphql/generated";
import { createColumnHelper } from "@tanstack/react-table";
import { access } from "fs";
import { z } from "zod";

const columnHelper = createColumnHelper<AllListingsQuery["data"][0]>();

export const listingCols = [
  columnHelper.accessor("title", {
    header: "Title",
    cell: (info) => {
      const id = info.row.original.id; // Assuming `id` exists in the row data
      return (
        <a href={`/listings/${id}`} className="text-blue-600 hover:underline">
          {info.getValue()}
        </a>
      );
    },
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => `$${info.getValue()}`,
  }),
  columnHelper.accessor("rating", {
    header: "Rating",
    cell: (info) => `${info.getValue()} ⭐`,
  }),
  columnHelper.accessor("no_of_beds", {
    header: "Beds",
    cell: (info) => `${info.getValue()} Beds`,
  }),
  columnHelper.accessor("no_of_bathrooms", {
    header: "Bathrooms",
    cell: (info) => `${info.getValue()} Baths`,
  }),
  columnHelper.accessor("nickname", {
    header: "Nickname",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("isProd", {
    header: "Status",
    cell: (info) => {
      const isProd = info.getValue();
      return isProd ? (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
          Published
        </Badge>
      ) : (
        <Badge
          variant="outline"
          className="text-amber-600 border-amber-300 bg-amber-50 hover:bg-amber-100"
        >
          Draft
        </Badge>
      );
    },
  }),
];

export const NewListingSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  summary: z.string().min(10, {
    message: "Summary must be at least 10 characters.",
  }).optional(),
  access: z.string().min(2, {
    message: "Access must be at least 10 characters.",
  }).optional(),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.", 
  }),
  country : z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  interaction_with_guests : z.string().optional(),
  space: z.string().optional(),
  transit: z.string().optional(),
  house_rules: z.string().min(2, {
    message: "House rules must be at least 2 characters.",
  }).optional(),
  neighborhood: z.string().min(2, {
    message: "Neighborhood must be at least 2 characters.",
  }).optional(),
  tags: z.string().optional(),
  amenities: z.string().optional(),
  nickname: z.string().min(2, {
    message: "Nickname must be at least 2 characters.",
  }),
  no_of_beds: z.coerce.number().int().min(1, {
    message: "Must have at least 1 bed.",
  }),
  no_of_bathrooms: z.coerce.number().min(0.5, {
    message: "Must have at least 0.5 bathrooms.",
  }),
  no_of_guests: z.coerce.number().int().min(1, {
    message: "Must accommodate at least 1 guest.",
  }),
  price: z.coerce.number().positive({
    message: "Price must be a positive number.",
  }),
  rating: z.coerce.number().min(0).max(5).optional(),
  inquire_now_mail_to: z.string().optional(),
  images: z.array(z.instanceof(File)).optional(),
  isProd: z.boolean().default(false),
});

export type NewListingSchemaType = z.infer<typeof NewListingSchema>;
