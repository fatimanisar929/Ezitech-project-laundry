import React from "react";
import { useNavigate } from "react-router-dom";

const Tags = () => {
  const navigate = useNavigate();
  const tags = [
    "project",
    "love",
    "technology",
    "travel",
    "restaurant",
    "life style",
    "design",
    "illustration",
  ];

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top Blog
    navigate("/blog");
  };

  return (
    <div className="widget tags">
      <h4>Tag Clouds</h4>
      <hr></hr>
      <div className="tags-wrapper">
        {tags.map((tag, index) => (
          <React.Fragment key={index}>
            <span className="category-item" onClick={handleClick}>
              {tag}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Tags;
