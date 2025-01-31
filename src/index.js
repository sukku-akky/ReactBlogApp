import React from 'react';
import ReactDOM from  'react-dom/client';
import './index.css';
import  App from "./App"
import {BlogContextProvider} from './store/blog-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BlogContextProvider>
    <App />
  </BlogContextProvider>
);

