import React,{useContext} from "react";
import BlogItem from "./BlogItem";
import "./BlogsList.css";
import { BlogContext } from "../store/blog-context";

const BlogsList = () => {
    const blogCtx=useContext(BlogContext);
    const blogs = blogCtx.blogs;

  // Early return if blogs are still loading or are empty
  if (!blogs || Object.keys(blogs).length === 0) {
    return <p>No blogs available.</p>;
  }

  // Only render the list if blogs exist
  return (
    <div className="blogs">
      {Object.keys(blogs).map((id) => (
        <BlogItem
          key={id}
          id={id}
          url={blogs[id].url}
          title={blogs[id].title}
          description={blogs[id].description}
        />
      ))}
    </div>
  );


  };

export default BlogsList;
