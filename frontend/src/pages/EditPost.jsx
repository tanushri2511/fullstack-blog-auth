import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getAuthConfig } = useAuth();
  const [form, setForm] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await API.get(`/posts/${id}`);
      setForm({ title: data.title, content: data.content });
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/posts/${id}`, form, getAuthConfig());
      navigate("/myposts");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to update post");
    }
  };

  return (
    <div className="form-container">
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" value={form.title} onChange={handleChange} required />
        <textarea name="content" rows="10" value={form.content} onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;