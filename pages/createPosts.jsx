import { useForm } from "react-hook-form"
import { createPost } from "./api/apiBackEnd"
import { toast } from "sonner"
import { Router, useRouter } from "next/router"

export default  function upPost(){
    const router = useRouter()
    const {
        handleSubmit,
        register,
        watch,
        formState: {errors},
        setError,
    } = useForm()

    async function onSubmit(data){
        try {
            createPost(data.titlePost, data.contentPost, data.imgPost)
            toast.success("Registro exitoso!!!")
            console.log("Registro listo")
            router.push("/")
        } catch (error) {
            toast.error("Error al iniciar sesión")
        }
    }

    return (
        <div 
        className="
            bg-[#F5F5F5]
            pt-4
            pb-14
            flex
            flex-col
            justify-start
            items-center
            min-h-screen 
            min-w-full
            gap-4
        ">
            <nav className="w-full max-h-10 flex flex-row">
                <div className="
                    p-1
                    flex 
                    flex-row 
                    w-full 
                    justify-center
                    items-center
                    gap-4
                    ">
                    <img className="h-8 w-10 " src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
                    <h1 className="font-semibold">Create Post</h1>

                </div>
                <div className=" 
                    flex 
                    flex-row 
                    w-full 
                    justify-center
                    items-center
                    gap-4
                    ">
                    <h1 className="font-semibold">Edit</h1>
                    <h1>Preview</h1>

                </div>
            </nav>
            <form onSubmit={handleSubmit(onSubmit)} 
                className="
                    flex
                    flex-col
                    max-w-3xl
                    w-full
                    gap-4
                    " action="#">
                    <div className="
                        pt-8
                        pl-16
                        pr-16
                        pb-8
                        flex
                        flex-col
                        max-w-3xl
                        w-full
                        gap-4
                        bg-white">
                        <input className="
                            h-10
                            p-4
                            focus-within:border-blue-700 
                            focus-within:hover:border-blue-700
                            focus-within:border-[3px] 
                            rounded-lg
                        " type="text" {... register('imgPost')} placeholder="Add a url cover image here" />
                        <input className="
                            h-14
                            p-4
                            focus-within:border-blue-700 
                            focus-within:hover:border-blue-700
                            focus-within:border-[3px] 
                            rounded-lg 
                            text-4xl
                            font-bold
                        " type="text" {... register('titlePost', {
                            required: {
                                value:true,
                                message:'Titulo de post requerido'
                            }
                        })} placeholder="New post title here..."/>
                    </div>
                    <h1 className="font-semibold"></h1>
                    <div className="
                        pt-8
                        pl-16
                        pr-16
                        pb-8
                        flex
                        flex-col
                        max-w-3xl
                        w-full
                        gap-4
                        bg-white">
                        <input className="
                            h-72
                            p-4
                            focus-within:border-blue-700 
                            focus-within:hover:border-blue-700
                            focus-within:border-[3px] 
                            rounded-lg
                        " type="text" {... register('contentPost', {
                            required: {
                                value:true,
                                message:'Contenido de post requerido'
                            }
                        })} placeholder="Writen your post content here..."/>
                    </div>
                    <button className="
                        h-10
                        w-20
                        rounded-lg
                        font-semibold
                        bg-blue-700
                        hover:bg-blue-800
                        text-white
                    ">Publish</button>

                </form>
        </div>
    )
}