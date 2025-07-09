import React from "react";

import "./Blog.css"; // Assuming this contains styling
import { useNavigate } from "react-router-dom";

const Newsletter = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top Blog
    navigate("/blog");
  };

  return (
    <div className="widget search-box">
      <h4 className="heading">Newsletter</h4>
      <hr></hr>
      <div className="search-wrapper">
        <input type="text" placeholder="Enter email" />
      </div>
      <button
        className="search-btn"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        Subscribe
      </button>
    </div>
  );
};
export default Newsletter;
