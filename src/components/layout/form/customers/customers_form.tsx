
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
import { Select , SelectTrigger , SelectValue , SelectContent , SelectItem } from "@/components/ui/select"
import { Submit_Button } from "@layout/form/submit_button"
import { useEffect_Query_Customers_By_Mobile } from "@/hooks/customers/useEffect_Customers_Form"



type CustomerForm = {

  // data?       : Customer_Shcema ;
   data?       : any ;
   edit_func   : ( data : any ) => void ;  // 提交後，編輯動作：新增 / 修改 
   form_schema : any ;

}


// # 客戶表單
export function Customers_Form( { data , edit_func , form_schema } : CustomerForm ){

    
    // 初始化 RHF
    const form = useForm< z.infer< typeof form_schema > >({
                                                            resolver      : zodResolver( form_schema ) ,
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

    // 依手機號碼，查詢客戶是否存在                                                     
    const { is_Customer_Existing , handle_MobileChange } = useEffect_Query_Customers_By_Mobile() ;                                                      
   

    // 提交處理                                                     
    async function onSubmit( values : z.infer< typeof form_schema > ){

       edit_func( values ) ;
       
    }



    return <Form { ...form } >

              <form onSubmit = { form.handleSubmit( onSubmit ) } className = "space-y-8" >

                  { /* 欄位內容 */ }
                  <div className = "grid grid-cols-4 gap-4 p-2" >

                     <FormField control = { form.control } name = "customer_mobile"
                                render  = { ({ field }) => <FormItem className = "space-y-1" >
                                                              <FormLabel className = "relative"> 
                                                                <span className = "required" > * </span> 手機號碼 &nbsp; 
                                                                { is_Customer_Existing ? <span className = "text-red-600 text-orange-400" > 此號碼 ( 客戶 ) 已存在 </span> : "" } 
                                                              </FormLabel>
                                                              <FormControl>
                                                                <Input onChangeCapture = { e => handle_MobileChange( e.currentTarget.value )} placeholder = "輸入手機號碼 ( 可查詢客戶 ) " { ...field } />
                                                              </FormControl>
                                                              <FormMessage />
                                                            </FormItem>  } /> 

                     <FormField control = { form.control } name = "customer_name"
                                 render = { ({ field }) => <FormItem className = "space-y-1" >
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
                                 render = { ({ field }) => <FormItem className = "space-y-1" >
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
                  <Submit_Button is_Valid = { form.formState.isValid } />
                
              </form>

           </Form>
  
}