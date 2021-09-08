import "./BlogContent.css";
import { posts } from "../../shared/projectData";
import { BlogCards } from "./components/BlogCards";
import { Component } from "react";
import { AddPostForm } from "./components/AddPostForm";

console.log(new Component());
export class BlogContent extends Component {
  state = {
    showAddForm: false,
    showBlog: true,
    blogArr: JSON.parse(localStorage.getItem("blogPosts")) || posts,
  };

  likePost = (pos) => {
    // const temp = JSON.parse(JSON.stringify(this.state.blogArr))
    const temp = [...this.state.blogArr];
    temp[pos].liked = !temp[pos].liked;

    this.setState({
      blogArr: temp,
    });

    localStorage.setItem("blogPosts", JSON.stringify(temp));
  };

  toggleBlog = () => {
    this.setState(({ showBlog }) => {
      return {
        showBlog: !showBlog,
      };
    });
  };

  deletePost = (pos) => {
    if (window.confirm(`Удалить ${this.state.blogArr[pos].title}?`)) {
      const temp = [...this.state.blogArr];
      console.log(temp);
      temp.splice(pos, 1);

      console.log(temp);

      this.setState({
        blogArr: temp,
      });

      localStorage.setItem("blogPosts", JSON.stringify(temp))
    }
  };

  handleAddFormShow = () => {
    this.setState({
      showAddForm: true,
    })
  }

  handleAddFormHide = () => {
    this.setState({
      showAddForm: false,
    })
  }

  render() {
    const blogPosts = this.state.blogArr.map((item, pos) => {
      return (
        <BlogCards
          key={item.id}
          title={item.title}
          description={item.description}
          liked={item.liked}
          likePost={() => this.likePost(pos)}
          deletePost={() => this.deletePost(pos)}
        />
      );
    });
    
    return (
      <>
        {this.state.showAddForm ? (<AddPostForm handleAddFormHide={this.handleAddFormHide}/>)
         : null}
        

        <button onClick={this.toggleBlog}>
          {this.state.showBlog ? "Скрыть блог" : "Показать блог"}
        </button>
        {this.state.showBlog ? (
          <>
          
            <h1>Simple Blog</h1>
            <button onClick={this.handleAddFormShow} className="blackBtn">Новый пост</button>
            <div className="posts">{blogPosts}</div>
          </>
        ) : null}
      </>
    );
  }
}
