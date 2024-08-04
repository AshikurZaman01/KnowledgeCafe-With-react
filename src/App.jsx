import { useState } from "react"
import Blogs from "./Component/Blogs/Blogs"
import Bookmark from "./Component/Bookmark/Bookmark"
import Header from "./Component/Header/Header"

function App() {

  const [bookmark, setBookmark] = useState([])

  const handleAddToBlog = (blog) => {
    const bookmarkId = [...bookmark, blog];
    setBookmark(bookmarkId)
  }

  return (
    <>
      <div className="container mx-auto">
        <Header></Header>

        <div className="w-full grid grid-cols-4 gap-4">
          <div className="col-span-3"><Blogs handleAddToBlog={handleAddToBlog}></Blogs></div>

          <div className="col-span-1"><Bookmark bookmark={bookmark}></Bookmark></div>
        </div>

      </div>

    </>
  )
}

export default App
