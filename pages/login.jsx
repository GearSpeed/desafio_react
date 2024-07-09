import { toast, Toaster } from "sonner"
import { login } from "./api/apiBackEnd"
import LogInOptions from "./components/LoginOptions"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
export default function LogIn() {
    const router = useRouter()

    const {
        handleSubmit,
        register,
        formState: {errors},
        setError,
    } = useForm()

    async function onSubmit(data){
        try {
            const token = await login(data.email, data.password)
            if (token) {
                window.localStorage.setItem('token', token)
                toast.success("Bienvenido (a)")
                router.push('/')
            }else{
                toast.error("Usuario o contraseña incorrectos")
                setError('root.credentials', {
                    type: "manual", 
                    message: "Credenciales inválidas"
                })
            }
        } catch (error) {
            toast.error("Error al iniciar sesión")
        }
    }

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

                <LogInOptions />
                

            </div>
            <div className="
                w-full 
                flex 
                flex-row 
                justify-center 
                items-center 
                gap-4 
                pt-4
                ">
                <div className="border w-full max-w-64"></div>
                <h1>OR</h1>
                <div className="border w-full max-w-64"></div>
            </div>
                <form onSubmit={handleSubmit(onSubmit)} 
                className="
                    flex
                    flex-col
                    max-w-xl
                    w-full
                    gap-4
                    " action="#">
                    <h1 className="font-semibold">Email</h1>
                    <input className="
                        h-10
                        p-4
                        border
                        focus-within:border-blue-700 
                        focus-within:hover:border-blue-700
                        focus-within:border-[3px] 
                        rounded-lg 
                        border-gray-200 
                        hover:border-gray-400
                        focus:outline-none
                    " type="text" {... register('email', {
                        required: {
                            value:true,
                            message:'Nombre de usuario requerido'
                        }
                    })} id="email" />
                    <h1 className="font-semibold">Password</h1>
                    <input className="
                        h-10
                        p-4
                        border
                        focus-within:border-blue-700 
                        focus-within:hover:border-blue-700
                        focus-within:border-[3px] 
                        rounded-lg 
                        border-gray-200 
                        hover:border-gray-400
                        focus:outline-none
                    " type="password" id="password" {... register('password',{
                        required: {
                            value: true,
                            message: 'Contraseña requerida',
                        }
                    })} />
                    <Toaster /> 
                    <button className="
                        h-12
                        rounded-lg
                        font-semibold
                        bg-blue-700
                        hover:bg-blue-800
                        text-white
                    ">Log In</button>

                </form>
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
                    <span className="text-black">New to DEV Community? </span>
                    <span className="text-[#3B49E1] cursor-pointer" >Create account.</span>
                </div>
            </footer>
            

        </div>
    )
}