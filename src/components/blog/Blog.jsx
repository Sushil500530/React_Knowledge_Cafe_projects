
import PropTypes from "prop-types";
const Blog = ({ blog, handleAddToBookmard }) => {
//   console.log(blog);
  const {title,cover,author_image,author,post_date,hashtags,reading_time,reading_image} = blog;
  // console.log(title)
  return (
    <div className="my-16 space-y-3">
      <img src={cover} alt="cover-photo" />
      <div className="flex justify-between ml-4 my-6">
        <div className=" flex">
          <div className="w-16">
            <img className="w-full h-16 rounded-full" src={author_image} />
          </div>
          <div className="ml-5">
            <h2 className=" text-xl font-semibold">{author}</h2>
            <p>{post_date}</p>
          </div>
        </div>
        <div>
          <span className="flex gap-1">{reading_time} min read <button onClick={()=> handleAddToBookmard(blog)}><img className=" focus:bg-blue-500 active:bg-blue-500" src={reading_image}/></button></span>
        </div>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      {/* <p className="text-xl"><a className="hover:text-blue-500" href="">{hashtags}</a> </p> */}
      <p className="text-xl">
      {
        hashtags.map((hash,idx) => <span key={idx}><a className="hover:text-blue-500 m-2" href="">{hash}</a></span>)
      }
      </p>
      <button className="text-blue-500 text-xl ">Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmard:PropTypes.func
};

export default Blog;
