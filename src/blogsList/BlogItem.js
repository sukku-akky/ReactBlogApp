import React,{useContext} from "react";
import { BlogContext } from "../store/blog-context";

const BlogItem = ({id,url,title,description}) => {
    const blogCtx=useContext(BlogContext);
    return (
      <div>
        <h2>{title}</h2>
        {url && <img src={url} alt={title}/>}
        
        <p>{description}</p>
        <button onClick={() => blogCtx.delete(id)}>Delete</button>
        <button onClick={()=>blogCtx.edit(id)}>Edit</button>
      </div>
    );
  };
  export default BlogItem;