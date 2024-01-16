
import { collection , addDoc , serverTimestamp } from "firebase/firestore" 
import { firestore_db } from "@/firebase" 
import { toast } from "sonner"



// 新增 _ 單一客戶資料
export const create_Single_Customer = async( data : any ) => {
    
    try{

        // 加上時間戳
        data.timestamp = serverTimestamp() ;

        // 新增文件
        const docRef = await addDoc( collection( firestore_db , "customers" ) , data ) ;

        toast( `新增客戶成功` ) ;

    }catch( err ){

        toast( `新增客戶失敗 : ${ err }` ) ;

    }

} ;