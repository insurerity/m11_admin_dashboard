import { AllListingsQuery } from "@/graphql/generated";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<AllListingsQuery["listing"][0]>();

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
