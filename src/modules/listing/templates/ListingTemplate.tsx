import { Button } from "@/components/ui/button";
import ListingTable from "../molecules/ListingTable";
import { Separator } from "@/components/ui/separator";

export default function ListingTemplate() {
  return (
    <div className="w-full px-[32px]">
      <div className="w-full flex flex-row justify-between items-start pt-[24px] border-gray-200">
        <div className="flex flex-col">
          <p className="text-3xl font-medium text-gray-900 tracking-tight">
            Listings
          </p>
          <p className="text-gray-500 font-medium text-base">
            Manage your listings
          </p>
        </div>

        <div>
          <Button>
            <a href="/listings/new">Add New Listing</a>
          </Button>
        </div>
      </div>

      <Separator className="my-2" />

      <div className="w-full mt-[32px]">
        <ListingTable />
      </div>
    </div>
  );
}
