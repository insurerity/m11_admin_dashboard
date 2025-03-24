import { flexRender, Table } from "@tanstack/react-table";

type TableRowProps<T> = {
  table: Table<T>;
};

export default function TableRows<T>({ table }: TableRowProps<T>) {
  return (
    <>
      {table.getRowModel().rows.map((row, index) => (
        <tr
          key={row.id}
          className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} className="px-[24px] py-[26px]">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
