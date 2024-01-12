
"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
 


type Item = {
    href         : string ; 
    title        : string ;  
    description? : string ;
}

type Multi_Item = {
    title    : string ;
    item_Arr : Item[]
}


const finance : Item[] = [
                           {
                            title       : "現金績效",
                            href        : "/admin/management/finance/cash",
                            description : "每日現金漲",
                           } ,
                         ] ;


const prices : Item[] = [
                          {
                              title       : "品種價格",
                              href        : "/admin/management/prices/species",
                              description : "各種品種價格",
                          } ,
                          {
                              title       : "基礎價格",
                              href        : "/admin/management/prices/basics",
                              description : "各種品種價格",
                          } ,
                          {
                              title       : "加價項目",
                              href        : "/admin/management/prices/extra_items",
                              description : "加價項目價格",
                          } ,
                          {
                              title       : "加價美容",
                              href        : "/admin/management/prices/extra_beauties",
                              description : "加價美容價格",
                          } ,
                        ] ;


const data : Item[] = [
                        {
                            title       : "拒接客戶",
                            href        : "/admin/management/data/rejected_customers",
                            description : "拒接客戶清單",
                        } ,
                        {
                            title       : "拒接寵物",
                            href        : "/admin/management/data/rejected_pets",
                            description : "拒接寵物清單",
                        } ,
                        {
                            title       : "服務異常",
                            href        : "/admin/management/data/service_errors",
                            description : "服務異常清單",
                        } ,
                        {
                            title       : "銷單資料",
                            href        : "/admin/management/data/deleted_service_orders",
                            description : "銷單資料清單",
                        } ,
                        {
                            title       : "自訂方案",
                            href        : "/admin/management/data/custom_plans",
                            description : "自訂方案清單",
                        } ,
                        
                      ] ;

const system : Item[] = [
                          {
                            title       : "寵物品種",
                            href        : "/admin/management/system/pet_species",
                            description : "設定寵物品種，供寵物品寵下拉選項使用",
                          } ,
                          {
                            title       : "熱門時段",
                            href        : "/admin/management/system/events",
                            description : "設定熱門時段，供套用特定價格決策依據",
                          } ,
                          {
                            title       : "洗美標籤",
                            href        : "/admin/management/system/service_tags",
                            description : "設定洗美標籤，供特定服務下，套用樣板選項",
                          } ,
                        ] ;


// 僅單個選項
const Single_MenuItem : React.FC< Item > = ( { href , title } ) => {

    return <NavigationMenuItem>

                <Link href = { href } legacyBehavior passHref>

                    <NavigationMenuLink className={ navigationMenuTriggerStyle() }>

                         { title }

                    </NavigationMenuLink>

                </Link>

          </NavigationMenuItem>

} ;
 
// 有第二層選項
const Multi_MenuItem : React.FC< Multi_Item >  = ( { title , item_Arr } ) => {

    return <NavigationMenuItem>

               <NavigationMenuTrigger> { title } </NavigationMenuTrigger>

               <NavigationMenuContent>

                    <ul className = "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">

                        { item_Arr.map( component => 
                            <ListItem key = { component.title } title = { component.title } href = { component.href } >
                                { component.description }
                            </ListItem>
                        )}

                    </ul>

               </NavigationMenuContent>

           </NavigationMenuItem>


} ;



// # 管理區 _ 導覽功能列
export function Management_Nav(){

   return <NavigationMenu>

            <NavigationMenuList>

                <Multi_MenuItem title = "財務管理" item_Arr = { finance } />
                <Multi_MenuItem title = "價格管理" item_Arr = { prices } />
                <Multi_MenuItem title = "資料管理" item_Arr = { data } />
                <Multi_MenuItem title = "系統設定" item_Arr = { system } />
                <Single_MenuItem href = "/admin/management/accounts"  title = "帳號管理" />
                <Single_MenuItem href = "/admin/management/employees" title = "員工管理" />
            
            </NavigationMenuList>

          </NavigationMenu>

}



// <li> 元件
const ListItem = React.forwardRef< React.ElementRef< "a" >, React.ComponentPropsWithoutRef< "a" > >(({ className, title, children, ...props }, ref ) => {
  
    return <li>

              <NavigationMenuLink asChild>

                    <a ref       = { ref } 
                       className = { cn( "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" , className )}
                       { ...props } >

                        <div className = "text-sm font-medium leading-none"> { title } </div>
                        <p className = "line-clamp-2 text-sm leading-snug text-muted-foreground">
                            { children }
                        </p>

                    </a>

              </NavigationMenuLink>

           </li>
  
})

ListItem.displayName = "ListItem"
