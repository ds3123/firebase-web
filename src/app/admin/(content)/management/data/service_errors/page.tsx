
import { DataTable } from "@/components/ui/data-table"
import { Payment , columns } from "@/components/layout/table/pets_columns"


async function getData() : Promise< Payment[] > {
  
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


// # 管理區 > 資料管理 > 服務異常
export default async function Data_Service_Errors_Page(){
  
  // 取得資料
  const data = await getData() ;

  return <>

            <div className = "label" > 資料管理 / 服務異常 </div>

            <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 

         </>
  
}