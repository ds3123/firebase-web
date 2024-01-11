

import { FC } from 'react' 

type Nav = {

  children : React.ReactNode 

}


// # 一般功能導覽列
export function Nav_Section( { children } : Nav ) : JSX.Element {

   return <div className = "px-6 py-8 border-b-[1px]" >
  
               { children }

          </div>

}