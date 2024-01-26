import React, { useState, useEffect } from "react";
import "./App.css";
import fetchPosts from "./services/postService";
import { PostCard } from "./compnents/posts";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsData = await fetchPosts();
      setPosts(postsData);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Conoce todas nuestras notas:</h1>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
