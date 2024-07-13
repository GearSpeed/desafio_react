import Link from "next/link"
import clsx from "clsx"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function NavBar(){
    const router = useRouter()

    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
    }, []);

    
    const handleLogin = () => {
        // Simula el login estableciendo un token
        const sampleToken = 'sample-token';
        localStorage.setItem("token", sampleToken);
        setToken(sampleToken);
        router.push('/Login');
    };

    const handleLogout = () => {
        // Simula el logout eliminando el token
        localStorage.removeItem("token");
        setToken(null);
        router.push('/');
    };

    return (
        <nav className="bg-[#FFFFFF] max-w-full h-14 flex justify-between pl-20 xl:pr-20 pt-2 pb-2">
            <div className="flex w-full gap-4">
                <img className="size-8 cursor-pointer md:hidden"  src="/burgerMenu.svg" alt="" />
                <img className="cursor-pointer"  src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
                <div 
                    className="
                        hidden 
                        relative 
                        md:flex  
                        items-center 
                        max-w-[700px]
                        w-full 
                    ">
                    <img  src="/search.svg" alt="" className="size-6 absolute cursor-pointer left-1 " />
                    <input type="text" 
                    className="
                        border
                        pl-12
                        h-full
                        w-full 
                        focus-within:border-blue-700 
                        focus-within:hover:border-blue-700
                        focus-within:border-[3px] 
                        rounded-lg 
                        border-gray-200 
                        hover:border-gray-400
                        focus:outline-none
                    " placeholder="Search..."/>
                    <span className="text-gray-400 text-sm absolute right-2">Powered by 🔎Algolia</span>
                </div>
            </div>
            <div className="flex gap-8">
                <img  src="/search.svg" alt="" className="size-6 absolute cursor-pointer top-4 right-[230px] md:hidden " />
                <div className={clsx("rounded-md cursor-pointer min-w-16 hover:text-blue-700 hover:underline hover:bg-[#EBECFC] border-gray-600 flex justify-center items-center",{
                    hidden: !!token,
                })}>
                    <Link href="/login">Log In</Link>
                </div>
                <div className={clsx("border rounded-md min-w-36 font-semibold hover:underline hover:text-white hover: hover:bg-blue-600 cursor-pointer text-blue-600 border-blue-600 flex justify-center items-center", {
                    hidden: !!token,
                })}>
                    <Link href="/signUp" >Create account</Link>
                </div>
                <div className={clsx("flex justify-end max-sm:w-48", {
                    hidden: !token,
                }) }>
                <button className="rounded-md cursor-pointer min-w-16 hover:text-blue-700 hover:underline hover:bg-[#EBECFC] border-gray-600 flex justify-center items-center" onClick={handleLogout}>
                Log out
                </button>

                <button className="border rounded-md min-w-36 font-semibold hover:underline hover:text-white hover: hover:bg-blue-600 cursor-pointer text-blue-600 border-blue-600 flex justify-center items-center"
                onClick={() => {
                    router.push("/createPosts")
                }}>Create Post
                </button>
                </div>
           </div>
        </nav>
    )
}