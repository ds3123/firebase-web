
import { doc , deleteDoc } from "firebase/firestore" 
import { firestore_db } from "@/firebase" 



// 刪除 _ 單一客戶資料
export const delete_Single_Customer = async( id : string ) => {
    
    try{

        await deleteDoc( doc( firestore_db , "customers" , id ) ) ;

        alert( "客戶刪除成功" ) ;


    }catch( err ){

        alert( `刪除客戶失敗 : ${ err }` ) ;

    }

} ;