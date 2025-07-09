import React from "react";
import authorImg from "../assets/author.png.webp"; // replace with real image
import { useNavigate } from "react-router-dom";

const AuthorBox = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top Blog
    navigate("/blog-details");
  };
  return (
    <div className="author-box">
      <img src={authorImg} alt="Author" className="author-img" />
      <div className="author-details">
        <h4 onClick={handleClick}>Harvard milan</h4>
        <p>
          Second divided from form fish beast made. Every of seas all gathered
          use saying you're, he our dominion twon Second divided from
        </p>
      </div>
    </div>
  );
};

export default AuthorBox;
