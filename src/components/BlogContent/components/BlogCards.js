import { Component } from "react";

export const BlogCards = ({ title, description, likeCount, likePost }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <button onClick={likePost}>like</button>
        {likeCount}
      </div>
    </div>
  );
};
