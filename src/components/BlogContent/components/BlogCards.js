import { Component } from "react";
import heart from "../../../assets/image/heart.svg"
import './BlogCards.css'
import FavoriteIcon from '@material-ui/icons/Favorite';

export const BlogCards = ({ title, description, liked, likePost }) => {

  const likeFill = liked ? 'crimson' : 'black'

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <button onClick={likePost}>
          <FavoriteIcon style={{fill: likeFill}}/>
        </button>
      </div>
    </div>
  );
};
