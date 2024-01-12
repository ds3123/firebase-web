
import { DataTable } from "@/components/ui/data-table"
import { ExtraItems , columns } from "@/components/layout/table/prices_extra_items_columns"



async function getData() : Promise< ExtraItems[] > {
  
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


// # 管理區 > 價格管理 > 加價項目
export default async function Prices_ExtraItems_Page(){

  
  // 取得資料
  const data = await getData() ;

  return <>
   
            <div className = "label" > 價格管理 / 加價項目 </div>  

            <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 

         </>
  
}