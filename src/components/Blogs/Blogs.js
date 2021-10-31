import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-meadow-55221.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-2 text-center">
        {blogs?.map((blog) => {
          return (
            <div key={blog._id} className="col text-center">
              <div className="shadow-sm rounded card pb-3">
                <img src={blog.image} alt="Blog-Img" />
                <h6 className="pt-2">{blog.title}</h6>
                <small className="px-3">
                  {blog.description.slice(0, 100)}...
                </small>
                <Link to={`/blog/${blog._id}`}>
                  <button className="btn btn-outline-dark mt-3">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
