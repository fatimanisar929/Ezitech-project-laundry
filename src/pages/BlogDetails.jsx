import React from "react";
import Hero6 from "../components/Hero6";
import BlogDetailContent from "../components/BlogDetailContent";
import SearchBox from "../components/Blog/SearchBox";
import Categories from "../components/Blog/Categories";
import RecentPost from "../components/Blog/RecentPosts";
import TagClouds from "../components/Blog/Tags";
import InstagramFeeds from "../components/Blog/InstagramFeed";
import News from "../components/Blog/Newsletter";
import Footer from "../components/Footer";
import "../components/BlogDetails.css";

import AuthorBox from "../components/Authorbox";
import PostNavigation from "../components/PostNavigation";
import Comments from "../components/Comments";
import ReplyForm from "../components/ReplyForm";

const BlogDetails = () => {
  return (
    <div className="blog-details-page">
      <Hero6 />
      <div className="container">
        <div className="blog-details-grid">
          {/* Left: Main Blog */}
          <div className="blog-details-left">
            <BlogDetailContent />

            <PostNavigation />
            <AuthorBox />
            <Comments />
            <ReplyForm />
          </div>

          {/* Right: Sidebar */}
          <div className="blog-sidebar">
            <SearchBox />
            <Categories />
            <RecentPost />
            <TagClouds />
            <InstagramFeeds />
            <News />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default BlogDetails;
