import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import OrderForm from "./OrderForm";

const Order = () => {
  const [orderPackage, setOrderPackage] = useState({});
  const { packageId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/packages/${packageId}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderPackage(data);
      });
  }, [packageId]);
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-7">
            <img
              src={orderPackage?.image}
              alt="Tour_Image"
              className="w-100 rounded"
            />
            <h3 className="m-0 pt-3 text-center">{orderPackage?.name}</h3>
            <div className="mb-3 pt-2 d-flex justify-content-between align-items-center">
              <h5>
                ${orderPackage?.price || 75}
                <small>/Person</small>
              </h5>
              <h6>
                <i className="far fa-calendar-alt m-0 me-2"></i>
                {orderPackage?.time || "1 Day/1 Night"}
              </h6>
            </div>
            <p>{orderPackage?.description}</p>
            <Link to="/">
              <button className="btn btn-dark mt-5">Back to Home</button>
            </Link>
          </div>
          <OrderForm></OrderForm>
        </div>
      </div>
    </>
  );
};

export default Order;
