
import Card_Title from "@layout/card/Card_Title"
import { get_Today } from "@/utils/time/date"
import { BsCalendar2Week } from "react-icons/bs" 
import { BsShop } from "react-icons/bs" 
import { BiCut } from "react-icons/bi" 
import { GoHome } from "react-icons/go" 
import { TbDog } from "react-icons/tb" 



// # 首頁
export default async function Dashboard_Page(){


  return <div className = "flex min-h-screen gap-4" >

           { /* 今日預約 */ }
           <div className = "w-1/5 p-3 space-y-4 pt-4 shadow-lg rounded-lg border border-gray-100/70" > 
         
            <Card_Title  title = { `今日預約 ( ${ get_Today().substring( 4 , 9 ) } )` } background = 'bg-yellow-50' icon = { <BsCalendar2Week size = { 22 } /> } />

              <div className = "border-2">dd</div>
              <div className = "border-2">dd</div>
           
           </div>

           { /* 到店狀態 */ }
           <div className = "w-4/5 p-3 pt-4 flex gap-3 shadow-lg rounded-lg border border-gray-100/70" > 

               <div className = "w-1/4" >

                   <Card_Title title = "到店等候中" icon = { <BsShop size = { 22 } /> } />

               </div>

               <div className = "w-1/4" >
                
                   <Card_Title title = "到店美容中" icon = { <BiCut size = { 22 } /> } />

               </div>

               <div className = "w-1/4" >

                   <Card_Title title = "洗完等候中" icon = { <TbDog size = { 25 } /> } />

               </div>

               <div className = "w-1/4" >

                   <Card_Title title = "已回家 ( 房 )" icon = { <GoHome size = { 24 } /> } />

               </div>
           
           </div>

         </div>
  
}
