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
import { DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger, } from '@radix-ui/react-dropdown-menu'
import { Input } from '@/~/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/~/components/ui/table'

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'property_name',
    header: 'PROPERTY',
    cell: ({ row }) => (
      <div className="capitalize text-[13px] w-5/12">
        {row.getValue('property_name')}
      </div>
    ),
  },
  {
    accessorKey: 'checkout',
    header: 'Checkout Date',
    cell: ({ row }) => (
      <div className="capitalize text-[13px]">{row.getValue('checkout')}</div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div
        className={`capitalize text-[13px] text-start ${row.getValue('status') == 'active' ? 'text-green-400' : row.getValue('status') === 'inactive' ? 'text-slate-500' : row.getValue('status') === 'pending' ? 'text-slate-500' : 'text-red-500'}`}
      >
        {row.getValue('status')}
      </div>
    ),
  },
  {
    accessorKey: 'price',
    header: () => <div className="">Total Price</div>,
    cell: ({ row }) => (
      <div
        className={`capitalize text-[13px] text-start ${row.getValue('status') == 'active' ? 'text-green-400' : row.getValue('status') === 'inactive' ? 'text-slate-500' : row.getValue('status') === 'pending' ? 'text-slate-500' : 'text-red-500'}`}
      >
        $ {row.getValue('price')}
      </div>
    ),
  },

  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div
        className={`capitalize border text-center py-2 px-0 text-[13px] ${row.getValue('status') == 'active' ? 'text-green-400 border-green-400' : row.getValue('status') === 'inactive' ? 'text-slate-500 border-slate-500' : row.getValue('status') === 'pending' ? 'text-slate-500 border-slate-500' : 'text-red-500 border-red-500'}`}
      >
        {row.getValue('status')}
      </div>
    ),
  },
]

export function PaymentTable({ data }) {
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
    <div className="w-full exo">
      <div className="flex flex-wrap gap-y-4 items-center py-4">
        <Input
          placeholder="Filter Property name..."
          value={
            (table.getColumn('property_name')?.getFilterValue() as string) ?? ''
          }
          onChange={event =>
            table.getColumn('property_name')?.setFilterValue(event.target.value)
          }
          className="max-w-sm bg-slate-900 border-slate-600 text-white text-[13px] h-[50px] placeholder:text-white rounded-none"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto rounded-none text-white text-[13px] bg-slate-900 border-slate-600"
            >
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
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
          <TableHeader className="text-[17px] bg-slate-900 border border-slate-900">
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow
                key={headerGroup.id}
                className="border hover:bg-slate-800 border-slate-900"
              >
                {headerGroup.headers.map((header, index) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`text-white text-[14px] ${index === 0 && 'w-4/12 border-slate-800'}`}
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

          {/* <div>
          <h1>
            Rent Due Within 3 Days
          </h1> */}
          {/* <h1>
            Rent Due Within 3 Days
          </h1>
           */}

          <TableBody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => {
                console.log(row.original)
                if (row.original !== 'active') {
                  return null // Return null to skip rendering this row
                }
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className={`${index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-900'} border-0 py-8`}
                  >
                    {row.getVisibleCells().map(cell => (
                      <TableCell
                        key={cell.id}
                        className={`mt-3 text-slate-600 ${index % 2 === 0 ? 'text-white' : 'text-slate-400'}`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                )
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

          {/* <TableBody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => {
                console.log(row.original)
                if(row.original != "active") {
                  return;
                }  
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={`${index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-900'} border-0 py-8`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id } className={`mt-3 text-slate-600 ${index % 2 === 0 ? 'text-white' : 'text-slate-400'} `}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                        
                      </TableCell>
                    ))}
                  </TableRow>
                )
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
          </TableBody> */}
          {/* </div>



          <div>
          <h1>
            Rent Due Later
          </h1> */}
          {/* <h1>
            Rent Due Later
          </h1> */}
          <TableBody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className={`${index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-950'} border-0 py-8`}
                >
                  {row.getVisibleCells().map(cell => {
                    // console.log(cell)
                    return (
                      <TableCell
                        key={cell.id}
                        className={` text-slate-600 ${index % 2 === 0 ? 'text-white' : 'text-slate-400'} `}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    )
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
          {/* </div> */}
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
