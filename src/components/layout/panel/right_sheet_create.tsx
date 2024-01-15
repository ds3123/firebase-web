import { Sheet } from "@/components/ui/sheet"
import { RightSheet } from "./right_sheet"


type Sheet = {

    button_title : string ;
    sheet_title  : string 
    component    : React.ReactNode ;

} ;


// # 右側滑動面板 : 新增模式
export function RightSheet_Create( { button_title , sheet_title , component } : Sheet ){
   

    return <RightSheet button_title = { button_title } sheet_title = { sheet_title } >

                { /* 元件內容 */ }
                { component }

            </RightSheet>

}
