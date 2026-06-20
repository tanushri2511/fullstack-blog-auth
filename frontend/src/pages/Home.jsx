import { useEffect, useState } from "react";
import API from "../api/axios";
import PostCard from "../components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await API.get("/posts");
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1>Latest Posts</h1>
      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
