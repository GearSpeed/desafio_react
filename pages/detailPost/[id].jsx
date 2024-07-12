import NavBar from "../components/NavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPost,getUser } from "../api/apiBackEnd";
export default function DetailPost(){
    const router = useRouter();
    const [post, setPost] = useState({});
    const [user, setUser] = useState({});
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            getPost(id)
                .then(data => {
                    setPost(data);
                })
                .catch(error => {
                    console.error('Error fetching post:', error);
                });
        }
    }, [id]);

    useEffect(() => {
        if(post.user){
            getUser(post.user)
                .then(data => {
                    setUser(data)
                })
        }
    }, [post.user])
    
    return(
        <div>
            <NavBar />
            <div className="
                    bg-[#F5F5F5]
                    w-full
                    min-h-screen
                    flex
                    justify-center
                    items-start
                    gap-4
                    pt-4
                    p-4
                    ">
                    <div className="
                        lg:w-1/2
                        w-full
                        flex
                        flex-col
                        justify-center
                        bg-white
                        rounded-lg
                        pb-8
                    " >
                        <img className="
                            w-full
                            rounded-t-lg
                        " src={post.image} alt={`imgae-${post.title}`} />
                        <div className="
                            pl-16
                        " >
                            <div className="
                                w-full
                                p-4
                                flex
                                gap-4
                            ">
                                <img className="
                                    size-10
                                    rounded-full
                                " src={user.profilePic} alt="" />
                                <div className="
                                    w-full
                                    flex
                                    flex-col
                                ">
                                    <h1 className="
                                        font-semibold
                                    ">{user.name}</h1>
                                    <span className="
                                        text-xs
                                        text-[#ACACAC]
                                    ">{post.updated_at}</span>
                                </div>

                            </div>
                            <h1 className="
                                text-2xl
                                lg:text-6xl
                                font-bold
                            ">{post.title}</h1>
                            <h6 className="
                                text-xl
                                pt-8
                                pr-4
                            ">{post.body}</h6>
                        </div>
                    </div>
                    <div className="
                        w-1/4
                        lg:flex
                        flex-col
                        justify-center
                        bg-white
                        rounded-lg
                        pb-8
                        hidden
                    ">
                        <div className="
                            w-full
                            p-4
                            flex
                            flex-col
                            gap-4
                        ">
                            <div className="
                                    w-full
                                    flex
                                    gap-4
                                ">
                                    <img className="
                                        size-10
                                        rounded-full
                                    " src={user.profilePic} alt="" />
                                    <div className="
                                        w-full
                                        flex
                                        flex-col
                                        p-2
                                    ">
                                        <h1 className="
                                            font-semibold
                                        ">{user.name}</h1>
                                    </div>

                            </div>
                                    <button className="
                                        bg-[#3B49DF]
                                        hover:bg-[#2F3AB2]
                                        text-white
                                        font-semibold
                                        rounded-lg
                                        p-2
                                    ">Follow</button>
                        </div>
                        <div className="
                            p-4
                            flex
                            flex-col    
                            gap-4
                        ">
                            <div>
                            <p>
                            Software engineer. I write about my experiences and the cool stuff I learn!
                            </p>

                            </div>
                            <div>
                            <p className="
                                font-bold
                                text-sm
                            ">
                            LOCATION
                            </p>
                            <p>
                            Philippines
                            </p>

                            </div>
                            <div>
                            <p className="
                                font-bold
                                text-sm
                            ">
                                EDUCATION
                            </p>
                            <p>
                            Computer Engineering
                            </p>

                            </div>
                            <div>
                            <p className="
                                font-bold
                                text-sm
                            ">
                            PRONOUNS
                            </p>
                            <p>
                            He/Him
                            </p>

                            </div>
                            <div>
                            <p className="
                                font-bold
                                text-sm
                            ">
                            WORK
                            </p>
                            <p>
                            Software Engineer
                            </p>

                            </div>
                            <div>
                            <p className="
                                font-bold
                                text-sm
                            ">
                            JOINED
                            </p>
                            <p>
                            19 abr 2023
                            </p>

                            </div>
                        </div>

                    </div>
                </div>
        </div>
    )
}