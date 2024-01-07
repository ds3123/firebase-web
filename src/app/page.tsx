
"use client"
import { collection , doc , getDoc ,getDocs , query , where , getDocFromCache , or , startAt , endAt , orderBy  
  , onSnapshot , collectionGroup , getCountFromServer , getAggregateFromServer , sum , average , count
} from "firebase/firestore" ;
import { firestore_db } from "@/firebase" ;



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
          <>

            <p> Firebase 託管 2024.01.07 </p>

            <div>

                 <button onClick = { get_Doc } className = "m-5 p-4 bg-slate-600/10" > get_Doc( )  </button>



            </div>
            
          </>

         )

}
