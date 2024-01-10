
import React, { useState } from "react";
import {
  useTable,
  useSortBy,
  useFilters,
  usePagination,
  useRowSelect,
  
} from "react-table";
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
} from "@/~/components/ui/dropdown-menu";
import { Input } from "@/~/components/ui/input";
import {
  Table,
  TableBody,
  TableRow,
  TableHeader,
  TableHead,
  TableCell,
} from "@/~/components/ui/table";

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
  } from "@tanstack/react-table"

  
import { PiCaretUpDownBold } from "react-icons/pi";
const data = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

export const columns = [
  {
    id: "select",
    Header: ({ getToggleAllRowsSelectedProps }) => (
      <Checkbox {...getToggleAllRowsSelectedProps()} />
    ),
    Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
    disableSortBy: true,
  },
  {
    accessor: "status",
    Header: "Status",
    Cell: ({ row }) => <div className="capitalize">{row.values.status}</div>,
  },
  {
    accessor: "email",
    Header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSortBy(!column.isSortedDesc)}
      >
        Email
        {/* <CaretSortIcon className="ml-2 h-4 w-4" /> */}
      </Button>
    ),
    Cell: ({ row }) => <div className="lowercase">{row.values.email}</div>,
  },
  {
    accessor: "amount",
    Header: () => <div className="text-right">Amount</div>,
    Cell: ({ row }) => {
      const amount = parseFloat(row.values.amount);

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    disableSortBy: true,
    Cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              {/* <DotsHorizontalIcon className="h-4 w-4" /> */}
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

export function DataTableDemo() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

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
  })
  return (
    <div className="w-full">
      <div className="flex items-center py-4 text-white">
        <Input
          placeholder="Filter emails..."
          value={state.globalFilter}
          onChange={(e) => (console.log(e.target.value) , table.getColumn("email")?.setFilterValue(event.target.value)) }
          className="max-w-sm text-black"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto bg-red-500">
              Columns 
              {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {columns.map((column) => (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize border border-red-500"
                checked={columnVisibility[column.id]}
                onCheckedChange={(value) =>
                  setColumnVisibility({
                    ...columnVisibility,
                    [column.id]: value,
                  })
                }
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border text-white border-red-500">
        <Table {...getTableProps()}>
          <TableHeader>
            {headerGroups.map((headerGroup) => {
                console.log(headerGroup)
                return (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <TableHead {...column.getHeaderProps()}>
                          {column.isPlaceholder ? null : (
                            <div {...column.getSortByToggleProps()} className="border border-blue-500 bg-slate-500 text-white">
                              {column.render("Header")}
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  // <CaretSortIcon className="ml-2 h-4 w-4" />
                                  <PiCaretUpDownBold className="ml-2 h-4 w-4 bg-white"/>
                                ) : (
                                  // <CaretSortIcon
                                  //   className="ml-2 h-4 w-4 transform rotate-180"
                                  // />
                                  <PiCaretUpDownBold className="ml-2 h-4 w-4 transform rotate-180 bg-white"/>
                                )
                              ) : null}
                            </div>
                          )}
                        </TableHead>
                      ))}
                    </TableRow>
                  )
            })}
          </TableHeader>
          {/* <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()} data-state={row.isSelected ? "selected" : undefined}>
                  {row.cells.map((cell) => (
                    <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody> */}
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {state.selectedRowIds.size} of {rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setGlobalFilter("")}
          >
            Clear Filter
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSorting([])}
          >
            Clear Sorting
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setRowSelection({})}
          >
            Clear Selection
          </Button>
        </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setRowSelection({});
              setSorting([]);
              setGlobalFilter("");
            }}
          >
            Clear All
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setRowSelection({ ...rows.reduce((acc, row) => ({ ...acc, [row.id]: true }), {}) })}
          >
            Select All
          </Button>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => state.page > 0 && state.gotoPage(0)}
            disabled={!state.canPreviousPage}
          >
            First
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => state.previousPage()}
            disabled={!state.canPreviousPage}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => state.nextPage()}
            disabled={!state.canNextPage}
          >
            Next
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => state.pageCount > 0 && state.gotoPage(state.pageCount - 1)}
            disabled={!state.canNextPage}
          >
            Last
          </Button>
        </div>
      </div>
    </div>
  );
}
