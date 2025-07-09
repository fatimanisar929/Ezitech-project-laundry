import React from "react";
import insta1 from "../../assets/10018 (2).png";
import insta2 from "../../assets/10011 (1).png";
import insta3 from "../../assets/10014 (2).png";
import insta4 from "../../assets/10015 (2).png";
import insta5 from "../../assets/10017 (3).png";
import insta6 from "../../assets/10021 (1).png";
import { useNavigate } from "react-router-dom";

const images = [insta1, insta2, insta3, insta4, insta5, insta6]; // repeat or use real images

const InstagramFeed = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top Blog
    navigate("/blog");
  };

  return (
    <div className="widget instagram-feed">
      <h4>Instagram Feeds</h4>
      <hr></hr>
      <div className="insta-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt="insta" onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
