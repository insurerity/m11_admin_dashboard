import ListingTable from "../molecules/ListingTable";

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
      </div>

      <div className="w-full mt-[32px]">
        <ListingTable />
      </div>
    </div>
  );
}
