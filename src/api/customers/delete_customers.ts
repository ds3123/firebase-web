
import { doc , deleteDoc } from "firebase/firestore" 
import { firestore_db } from "@/firebase" 
import { toast } from "sonner"




// 刪除 _ 單一客戶資料
export const delete_Single_Customer = async( id : string ) => {
    
    try{

        await deleteDoc( doc( firestore_db , "customers" , id ) ) ;

        toast( "客戶刪除成功" ) ;


    }catch( err ){

        toast( `刪除客戶失敗 : ${ err }` ) ;

    }

} ;