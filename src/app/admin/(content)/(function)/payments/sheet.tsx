
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
        Sheet,
        SheetClose,
        SheetContent,
        SheetDescription,
        SheetFooter,
        SheetHeader,
        SheetTitle,
        SheetTrigger,
} from "@/components/ui/sheet"

import { ProfileForm } from "./form" 




export function RightSheet() {

    return (

        <Sheet>

            <SheetTrigger asChild>
               <Button > 打開右側 </Button>
            </SheetTrigger>

            <SheetContent className = "sm:max-w-[1000px]">
            
                <SheetHeader >

                    <SheetTitle> Edit profile </SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>

                </SheetHeader>

                {/*

                    <div className="grid gap-4 py-4">

                        <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                    </div> 
                
                */}



                <ProfileForm />
                  

                <SheetFooter>

                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                    
                </SheetFooter>

            </SheetContent>

       </Sheet>

    )
  }