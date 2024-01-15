
import { useState , useEffect } from 'react' 
import { Customers } from "@/components/layout/table/customers_columns"
import { onSnapshot , collection , orderBy , query } from "firebase/firestore" 
import { firestore_db } from "@/firebase" 



// 監聽 ( 取得 ) _ customers collection 資料
export const useEffect_Listen_Customers_Collection = () : Customers[] => {


   const [ customers , set_Customers ] = useState< Customers[] >( [] ) ;

   // 監聽 customers collection
   useEffect( () => {
 
      // 先進行排序
      const q = query( collection( firestore_db , "customers" ), orderBy( "timestamp" , "desc" ) );

      // 取得監聽資料
      const unsubscribe = onSnapshot( q , querySnapshot => {
                 
                             // 取得 _ 目前 customers collection 資料
                             const customers  = querySnapshot.docs.map( doc => ( { id : doc.id , ...doc.data() } ) ) as Customers[] ;
 
                             set_Customers( customers ) ;
 
                          }) ;
 
      return () => unsubscribe() ;  // 取消監聽
      
   } , [] ) ;

 
   return customers ;


} ;