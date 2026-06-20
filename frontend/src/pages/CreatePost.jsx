import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";

const CreatePost = () => {
  const [form, setForm] = useState({ title: "", content: "" });
  const navigate = useNavigate();
  const { getAuthConfig } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/posts", form, getAuthConfig());
      navigate("/myposts");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create post");
    }
  };

  return (
    <div className="form-container">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Title" onChange={handleChange} required />
        <textarea name="content" rows="10" placeholder="Write your post..." onChange={handleChange} required />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default CreatePost;