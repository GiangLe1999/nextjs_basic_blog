import React from "react";

import styles from "./PostsGrid.module.css";
import PostItem from "./PostItem";

const PostsGrid = (props) => {
  const { posts } = props;

  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
