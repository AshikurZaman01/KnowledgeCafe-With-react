import PropTypes from 'prop-types';
import { CiBookmarkCheck, CiBookmarkRemove } from 'react-icons/ci';
import { useState } from 'react';

const Blog = ({ blog, handleAddToBlog }) => {
    const { title, author, tags, image } = blog || {};
    const [bookmarked, setBookmarked] = useState(false);

    const handleButtonClick = () => {
        handleAddToBlog(blog.id);
        setBookmarked(!bookmarked);
    };

    return (
        <div className="border rounded-lg shadow-md p-4">
            <div>
                <img className='w-full h-[300px] object-center rounded-md' src={image} alt={title} />
            </div>

            <div className='my-2 flex justify-between items-center'>
                <div className='flex justify-start items-center gap-3'>
                    <img className='w-[60px] h-[60px] rounded-full object-cover' src={author.image} alt={author.name} />
                    <div>
                        <h3 className='font-semibold'>{author.name}</h3>
                        <h5 className='text-gray-500'>{author.date}</h5>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-3'>
                    <h5 className='text-gray-500'>{author.postedTime}</h5>
                    <button onClick={handleButtonClick} className={`flex items-center gap-1 px-3 py-1 rounded-md ${bookmarked ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}>
                        {bookmarked ? <CiBookmarkRemove className='text-2xl' /> : <CiBookmarkCheck className='text-2xl' />}
                    </button>
                </div>
            </div>
            <div className='mb-4'>
                <h2 className='font-bold text-3xl px-3'>{title}</h2>
                <div className='px-3'>
                    {tags.map((tag, indx) => (
                        <span key={indx} className='text-gray-500 font-semibold px-3 py-1 rounded-md mr-2'>#{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

Blog.propTypes = {
    blog: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            postedTime: PropTypes.string.isRequired,
        }).isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    handleAddToBlog: PropTypes.func.isRequired,
};

export default Blog;
