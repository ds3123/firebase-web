
import { DataTable } from "@/components/ui/data-table"
import { RejectedPets , columns } from "@/components/layout/table/data_rejected_pets_columns"


async function getData() : Promise< RejectedPets[] > {
  
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

// # 管理區 > 資料管理 > 拒接寵物
export default async function Data_Rejected_Pets_Page(){

  // 取得資料
  const data = await getData() ;

  return <>

            <div className = "label" > 資料管理 / 拒接寵物 </div>  

            <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 

         </>

}