

import { collection , addDoc } from "firebase/firestore" 
import { firestore_db } from "@/firebase" 



// 新增 _ 單一客戶資料
export const create_Single_Customer = async( data : any ) => {
    
    try{

        const docRef = await addDoc( collection( firestore_db , "customers" ) , data ) ;

        alert( `新增客戶成功，文件 id 為 : ${ docRef.id }` ) ;

    }catch( err ){

        alert( `刪除客戶失敗 : ${ err }` ) ;

    }

} ;