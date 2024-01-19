
import { Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, CardFooter, Card , CardTitle , CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"



// # 登入頁
export default async function Login_Page(){


  return <div className = "relative min-h-screen flex items-center bg-gray-50" >


            <Card className = "relative w-[350px] bg-white space-y-6 p-4 shadow-xl sm:mx-auto sm:rounded-lg">

                <CardHeader className = "text-center space-y-2">
                    <CardTitle className = "tracking-widest" >  寵物王國  </CardTitle>
                    <CardDescription> 後台管理系統 </CardDescription>
                </CardHeader>

                <CardContent>

                    <form>
                        <div className="grid w-full items-center gap-4 space-y-4">

                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="name"> 帳 號 </Label>
                                <Input id="name" placeholder = "請輸入帳號" />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="framework"> 密 碼 </Label>
                                <Input id="name" placeholder = "請輸入密碼" />
                            </div>

                        </div>
                    </form>

                </CardContent>
                
                <CardFooter className="">
                    <Button className = "w-full tracking-widest" > 登入帳號 </Button>
                </CardFooter>
                
            </Card>

         </div>
  
}
