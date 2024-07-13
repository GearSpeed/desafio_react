import { useEffect, useState } from "react"
import { getPosts} from "../api/apiBackEnd"
import { toast } from "sonner"
import Link from "next/link"

export default function Posts(){

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
            .then((content) => {
                setPosts(content)
            })
            .catch(error => {
                toast.error("Error al obtener los posts")
                console.log("[get posts error]", error)
            })
    })

    return (
        <div className="
            w-full
        ">
            <div className="
                flex
                gap-4
                p-2
            ">
                <h1 className="
                    font-bold
                    text-lg
                    cursor-pointer
                    p-2
                    rounded-md
                    hover:bg-[#FFFFFF]
                    hover:text-[#3B49DF]
                ">Relevant</h1>
                <h1 className="
                    text-lg
                    cursor-pointer
                    p-2
                    rounded-md
                    hover:bg-[#FFFFFF]
                    hover:text-[#3B49DF]
                ">Latest</h1>
                <h1 className="
                    text-lg
                    cursor-pointer
                    p-2
                    rounded-md
                    hover:bg-[#FFFFFF]
                    hover:text-[#3B49DF]
                ">Top</h1>
            </div>

            <div className="
                w-full
                flex
                flex-col-reverse
                gap-2
            ">

                {
                    posts.map((cont, idx) => { 
                        return(
                            <div key={`key-${idx}`} className="
                            w-full
                            flex
                            flex-col
                            bg-white
                            rounded-lg
                            pb-8
                        ">

                                <img className="
                                    w-full
                                    rounded-t-lg
                                " src={cont.image} alt={cont.title} 
                                />
                                <div className="
                                    w-full
                                    p-4
                                    flex
                                    gap-4
                                ">
                                    <img className="
                                        size-10
                                        rounded-full
                                    " src={cont.user.profilePic} alt= {cont.user.userName}
                                    />
                                    <div className="
                                        w-full
                                        flex
                                        flex-col
                                    " > 
                                        <h1 className="
                                            font-semibold
                                        ">{cont.user.name}</h1>
                                        <span className="
                                            text-xs
                                            text-[#ACACAC]
                                        " >{
                                            cont.updated_at.substring(0, 7)
                                        }</span>
                                    </div>
                                </div>
                                <div className="
                                    w-full
                                    pl-16
                                ">
                                    <Link href={`/detailPost/${cont._id}`} className="
                                        text-3xl
                                        font-bold
                                    ">{cont.title}</Link>
                                </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}