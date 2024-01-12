

// # 系統內容樣板 : 功能
const Functions_Layout = ( { children } : { children: React.ReactNode } ) => {
  
    return <>

              <div className = "nav_section" >

                 功能區

              </div>

              <div className = "main_section" >
            
                 { children }
            
              </div>
    
           </>
  } ;
  
  export default Functions_Layout   