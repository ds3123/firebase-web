"use client"
import { ColumnDef } from "@tanstack/react-table" 
import { RightSheet_Update } from "@/components/layout/panel/right_sheet_update"
import { Customers_Form } from "@/components/layout/form/customers/customers_form"
import { read_Single_Customer } from "@/api/customers/read_customers"
import { Button } from "@/components/ui/button"
import { delete_Single_Customer } from "@/api/customers/delete_customers"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
 } from "@/components/ui/dropdown-menu"
 import { MoreHorizontal  } from "lucide-react"
 import { update_Single_Customer } from "@/api/customers/update_customers"
 import moment from "moment";




// 先輸入 document id，再回傳 _ Customers_Form 元件
const customers_Form = ( doc_Id : string ) => ( data : any ) : JSX.Element => {

   return <Customers_Form data = { data } edit_func = { ( data ) => update_Single_Customer( doc_Id , data ) }/>

} ;



export type Customers  = {

    id                 : string ;
    customer_name      : string ;
    customer_sex       : "男" | "女" ;
    customer_mobile    : string ;
    customer_telephone : string ;
    customer_email     : string ;
    customer_line      : string ;
    customer_address   : string ;
    customer_id        : string ;
    customer_note      : string ;
    timestamp          : any ;
    
} ;

// # 欄位定義
export const columns : ColumnDef< Customers >[] = [
  
    {
      accessorKey : "customer_name" ,
      header      : () => <div className = "text-center" > 客戶姓名 </div> ,
      cell        : ( { row } ) => {

                        const cus = row.original ;
                       
                        return <RightSheet_Update button_title = { cus.customer_name } 
                                                  sheet_title  = "修改客戶資料" 
                                                  query_fn     = { () => read_Single_Customer( cus.id ) }
                                                  component    = { customers_Form( cus.id ) }  />

                   } 
      
    } ,

    {
      accessorKey : "customer_sex" ,
      header      : () => <div className = "text-center" > 客戶性別 </div>  ,
      cell        : ( { row } ) => {

                          return <div className = "text-center" > { row.getValue( "customer_sex" ) } </div>


                       }
    } ,

    {
      accessorKey : "customer_mobile" ,
      header      : () => <div className = "text-center" > 手機號碼 </div>  ,
      cell        : ( { row } ) => {

                        return <div className = "text-center" > { row.getValue( "customer_mobile" ) } </div>

                    }
    } ,

    {
      accessorKey : "customer_telephone" ,
      header      : () => <div className = "text-center" > 家用電話 </div> ,
      cell        : ( { row } ) => {

                        return <div className = "text-center" > { row.getValue( "customer_telephone" ) } </div>

                    }
    } ,

    {
      accessorKey : "customer_pets" ,
      header      : () => <div className = "text-center" > 客戶寵物 </div> ,
     
    } ,

    {
      accessorKey : "customer_address" ,
      header      : () => <div className = "text-center" > 通訊地址 </div>,
      cell        : ( { row } ) => {

                        return row.getValue( "customer_address" )

                    }
    } ,

    {
      accessorKey : "customer_history" ,
      header      : () => <div className = "text-center" > 消費歷史 </div> ,
      cell        : ({ row }) => {

      
                                
                                    return <div className = "text-center" > 
                                              檢視
                                          </div> ;

   }
      
    } ,

    {

      accessorKey : "timestamp" ,
      header      : () => <div className = "text-center" > 建檔日期 </div> ,
      cell        : ({ row }) => {

                                  const timestamp : any = row.getValue( "timestamp" ) ;
                              
                                  return <div className = "text-center" > 
                                             {  timestamp ? moment( timestamp.toDate() ).format( 'YYYY-MM-DD' ) : "" } 
                                         </div> ;

                             }
      
    } ,

    {
   
      id     : "actions" ,
      header : "其 他" ,
      cell   : ({ row }) => {
  
                              const cus = row.original
                          
                              return <DropdownMenu>
  
                                          <DropdownMenuTrigger asChild>
                                              <Button variant="ghost" className = "h-8 w-8 p-0">
                                                  <MoreHorizontal className = "h-4 w-4" />
                                              </Button>
                                          </DropdownMenuTrigger>

                                          <DropdownMenuContent align = "end" >
                                              <DropdownMenuLabel>  客戶資料相關操作 </DropdownMenuLabel>
                                              <DropdownMenuSeparator /> 
                                              <DropdownMenuItem className = "cursor-pointer" onClick={ () => { if( window.confirm( "確認要刪除此筆資料？" ) ) delete_Single_Customer( cus.id ) } } >
                                              <span className = "text-red-600 ml-1" >  刪除客戶 :  <b> { cus.customer_name  } </b> </span>
                                              </DropdownMenuItem>
                                          </DropdownMenuContent>
  
                                      </DropdownMenu>
  
                            }
  }  ,

      
    
] ;