
import { DataTable } from "@/components/ui/data-table"
import { ServiceTags , columns } from "@/components/layout/table/system_service_tags_columns"


async function getData() : Promise< ServiceTags[] > {
  
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

// # 管理區 > 系統設定 > 洗美標籤
export default async function System_Service_Tags_Page(){

  
  // 取得資料
  const data = await getData() ;


  return <>

            <div className = "label" > 資料管理 / 洗美標籤 </div>

            <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 

         </>
  
}