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

import { Button } from '@/~/components/ui/button'
import { Checkbox } from '@/~/components/ui/checkbox'

import { Input } from '@/~/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/~/components/ui/table'
import { addCommasToNumber, formatDate } from '../utils'


export type Payment = {
  pricing: any
  propertyInformation: any
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
    accessorKey: 'propertyInformation.properttyName',
    header: 'Property type',
    cell: ({ row }) => {
      const propertyInformation = row.original?.propertyInformation

      if (propertyInformation && propertyInformation.propertyName) {
        console.log(propertyInformation.propertyName)

        return (
          <div className="capitalize text-[13px]">
            {propertyInformation.propertyName}
          </div>
        )
      } else {
        // Handle the case where propertyInformation or propertyType is undefined
        return <div className="capitalize ">N/A</div>
      }
    },
  },

  {
    accessorKey: 'propertyInformation.propertyType',
    header: 'Property type',
    cell: ({ row }) => {
      const propertyInformation = row.original?.propertyInformation

      if (propertyInformation && propertyInformation.propertyType) {

        return (
          <div className="capitalize text-[13px]">
            {propertyInformation.propertyType}
          </div>
        )
      } else {
        // Handle the case where propertyInformation or propertyType is undefined
        return <div className="capitalize ">N/A</div>
      }
    },
  },

  {
    accessorKey: 'checkinDate',
    header: 'Checkin Date',
    cell: ({ row }) => (
      <div
        className={`capitalize text-[12px] ${
          row.getValue('bookingStatus') === 'active' ||
          row.getValue('bookingStatus') === 'ongoing'
            ? 'text-green-500'
            : row.getValue('bookingStatus') === 'pending'
              ? 'text-yellow-500'
              : row.getValue('bookingStatus') === 'expired' ||
                (row.getValue('bookingStatus') === 'declined' && 'text-red-500')
        }`}
      >
        {formatDate(row.getValue('checkinDate'))}
      </div>
    ),
  },
  {
    accessorKey: 'checkoutDate',
    header: 'Checkout Date',
    cell: ({ row }) => {
      return (
        <div
          className={`capitalize text-[12px] ${
            row.getValue('bookingStatus') === 'active' ||
            row.getValue('bookingStatus') === 'ongoing'
              ? 'text-green-500'
              : row.getValue('bookingStatus') === 'pending'
                ? 'text-yellow-500'
                : row.getValue('bookingStatus') === 'expired' ||
                  (row.getValue('bookingStatus') === 'declined' &&
                    'text-red-500')
          }`}
        >
          {formatDate(row.getValue('checkoutDate'))}
        </div>
      )
    },
  },
  {
    accessorKey: 'bookingStatus',
    header: 'Status',
    cell: ({ row }) => {
      return (
        <div
          className={`capitalize text-[12px] ${
            row.getValue('bookingStatus') === 'active' ||
            row.getValue('bookingStatus') === 'ongoing'
              ? 'text-green-500'
              : row.getValue('bookingStatus') === 'pending'
                ? 'text-yellow-500'
                : row.getValue('bookingStatus') === 'expired' ||
                  (row.getValue('bookingStatus') === 'declined' &&
                    'text-red-500')
          }`}
        >
          {row.getValue('bookingStatus')}
        </div>
      )
    },
  },
  {
    accessorKey: 'pricing',
    header: 'Property type',
    cell: ({ row }) => {
      const pricing = row.original?.pricing

      if (pricing && pricing.totalPrice) {

        return (
          <div
            className={`capitalize text-[12px] ${
              row.getValue('bookingStatus') === 'active' ||
              row.getValue('bookingStatus') === 'ongoing'
                ? 'text-green-500'
                : row.getValue('bookingStatus') === 'pending'
                  ? 'text-yellow-500'
                  : row.getValue('bookingStatus') === 'expired' ||
                    (row.getValue('bookingStatus') === 'declined' &&
                      'text-red-500')
            }`}
          >
            ₦ {addCommasToNumber(pricing.totalPrice)}
          </div>
        )
      } else {
        // Handle the case where propertyInformation or propertyType is undefined
        return <div className="capitalize ">N/A</div>
      }
    },
  },

]

export function OrderTable({ orders }: { orders: Payment[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

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
  })

  return (
    <div className="w-[100%] exo">
      <div className="rounded-md ">
        <Table>
          <TableHeader className="text-[15px] bg-slate-100 ">
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow
                key={headerGroup.id}
                className="border-slate-200 shadow-md "
              >
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-slate-500 text-[13px]"
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
                  className={`${index % 2 === 0 ? 'bg-slate-800 text-slate-50 hover:text-slate-800' : 'bg-slate-950'} border-0 py-8`}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell
                      key={cell.id}
                      className={` text-slate- ${index % 2 === 0 ? '' : 'text-slate-400'}`}
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
                  className="h-24 text-center text-[13px]"
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
          <button
            className={`b text-[14px] px-6 text-white hover:cursor-pointer py-2 ${!table.getCanNextPage() ? 'bg-slate-300 cursor-not-allowed' : 'bg-slate-500'}`}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </button>
          <button
            className={`b text-[14px] px-6 text-white hover:cursor-pointer py-2 ${!table.getCanNextPage() ? 'bg-slate-300 cursor-not-allowed' : 'bg-slate-500'}`}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
