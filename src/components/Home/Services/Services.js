import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-meadow-55221.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-3">
        {services?.map((service) => {
          return (
            <div key={service._id} className="col">
              <div className="shadow-sm rounded bg-light p-4">
                <i className={`service-icon ${service.icon}`}></i>
                <h5>{service.name}</h5>
                <p className="m-0">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn btn-outline-dark mt-4">See All</button>
    </>
  );
};

export default Services;
