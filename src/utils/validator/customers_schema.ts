
import * as z from "zod"
import { query_Customers_By_Mobile } from "@/api/customers/read_customers"



// # 手機號碼 _ 正規表示 : 1. 09 開頭 / 2. 後 8 位數字
const phoneRegExp = /^09[0-9]{8}$/ ;


// # 客戶表單驗證 Schema

// for 新增客戶表單
export const create_Customer_Schema = z.object({
                                                customer_name      : z.string().min( 1 , { message: "姓名需至少輸入一個字"  } ) ,
                                                customer_sex       : z.enum( [ "男" , "女" ] , { errorMap : () => ( { message: '請選擇客戶性別' }) } ) ,
                                                customer_mobile    : z.string().regex( phoneRegExp , { message: '手機格式 : 09 開頭 / 共 10 位數' } ), 
                                                customer_telephone : z.string().optional() ,
                                                customer_email     : z.string().optional() ,
                                                customer_line      : z.string().optional() ,
                                                customer_address   : z.string().optional() ,
                                                customer_id        : z.string().optional() ,
                                                customer_note      : z.string().optional() ,
                                              }).refine( 
                                                        // 再驗證 _ 手機號碼：是否已經存在
                                                        async( { customer_mobile } ) => { 

                                                                // 依照手機號碼，查詢客戶
                                                                const cusArr = await query_Customers_By_Mobile( customer_mobile ) ;
                                                                
                                                                return !( cusArr.length > 0 )     

                                                        } , 
                                                        { path: [ "customer_mobile" ] , message : "此手機號碼已經存在於資料庫，無法新增" } 
                                                        ) ;


// for 修改客戶表單
export const update_Customer_Schema = z.object({
                                                customer_name      : z.string().min( 1 , { message: "姓名需至少輸入一個字"  } ) ,
                                                customer_sex       : z.enum( [ "男" , "女" ] , { errorMap : () => ( { message: '請選擇客戶性別' }) } ) ,
                                                customer_mobile    : z.string().regex( phoneRegExp , { message: '手機格式 : 09 開頭 / 共 10 位數' } ), 
                                                customer_telephone : z.string().optional() ,
                                                customer_email     : z.string().optional() ,
                                                customer_line      : z.string().optional() ,
                                                customer_address   : z.string().optional() ,
                                                customer_id        : z.string().optional() ,
                                                customer_note      : z.string().optional() ,
                                               }) ;