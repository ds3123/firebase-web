
import { DataTable } from "@/components/ui/data-table"
import { ExtraBeauties , columns } from "@/components/layout/table/prices_extra_beauties_columns"



async function getData() : Promise< ExtraBeauties[] > {
  
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



// # 管理區 > 價格管理 > 加價美容
export default async function Prices_ExtraBeaiuties_Page(){

   // 取得資料
   const data = await getData() ;

   return <>

             <div className = "label" > 價格管理 / 加價美容 </div>  
 
             <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 
 
          </>
  
}