import React, { Component } from "react";
import css from "./css/Content.module.css";
import postData from "../posts.json"; // Import the entire JSON file

export class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
        </div>

        <div className={css.SearchResults}>
          {postData.savedPosts.map((post) => {
            return (
              <div className={css.SearchItem} key={post.title}>
                <p>{post.title}</p>
                <p>{post.name}</p>
                <img src={post.image} alt="random" />
                <p>{post.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Content;