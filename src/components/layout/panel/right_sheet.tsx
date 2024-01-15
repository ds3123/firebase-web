import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"



type Sheet = {

    button_title  : string ;
    sheet_title   : string ;
    button_style? : string ;
    children      : React.ReactNode ;

}

// # 右側面板
export function RightSheet( { children , button_title , sheet_title , button_style } : Sheet ){

   return <Sheet>

            { /* 觸發鈕 */ }
                <SheetTrigger asChild>
                    <Button className = { `${ button_style }` }  > { button_title } </Button>
                </SheetTrigger>

                { /* 面板內容 */ }
                <SheetContent className = "sm:max-w-[1000px] space-y-8">

                    <SheetTitle className = "label" > { sheet_title }  </SheetTitle>

                    { children }       
                    
                </SheetContent>

            </Sheet>

}