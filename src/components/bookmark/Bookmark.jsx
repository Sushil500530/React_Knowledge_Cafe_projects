import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-gray-200 w-full mt-3 p-5 rounded-lg'>
            <div className='text-xl'>{title}</div>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;