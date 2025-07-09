import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ReplyForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", comment: "" });
  const [error, setError] = useState("");

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top Blog
    navigate("/blog-details");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.comment) {
      setError("All fields are required.");
    } else {
      alert("Your comment has been submitted!");
      setForm({ name: "", email: "", comment: "" });
    }
  };

  return (
    <div className="reply-form">
      <hr></hr>
      <h3 style={{ fontWeight: "normal" }}>Leave a Reply</h3>
      {error && <p className="form-error">{error}</p>}
      <form onSubmit={onSubmit}>
        <textarea
          name="comment"
          placeholder="Write your comment"
          value={form.comment}
          onChange={onChange}
        />
        <div className="reply-inputs">
          <input
            type="text"
            name="name"
            placeholder=" Name"
            value={form.name}
            onChange={onChange}
          />
          <input
            type="email"
            name="email"
            placeholder=" Email "
            value={form.email}
            onChange={onChange}
          />
        </div>
        <input
          className="website"
          type="text"
          name="website"
          placeholder=" Website "
          value={form.website}
          onChange={onChange}
        />
        <button type="submit" onClick={handleClick}>
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default ReplyForm;
