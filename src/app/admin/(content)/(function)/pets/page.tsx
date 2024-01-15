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

// # 寵物頁
export default async function Pets_Page(){


  // 取得資料
  const data = await getData() ;


  return <>

            <DataTable columns = { columns } data = { data } filter = { [ "" ] }  /> 

         </>
  
} 