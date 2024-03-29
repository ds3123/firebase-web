
import { doc , updateDoc } from "firebase/firestore" 
import { firestore_db } from "@/firebase" 
import { toast } from "sonner"


// 更新 _ 單一客戶資料
export const update_Single_Customer = async( doc_Id : string  , data : any) => {
    
    try{

        await updateDoc( doc( firestore_db , "customers" , doc_Id ) , data ) ;
    
        toast( `更新客戶成功` ) ;

    }catch( err ){

        toast( `更新客戶失敗 : ${ err }` ) ;

    }

} ;