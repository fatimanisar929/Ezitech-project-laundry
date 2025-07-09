import React from "react";
import SearchBox from "./SearchBox";
import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Tags from "./Tags";
import InstagramFeed from "./InstagramFeed";
import Newsletter from "./Newsletter";

const Sidebar = () => {
  return (
    <div className="blog-sidebar">
      <SearchBox />
      <Categories />
      <RecentPosts />
      <Tags />
      <InstagramFeed />
      <Newsletter />
    </div>
  );
};

export default Sidebar;
