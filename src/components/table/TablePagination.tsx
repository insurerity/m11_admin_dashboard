import { Table } from "@tanstack/react-table";

type TablePaginationProps<T> = {
  table: Table<T>;
};

export default function TablePagination<T>({ table }: TablePaginationProps<T>) {
  return (
    <div className="flex flex-row items-center justify-between px-[24px] py-[18px] border-t">
      <div className="items-center">
        <p className="text-sm text-gray-700">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </p>
      </div>
      <select
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
        className="rounded-lg border border-gray-300 bg-white text-sm text-gray-900 h-[44px] px-[12px] w-[200px] focus:outline-none focus:ring-1 focus:ring-primary-500"
      >
        {[5, 10, 20, 30, 40, 50, 100].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
      <div className="space-x-[12px]">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className={`
									relative inline-flex items-center rounded-l-md border
									border-gray-300 bg-white px-2 py-2 text-sm font-medium 
									text-gray-500 hover:bg-gray-50 focus:z-20
									${
                    !table.getCanPreviousPage()
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }
								`}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {Array.from(
              {
                length: table.getPageCount(),
              },
              (_, i) =>
                // show 3 pages before and after the current page
                // if the current page is less than 3, show the first 5 pages
                // if the current page is greater than the total number of pages - 3, show the last 5 pages
                // otherwise, show the current page and 2 pages before and after it
                (i >= Math.max(0, table.getState().pagination.pageIndex - 3) &&
                  i <=
                    Math.min(
                      table.getPageCount() - 1,
                      table.getState().pagination.pageIndex + 3
                    )) ||
                (i < 5 && table.getState().pagination.pageIndex < 3) ||
                (i >= table.getPageCount() - 5 &&
                  table.getState().pagination.pageIndex >
                    table.getPageCount() - 3) ? (
                  <button
                    key={i}
                    onClick={() => table.setPageIndex(i)}
                    disabled={table.getState().pagination.pageIndex === i}
                    className={`
												relative z-10 inline-flex items-center border
												px-4 py-2 
												text-sm font-medium focus:z-20
												${
                          table.getState().pagination.pageIndex === i
                            ? "bg-primary-50 text-primary-600 border-primary-500 z-[9999]"
                            : "bg-white text-gray-500 border-gray-300"
                        }
											`}
                  >
                    {i + 1}
                  </button>
                ) : null
            )}
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className={`
									relative inline-flex items-center rounded-r-md border
									border-gray-300 bg-white px-2 py-2 text-sm font-medium 
									text-gray-500 hover:bg-gray-50 focus:z-20
									${!table.getCanNextPage() ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
								`}
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
