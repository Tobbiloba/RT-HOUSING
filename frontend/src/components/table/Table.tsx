'use client'

import * as React from 'react'
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from '@radix-ui/react-icons'
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
} from '@tanstack/react-table'
import { convertDate } from '../utils'
// import { Button } from "@/components/ui/button"
import { Button } from '@/~/components/ui/button'
import { Checkbox } from '@/~/components/ui/checkbox'
// import { Checkbox } from "@/components/ui/checkbox"
import {   DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
 } from '@radix-ui/react-dropdown-menu'
// import { Input } from "@/components/ui/input"
import { Input } from '@/~/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/~/components/ui/table'
import { useDispatch } from 'react-redux'
import { updateOrderStatus } from '@/action/order'

export type Payment = {
  id: string
  price: string
  status: 'active' | 'inactive' | 'declined' | 'pending'
  checkin: string
  checkout: string
  property_name: string
  property_type: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="border border-slate-500"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-slate-500"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'propertyInformation',
    header: 'Property name',
    cell: ({ row }) => {
      const propertyInformation = row.getValue('propertyInformation')
      console.log(propertyInformation)
      return (
        <div className="capitalize text-[13px]">
          {propertyInformation.propertyName}
        </div>
      )
    },
  },
  {
    accessorKey: 'propertyInformation',
    header: 'Property type',
    cell: ({ row }) => {
      const propertyInformation = row.getValue('propertyInformation')
      // console.log(propertyInformation.propertyType)
      return (
        <div className="capitalize text-[13px]">
          {propertyInformation.propertyType}
        </div>
      )
    },
  },

  {
    accessorKey: 'checkinDate',
    header: 'Checkin Date',
    cell: ({ row }) => (
      <div className="capitalize text-[13px]">
        {convertDate(row.getValue('checkinDate'))}
      </div>
    ),
  },
  {
    accessorKey: 'checkoutDate',
    header: 'Checkout Date',
    cell: ({ row }) => {
      return (
      <div className="capitalize text-[13px]">
        {convertDate(row.getValue('checkoutDate'))}


      </div>
    )
    },
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
    accessorKey: 'bookingStatus',
    header: 'Status',
    cell: ({ row }) => (
      <div
        className={`capitalize text-start text-[13px] ${row.getValue('bookingStatus') == 'active' ? 'text-sky-400' : row.getValue('bookingStatus') === 'inactive' ? 'text-slate-500' : row.getValue('bookingStatus') === 'pending' ? 'text-slate-500' : 'text-red-500'}`}
      >
        {row.getValue('bookingStatus')}
      </div>
    ),
  },
  {
    accessorKey: 'pricing',
    header: () => <div className="">Total Price</div>,
    cell: ({ row }) => {
      // console.log("Status:", row.getValue("bookingStatus"));
      const price = row.getValue('pricing')
      console.log(price.totalPrice)
      // console.log(row.getValue(`'pricing.'totalPrice'`))
      console.log('Total Price:', row.getValue('pricing'))
      const statusColor =
        row.getValue('bookingStatus') === 'active'
          ? 'text-sky-400'
          : row.getValue('bookingStatus') === 'inactive' ||
              row.getValue('bookingStatus') === 'pending'
            ? 'text-slate-500'
            : 'text-red-500'

      return (
        <div className={`capitalize text- text-[13px] ${statusColor}`}>
          {/* {row.getValue("pricing.totalPrice")} */}
          {price.totalPrice}
        </div>
      )
    },
  },
  // {
  //   accessorKey: "pricing",
  //   header: () => <div className="">Total Price</div>,
  //   cell: ({ row }) => (
  //     <div className={`capitalize text-center text-[13px] ${row.getValue("bookingStatus") == "active" ? "text-sky-400" : row.getValue("bookingStatus") === "inactive" ? "text-slate-500" : row.getValue("bookingStatus") === "pending" ? "text-slate-500" : "text-red-500"}`}>{row.getValue("pricing.totalPrice")}</div>
  //   ),
  // },

  // https://cdn-icons-png.flaticon.com/128/6811/6811049.png

  // https://cdn-icons-png.flaticon.com/128/4303/4303935.png

  // https://cdn-icons-png.flaticon.com/128/2704/2704312.png

  // https://cdn-icons-png.flaticon.com/128/2762/2762463.png

  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
      const dispatch = useDispatch()
      // console.log(payment._id);
      return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <DotsHorizontalIcon className="h-4 w-4 rounded-none" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className='z-50'>
          <div className="bg-slate-800 pt-[1rem] w-[10rem] h-fit">
            <h1 className="text-slate-400 ml-[1rem]">Actions</h1>
            <div className="mt-4">
              <button onClick={() => dispatch(updateOrderStatus(payment._id, 'active'))} className="py-3 text-slate-400 text-start px-[1rem] hover:text-white  text-[14px] hover:bg-green-600 w-[100%]">
                Accept Booking
              </button>
              <button
                // onClick={() => dispatch(deleteEmployee(payment._id))}
                onClick={() => dispatch(updateOrderStatus(payment._id, 'declined', 'Nothing'))} 
                className="py-3 text-slate-400 text-start px-[1rem] text-[14px] hover:bg-red-600 hover:text-white w-[100%]"
              >
                Decline Booking
              </button>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      )
    },
  },
]

export function DataTableDemo2({ data }) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

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
    <div className="w-[100%] exo">
      <div className="flex items-center flex-wrap gap-y-4 py-4">
        <Input
          placeholder="Filter Property name..."
          value={
            (table.getColumn('property_name')?.getFilterValue() as string) ?? ''
          }
          onChange={event =>
            table.getColumn('property_name')?.setFilterValue(event.target.value)
          }
          className="max-w-sm rounded-none  bg-slate-900 border-slate-600 text-white h-[50px] text-[13px] placeholder:text-white"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto rounded-none text-[13px] text-white bg-slate-900 border-slate-600"
            >
              Columns <ChevronDownIcon className="ml-2 h-4 w-4 " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(column => column.getCanHide())
              .map(column => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize text-[13px]"
                    checked={column.getIsVisible()}
                    onCheckedChange={value => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md ">
        <Table>
          <TableHeader className="text-[17px] bg-slate-900 ">
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow
                key={headerGroup.id}
                className="border-b border-slate-900"
              >
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-white text-[14px]"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className={`${
                    index % 2 === 0
                      ? 'bg-slate-700 hover:bg-slate-800'
                      : 'bg-slate-800 hover:bg-slate-900'
                  } border-0 py-8 `}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell
                      key={cell.id}
                      className={` text-slate-600 ${index % 2 === 0 ? 'text-white' : 'text-slate-400'}`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
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
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="rounded-none"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="rounded-none"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
