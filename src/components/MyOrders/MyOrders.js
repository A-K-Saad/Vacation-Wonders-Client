import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import Alert from "../../hooks/Alert";
import "./MyOrders.css";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { confirmAlert } = Alert();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://fathomless-meadow-55221.herokuapp.com/my-orders?search=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyOrders(data))
      .catch((error) => console.log(error));
    //Fetching the Details
    fetch("https://fathomless-meadow-55221.herokuapp.com/packages/")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setPackages(data);
      });
    return;
  }, [user?.email]);

  const deleteOrder = (_id) => {
    confirmAlert(myOrders, _id, setMyOrders);
  };

  return (
    <>
      <div className="container py-5">
        {!myOrders.length && !isLoading ? (
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
          <>
            <h2 className="fw-600 text-center mb-3">Check Out Own Orders</h2>
            <div className="row px-2">
              {myOrders
                .slice()
                .reverse()
                .map((order) => {
                  const currentPackage = packages?.find(
                    (el) => el?._id === order?.packageId
                  );
                  return (
                    <div
                      className="shadow-sm p-3 my-2 col-12 col-md-9 m-auto border rounded"
                      key={order?._id}
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h4>{currentPackage?.name}</h4>
                          <div className="d-flex flex-column flex-md-row aign-items-center">
                            <div className="d-flex align-items-center">
                              <p className="pe-3 m-0">Adult:{order?.adult}</p>
                              <p className="pe-3 m-0">Child:{order?.child}</p>
                              <h5 className="m-0 pe-3 fw-700">
                                $
                                {order?.price ||
                                  parseInt(currentPackage?.price || 80) *
                                    (parseInt(order?.adult) +
                                      parseInt(order?.child)) -
                                    (35 / 100) * parseInt(order?.child)}
                              </h5>
                            </div>
                            <div className="d-flex align-items-center">
                              <h6 className="m-0 d-flex align-items-baseline pe-2">
                                <i className="fas fa-map-marker-alt h5 m-0 pe-1"></i>
                                {order?.address}
                              </h6>
                              <h6 className="m-0">
                                <i className="fas fa-calendar-alt m-0 pe-1"></i>
                                {currentPackage?.date || "N/A"}
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button
                            className="btn btn-delete d-flex align-items-center justify-content-center"
                            onClick={() => deleteOrder(order?._id)}
                          >
                            <i className="fas fa-times-circle m-0 h4"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MyOrders;
