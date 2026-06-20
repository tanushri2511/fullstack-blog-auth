import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await API.get(`/posts/${id}`);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <small>
        By {post.author?.name} on {new Date(post.createdAt).toLocaleDateString()}
      </small>
      <p style={{ whiteSpace: "pre-wrap", marginTop: "1rem" }}>{post.content}</p>
    </div>
  );
};

export default PostDetails;