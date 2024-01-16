
"use client"
import { columns } from "@/components/layout/table/customers_columns"
import { RightSheet_Create } from "@/components/layout/panel/right_sheet_create"
import { Customers_Form } from "@/components/layout/form/customers/customers_form"
import { DataTable } from "@/components/ui/data-table"
import { useEffect_Listen_Customers_Collection } from "@/hooks/customers/useEffect_Listen_Customers_Collection"
import { create_Single_Customer } from "@/api/customers/create_customers"
import { create_Customer_Schema } from "@/utils/validator/customers_schema"

// # 客戶頁
export default function Customers_Page(){

   
  // 監聽 ( 取得 ) _ customers collection 資料
  const customers = useEffect_Listen_Customers_Collection() ;

  
  return <>
            
            <div className = "text-right" >
                <RightSheet_Create button_title = "新增客戶" 
                                   sheet_title  = "新增客戶" 
                                   component    = { <Customers_Form edit_func   = { ( data ) => create_Single_Customer( data ) }
                                                                    form_schema = { create_Customer_Schema } /> } />
            </div> 
           
            <DataTable columns = { columns } data = { customers } filter = { [ "customer_name" , "customer_mobile" ] }  />

         </>
  
}
