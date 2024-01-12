
import { Management_Nav } from "@layout/nav/management_nav"


// # 管理區樣板 
const Management_Layout = ( { children } : { children: React.ReactNode } ) => {
  
    return <>

             <div className = "nav_section" >
             
                 <Management_Nav />

             </div>

             <div className = "main_section"  >

                { children }

             </div>
             
           </>
 } ;
  
  export default Management_Layout   