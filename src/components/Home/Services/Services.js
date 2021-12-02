import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://fathomless-meadow-55221.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <img
          src="https://i.ibb.co/QjZhgZc/load.gif"
          alt="Loading"
          style={{ width: "6rem" }}
        />
      </>
    );
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
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
    </>
  );
};

export default Services;
