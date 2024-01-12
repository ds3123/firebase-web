import { DataTable } from "@/components/ui/data-table"
import { Plans , columns } from "@/components/layout/table/plans_columns"



async function getData() : Promise< Plans[] > {
  
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

// # 方案頁
export default async function Plans_Page(){

  // 取得資料
  const data = await getData() ;


  return <>

            <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 

         </>
  
  
} 