import { AllListingsQuery } from "@/graphql/generated";
import { createColumnHelper } from "@tanstack/react-table";
import { z } from "zod";

const columnHelper = createColumnHelper<AllListingsQuery["data"][0]>();

export const listingCols = [
  columnHelper.accessor("title", {
    header: "Title",
    cell: (info) => info.getValue(),
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
];

export const NewListingSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
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
  inquire_now_mail_to: z.string().email({
    message: "Please enter a valid email address.",
  }),
  images: z.array(z.instanceof(File)).min(1, {
    message: "Please upload at least one image.",
  }),
});

export type NewListingSchemaType = z.infer<typeof NewListingSchema>;
