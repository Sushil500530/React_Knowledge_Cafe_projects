
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

const Bookmarks = ({bookmarks}) => {
  return (
    <div>
     <div className="md:w-3/2 p-5 bg-gray-100">
            <h2 className="text-2xl ">Bookmakrs Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.func.isRequired
}

export default Bookmarks