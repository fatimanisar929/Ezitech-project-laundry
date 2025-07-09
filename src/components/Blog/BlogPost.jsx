import React from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";

const BlogPost = ({ date, month, image, title, text, meta }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top Blog
    navigate("/blog");
  };

  return (
    <div className="blog-post">
      <div className="blog-img-wrapper">
        <img src={image} alt="blog" />
        <div className="date-tag" onClick={handleClick}>
          <span className="day">{date}</span>
          <span className="month">{month}</span>
        </div>
      </div>
      <div className="blog-content">
        <h3 onClick={handleClick}>{title}</h3>
        <p>{text}</p>
        <div className="meta">
          {meta.map((item, index) => (
            <span key={index} onClick={handleClick}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
