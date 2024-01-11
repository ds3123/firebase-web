import { FC } from 'react' ;
import {
         Sheet,
         SheetContent,
         SheetTitle,
         SheetTrigger,
       } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"


type Sheet = {
    title     : string ;
    component : React.ReactNode ;
} ;


// # 右側滑動面板
export function RightSheet( { title , component } : Sheet ) : JSX.Element {

   return <Sheet>

            { /* 觸發鈕 */ }
            <SheetTrigger asChild>
                <Button > { title } </Button>
            </SheetTrigger>

            { /* 面板內容 */ }
            <SheetContent className = "sm:max-w-[1000px] space-y-8">

                <SheetTitle className = "border-l-8 border-indigo-500/100 px-2" > { title }  </SheetTitle>

                { /* 元件內容 */ }
                { component }

            </SheetContent>

          </Sheet>

}
