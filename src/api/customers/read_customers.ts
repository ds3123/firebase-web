
import { doc , collection , getDoc , getDocs , query , where } from "firebase/firestore" 
import { firestore_db } from "@/firebase" 
import { Customers } from "@/components/layout/table/customers_columns"


// 查詢 _ 單一客戶資料
export const read_Single_Customer = async( id : string ) => {

    const docRef  = doc( firestore_db , "customers" , id ) ;
    const docSnap = await getDoc( docRef ) ;

    return docSnap.data() ;

} ;



// 查詢 _ 所有客戶資料
export const read_All_Customers = async() : Promise< Customers[] > => {

    const qSnap             = await getDocs( collection( firestore_db , "customers" )) ;

    const customers : any[] = qSnap.docs.map( doc => ( { id : doc.id , ...doc.data() } ) ) ;

    return customers ;

} ;

// 查詢 _ 客戶資料 ( 依照：手機號碼 )
export const query_Customers_By_Mobile = async( mobile : string ) : Promise< Customers[] > => { 

     const cusRef = collection( firestore_db , "customers" ) ;
     const q      = query( cusRef , where( "customer_mobile" , "==" , mobile ) ) ;
     const qSnap  = await getDocs( q ) ;

     const customers : any[] = qSnap.docs.map( doc => ( { id : doc.id , ...doc.data() } ) ) ;

     return customers ;


}


