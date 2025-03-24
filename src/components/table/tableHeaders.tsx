import { flexRender, Table } from "@tanstack/react-table";

type TableHeadersProps<T> = {
  table: Table<T>;
};

export default function TableHeaders<T>({ table }: TableHeadersProps<T>) {
  return (
    <thead className="text-xs text-gray-700 bg-white">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              scope="col"
              className="px-6 py-[13px] font-medium text-gray-500 text-xs truncate"
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
