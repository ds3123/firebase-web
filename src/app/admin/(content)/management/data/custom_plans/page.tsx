
import { DataTable } from "@/components/ui/data-table"
import { CustomPlans , columns } from "@/components/layout/table/data_custom_plans_columns"


async function getData() : Promise< CustomPlans[] > {
  
    // Fetch data from your API here.
    return [
              {
                id: "728ed52f",
                amount: 100,
                status: "pending",
                email: "m@example.com",
              },
              
           ]
  
  }


// # 管理區 > 資料管理 > 自訂方案
export default async function Data_CustomPlans_Page(){

   // 取得資料
   const data = await getData() ;

   return <>
 
             <div className = "label" > 資料管理 / 自訂方案 </div>

             <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 
 
          </>
  
}