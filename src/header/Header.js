import React,{useContext} from "react";
import { BlogContext } from "../store/blog-context";

const Header=()=>{
    const blogCtx=useContext(BlogContext);

    const openFormHandler=()=>{
        blogCtx.setAdd(true);
    }

    
    
    return (
    <>
    <div style={{textAlign:"center",}}>
        <h1>Bolg Website</h1>
        <button onClick={openFormHandler}>Add new Blog</button>
        <hr/>
    </div>
    </>)

}

export default Header;