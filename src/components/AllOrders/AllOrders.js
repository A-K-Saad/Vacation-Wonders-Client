import React, { useEffect, useState } from "react";
import Alert from "../../hooks/Alert";

const AllOrders = () => {
  const [packages, setPackages] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updateId, setUpdateId] = useState("");
  const { confirmAlert } = Alert();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fathomless-meadow-55221.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setAllOrders(data);
      });

    //Fetching the Details
    fetch("https://fathomless-meadow-55221.herokuapp.com/packages/")
      .then((res) => res.json())
      .then((data) => setPackages(data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("https://fathomless-meadow-55221.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
    setUpdateId("");
  }, [updateId]);

  const approveOrder = (orderId) => {
    fetch("https://fathomless-meadow-55221.herokuapp.com/orders", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id: orderId, status: "Approved" }),
    })
      .then(() => {
        setUpdateId(orderId);
      })
      .catch((error) => console.log(error));
  };
  //Delete Order
  const deleteOrder = (_id) => {
    confirmAlert(allOrders, _id, setAllOrders);
  };

  if (isLoading) {
    return (
      <div className="text-center box-wrapper">
        <img
          src="https://i.ibb.co/WtMm1Wz/loading-paper-airplane.gif"
          alt="Loader"
          className="w-100"
        />
      </div>
    );
  }

  return (
    <>
      <div className="container py-5">
        {!isLoading && !allOrders.length ? (
          <>
            <div className="text-center box-wrapper">
              <img
                src="https://i.ibb.co/vwYsWbn/image.png"
                alt="NO_CART"
                className="w-100"
              />
              <h5 className="mt-4">Order tours to check them out!</h5>
            </div>
          </>
        ) : (
          <h2 className="fw-600 text-center mb-3">Check Out All Orders</h2>
        )}
        <div className="row px-2">
          {allOrders
            .slice()
            .reverse()
            .map((order) => {
              const currentPackage = packages?.find(
                (el) => el?._id === order?.packageId
              );
              return (
                <div
                  className="shadow-sm p-3 my-2 col-12 col-md-8 m-auto border rounded"
                  key={order?._id}
                >
                  <div className="row">
                    <div className="col-7 col-md-6 overflow-hidden">
                      <h4>{currentPackage?.name}</h4>
                      <div className="d-flex aign-items-end flex-column">
                        <div className="d-flex flex-column flex wrap">
                          <small className="pe-3">{order?.name}</small>
                          <small className="pe-3 m-0">{order?.email}</small>
                        </div>
                        <div className="d-flex pt-3 flex-wrap">
                          <small className="pe-3 m-0">
                            Adult:{order?.adult}
                          </small>
                          <small className="pe-3 m-0">
                            Child:{order?.child}
                          </small>
                          <h5 className="m-0 pe-3 fw-700 pt-2 pt-md-0">
                            $
                            {order?.price ||
                              parseInt(currentPackage?.price || 80) *
                                (parseInt(order?.adult) +
                                  parseInt(order?.child)) -
                                (35 / 100) * parseInt(order?.child)}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 m-0 col-0 col-md-3 align-items-center d-none d-md-flex justify-content-center text-light">
                      <p
                        className={`m-0 badge ${
                          order?.status === "Pending"
                            ? "bg-danger"
                            : "bg-success"
                        }`}
                      >
                        {order?.status === "Pending" ? "Pending" : "Approved"}
                      </p>
                    </div>
                    <div className="d-flex flex-column col-5 col-md-3 justify-content-center align-items-center">
                      <div className="d-flex">
                        <button
                          className={`btn btn-approve d-flex align-items-center justify-content-center me-2`}
                          onClick={() => {
                            approveOrder(order?._id);
                          }}
                        >
                          <i className="far fa-calendar-check m-0"></i>
                        </button>
                        <button
                          className="btn btn-delete d-flex align-items-center justify-content-center"
                          onClick={() => deleteOrder(order?._id)}
                        >
                          <i className="fas fa-trash m-0"></i>
                        </button>
                      </div>
                      <p
                        className={`text-light m-0 d-flex align-items-center justify-content-center d-block d-md-none badge mt-3 ${
                          order?.status === "Pending"
                            ? "bg-danger"
                            : "bg-success "
                        }`}
                      >
                        {order?.status === "Pending" ? "Pending" : "Approved"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default AllOrders;
