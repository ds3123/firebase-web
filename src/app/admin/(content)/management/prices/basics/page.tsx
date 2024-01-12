
import { DataTable } from "@/components/ui/data-table"
import { PricesBasics , columns } from "@/components/layout/table/prices_basics_columns"



async function getData() : Promise< PricesBasics[] > {
  
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

// # 管理區 > 價格管理 > 基礎價格
export default async function Prices_Basics_Page(){

  // 取得資料
  const data = await getData() ;


  return <>

            <div className = "label" > 價格管理 / 基礎價格 </div> 

            <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 

         </>
  
}