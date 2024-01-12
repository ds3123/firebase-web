import { DataTable } from "@/components/ui/data-table"
import { Lodges , columns } from "@/components/layout/table/lodges_columns"



async function getData() : Promise< Lodges[] > {
  
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

// # 住宿、安親頁
export default async function Lodge_Page(){
  
  
  // 取得資料
  const data = await getData() ;


  return <>

            <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 

         </>
    
}
  