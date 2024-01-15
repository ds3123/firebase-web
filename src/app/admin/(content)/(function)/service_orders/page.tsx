import { DataTable } from "@/components/ui/data-table"
import { ServiceOrders , columns } from "@/components/layout/table/service_orders_columns"


async function getData() : Promise< ServiceOrders[] > {
  
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
           
          
          

         ]

}


// # 服務訂單頁
export default async function Service_Orders_Page(){

  // 取得資料
  const data = await getData() ;

  return <>

          <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 

         </>
  
} 