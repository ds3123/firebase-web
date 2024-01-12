
import { DataTable } from "@/components/ui/data-table"
import { Events , columns } from "@/components/layout/table/system_events_columns"


async function getData() : Promise< Events[] > {
  
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


// # 管理區 > 系統設定 > 熱門時段
export default async function System_Events_Page(){

   // 取得資料
   const data = await getData() ;

   return <>
   
             <div className = "label" > 資料管理 / 熱門時段 </div>

             <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 
 
          </>
  
}