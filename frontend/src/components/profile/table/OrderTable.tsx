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

  // {
  //   accessorKey: "property_name",
  //   header: "Property name",
  //   cell: ({ row }) => (
  //     <div className="capitalize ">{row.getValue("property_name")}</div>
  //   ),
  // },
  // {
  //   accessorKey: "propertyInformation.propertyType",
  //   header: "Property type",
  //   cell: ({ row }) => {
  //     console.log(row.getValue("propertyInformation.propertyType"))
  //     return (
  //       <div className="capitalize ">{row.getValue("propertyInformation.propertyType")}</div>
  //     )
  //   },
  // },


  {
    accessorKey: "propertyInformation.properttyName",
    header: "Property type",
    cell: ({ row }) => {
      const propertyInformation = row.original?.propertyInformation;
  
      if (propertyInformation && propertyInformation.propertyName) {
        console.log(propertyInformation.propertyName);
  
        return (
          <div className="capitalize text-[13px]">
            {propertyInformation.propertyName}
          </div>
        );
      } else {
        // Handle the case where propertyInformation or propertyType is undefined
        return <div className="capitalize ">N/A</div>;
      }
    },
  },





  {
    accessorKey: "propertyInformation.propertyType",
    header: "Property type",
    cell: ({ row }) => {
      const propertyInformation = row.original?.propertyInformation;
  
      if (propertyInformation && propertyInformation.propertyType) {
        // console.log(propertyInformation.propertyType);
  
        return (
          <div className="capitalize text-[13px]">
            {propertyInformation.propertyType}
          </div>
        );
      } else {
        // Handle the case where propertyInformation or propertyType is undefined
        return <div className="capitalize ">N/A</div>;
      }
    },
  },

  {
    accessorKey: "checkinDate",
    header: "Checkin Date",
    cell: ({ row }) => (
      <div className={`capitalize text-[12px] ${row.getValue("bookingStatus") === "active" 
      || row.getValue("bookingStatus") === "ongoing" ? "text-green-500" : row.getValue("bookingStatus") === "pending" ? "text-yellow-500" : row.getValue("bookingStatus") === "expired" || row.getValue("bookingStatus") === "declined" && "text-red-500" }`}>{row.getValue("checkinDate")}</div>
    ),
  },
  {
    accessorKey: "checkoutDate",
    header: "Checkout Date",
    cell: ({ row }) => {
        // console.log(row.getValue)
      return (
        <div className={`capitalize text-[12px] ${row.getValue("bookingStatus") === "active" 
        || row.getValue("bookingStatus") === "ongoing" ? "text-green-500" : row.getValue("bookingStatus") === "pending" ? "text-yellow-500" : row.getValue("bookingStatus") === "expired" || row.getValue("bookingStatus") === "declined" && "text-red-500" }`}>{row.getValue("checkoutDate")}</div>
      )
    },
  },
  {
    accessorKey: "bookingStatus",
    header: "Status",
    cell: ({ row }) => {
        // console.log(row.getValue)
      return (
        <div className={`capitalize text-[12px] ${row.getValue("bookingStatus") === "active" 
        || row.getValue("bookingStatus") === "ongoing" ? "text-green-500" : row.getValue("bookingStatus") === "pending" ? "text-yellow-500" : row.getValue("bookingStatus") === "expired" || row.getValue("bookingStatus") === "declined" && "text-red-500" }`}>{row.getValue("bookingStatus")}</div>
      )
    },
  },
  {
    accessorKey: "pricing",
    header: "Property type",
    cell: ({ row }) => {
      const pricing = row.original?.pricing;
  
      if (pricing && pricing.totalPrice) {
        // console.log(pricing.propertyType);
  
        return (
          <div className={`capitalize text-[12px] ${row.getValue("bookingStatus") === "active" 
          || row.getValue("bookingStatus") === "ongoing" ? "text-green-500" : row.getValue("bookingStatus") === "pending" ? "text-yellow-500" : row.getValue("bookingStatus") === "expired" || row.getValue("bookingStatus") === "declined" && "text-red-500" }`}>
            {pricing.totalPrice}
          </div>
        );
      } else {
        // Handle the case where propertyInformation or propertyType is undefined
        return <div className="capitalize ">N/A</div>;
      }
    },
  },

  // https://cdn-icons-png.flaticon.com/128/6811/6811049.png

// https://cdn-icons-png.flaticon.com/128/4303/4303935.png



// https://cdn-icons-png.flaticon.com/128/2704/2704312.png



// https://cdn-icons-png.flaticon.com/128/2762/2762463.png

  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const payment = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <DotsHorizontalIcon className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];

export function OrderTable({ orders }: { orders: Payment[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: orders,
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
      
      <div className="rounded-md ">
        <Table >
          <TableHeader className="text-[15px] bg-slate-100 ">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-slate-200 shadow-md ">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-slate-500 text-[13px]">
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
                  className={`bg-white  border-0 py-8`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id } className={` text-black ${index % 2 === 0 ? 'text-slate-600' : 'text-slate-700'} `}>
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
