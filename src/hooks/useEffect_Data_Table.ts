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


// # Shadcn Data Table 功能狀態設定
export const useEffect_Data_Table = < TData , TValue >( columns : ColumnDef< TData , TValue >[]  , data : TData[] ) => {


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

   return table ;

} ;