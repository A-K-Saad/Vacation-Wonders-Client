import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Packages.css";

const Packages = ({ limit }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://fathomless-meadow-55221.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 justify-content-center">
        {loading && (
          <img
            src="https://i.ibb.co/QjZhgZc/load.gif"
            alt="Loading"
            style={{ width: "6rem" }}
          />
        )}
        {!packages.length && !loading && (
          <div className="d-flex flex-column">
            <i className="fas fa-route" style={{ fontSize: "150px" }}></i>
            <h4 className="m-0 py-3">No Tours Added Yet</h4>
          </div>
        )}
        {packages.slice(0, limit).map((singlePackage) => {
          return (
            <div className="col" key={singlePackage?._id}>
              <div className="card border-0 p-3 shadow-sm">
                <div className="img-outer">
                  <img
                    src={singlePackage?.image}
                    alt="Tour_Image"
                    className="w-100"
                  />
                </div>
                <h3 className="m-0 pt-3">{singlePackage?.name}</h3>
                <div className="m-0 pt-2 d-flex justify-content-between align-items-center">
                  <h5>
                    ${singlePackage?.price || 80}
                    <small>/Person</small>
                  </h5>
                  <h6>
                    <i className="far fa-calendar-alt m-0 me-2"></i>
                    {singlePackage?.time || "1 Day / 1 Night"}
                  </h6>
                </div>
                <small>{singlePackage?.description.slice(0, 80)}...</small>
                <Link to={`/packages/${singlePackage?._id}`}>
                  <button className="btn btn-outline-dark mt-3 w-auto">
                    Book Now
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

export default Packages;
