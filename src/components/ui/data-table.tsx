"use client"
import {
        ColumnDef,
        flexRender,
        getCoreRowModel,
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

import { useEffect_Data_Table } from "@/hooks/useEffect_Data_Table" 



interface DataTableProps< TData , TValue > {

  columns   : ColumnDef< TData , TValue >[] ;
  data      : TData[] ;
  filter    : string[] ;

}



// # 資料表格（ 官網範例擷取 ）
export function DataTable< TData , TValue >( { columns , data , filter } : DataTableProps< TData , TValue > ) {


  // 表格設定
  const table = useEffect_Data_Table( columns , data ) ;


  return <>

            { /* 功能列 */ }
            <div className = "grid grid-cols-4 gap-4">

                { /* 篩選 */ }
                { filter?.map( ( x , y ) => {

                    return  <Input key         = { y } 
                                   placeholder = { `Filter ${ x }` } 
                                   value       = { ( table.getColumn( x )?.getFilterValue() as string ) ?? "" }
                                   onChange    = { ( event ) => table.getColumn( x )?.setFilterValue( event.target.value ) }
                                   className   = "max-w-sm" />

                })}
            

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
            <div className = "rounded-md border">

                <Table>

                    <TableHeader>

                        { table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
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
                        ))}

                    </TableHeader>

                    <TableBody>

                        { table.getRowModel().rows?.length ? (

                                table.getRowModel().rows.map( ( row ) =>  
                                    <TableRow key = { row.id } data-state = { row.getIsSelected() && "selected" } >
                                        { row.getVisibleCells().map((cell) => <TableCell key={ cell.id }>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        )}
                                    </TableRow>
                                )

                            ) : <TableRow>
                                <TableCell colSpan = { columns.length } className = "h-24 text-center">
                                    <span className = "p-3 bg-red-600 text-white rounded-lg" >
                                         無相關資料
                                    </span>
                                </TableCell>
                                </TableRow>
                        }

                    </TableBody>

                </Table>

            </div>

            { /* 前後頁 */ }
            <div className = "flex items-center justify-center space-x-2 py-4" >

                    <Button variant  = "outline" 
                            size     = "sm" 
                            onClick  = { () => table.previousPage() } 
                            disabled = { !table.getCanPreviousPage() } >
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
