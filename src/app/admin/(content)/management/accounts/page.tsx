
import { DataTable } from "@/components/ui/data-table"
import { Accounts , columns } from "@/components/layout/table/accounts_columns"



async function getData() : Promise< Accounts[] > {
  
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

// # 管理區 > 帳戶管理
export default async function Management_Accounts_Page(){

  // 取得資料
  const data = await getData() ;

  return <>

            <div className = "label" > 帳號管理 </div>

            <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 

         </>
  
}
