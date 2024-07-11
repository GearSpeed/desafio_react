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
                    console.log(data)
                })
        }
    }, [post.user])
    
    return(
        <div>
            <NavBar />
            <img src={post.image} alt="" />
            <img src={user.image} alt="" />
            <h1>{user.name}</h1>
            <h1>{post.title}</h1>
            <span>{post.updated_at}</span>
            <p>{post.body}</p>
        </div>
    )
}