import { useState } from 'react' ;
import { query_Customers_By_Mobile } from "@/api/customers/read_customers"



// 依照客戶手機號碼，查詢客戶是否已存在
export const useEffect_Query_Customers_By_Mobile = () => {

    const [ is_Customer_Existing , set_Is_Customer_Existing ] = useState< boolean >( false ) ;


    // 變動處理：手機號碼
    const handle_MobileChange = async( mobile : string ) => {

        const cusArr = await query_Customers_By_Mobile( mobile ) ;

        set_Is_Customer_Existing( cusArr.length > 0 ? true : false ) ;
       
     } ;

     return { is_Customer_Existing , handle_MobileChange } ;

} ;
