"use client";

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

// import { Button } from "@/components/ui/button"
import { Button } from "@/~/components/ui/button";
import { Checkbox } from "@/~/components/ui/checkbox";
// import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input"
import { Input } from "@/~/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/~/components/ui/table";

const data: Payment[] = [
  {
    id: "bhqecj4p",
    price: "721",
    status: "active",
    property_name: "Lekki Villa",
    property_type: "Vila",
    checkin: "20/01/2024",
    checkout: "25/01/2024",
  },
  {
    id: "3u1reuv4",
    price: "500",
    status: "declined",
    property_name: "Downtown Apartment",
    property_type: "Apartment",
    checkin: "15/02/2024",
    checkout: "22/02/2024",
  },
  {
    id: "m5gr84i9",
    price: "900",
    status: "inactive",
    property_name: "Ocean View Resort",
    property_type: "Resort",
    checkin: "10/03/2024",
    checkout: "18/03/2024",
  },
  {
    id: "v9zg7p2r",
    price: "600",
    status: "pending",
    property_name: "Sunny Condo",
    property_type: "Condo",
    checkin: "05/04/2024",
    checkout: "12/04/2024",
  },
  {
    id: "k3s6v1e8",
    price: "800",
    status: "pending",
    property_name: "Mountain Cabin",
    property_type: "Cabin",
    checkin: "01/05/2024",
    checkout: "08/05/2024",
  },
  {
    id: "x2a4d5w9",
    price: "450",
    status: "active",
    property_name: "Riverside Bungalow",
    property_type: "Bungalow",
    checkin: "20/05/2024",
    checkout: "27/05/2024",
  },
  {
    id: "p1t9o8y7",
    price: "700",
    status: "inactive",
    property_name: "City Loft",
    property_type: "Loft",
    checkin: "15/06/2024",
    checkout: "22/06/2024",
  },
  {
    id: "z6m8c7b2",
    price: "550",
    status: "active",
    property_name: "Beachfront Cottage",
    property_type: "Cottage",
    checkin: "10/07/2024",
    checkout: "18/07/2024",
  },
  {
    id: "o5k3j1a7",
    price: "950",
    status: "declined",
    property_name: "Luxury Penthouse",
    property_type: "Penthouse",
    checkin: "05/08/2024",
    checkout: "12/08/2024",
  },
  {
    id: "r8t2e3w1",
    price: "520",
    status: "pending",
    property_name: "Country Retreat",
    property_type: "Retreat",
    checkin: "01/09/2024",
    checkout: "08/09/2024",
  },
  {
    id: "wocenwoine",
    price: "520",
    status: "pending",
    property_name: "Country Retreat",
    property_type: "Retreat",
    checkin: "01/09/2024",
    checkout: "08/09/2024",
  },
];

export type Payment = {
  id: string;
  price: string;
  status: "active" | "inactive" | "declined" | "pending";
  checkin: string;
  checkout: string;
  property_name: string;
  property_type: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="border border-slate-500"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-slate-500"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "property_name",
    header: "Property name",
    cell: ({ row }) => (
      <div className="capitalize ">{row.getValue("property_name")}</div>
    ),
  },
  {
    accessorKey: "property_type",
    header: "Property type",
    cell: ({ row }) => (
      <div className="capitalize ">{row.getValue("property_type")}</div>
    ),
  },

  {
    accessorKey: "checkin",
    header: "Checkin Date",
    cell: ({ row }) => (
      <div className="capitalize text-[14px]">{row.getValue("checkin")}</div>
    ),
  },
  {
    accessorKey: "checkout",
    header: "Checkout Date",
    cell: ({ row }) => (
      <div className="capitalize text-[14px]">{row.getValue("checkout")}</div>
    ),
  },
  // {
  //   accessorKey: "email",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Email
  //         <CaretSortIcon className="ml-2 h-4 w-4" />
  //       </Button>
  //     )
  //   },
  //   cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  // },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className={`capitalize text-start ${row.getValue("status") == "active" ? "text-sky-400" : row.getValue("status") === "inactive" ? "text-slate-500" : row.getValue("status") === "pending" ? "text-slate-500" : "text-red-500"}`}>{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: () => <div className="">Total Price</div>,
    cell: ({ row }) => (
      <div className={`capitalize text-center ${row.getValue("status") == "active" ? "text-sky-400" : row.getValue("status") === "inactive" ? "text-slate-500" : row.getValue("status") === "pending" ? "text-slate-500" : "text-red-500"}`}>{row.getValue("price")}</div>
    ),
  },

  // https://cdn-icons-png.flaticon.com/128/6811/6811049.png

// https://cdn-icons-png.flaticon.com/128/4303/4303935.png



// https://cdn-icons-png.flaticon.com/128/2704/2704312.png



// https://cdn-icons-png.flaticon.com/128/2762/2762463.png

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTableDemo2() {
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
    <div className="w-[100%] exo">
      <div className="flex items-center flex-wrap gap-y-4 py-4">
        <Input
          placeholder="Filter Property name..."
          value={(table.getColumn("property_name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("property_name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm bg-slate-900 border-slate-600 text-white text-[15px] h-[50px] placeholder:text-white"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto text-white bg-slate-900 border-slate-600">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md ">
        <Table >
          <TableHeader className="text-[17px] bg-slate-900 border border-slate-900">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border border-slate-900">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-white">
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
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={`${index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-950'} border-0 py-8`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id } className={` text-slate-600 ${index % 2 === 0 ? 'text-white' : 'text-slate-400'} `}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                      
                    </TableCell>
                  ))}
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
      <div className="flex items-center justify-end space-x-2 py-4">
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
}
