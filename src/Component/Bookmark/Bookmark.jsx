import { useEffect, useState } from "react";

const Bookmark = ({ bookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('../../../public/cafe.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(error => console.log(error));
  }, []);

  // Ensure bookmark is an array of numbers
  const bookmarkIds = bookmark.map(id => Number(id));

  const foundBlogs = blogs.filter(blog => bookmarkIds.includes(blog.id));

  const spentTime = foundBlogs.reduce((total, blog) => {
    const time = Number(blog.author.postedTime.split(' ')[0]);
    return total + (isNaN(time) ? 0 : time);
  }, 0)


  return (
    <div>
      <div className="border border-blue-400 px-2 py-4 font-semibold text-blue-600 rounded-md">
        <h3>Spent time on read: {spentTime} minutes</h3>
      </div>

      <div>
        {foundBlogs.map(blog => (
          <div key={blog.id} className="shadow-md px-2 py-4 font-semibold text-gray-500 m-1 rounded-md">
            <h3>{blog.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookmark;
