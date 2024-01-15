
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
import { Select , SelectTrigger , SelectValue , SelectContent , SelectItem } from "@/components/ui/select"
import { SheetClose } from "@/components/ui/sheet"

// 建立驗證 schema
const formSchema = z.object({
                               customer_name      : z.string().min( 1 , { message: "姓名需至少輸入一個字"  } ) ,
                               customer_sex       : z.enum( [ "男" , "女" ] ) ,
                               customer_mobile    : z.string().min( 1 , { message: "手機號碼需至少輸入一個字"  } ) , // 再修改為驗證手機格式
                               customer_telephone : z.string().optional() ,
                               customer_email     : z.string().optional() ,
                               customer_line      : z.string().optional() ,
                               customer_address   : z.string().optional() ,
                               customer_id        : z.string().optional() ,
                               customer_note      : z.string().optional() ,
                            }) ;


type CustomerForm = {

   data?     : z.infer< typeof formSchema > ;
   edit_func : ( data : any ) => void ;  //           

}


// # 表單
export function Customers_Form( { data , edit_func } : CustomerForm ){


    // 1. Define your form.
    const form = useForm< z.infer< typeof formSchema > >({
                                                            resolver      : zodResolver( formSchema ) ,
                                                            defaultValues : data ? data : { 
                                                                                            customer_name      : "" ,
                                                                                            // customer_sex       : "" ,
                                                                                            customer_mobile    : "" , 
                                                                                            customer_telephone : "" ,
                                                                                            customer_email     : "" ,
                                                                                            customer_line      : "" ,
                                                                                            customer_address   : "" ,
                                                                                            customer_id        : "" ,
                                                                                            customer_note      : ""
                                                                                          }
                                                         }) ;
    
    // 2. Define a submit handler.
    async function onSubmit( values : z.infer< typeof formSchema > ){

       edit_func( values ) ;
       
    }


    // 變動處理：手機號碼
    const handle_MobileChange = ( value : string ) => {

        // console.log( 'TTT' , value ) ;
    
    } ;
    


    return <Form { ...form } >

              <form onSubmit = { form.handleSubmit( onSubmit ) } className = "space-y-8" >

                  { /* 欄位內容 */ }
                  <div className = "grid grid-cols-4 gap-4 p-2" >

                     <FormField control = { form.control } name = "customer_name"
                                 render  = { ({ field }) => <FormItem className = "space-y-1" >
                                                              <FormLabel className = "relative" > 
                                                                 <span className = "required"  > * </span> 姓 名 
                                                              </FormLabel>
                                                              <FormControl><Input   placeholder = "輸入姓名" { ...field } /></FormControl>
                                                              <FormMessage />
                                                            </FormItem>  } /> 

                     <FormField control = { form.control } name = "customer_sex"
                                 render  = { ({ field }) => <FormItem className = "space-y-1" >

                                                              <FormLabel className = "relative" > 
                                                                  <span className = "absolute -top-2 -left-2 text-red-600 font-extrabold"  > * </span> 性 別 
                                                              </FormLabel>

                                                              <Select onValueChange = { field.onChange } defaultValue = { field.value } >
                                                                <FormControl>
                                                                   <SelectTrigger>
                                                                      <SelectValue placeholder = "請選擇" />
                                                                   </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                   <SelectItem value = "男" >男</SelectItem>
                                                                   <SelectItem value = "女" >女</SelectItem>
                                                                </SelectContent>
                                                              </Select>

                                                              <FormMessage />

                                                            </FormItem>  } />

                     <FormField control = { form.control } name = "customer_mobile"
                                 render  = { ({ field }) => <FormItem className = "space-y-1" >
                                                              <FormLabel className = "relative"> 
                                                                <span className = "required" > * </span> 手機號碼 
                                                              </FormLabel>
                                                              <FormControl>
                                                                <Input onChangeCapture = { e => handle_MobileChange( e.currentTarget.value )} placeholder = "輸入手機號碼" { ...field } />
                                                              </FormControl>
                                                              <FormMessage />
                                                            </FormItem>  } /> 

                     <FormField control = { form.control } name = "customer_telephone"
                                 render  = { ({ field }) => <FormItem className = "space-y-1" >
                                                              <FormLabel className = "relative"> 
                                                                 家用電話 
                                                              </FormLabel>
                                                              <FormControl><Input placeholder = "輸入家用電話" { ...field } /></FormControl>
                                                              <FormMessage />
                                                            </FormItem>  } /> 

                     <FormField control = { form.control } name = "customer_email"
                                 render  = { ({ field }) => <FormItem className = "space-y-1" >
                                                              <FormLabel> E-mail </FormLabel>
                                                              <FormControl><Input placeholder = "輸入 E-mail" { ...field } /></FormControl>
                                                              <FormMessage />
                                                            </FormItem>  } /> 

                     <FormField control = { form.control } name = "customer_line"
                                 render  = { ({ field }) => <FormItem className = "space-y-1" >
                                                              <FormLabel> Line </FormLabel>
                                                              <FormControl><Input placeholder = "輸入 Line" { ...field } /></FormControl>
                                                              <FormMessage />
                                                            </FormItem>  } /> 

                     <FormField control = { form.control } name = "customer_address"
                                 render  = { ({ field }) => <FormItem className = "space-y-1 col-span-2" >
                                                              <FormLabel> 通訊地址 </FormLabel>
                                                              <FormControl><Input placeholder = "輸入通訊地址" { ...field } /></FormControl>
                                                              <FormMessage />
                                                            </FormItem>  } /> 

                     <FormField control = { form.control } name = "customer_id" 
                                 render  = { ({ field }) => <FormItem className = "space-y-1" >
                                                              <FormLabel> 身份證字號 </FormLabel>
                                                              <FormControl><Input placeholder = "輸入身份證字號" { ...field } /></FormControl>
                                                              <FormMessage />
                                                            </FormItem>  } /> 

                     <FormField control = { form.control } name = "customer_note" 
                                 render  = { ({ field }) => <FormItem className = "space-y-1 col-span-3" >
                                                              <FormLabel> 客戶備註 </FormLabel>
                                                              <FormControl><Input placeholder = "輸入客戶備註" { ...field } /></FormControl>
                                                              <FormMessage />
                                                            </FormItem>  } /> 

                  </div>
                
                  { /* 提交鈕 */ }
                  <div className = "text-center" >

                        { form.formState.isValid &&  
                            <SheetClose asChild>
                                <Button type = "submit" className = "bg-green-600" > 提交資料 </Button> 
                            </SheetClose> 
                         }
                       
                         { form.formState.isValid  || <Button type = "submit" className = "bg-red-300" > 尚未完成表單 </Button> }

                  </div>
                
              </form>

           </Form>
  
}