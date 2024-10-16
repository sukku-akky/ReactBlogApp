import React, { useState,useEffect } from "react";

const BlogContext=React.createContext({
    add:false,
    blogs:"",
    addBlog:()=>{},
    delete:()=>{},
    edit:()=>{},

})

const BlogContextProvider=(props)=>{

    const [isAddClicked,setIsAddClicked]=useState(false);
    const [totalBlogs,setTotalBlogs]=useState({});
    const[editBlogId,setEditBlogId]=useState(null);
    const[isEditing,setIsEditing]=useState(false);

    const addBlogHandler=async(blog)=>{
        try{
            const response=await fetch("https://blogapp-e13f6-default-rtdb.firebaseio.com/blogs.json",{
                method:"POST",
                body:JSON.stringify(blog),
                headers: {
                    "Content-Type": "application/json"  // Set appropriate headers
                  }
            
            })
            const data=await response.json();
            const newBlogId=data.name;

            setTotalBlogs((prevBlogs)=>({
                ...prevBlogs,
                [newBlogId]:blog,
            }));
            

    } catch(e){
        console.log(e);
    }
}
   const fetchTotalBlogs=async()=>{
    try{
        const response=await fetch("https://blogapp-e13f6-default-rtdb.firebaseio.com/blogs.json");
        const data=await response.json();
        setTotalBlogs(data || {});

    } catch(e){
        console.log(e);

    }

   }

    const deleteBlogHandler=async(id)=>{
        try{
            const response=await fetch(`https://blogapp-e13f6-default-rtdb.firebaseio.com/blogs/${id}.json`,{
                method:"DELETE",

            })
            setTotalBlogs((prevBlogs) => {
                const updatedBlogs = { ...prevBlogs };
                delete updatedBlogs[id]; // Remove the deleted blog from the state
                return updatedBlogs;
              });
              

        } catch(e){
            console.log(e);
        }

    }

    const editBlogHandler=(id)=>{
        setIsEditing(true);
        setIsAddClicked(true);
        setEditBlogId(id);
        setTimeout(()=>{
            setTotalBlogs((prevBlogs) => {
                const updatedBlogs = { ...prevBlogs };
                delete updatedBlogs[id]; // Remove the deleted blog from the state
                return updatedBlogs;
              });
        },1000)

        

    }

    useEffect(()=>{
        fetchTotalBlogs();

    },[])
    

    const blogContext={
        add:isAddClicked,
        setAdd:setIsAddClicked,
        addBlog:addBlogHandler,
        delete:deleteBlogHandler,
        edit:editBlogHandler,
        blogs:totalBlogs,
        editBlogId:editBlogId,
        isEditing:isEditing
    }

    return (
        <BlogContext.Provider value={blogContext}>{props.children}</BlogContext.Provider>
    )
}

export { BlogContext, BlogContextProvider };