
import { useState , useEffect } from 'react' 
import { Customers } from "@/components/layout/table/customers_columns"
import { onSnapshot , collection } from "firebase/firestore" 
import { firestore_db } from "@/firebase" 



// 監聽 ( 取得 ) _ customers collection 資料
export const useEffect_Listen_Customers_Collection = () : Customers[] => {


   const [ customers , set_Customers ] = useState< Customers[] >( [] ) ;

   // 監聽 customers collection
   useEffect( () => {
 
      const unsubscribe = onSnapshot( collection( firestore_db , "customers" ) , querySnapshot => {
     
                             // 取得 _ 目前 customers collection 資料
                             const customers  = querySnapshot.docs.map( doc => ( { id : doc.id , ...doc.data() } ) ) as Customers[] ;
 
                             set_Customers( customers ) ;
 
                          }) ;
 
      return () => unsubscribe() ;  // 取消監聽
      
   } , [] ) ;

 
   return customers ;


} ;