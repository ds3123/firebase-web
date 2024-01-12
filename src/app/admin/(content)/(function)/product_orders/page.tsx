import { DataTable } from "@/components/ui/data-table"
import { ProductOrders , columns } from "@/components/layout/table/product_orders_columns"



async function getData() : Promise< ProductOrders[] > {
  
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

         ]

}



// # 商品訂單頁
export default async function Product_Orders_Page(){

  // 取得資料
  const data = await getData() ;

  return <>

            <DataTable columns = { columns } data = { data } filter = { [ "serial" ] }  /> 

         </>
  
} 