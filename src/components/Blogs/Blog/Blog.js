import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Blog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`https://fathomless-meadow-55221.herokuapp.com/blogs/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
    setLoading(false);
  }, [blogId]);
  return (
    <>
      {loading && (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      <div className="container py-5">
        <div className="row justify-content-center py-3">
          <div className="col-12 col-md-7 text-center shadow-sm p-3">
            <img src={blog.image} alt="Blog_Image" className="w-100" />
            <h2 className="pt-3">{blog.title}</h2>
            <p className="m-0">{blog.description}</p>
            <Link to="/">
              <button className="btn btn-outline-dark mt-4">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
