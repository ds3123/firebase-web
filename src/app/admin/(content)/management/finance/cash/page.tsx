
import { DataTable } from "@/components/ui/data-table"
import { FinanceCash , columns } from "@/components/layout/table/finance_cash_columns"


async function getData() : Promise< FinanceCash[] > {
  
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

         ]

}


// # 管理區 > 財務管理 > 現金帳
export default async function Finance_Cash_Page(){


  // 取得資料
  const data = await getData() ;


  return <>

            <div className = "label" > 財務管理 / 現金績效 </div> 

            <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 

         </>

  
}