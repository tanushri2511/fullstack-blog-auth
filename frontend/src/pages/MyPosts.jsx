import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const { getAuthConfig } = useAuth();

  const fetchMyPosts = async () => {
    const { data } = await API.get("/posts/mine", getAuthConfig());
    setPosts(data);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this post?")) return;
    await API.delete(`/posts/${id}`, getAuthConfig());
    fetchMyPosts();
  };

  useEffect(() => {
    fetchMyPosts();
  }, []);

  return (
    <div className="container">
      <h1>My Posts</h1>
      {posts.map((post) => (
        <div key={post._id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.content.slice(0, 120)}...</p>
          <div className="actions">
            <Link to={`/edit/${post._id}`}>Edit</Link>
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPosts;