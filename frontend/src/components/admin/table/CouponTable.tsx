import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/~/components/ui/button";
import { Checkbox } from "@/~/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/~/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/~/components/ui/table";
import { BsClipboard } from "react-icons/bs";
import { ToastButton } from "@/components/toast/Toast";
const CodeCard = ({ code, status }: string) => {
  const [showClipboard, setShowClipboard] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setShowClipboard(true)}
      onMouseLeave={() => setShowClipboard(false)}
      className={`capitalize flex flex-row items-center gap-3 text-[14px] text-start ${
        status == "active"
          ? "text-green-400"
          : status === "inactive"
          ? "text-slate-500"
          : status === "pending"
          ? "text-slate-500"
          : "text-red-500"
      }`}
    >
      {code}{" "}
      {showClipboard && (
        <ToastButton
          description="You have successfully copied this discount code"
          header={code}
        >
          <BsClipboard className="text-white cursor-pointer" />
        </ToastButton>
      )}
    </div>
  );
};
export const columns = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "code",
    header: "Code",
    cell: ({ row }) => (
      <CodeCard code={row.getValue("code")} status={row.getValue("status")} />
    ),
  },
  {
    accessorKey: "discount",
    header: () => <div className="">Discount</div>,
    cell: ({ row }) => (
      <div
        className={`capitalize text-[14px] text-start ${
          row.getValue("status") == "active"
            ? "text-green-400"
            : row.getValue("status") === "inactive"
            ? "text-slate-500"
            : row.getValue("status") === "pending"
            ? "text-slate-500"
            : "text-red-500"
        }`}
      >
        {row.getValue("discount")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="flex flex-row gap-4 items-center">
        <div
          className={`capitalize border text-center text-[14px] rounded-xl ${
            row.getValue("status") == "active"
              ? "text-green-400 border-green-400 bg-green-500 "
              : row.getValue("status") === "inactive"
              ? "text-slate-500 border-slate-500 bg-slate-500"
              : row.getValue("status") === "pending"
              ? "text-slate-500 border-slate-500 bg-slate-500"
              : "text-red-500 border-red-500 bg-red-500"
          } w-5 h-5`}
        ></div>
        {row.getValue("status")}
      </div>
    ),
  },
];
export function CouponTable({ data }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  return (
    <div className="w-full exo">
      <div className="rounded-md ">
        <Table>
          <TableHeader className="text-[17px] bg-slate-900  border-slate-900">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border  hover:bg-slate-800 border-slate-900"
              >
                {headerGroup.headers.map((header, index) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`text-white  ${
                        index === 0 && "w-4/12 border-slate-800"
                      }`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => {
                if (row.original !== "active") {
                  return null;
                }
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={`${
                      index % 2 === 0
                        ? "bg-slate-800 hover:bg-slate-800"
                        : "bg-slate-900 hover:bg-slate-900"
                    } border-0 py-8 bg-black `}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className={`mt-3 text-slate-600 ${
                          index % 2 === 0 ? "text-white" : "text-slate-400"
                        } bg-black`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableBody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={`${
                    index % 2 === 0 ? "bg-slate-800" : "bg-slate-950"
                  } border-0 py-8`}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell
                        key={cell.id}
                        className={` text-slate-600 ${
                          index % 2 === 0 ? "text-white" : "text-slate-400"
                        } `}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4 px-[1rem]">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};