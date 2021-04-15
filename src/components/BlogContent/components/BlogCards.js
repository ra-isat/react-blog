import { Component } from "react";
import "./BlogCards.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export const BlogCards = ({ title, description, liked, likePost, deletePost }) => {
  const likeFill = liked ? "crimson" : "black";

  return (
    <div className="post">
      <div className="postContent">
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <button onClick={likePost}>
            <FavoriteIcon style={{ fill: likeFill }} />
          </button>
        </div>
      </div>

      <button className="deleteBtn" onClick={deletePost}>
        <DeleteForeverIcon />
      </button>
    </div>
  );
};
