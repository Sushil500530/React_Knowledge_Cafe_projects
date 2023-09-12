
// import PropTypes from 'prop-types'
// import Bookmark from '../bookmark/Bookmark';
// const Bookmarks = ({bookmarks}) => {
//     // console.log(bookmarks)
//     return (
//         <div className="md:w-1/3 mt-3">
//             <h2 className="text-2xl ">Bookmakrs Blogs: {bookmarks.length}</h2>
//             <Bookmark></Bookmark>
//         </div>
//     );
// };

// Bookmarks.propTypes = {
//     bookmarks: PropTypes.func.isRequired
// }
// export default Bookmarks;

import PropTypes from 'prop-types'
import Bookmark from '../bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className='w-1/3 p-5 bg-gray-100'>
     <div>
        <h3 className='text-4xl'>Reading Time: {readingTime}</h3>
      </div>
            <h2 className="text-2xl w-full">Bookmakrs Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks