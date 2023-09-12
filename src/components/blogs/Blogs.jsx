import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types'


const Blogs = ({handleAddToBookmard,handleSpendReadingTime}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    // console.log(blogs)
    return (
        <div className="md:w-2/3 m-3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                key={blog.id}
                 blog={blog}
                 handleAddToBookmard={handleAddToBookmard}
                 handleSpendReadingTime={handleSpendReadingTime}
                 ></Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
    handleAddToBookmard: PropTypes.func,
    handleSpendReadingTime: PropTypes.func.isRequired
}
export default Blogs;