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
import { useDispatch } from 'react-redux'
import { deleteEmployee } from '@/action/employee'
export const columns = [

  {
    accessorKey: 'img',
    header: () => <p className="text-[14px]">Avatar</p>,
    cell: ({ row }) => (
      <div className="capitalize">
        <img src={row.getValue('img')} className="w-10 rounded- h-10" />
      </div>
    ),
  },
  {
    accessorKey: 'firstname',
    header: () => <p className="text-[14px]">Firstname</p>,
    cell: ({ row }) => (
      <h1 className="text-[13px]">{row.getValue('firstname')}</h1>
    ),
  },
  {
    accessorKey: 'lastname',
    header: () => <p className="text-[14px]">Lastname</p>,
    cell: ({ row }) => (
      <div className="text-[13px]">{row.getValue('lastname')}</div>
    ),
  },

  {
    accessorKey: 'email',
    header: () => <p className="text-[14px]">Email</p>,
    cell: ({ row }) => (
      <div className="text-[13px]">{row.getValue('email')}</div>
    ),
  },
  {
    accessorKey: 'status',
    header: () => <p className="text-[14px]">Status</p>,
    cell: ({ row }) => (
      <div className="text-[13px]">{row.getValue('status')}</div>
    ),
  },
  {
    accessorKey: 'job_type',
    header: () => <p className="text-[14px]">Job Type</p>,
    cell: ({ row }) => (
      <div className="text-[13px]">{row.getValue('job_type')}</div>
    ),
  },
  {
    accessorKey: 'role',
    header: () => <p className="text-[14px]">Role</p>,
    cell: ({ row }) => (
      <div className="text-[13px]">{row.getValue('role')}</div>
    ),
  },

  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
      const dispatch = useDispatch()

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4 rounded-none" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="bg-slate-800 pt-[1rem] w-[10rem] h-fit">
              <h1 className="text-slate-400 ml-[1rem]">Actions</h1>
              <div className="mt-4">
                <button className="py-3 text-slate-400 text-start px-[1rem]  text-[14px] hover:bg-slate-600 w-[100%]">
                  Update Status
                </button>
                <button
                  onClick={() => dispatch(deleteEmployee(payment._id))}
                  className="py-3 text-slate-400 text-start px-[1rem] text-[14px] hover:bg-red-600 hover:text-white w-[100%]"
                >
                  Delete Employee
                </button>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
export function EmployeeTable({ data }) {
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
      <div className="flex flex-wrap gap-y-4 items-center py-4 ">
        <Input
          placeholder="Filter First name..."
          value={
            (table.getColumn('first_name')?.getFilterValue() as string) ?? ''
          }
          onChange={event =>
            table.getColumn('property_name')?.setFilterValue(event.target.value)
          }
          className="max-w-sm rounded-none bg-slate-900 border-slate-600 text-white text-[15px] h-[50px] placeholder:text-white"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto rounded-none text-white bg-slate-900 border-slate-600"
            >
              Columns <ChevronDownIcon className="ml-2 h-4 w-4 rounded-none" />
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
                    className="capitalize"
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
          <TableHeader className="bg-slate-950 h-[3rem]">
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow
                key={headerGroup.id}
                className="hover:bg-slate-800 text-[13px]"
              >
                {headerGroup.headers.map((header, index) => {
                  return (
                    <TableHead key={header.id} className={`text-white `}>
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
                  data-state={row.getIsSelected() && 'selected'}
                  className={`${
                    index % 2 === 0
                      ? 'bg-slate-700 text-slate-400 hover:text-slate-800'
                      : 'bg-slate-800 text-slate-700'
                  } border-0 py-8`}
                >
                  {row.getVisibleCells().map(cell => {
                    return (
                      <TableCell
                        key={cell.id}
                        // className={` text-slate-600 ${
                        //   index % 2 === 0 ? 'text-white' : 'text-slate-400'
                        // } `}
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
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4 px-[1rem]">
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
