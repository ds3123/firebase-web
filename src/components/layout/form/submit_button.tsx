import { SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"



type Submit = {

    is_Valid : boolean ;

}


// # 表單 : 提交鈕
export function Submit_Button( { is_Valid } : Submit ){

  return <div className = "text-center" >

            { is_Valid &&  
                <SheetClose asChild>
                    <Button type = "submit" className = "bg-green-600" > 提交資料 </Button> 
                </SheetClose> 
            }
            
            { is_Valid || <Button type = "submit" className = "bg-red-300" > 尚未完成表單 </Button> }

        </div>
  
} 