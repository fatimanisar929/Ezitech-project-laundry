import React from "react";
import { useNavigate } from "react-router-dom";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
const Comments = () => {
  const navigate = useNavigate();
  const comments = [
    {
      name: "Emilly Blunt",
      avatar: avatar1,
      text: "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
      date: "December 4, 2017 at 3:12 ",
      reply: "Reply",
    },
    {
      name: "Emilly Blunt",
      avatar: avatar2,
      text: "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
      date: "December 4, 2017 at 3:12 ",
      reply: "Reply",
    },
    {
      name: "Emilly Blunt",
      avatar: avatar3,
      text: "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
      date: "December 4, 2017 at 3:12 ",
      reply: "Reply",
    },
  ];

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top Blog
    navigate("/blog-details");
  };

  return (
    <div className="comments-section">
      <h3>0{comments.length} Comments</h3>
      {comments.map((c, i) => (
        <div className="comment" key={i}>
          <img
            src={c.avatar || "/placeholder-avatar.png"}
            alt={c.name}
            className="comment-avatar"
          />
          <div className="comment-content">
            <p>{c.text}</p>
            <h5>
              <span
                onClick={handleClick}
                style={{
                  cursor: "pointer",
                  fontWeight: "normal",
                }}
              >
                {c.name}{" "}
              </span>
              <span
                style={{
                  fontWeight: "normal",
                  marginLeft: "30px",
                  color: "grey",
                }}
              >
                {c.date}
              </span>
              <span
                onClick={handleClick}
                className="reply"
                style={{
                  fontWeight: "normal",
                  marginLeft: "535px",
                  cursor: "pointer",
                  color: "grey",
                }}
              >
                {c.reply}
              </span>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
