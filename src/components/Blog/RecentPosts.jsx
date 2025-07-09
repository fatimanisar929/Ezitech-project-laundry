import React from "react";
import post1 from "../../assets/10010 (3).png";
import post2 from "../../assets/10016 (3).png";
import post3 from "../../assets/10022 (1).png";
import post4 from "../../assets/10013 (3).png";

import { useNavigate } from "react-router-dom";

const posts = [
  {
    image: post1,
    title: "From life was you fish...",
    date: "January 12, 2019",
  },
  {
    image: post2,
    title: "The Amazing Hubble",
    date: "02 Hours ago",
  },
  {
    image: post3,
    title: "Astronomy Or Astrology",
    date: "03 Hours ago",
  },
  {
    image: post4,
    title: "Asteroids telescope",
    date: "01 Hours ago",
  },
];

const RecentPosts = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top Blog
    navigate("/blog");
  };

  return (
    <div className="widget recent-posts">
      <h4>Recent Post</h4>
      <hr></hr>
      {posts.map((post, index) => (
        <div key={index} className="recent-post-item">
          <img
            src={post.image}
            style={{ width: "100px", height: "100px" }}
            alt="recent"
          />
          <div>
            <h5 onClick={handleClick}> {post.title} </h5>
            <p>{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
