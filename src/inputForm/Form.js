import React,{useContext,useState,useEffect} from "react";
import Modal from "../modal/Modal";
import { BlogContext } from "../store/blog-context";
import "./Form.css"


const Input=()=>{
    const blogCtx=useContext(BlogContext);
   const[url,setUrl]=useState("");
   const[title,setTitle]=useState("");
   const[description,setDescription]=useState("");


    useEffect(() => {
        if (blogCtx.isEditing && blogCtx.editBlogId) {
          const blogToEdit = blogCtx.blogs[blogCtx.editBlogId];
          if (blogToEdit) {
            setUrl(blogToEdit.url || "");
            setTitle(blogToEdit.title || "");
            setDescription(blogToEdit.description || "");
          }
        }
      }, [blogCtx.isEditing, blogCtx.editBlogId, blogCtx.blogs]);



    const closeFormHandler=()=>{
        blogCtx.setAdd(false);
    }

    const submitFormHandler=(e)=>{
        e.preventDefault();
        
        const blog={
            url,
            title,
            description,

        }
        if(blogCtx.isEditing){
            blogCtx.addBlog({ ...blog, id: blogCtx.editBlogId });
    
        } else{
            blogCtx.addBlog(blog);
        }
        
        setUrl("");
        setTitle("");
        setDescription("");
        blogCtx.setAdd(false);
    }
    return <>
    <Modal>
        <h1>
            Enter your Blog Details
        </h1>
        <form onSubmit={submitFormHandler}>
            <label htmlFor="url">Image Url</label>
            <input id="url" name="url" type="text" value={url} onChange={(e)=>setUrl(e.target.value)}/>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <label htmlFor="description">Description</label>
            <input id="description" name="description" type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <div className="bt">
            <button type="submit">{blogCtx.isEditing ? "update": "post"}</button>
            <button onClick={closeFormHandler}>Close</button>

            </div>
       </form>
    </Modal>
    </>

}
export default Input;