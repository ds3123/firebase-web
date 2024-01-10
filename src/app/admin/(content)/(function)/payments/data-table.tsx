
"use client"


import { useState } from 'react' ;

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

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
         DropdownMenu,
         DropdownMenuCheckboxItem,
         DropdownMenuContent,
         DropdownMenuTrigger,
       } from "@/components/ui/dropdown-menu"



interface DataTableProps< TData , TValue > {
                                             columns : ColumnDef<TData, TValue>[]
                                              data    : TData[]
                                           }



// # 資料表格                                        
export function DataTable< TData , TValue >( { columns, data } : DataTableProps< TData , TValue > ){ 


    // 排序    
    const [ sorting , setSorting ]                   = useState< SortingState >( [] ) ;

    // 篩選
    const [ columnFilters , setColumnFilters ]       = useState< ColumnFiltersState >( [] ) ;

    // 顯示欄位
    const [ columnVisibility , setColumnVisibility ] = useState< VisibilityState >( {} ) ;

    // 選擇列
    const [ rowSelection , setRowSelection ]         = useState( {} ) ;


  const table = useReactTable({
                                data ,
                                columns ,
                                getCoreRowModel          : getCoreRowModel() ,

                                // 分頁
                                getPaginationRowModel    : getPaginationRowModel() ,

                                // 排序
                                onSortingChange          : setSorting ,
                                getSortedRowModel        : getSortedRowModel() ,

                                // 篩選
                                onColumnFiltersChange    : setColumnFilters ,
                                getFilteredRowModel      : getFilteredRowModel() ,

                                // 顯示欄位  
                                onColumnVisibilityChange : setColumnVisibility ,

                                // 選擇列
                                onRowSelectionChange     : setRowSelection ,

                                // 各種 state
                                state                    : {
                                                             sorting ,          // 排序
                                                             columnFilters ,    // 篩選
                                                             columnVisibility , // 顯示欄位
                                                             rowSelection ,     // 選擇列
                                                           }
                              }) ;


  return <>

            { /* 導覽列功能 */ }
            <div className = "flex items-center py-4">

                { /* 篩選 */ }
                <Input placeholder = "Filter emails..."
                       value       = {(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                       onChange    = {(event) => table.getColumn("email")?.setFilterValue(event.target.value) }
                       className   = "max-w-sm" />

                { /* 顯示隱藏欄位 */ }
                <DropdownMenu>

                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                        Columns
                        </Button>
                    </DropdownMenuTrigger>
                    
                    <DropdownMenuContent align="end">
                        {table
                        .getAllColumns()
                        .filter(
                            (column) => column.getCanHide()
                        )
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
                            )
                        })}
                    </DropdownMenuContent>

                </DropdownMenu>

            </div>

            { /* 資料表格 */ }
            <div className = "rounded-md border" >

                <Table>

                    <TableHeader>

                        { table.getHeaderGroups().map((headerGroup) => (

                            <TableRow key={headerGroup.id}>

                                { headerGroup.headers.map((header) => {
                                    return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                            )}
                                    </TableHead>
                                    )
                                })}

                            </TableRow>

                        )) }

                    </TableHeader>

                    <TableBody>

                        { table.getRowModel().rows?.length ? (

                            table.getRowModel().rows.map((row) => (

                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} >

                                    { row.getVisibleCells().map((cell) => (
                                                                            <TableCell key={cell.id}>
                                                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                                            </TableCell>
                                                                        ))}

                                </TableRow>

                            ))

                        ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center">
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}

                    </TableBody>

                </Table>

            </div>

           { /* 前後頁 */ }
            <div className="flex items-center justify-end space-x-2 py-4">

                    <Button variant = "outline" 
                            size    = "sm" 
                            onClick = { () => table.previousPage()} disabled={!table.getCanPreviousPage() } >
                        上一頁
                    </Button>

                    <Button variant  = "outline" 
                            size     = "sm"
                            onClick  = { () => table.nextPage() }
                            disabled = { !table.getCanNextPage() } >
                        下一頁  
                    </Button>

              </div>
  
  
        </>
  
}
