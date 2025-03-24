import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { listingCols } from "../schema";
import { searchFilter } from "@/lib/utils";
import TablePagination from "@/components/table/TablePagination";
import TableBody from "@/components/table/tableBody";
import TableHeaders from "@/components/table/tableHeaders";
import { useAllListingsQuery } from "@/graphql/generated";

function ListingTable() {
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [tableSearch, setTableSearch] = useState("");
  const { data, loading: isFetching, error } = useAllListingsQuery();

  const defaultData = useMemo(() => [], []);

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const pageCount = Math.ceil(
    (data?.totalCount?.aggregate?.count as number) / pageSize
  );

  const table = useReactTable({
    columns: listingCols,
    data: data?.data ?? defaultData,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // manualPagination: true,
    pageCount: pageCount ?? -1,
    state: {
      pagination,
      globalFilter: tableSearch,
    },
    onPaginationChange: setPagination,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setTableSearch,
    filterFns: {
      fuzzy: searchFilter,
    },
    globalFilterFn: searchFilter,
  });

  return (
    <div>
      <div className="relative">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <TableHeaders table={table as any} />
            <TableBody isFetching={isFetching} table={table as any} />
          </table>
        </div>
        <TablePagination table={table as any} />
      </div>
    </div>
  );
}

export default ListingTable;
