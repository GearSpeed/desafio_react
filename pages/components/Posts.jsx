import { useEffect, useState } from "react"
import { getPosts } from "../api/apiBackEnd"
import { toast } from "sonner"

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
                flex-col
                bg-white
                rounded-lg
                pb-8
            ">

                {
                    posts.map((cont, idx) => {
                        return(
                            <>

                                <img className="
                                    w-full
                                    rounded-t-lg
                                " src="https://imgs.search.brave.com/BWn2ZkEOnHxoCZDzIemCAb2d2anSn-jSEBkT-FbBBA0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYW5hZGlhbi1t/b3VudGFpbi1sYW5k/c2NhcGUtbmF0dXJl/LWJhY2tncm91bmQt/c3Vuc2V0XzY0NTg4/Mi0xMjU1Ni5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw" alt="" 
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
                                    " src="https://imgs.search.brave.com/JLmCvOzUW0TXutsulsNiriUdvcbxhtIKdcfMxN2BI30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk1LzE1Lzc5/LzM2MF9GXzQ5NTE1/Nzk3MV96SWh6amZ4/M3lHMUFzZ1lPVFFT/OVo2VkhBc04wT0pT/SS5qcGc" alt="" 
                                    />
                                    <div className="
                                        w-full
                                        flex
                                        flex-col
                                    " > 
                                        <h1 className="
                                            font-semibold
                                        ">Name</h1>
                                        <span className="
                                            text-xs
                                            text-[#ACACAC]
                                        " >Jul 8</span>
                                    </div>
                                </div>
                                
                            </>
                        )
                    })
                }

                
                <div className="
                    w-full
                    pl-16
                ">
                    <h1 className="
                        text-3xl
                        font-bold
                    ">Title8</h1>
                </div>
            </div>
        </div>
    )
}