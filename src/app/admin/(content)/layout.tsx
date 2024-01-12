import { Left_SideBar } from "./left_sidebar" 


// # 系統內容樣板 : 整體
const AdminContent_Layout = ( { children } : { children: React.ReactNode } ) => {

  
  return <div className = "flex" >

             { /* 左側 _ 服務類型選項 */ }
             <Left_SideBar /> 

             { /* 右側 _ 選項內容 */ } 
             <main className = "min-h-screen w-full" > 

                { children }

             </main> 
             
         </div>
} ;

export default AdminContent_Layout   