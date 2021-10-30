import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Packages.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="row row-cols-3 g-2 justify-content-center">
        {loading && (
          <img
            src="https://i.ibb.co/WtMm1Wz/loading-paper-airplane.gif"
            alt="Loader"
          />
        )}
        {packages.map((singlePackage) => {
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
