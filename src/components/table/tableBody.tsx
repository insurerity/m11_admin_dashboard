import { Table } from "@tanstack/react-table";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import TableRows from "./tableRows";

type TableBodyProps<T> = {
  table: Table<T>;
  isFetching?: boolean;
  pageSize?: number;
  noResultsMessage?: string;
  onClearSearch?: {
    label: string;
    cb: () => void;
  };
  onNewButtonClick?: {
    label: string;
    cb: () => void;
  };
};

export default function TableBody<T>({
  table,
  isFetching = false,
  pageSize = 10,
  noResultsMessage,
  onClearSearch,
  onNewButtonClick,
}: TableBodyProps<T>) {
  return (
    <tbody
      className={`"w-full ${
        table.getRowModel().rows.length === 0 && "h-[400px]"
      }`}
    >
      {isFetching ? (
        new Array(pageSize).fill(0).map((_, index) => (
          <tr
            key={index}
            className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
          >
            {table.getHeaderGroups()[0].headers.map((header) => (
              <td key={header.id} className="px-[24px] py-[26px]">
                <Skeleton />
              </td>
            ))}
          </tr>
        ))
      ) : table.getRowModel().rows.length === 0 ? (
        <tr className="py-[40px] flex flex-col items-center justify-center w-full h-[400px] absolute">
          <td className="flex flex-col items-center justify-center">
            <img
              src="/assets/images/empty.svg"
              width={158}
              height={112}
              alt="Empty"
            />

            <div className="flex flex-col items-center justify-center text-center space-y-[4px] pt-[16px] max-w-lg">
              <div className="text-base text-gray-900">No results found</div>
              <div className="text-sm text-gray-600">
                {noResultsMessage ??
                  "Try adjusting your search or filter to find what you're looking for."}
              </div>
              {(onClearSearch || onNewButtonClick) && (
                <div className="pt-[24px] flex flex-row space-x-[12px]">
                  {onClearSearch && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onClearSearch.cb}
                    >
                      {onClearSearch.label}
                    </Button>
                  )}

                  {onNewButtonClick && (
                    <Button
                      variant="default"
                      size="sm"
                      onClick={onNewButtonClick.cb}
                    >
                      {onNewButtonClick.label}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </td>
        </tr>
      ) : (
        <TableRows table={table as any} />
      )}
    </tbody>
  );
}
