import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="pb-5 unfound-div d-flex align-items-center justify-content-center flex-column">
        <div className="text-center pt-3">
          <i
            className="fab fa-java text-secondary"
            style={{ fontSize: "200px" }}
          ></i>
          <h1 className="display-1 fw-bold text-secondary">404</h1>
          <h2>OOPS! Page not found!</h2>
          <h6 className="text-secondary">
            Seems like there's nothing to show here!
          </h6>
          <Link to="/">
            <button className="btn btn-outline-dark mt-3">Back to Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
