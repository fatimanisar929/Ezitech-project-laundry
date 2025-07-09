import React from "react";
import BlogPost from "./BlogPost";
import Sidebar from "./Sidebar";
import "./Blog.css";
import img1 from "../../assets/10002 (1).png";
import img2 from "../../assets/10009 (3).png";
import img3 from "../../assets/10012 (2).png";
import img4 from "../../assets/10003 (1).png";
import img5 from "../../assets/10020 (1).png";

const BlogList = () => {
  const posts = [
    {
      date: "15",
      month: "Jan",
      image: img1,
      title: "Google inks pact for new 35-storey office",
      text: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      meta: ["Travel,", "Lifestyle |", "03 Comments"],
    },
    {
      date: "15",
      month: "Jan",
      image: img2,
      title: "Google inks pact for new 35-storey office",
      text: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      meta: ["Travel,", "Lifestyle |", "03 Comments"],
    },
    {
      date: "15",
      month: "Jan",
      image: img3,
      title: "Google inks pact for new 35-storey office",
      text: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      meta: ["Travel,", "Lifestyle |", "03 Comments"],
    },
    {
      date: "15",
      month: "Jan",
      image: img4,
      title: "Google inks pact for new 35-storey office",
      text: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      meta: ["Travel,", "Lifestyle |", "03 Comments"],
    },
    {
      date: "15",
      month: "Jan",
      image: img5,
      title: "Google inks pact for new 35-storey office",
      text: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      meta: ["Travel,", "Lifestyle |", "03 Comments"],
    },
  ];

  return (
    <div className="blog-container">
      <div className="blog-left">
        {posts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
      <Sidebar />
    </div>
  );
};

export default BlogList;
