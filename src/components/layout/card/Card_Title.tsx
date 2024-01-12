

import { FC , ReactNode } from 'react' ;

type Title = {

   title       : string ;
   icon?       : ReactNode ;
   background? : string ;

}

const Card_Title : FC< Title > = ( { title , icon , background } ) => {


    return <div className = { `flex items-center justify-center ${ background ? background : 'bg-white' } p-2 rounded-full border border-gray-100 shadow-sm text-md` } >
    
                { icon } <p className = "ml-3"> { title } </p>

           </div>

} ;


export default Card_Title
       