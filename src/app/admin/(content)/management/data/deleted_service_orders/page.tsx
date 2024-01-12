
import { DataTable } from "@/components/ui/data-table"
import { DeletedServiceOrders , columns } from "@/components/layout/table/data_deleted_serviceorders_columns"


async function getData() : Promise< DeletedServiceOrders[] > {
  
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

// # 管理區 > 資料管理 > 銷單資料
export default async function Data_Deleted_ServiceOrders_Page(){

  // 取得資料
  const data = await getData() ;

  return <>

            <div className = "label" > 資料管理 / 銷單資料 </div>

            <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 

         </>
  
}