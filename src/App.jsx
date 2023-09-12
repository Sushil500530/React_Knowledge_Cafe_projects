import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const handleAddToBookmard = (blog) =>{
    const newBookmarks = [...bookmarks, blog];
    // console.log('bookmark adding soon')
    setBookmarks(newBookmarks);
  }

  const handleSpendReadingTime =(id,time) =>{
    // console.log('time is clicked and you show',time)
    const newReadingTime =(+readingTime) + (+time) ;
    setReadingTime(newReadingTime)
    // setReadingTime(readingTime + time)
    // console.log(newReadingTime)
    console.log('remove id',newReadingTime)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id) ;
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs 
        handleAddToBookmard ={handleAddToBookmard}
        handleSpendReadingTime={handleSpendReadingTime}
        ></Blogs>
        <Bookmarks
        bookmarks={bookmarks}
        readingTime={readingTime}
        ></Bookmarks>
      </div>
    </>
  );  
}

export default App;
