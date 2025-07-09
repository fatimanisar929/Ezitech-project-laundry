import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Blog.css"; // Assuming this contains styling
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top Blog
    navigate("/blog");
  };

  return (
    <div className="widget search-box">
      <div className="search-wrapper">
        <input type="text" placeholder="Search Keyword" />
        <FaSearch className="search-icon" />
      </div>
      <button
        className="search-btn"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        S e a r c h
      </button>
    </div>
  );
};
export default SearchBox;
