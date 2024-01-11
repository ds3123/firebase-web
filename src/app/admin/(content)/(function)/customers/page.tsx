import { Payment, columns } from "./columns"
import { DataTable } from "./data_table"
import { RightSheet } from "@layout/panel/right_sheet"
import { PaymentForm_Create } from "@/components/layout/form/customers/customers_form_create"



async function getData() : Promise< Payment[] > {
  
  // Fetch data from your API here.
  return [
           
          

         ]

}


export default async function Customers_Page(){

  const data = await getData() ;

  return <div className = "container py-10 space-y-8" >
            
            <div className = "text-right" >
                <RightSheet title = "新增付款" component = { <PaymentForm_Create /> } />
            </div>

            <DataTable columns = { columns } data = { data } />

         </div>

  
}
