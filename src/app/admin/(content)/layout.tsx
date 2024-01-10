



// # 系統內容整體樣板
const AdminContent_Layout = ( { children } : { children: React.ReactNode } ) => {

  
  return <div className = "border-8 border-green-400 min-h-screen" >

             { /* 左側 _ 服務類型選項 */ }
             {/* <Left_SideBar /> */}

           
             { /* 右側 _ 選項內容 */ } 
             <main className = "fixed left-16 pr-2 inset-0 w-1/1 border-8 border-red-400" > 

                { children }

             </main> 
             
         </div>
} ;

export default AdminContent_Layout   