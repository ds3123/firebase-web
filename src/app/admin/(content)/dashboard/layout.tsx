

// # 首頁樣板
const Dashboard_Layout = ( { children } : { children: React.ReactNode } ) => {
  
    return <>
     
              <div className = "nav_section" >

                  首頁導覽

              </div>

              <div className = "main_section"  >

                 { children }

              </div>
             
           </>
  } ;
  
  export default Dashboard_Layout   