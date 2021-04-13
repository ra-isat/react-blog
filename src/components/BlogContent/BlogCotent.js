import "./BlogContent.css";
import { posts } from "../../shared/projectData";
import { BlogCards } from "./components/BlogCards";
import { Component } from "react";

console.log(new Component());
export class BlogContent extends Component {
  state = {
    showBlog: true,
    blogArr: posts,
  };

  likePost = (pos) => {
    const temp = this.state.blogArr;
    temp[pos].likeCount++;

    this.setState({
      blogArr: temp,
    });
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
          likeCount={item.likeCount}
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
