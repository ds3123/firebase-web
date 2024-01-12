
import { DataTable } from "@/components/ui/data-table"
import { PricesSpecis , columns } from "@/components/layout/table/prices_species_columns"



async function getData() : Promise< PricesSpecis[] > {
  
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



// # 管理區 > 價格管理 > 品種價格
export default async function Prices_Species_Page(){

  
  // 取得資料
  const data = await getData() ;


  return <>

            <div className = "label" > 價格管理 / 品種價格 </div> 

            <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 

         </>
}