
import { DataTable } from "@/components/ui/data-table"
import { Employees , columns } from "@/components/layout/table/employees_columns"


async function getData() : Promise< Employees[] > {
  
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

// # 管理區 > 員工管理
export default async function Management_Employees_Page(){

  // 取得資料
  const data = await getData() ;

  return <>
         
            <div className = "label" > 員工管理 </div>

            <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 

         </>
  
}
