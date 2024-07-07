import SignUpOptions from "./components/SignUpOptions"
import Link from "next/link"
export default function SignUp() {
    return (
        <div 
        className="
            pt-10
            pb-14
            flex
            flex-col
            justify-center
            items-center
            min-h-screen 
            min-w-full
            gap-4
        ">
            <div className="
                gap-4
                w-full 
                flex 
                flex-col 
                justify-center 
                items-center
                text-center
                ">
                <div>
                    <img className="
                        w-14
                    " 
                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png" alt="" />
                </div>
                <div>
                    <h1 className="font-bold text-3xl">Join the DEV Community</h1>
                    <span>DEV Community is a community of 1,679,481 amazing developers</span>
                </div>

                <SignUpOptions />

            </div>
            <footer className="
                w-full 
                flex 
                flex-col 
                justify-center 
                items-center 
                gap-4 
                pt-4
                text-gray-400
                text-sm
                italic
            ">
                <span className="flex gap-1">
                    <p>By signing up, you are agreeing to our </p> 
                    <p className="text-[#3B49E1] cursor-pointer"> privacy policy, 
                    terms of use</p>
                </span>
                <span className="flex gap-1">
                    <p>and code</p> 
                    <p className="text-[#3B49E1] cursor-pointer"> of conduct.</p>
                </span>
                <div className="border w-full max-w-xl">

                </div>
                <div className="not-italic text-base">
                    <span className="text-black">Already have an account? </span>
                    <Link href='/login' className="text-[#3B49E1]" >Log in.</Link>
                </div>
            </footer>
            

        </div>
    )
}