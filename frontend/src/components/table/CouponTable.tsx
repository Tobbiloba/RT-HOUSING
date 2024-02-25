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
import {   DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
 } from '@radix-ui/react-dropdown-menu'
import { Input } from '@/~/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/~/components/ui/table'
import { BsClipboard } from 'react-icons/bs'
import { ToastButton } from '@/components/common/toast/Toast'
import { FaLongArrowAltUp } from 'react-icons/fa'
import { addCommasToNumber } from '../utils'
const CodeCard = ({ code }: any) => {
  const [showClipboard, setShowClipboard] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setShowClipboard(true)}
      onMouseLeave={() => setShowClipboard(false)}
      className={`capitalize flex flex-row items-center gap-3 text-[13px] font-[600] text-start `}
    >
      {code}{' '}
      {showClipboard && (
        <div>
          <BsClipboard className="text-white cursor-pointer" />
        </div>
      )}
    </div>
  )
}
export const columns = [
  {
    accessorKey: 'coupon_code',
    header: () => <div className="h-[100%] py-3">code</div>,
    cell: ({ row }) => (
      <CodeCard
        code={row.getValue('coupon_code')}
        status={row.getValue('status')}
      />
    ),
  },
  {
    accessorKey: 'min_purchase',
    header: () => (
      <div className="">
        <p>Min Purchase</p>{' '}
        <FaLongArrowAltUp className="mt-2 text-white text-xl" />
      </div>
    ),
    cell: ({ row }) => {

      return (
        <div className={`capitalize text-[13px] text-start `}>
         ₦ {addCommasToNumber(row.getValue('min_purchase'))}
        </div>
      )
    },
  },
  {
    accessorKey: 'discount_type',
    header: () => (
      <div className="">
        <p>Discount Type</p>{' '}
        <FaLongArrowAltUp className="mt-2 text-white text-xl" />
      </div>
    ),
    cell: ({ row }) => (
      <div className={`capitalize text-[13px] text-start `}>
        {row.getValue('discount_type')}
      </div>
    ),
  },
  {
    accessorKey: 'discount_price',
    header: () => (
      <div className="">
        <p>Discount Price</p>{' '}
        <FaLongArrowAltUp className="mt-2 text-white text-xl" />
      </div>
    ),
    cell: ({ row }) => (
      <div className={`capitalize text-[13px] text-start `}>
        ₦{addCommasToNumber(row.getValue('discount_price'))}
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: () => (
      <div className="">
        <p>Status</p> <FaLongArrowAltUp className="mt-2 text-white text-xl" />
      </div>
    ),
    cell: ({ row }) => (
      <div
        className={`flex flex-row gap-4 items-center ${
          row.getValue('status') == 'active'
            ? 'text-green-400'
            : row.getValue('status') === 'inactive'
              ? 'text-slate-500'
              : row.getValue('status') === 'pending'
                ? 'text-slate-500'
                : 'text-red-500'
        }`}
      >
        <div
          className={`capitalize border text-center text-[13px] ${
            row.getValue('status') == 'active'
              ? 'text-green-400 border-green-400 bg-green-500 '
              : row.getValue('status') === 'inactive'
                ? 'text-slate-500 border-slate-500 bg-slate-500'
                : row.getValue('status') === 'pending'
                  ? 'text-slate-500 border-slate-500 bg-slate-500'
                  : 'text-red-500 border-red-500 bg-red-500'
          } w-3 h-3`}
        ></div>
        {row.getValue('status')}
      </div>
    ),
  },
]
export function CouponTable({ data }) {
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
      <div className="rounded-md ">
        <Table>
          <TableHeader className="bg-slate-950 h-[3rem]">
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow
                key={headerGroup.id}
                className="hover:bg-slate-800 text-[13px]"
              >
                {headerGroup.headers.map((header, index) => {
                  return (
                    <TableHead key={header.id} className={`text-white`}>
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
            {table.getRowModel().rows?.length && (
              table.getRowModel().rows.map((row, index) => {
                if (row.original !== 'active') {
                  return null
                }
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className={`${
                      index % 2 === 0
                        ? 'bg-slate-700 hover:bg-slate-800'
                        : 'bg-slate-800 hover:bg-slate-900'
                    } border-0 py-8 bg-black `}
                  >
                    {row.getVisibleCells().map(cell => (
                      <TableCell
                        key={cell.id}
                        className={`mt-3 text-slate-600 ${
                          index % 2 === 0 ? 'text-white' : 'text-slate-400'
                        } bg-black`}
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
            ) }
          </TableBody>
          <TableBody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className={`${
                    index % 2 === 0
                      ? 'bg-slate-700 text-slate-400 hover:text-slate-800'
                      : 'bg-slate-800'
                  } border-0 py-8`}
                >
                  {row.getVisibleCells().map(cell => {
                    return (
                      <TableCell
                        key={cell.id}
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
                  className="h-24 text-center text-white"
                >
                  No coupon
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4 px-[1rem]">
        <div className="flex-1 text-sm text-white">
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
