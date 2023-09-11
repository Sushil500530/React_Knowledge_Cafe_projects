import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookmarks,setBookmarks] = useState([]);

  const handleAddToBookmard = (blog) =>{
    const newBookmarks = [...bookmarks, blog];
    // console.log('bookmark adding soon')
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs 
        handleAddToBookmard ={handleAddToBookmard}
        ></Blogs>
        <Bookmarks
        bookmarks={bookmarks}
        ></Bookmarks>
      </div>
    </>
  );  
}

export default App;
