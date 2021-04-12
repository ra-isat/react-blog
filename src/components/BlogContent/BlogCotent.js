import "./BlogContent.css";
import { posts } from "../../shared/projectData";
import { BlogCards } from "./components/BlogCards";



export const BlogContent = () => {
    const blogPosts = posts.map((item) => {
    return (
        <BlogCards
        key={item.id}
        title={item.title}
        description={item.description}
        />
    );
    });

  return (
    <>
      <h1>Simple Blog</h1>
      <div className="posts">{blogPosts}</div>

    </>
  );
};
