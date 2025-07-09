import React from "react";
import leftImg from "../assets/10021 (2).png";
import rightImg from "../assets/10003 (1).png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PostNavigation = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top Blog
    navigate("/blog-details");
  };

  return (
    <div className="post-nav-row-strict">
      {/* Previous Post */}
      <div className="post-nav-single left-align">
        <div className="post-img-wrap">
          <img
            onClick={handleClick}
            src={leftImg}
            alt="Previous Post"
            className="post-img"
          />
          <div className="nav-arrow left" onClick={handleClick}>
            <FaArrowLeft />
          </div>
        </div>
        <div className="post-info">
          <span>Prev Post</span>
          <h5 onClick={handleClick}>Space the Final Frontier</h5>
        </div>
      </div>

      {/* Spacer */}
      <div className="post-nav-space"></div>

      {/* Next Post */}
      <div className="post-nav-single right-align">
        <div className="post-info">
          <span>Next Post</span>
          <h5 onClick={handleClick}>Telescopes 101</h5>
        </div>
        <div className="post-img-wrap">
          <img
            onClick={handleClick}
            src={rightImg}
            alt="Next Post"
            className="post-img"
            style={{ height: "80px", width: "100px" }}
          />
          <div className="nav-arrow right" onClick={handleClick}>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostNavigation;
