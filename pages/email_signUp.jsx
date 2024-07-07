import {useForm, SubmitHandler} from "react-hook-form"
import { signUp } from "./api/apiBackEnd"
import { toast } from "sonner"
import { useRouter } from "next/router"


export default function emailSignUp(){
    const router = useRouter()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setError,
  } = useForm()

  async function onSubmit(data){
    try {
        signUp(data.name, data.profilePic, data.userName, data.email, data.password)
        toast.success("Registro exitoso!!!")
        router.push('/login')
    } catch (error) {
        toast.error("Error al registrar usuario")
    }
  }

    return (
        <main className="
            w-full
            min-h-screen
            flex
            justify-center
            items-center
            bg-transparent
        ">
            <div className="
                border
                min-w-fit
                p-8
                flex
                flex-col
                rounded-lg
            ">
                <h1 className="
                    font-bold
                    text-xl
                ">Create your account</h1>
                <form onSubmit={handleSubmit(onSubmit) }                
                className="
                    w-full
                    pt-6
                    gap-4
                    flex
                    flex-col
                    justify-start
                    items-start
                " action="#">
                    <div className="font-semibold">
                        <span>Profile image</span>
                    </div>
                    <input id="imgProfile" className="
                        p-2
                        border
                        rounded
                        min-w-96
                        h-8
                        focus-within:border-blue-700 
                        focus-within:hover:border-blue-700
                        focus-within:border-2
                        hover:border-black
                        focus:outline-none
                    "  type="text" { ... register('profilePic')} />
                    <div className="
                        flex
                        gap-2
                    ">
                        <span className="font-semibold">Name</span>
                        <span className="text-red-600">*</span>
                    </div>
                    <input id="name" className="
                        p-2
                        border
                        rounded
                        min-w-96
                        h-8
                        focus-within:border-blue-700 
                        focus-within:hover:border-blue-700
                        focus-within:border-2
                        hover:border-black
                        focus:outline-none
                    "  type="text" { ... register('name',{
                        required:{
                            value: true,
                            message: 'Nombre requerido'
                        }
                    })} />
                    <div className="
                        flex
                        gap-2
                    ">
                        <span className="font-semibold">Username</span>
                        <span className="text-red-600">*</span>
                    </div>
                    <input id="username" className="
                        p-2
                        border
                        rounded
                        min-w-96
                        h-8
                        focus-within:border-blue-700 
                        focus-within:hover:border-blue-700
                        focus-within:border-2
                        hover:border-black
                        focus:outline-none
                    "  type="text" {... register('userName',{
                        required:{
                            value: true,
                            message:'Nombre de usuario requerido'
                        }
                    })} />
                    <div className="
                        flex
                        gap-2
                    ">
                        <span className="font-semibold">Email</span>
                        <span className="text-red-600">*</span>
                    </div>
                    <input id="email" className="
                        p-2
                        border
                        rounded
                        min-w-96
                        h-8
                        focus-within:border-blue-700 
                        focus-within:hover:border-blue-700
                        focus-within:border-2
                        hover:border-black
                        focus:outline-none
                    "  type="text" {... register('email',{
                        required:{
                            value:true,
                            message:'Email requerido'
                        }
                    })} />
                    <div className="
                        flex
                        gap-2
                    ">
                        <span className="font-semibold">Password</span>
                        <span className="text-red-600">*</span>
                    </div>
                    <input id="password" className="
                        p-2
                        border
                        rounded
                        min-w-96
                        h-8
                        focus-within:border-blue-700 
                        focus-within:hover:border-blue-700
                        focus-within:border-2
                        hover:border-black
                        focus:outline-none
                    "  type="password" {... register('password',{
                        required: {
                            value: true,
                            message:'Contraseña requerida'
                        }
                    })} />
                    <div className="
                        flex
                        gap-2
                    ">
                        <span className="font-semibold">Password Confirmation</span>
                        <span className="text-red-600">*</span>
                    </div>
                    <input id="passConfirmation" className="
                        p-2
                        border
                        rounded
                        min-w-96
                        h-8
                        focus-within:border-blue-700 
                        focus-within:hover:border-blue-700
                        focus-within:border-2
                        hover:border-black
                        focus:outline-none
                    "  type="password"  />
                    <button className="
                        font-bold
                        hover:bg-blue-800
                        bg-blue-600
                        p-2
                        rounded-lg
                        text-white
                    ">Sign Up</button>
                </form>
            </div>
        </main>
    )
}