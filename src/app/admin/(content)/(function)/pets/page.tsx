import { DataTable } from "@/components/ui/data-table"
import { Payment , columns } from "@layout/table/pets_table_columns"



async function getData() : Promise< Payment[] > {
  
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
                email: "example@gmail.com",
              },
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
                email: "example@gmail.com",
              },
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
                email: "example@gmail.com",
              },
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
                email: "example@gmail.com",
              },
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
                email: "example@gmail.com",
              }
            
  
           ]
  
  }

// # 寵物頁
export default async function Pets_Page(){


  // 取得資料
  const data = await getData() ;


  return <>

            <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 



         </>
  
} 