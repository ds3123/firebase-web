

"use client"
import { ColumnDef } from "@tanstack/react-table" 


export type ServiceTags = {

    id     : string
    amount : number
    status : "pending" | "processing" | "success" | "failed"
    email  : string
    
} ;


// # 欄位定義
export const columns : ColumnDef< ServiceTags >[] = [

    {
      accessorKey : "serial" ,
      header      : "寵物編號" ,
      cell        : "343"
    }

] ;