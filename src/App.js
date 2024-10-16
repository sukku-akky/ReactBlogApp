import MainPage from "./mainPage/MainPage";
import { useContext } from "react";
import Form from "./inputForm/Form"
import {BlogContext} from "./store/blog-context"
import BlogsList from "./blogsList/BlogsList";
function App() {
  const blogCtx=useContext(BlogContext);
  
  return (<>
  <MainPage/>
  <BlogsList/>
  {blogCtx.add && <Form/>}
  </>

  );
}

export default App;
