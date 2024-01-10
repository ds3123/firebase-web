
"use client"
import { collection , doc , getDoc , getDocs , query , where , getDocFromCache , or , startAt , endAt , orderBy  
         , onSnapshot , collectionGroup , getCountFromServer , getAggregateFromServer , sum , average , count
} from "firebase/firestore" ;
import { firestore_db } from "@/firebase" ;
import { Button } from "@/components/ui/button" ;


// 單個文件
const get_Doc = async() => {

  const docRef  = doc( firestore_db , "cities", "SF" );
  const docSnap = await getDoc( docRef );

  if ( docSnap.exists() ) {

         console.log( "文件資料 : ", docSnap.data() );

  } else {

    // docSnap.data() will be undefined in this case
    console.log( "沒有該文件" );

  }

  alert( `get_Doc( ) 讀取成功` ) ;

} ;


export default function Home(){

  return (
    
            <div className = "p-5" >

               <Button variant = { 'outline' }  onClick = { get_Doc } > 

                    取得文件    
                  
               </Button>
              
            </div>

         )

}
