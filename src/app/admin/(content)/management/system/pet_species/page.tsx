
import { DataTable } from "@/components/ui/data-table"
import { PetSpecies , columns } from "@/components/layout/table/system_pet_species_columns"


async function getData() : Promise< PetSpecies[] > {
  
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

// # 管理區 > 系統設定 > 寵物品種
export default async function System_Pet_Species_Page(){

  // 取得資料
  const data = await getData() ;

  return <>

            <div className = "label" > 系統設定 / 寵物品種 </div>

            <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 

         </>
  
}