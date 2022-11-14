import React, { useState, useEffect } from "react";
import Post from "./Post";
const PostList = () => {
  const [posts, SetPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        SetPosts(data);
      });
  }, []);

  return (
    <div className="max-w-full min-h-fit bg-gray-50 p-4 flex items-center justify-center align-middle flex-wrap text-center gap-2">
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export default PostList;
