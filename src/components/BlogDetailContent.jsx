import React from "react";
import img1 from "../assets/10002 (1).png";
import { useNavigate } from "react-router-dom";

const BlogDetailContent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top Blog
    navigate("/blog");
  };

  return (
    <div className="blog-detail">
      <img src={img1} alt="blog" className="blog-detail-img" />

      <h2 className="blog-detail-title">
        Second divided from form fish beast made every of seas all<br></br>{" "}
        gathered us saying he our
      </h2>
      <div className="blog-detail-meta" onClick={handleClick}>
        <span>Travel, Lifestyle</span> | <span>03 Comments</span>
      </div>

      <p className="blog-detail-text">
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower
      </p>

      <p className="blog-detail-text">
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower to actually sit through a
        self-imposed MCSE training. who has the willpower to actually.
      </p>
      <div className="section">
        <blockquote className="blog-quote">
          MCSE boot camps have its supporters and its detractors. Some people do
          not <br></br>understand why you should have to spend money on boot
          camp when you can get the <br></br>MCSE study materials yourself at a
          fraction of the camp price. However, who has the <br></br>willpower to
          actually sit through a self-imposed MCSE training.
        </blockquote>
      </div>
      <p className="blog-detail-text">
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower<br></br>
      </p>
      <p className="blog-detail-text">
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower to actually sit through a
        self-imposed MCSE training. who has the willpower to actually
      </p>
      <hr></hr>
      <div className="likes">
        <p>🖤 Lily and 4 people like this</p>
      </div>
    </div>
  );
};

export default BlogDetailContent;
