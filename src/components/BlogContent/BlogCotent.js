import "./BlogContent.css"
import { posts } from "../../shared/projectData";
import { getAmoutPosts } from "../../shared/prolectLogic";

const blogPosts = posts.map((item) => {
    return (
        <div key={item.id} className="post">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
        </div>
    )
})



export const BlogContent = () => {
    return(
        <>
            <h1>Simple Blog</h1>
            <div className="posts">
                {blogPosts}
            </div>
            
            <div className="count">
                <button onClick={() => getAmoutPosts(blogPosts)}>Get amount of posts</button>
            </div>
        </>
    )
}