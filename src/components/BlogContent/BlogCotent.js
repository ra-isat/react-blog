import "./BlogContent.css";
import { posts } from "../../shared/projectData";
import { BlogCards } from "./components/BlogCards";
import { Component } from "react";

console.log(new Component());
export class BlogContent extends Component {
  state = {
    showBlog: true,
    blogArr: JSON.parse(localStorage.getItem('blogPosts')) || posts,
  };

  likePost = (pos) => {
    const temp = JSON.parse(JSON.stringify(this.state.blogArr))
    temp[pos].liked = !temp[pos].liked;
        
    this.setState({
      blogArr: temp,
    });

    localStorage.setItem('blogPosts', JSON.stringify(temp))
  };

  toogleBlog = () => {
    this.setState(({ showBlog }) => {
      return {
        showBlog: !showBlog,
      };
    });
  };

  render() {
    const blogPosts = this.state.blogArr.map((item, pos) => {
      return (
        <BlogCards
          key={item.id}
          title={item.title}
          description={item.description}
          liked={item.liked}
          likePost={() => this.likePost(pos)}
        />
      );
    });
    return (
      <>
        <button onClick={this.toogleBlog}>
          {this.state.showBlog ? "Скрыть блог" : "Показать блог"}
        </button>
        {this.state.showBlog ? (
          <>
            <h1>Simple Blog</h1>
            <div className="posts">{blogPosts}</div>
          </>
        ) : null}
      </>
    );
  }
}
