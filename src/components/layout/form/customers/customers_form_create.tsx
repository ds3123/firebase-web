
"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form,
         FormControl,
         FormField,
         FormItem,
         FormLabel,
         FormMessage
       } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet"




// 建立驗證 schema
// const formSchema = z.object( { username : z.string().min( 2 ).max( 50 ) } ) ;
const formSchema = z.object({
                              username : z.string().min( 1 , { message: "姓名需至少輸入一個字"  } )
                            }) ;



// # 表單
export function PaymentForm_Create(){

    // 1. Define your form.
    const form = useForm< z.infer< typeof formSchema > >({
                                                            resolver      : zodResolver( formSchema ) ,
                                                            defaultValues : { username : "" }
                                                         }) ;
    
    // 2. Define a submit handler.
    function onSubmit( values : z.infer< typeof formSchema > ){

        const isValid = form.formState.isValid

        console.log( isValid ) ;

       
    }

    return <Form { ...form } >

              <form onSubmit = { form.handleSubmit( onSubmit ) } className = "space-y-8" >

                  { /* 欄位內容 */ }
                  <div className = "grid grid-cols-4 gap-4" >

                      <FormField control = { form.control } name = "username"
                                render  = { ({ field }) => <FormItem>
                                                              <FormLabel> 姓 名 </FormLabel>
                                                              <FormControl><Input placeholder = "輸入姓名" { ...field } /></FormControl>
                                                              <FormMessage />
                                                            </FormItem>  } />


                  </div>
                
                  { /* 提交鈕 */ }
                  <div className = "text-center" >
                    <SheetClose asChild>
                        <Button disabled = { !form.formState.isValid } type = "submit" >提 交</Button> 
                    </SheetClose>
                   </div>
                
              </form>

           </Form>
  
}