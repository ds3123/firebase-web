
import { doc , collection , getDoc , getDocs , onSnapshot } from "firebase/firestore" 
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

    const querySnapshot = await getDocs( collection( firestore_db , "customers" )) ;

    const customers : any[] = querySnapshot.docs.map( doc => ( { id : doc.id , ...doc.data() } ) ) ;

    return customers

} ;

