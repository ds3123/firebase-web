"use client"
import { Sheet } from "@/components/ui/sheet"
import { RightSheet } from "./right_sheet"
import { useEffect , useState } from 'react' 



type Sheet = {

    button_title : string ;
    sheet_title  : string ;
    query_fn     : any ;    // 非同步函式
    component    : ( data : any ) => React.ReactNode ;

} ;


// # 右側滑動面板 : 修改模式
export function RightSheet_Update( { button_title , sheet_title  , query_fn , component } : Sheet ) {


    const [ data , set_Data ] = useState< any >( null ) ;

    useEffect( () => {

        query_fn().then( ( data : any ) => {

            set_Data( data ) ;

        })
       
    } , [ query_fn ] ) ;

    return <RightSheet button_title = { button_title } sheet_title = { sheet_title } button_style = "bg-indigo-100 text-indigo-600 hover:bg-indigo-200" >

                { /* 元件內容 */ }
                { component( data ) }

            </RightSheet>

}
