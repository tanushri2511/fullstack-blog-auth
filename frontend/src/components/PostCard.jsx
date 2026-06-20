import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.content.slice(0, 120)}...</p>
      <small>
        By {post.author?.name || "Unknown"} on{" "}
        {new Date(post.createdAt).toLocaleDateString()}
      </small>
      <Link to={`/posts/${post._id}`}>Read More</Link>
    </div>
  );
};

export default PostCard;