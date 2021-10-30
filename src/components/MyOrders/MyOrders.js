import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/my-orders?search=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data))
      .catch((error) => console.log(error));
    //Fetching the Details
    fetch("http://localhost:5000/packages/")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, [user?.email]);

  //   packageIDs.map((id) => data.find((signleData) => signleData._id === id));
  return (
    <>
      <div className="container py-5">
        <h2 className="pb-4 fw-600 text-center">Check Out Own Orders</h2>
        {!myOrders.length && (
          <>
            <div className="text-center">
              <img
                src="https://www.hindarthouse.com/uploads/emptycart.png"
                alt="NO_CART"
              />
              <h5>Order tours to check them out!</h5>
            </div>
          </>
        )}
        <div className="row">
          {myOrders.map((order) => {
            const currentPackage = packages?.find(
              (el) => el?._id === order?.packageId
            );
            console.log(currentPackage);
            console.log(order);
            return (
              <div
                className="shadow-sm p-3 my-3 col-12 col-md-8 m-auto"
                key={order?._id}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4>{currentPackage?.name}</h4>
                    <div className="d-flex aign-items-center">
                      <p className="pe-3 m-0">Adult: {order?.adult}</p>
                      <p className="pe-3 m-0">Child: {order?.child}</p>
                      <h5 className="m-0 pe-3">
                        $
                        {order?.price ||
                          parseInt(currentPackage?.price || 80) *
                            (parseInt(order?.adult) + parseInt(order?.child)) -
                            (10 / 100) * parseInt(order?.child)}
                      </h5>
                      <h6 className="m-0 d-flex align-items-basepe-3 pe-3">
                        <i className="fas fa-map-marker-alt h5 m-0 pe-1"></i>
                        {order?.address}
                      </h6>
                      <h6 className="m-0 pe-3">
                        <i className="fas fa-stopwatch m-0 pe-1"></i>
                        {currentPackage?.time}
                      </h6>
                      <h6 className="m-0">
                        <i className="fas fa-calendar-alt m-0 pe-1"></i>
                        {currentPackage?.date}
                      </h6>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-delete d-flex align-items-center justify-content-center">
                      <i className="fas fa-times-circle m-0 h4"></i>
                    </button>
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

export default MyOrders;
