import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import OrderForm from "./OrderForm/OrderForm";
import "./Order.css";

const Order = () => {
  const [orderPackage, setOrderPackage] = useState({});
  const history = useHistory();
  const { packageId } = useParams();

  useEffect(() => {
    fetch(`https://fathomless-meadow-55221.herokuapp.com/packages/${packageId}`)
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
            <button
              className="btn mb-3"
              onClick={() => {
                history.goBack() || history.push("/");
              }}
            >
              <i className="h5 far fa-arrow-alt-circle-left m-0 pe-2"></i>Back
            </button>
            <div className="image-outer">
              <img
                src={orderPackage?.image}
                alt="Tour_Image"
                className="w-100 rounded"
              />
            </div>
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
          </div>
          <OrderForm orderPackage={orderPackage}></OrderForm>
        </div>
      </div>
    </>
  );
};

export default Order;
