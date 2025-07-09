import React from "react";
import "./Blog.css"; // Ensure this contains your styles
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    "Restaurant food (37)",
    "Travel (10)",
    "Modern technology (03)",
    "Product (11)",
    "Inspiration (21)",
    "Health Care (10)",
  ];

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top Blog
    navigate("/blog");
  };

  return (
    <div className="widget categories">
      <h5 className="widget-title">Category</h5>
      <hr></hr>
      <ul className="category-list">
        {categories.map((cat, i) => (
          <React.Fragment key={i}>
            <li className="category-item" onClick={handleClick}>
              {cat}
            </li>
            {i < categories.length - 1 && <hr className="category-divider" />}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
