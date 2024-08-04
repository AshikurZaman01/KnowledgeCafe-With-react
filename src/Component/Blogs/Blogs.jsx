import { useEffect, useState } from 'react';
import Blog from './Blog';
import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBlog }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('../../../public/cafe.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <div>
                {blogs.map((blog) => (
                    <Blog handleAddToBlog={handleAddToBlog} key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}

Blogs.propTypes = {
    handleAddToBlog: PropTypes.func.isRequired,
};

export default Blogs;
