
import { Left_SideBar } from "./left_sidebar" 
import { Nav_Section } from "@layout/nav/nav_section"


// # 系統內容整體樣板
const AdminContent_Layout = ( { children } : { children: React.ReactNode } ) => {

  
  return <div className = "flex" >

             { /* 左側 _ 服務類型選項 */ }
             <Left_SideBar /> 

             { /* 右側 _ 選項內容 */ } 
             <main className = "min-h-screen w-full" > 

                <Nav_Section>
                    導覽列
                </Nav_Section>

                { children }

             </main> 
             
         </div>
} ;

export default AdminContent_Layout   