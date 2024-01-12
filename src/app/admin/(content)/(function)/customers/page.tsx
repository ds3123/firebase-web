import { Payment , columns } from "@/components/layout/table/customers_columns"
import { RightSheet } from "@layout/panel/right_sheet"
import { PaymentForm_Create } from "@/components/layout/form/customers/customers_form_create"
import { DataTable } from "@/components/ui/data-table"


async function getData() : Promise< Payment[] > {
  
  // Fetch data from your API here.
  return [
            {
              id: "728ed52f",
              amount: 100,
              status: "pending",
              email: "m@example.com",
            },
            {
              id: "489e1d42",
              amount: 125,
              status: "processing",
              email: "ds312306@gmail.com",
            },
            {
              id: "728ed52f",
              amount: 100,
              status: "pending",
              email: "m@example.com",
            },
            {
              id: "489e1d42",
              amount: 125,
              status: "processing",
              email: "example@gmail.com",
            },
            {
              id: "728ed52f",
              amount: 100,
              status: "pending",
              email: "m@example.com",
            },
            {
              id: "489e1d42",
              amount: 125,
              status: "processing",
              email: "example@gmail.com",
            },
            {
              id: "728ed52f",
              amount: 100,
              status: "pending",
              email: "m@example.com",
            },
            {
              id: "489e1d42",
              amount: 125,
              status: "processing",
              email: "example@gmail.com",
            },
            {
              id: "728ed52f",
              amount: 100,
              status: "pending",
              email: "m@example.com",
            },
            {
              id: "489e1d42",
              amount: 125,
              status: "processing",
              email: "example@gmail.com",
            },
            {
              id: "728ed52f",
              amount: 100,
              status: "pending",
              email: "m@example.com",
            },
            {
              id: "489e1d42",
              amount: 125,
              status: "processing",
              email: "example@gmail.com",
            }
          

         ]

}


// # 客戶頁
export default async function Customers_Page(){


  // 取得資料
  const data = await getData() ;

  
  return <>
            
            <div className = "text-right" >
                <RightSheet title = "新增客戶" component = { <PaymentForm_Create /> } />
            </div>
           
            <DataTable columns = { columns } data = { data } filter = { [ "status" , "email" ] }  /> 

         </>
  
}
