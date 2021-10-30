import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://fathomless-meadow-55221.herokuapp.com/my-orders?search=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyOrders(data))
      .catch((error) => console.log(error));
    //Fetching the Details
    fetch("https://fathomless-meadow-55221.herokuapp.com/packages/")
      .then((res) => res.json())
      .then((data) => setPackages(data));
    setLoading(false);
  }, [user?.email]);

  const deleteOrder = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger me-3",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          //Deleting
          const filteredOrders = myOrders.filter((order) => order?._id !== _id);
          setMyOrders(filteredOrders);
          fetch("https://fathomless-meadow-55221.herokuapp.com/orders", {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ _id: _id }),
          }).then((result) => console.log(result));
          Swal.fire({
            icon: "success",
            title: "Cancelled!",
            text: "Cancelled The Order Successfully!",
            timer: 2000,
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            icon: "error",
            title: "Calcelled!",
            text: "Couldn't Cancel The Order!",
            timer: 2000,
          });
        }
      });
  };
  return (
    <>
      <div className="container py-5">
        {!myOrders.length && !loading ? (
          <>
            <div className="text-center">
              <img
                src="https://www.hindarthouse.com/uploads/emptycart.png"
                alt="NO_CART"
              />
              <h5>Order tours to check them out!</h5>
            </div>
          </>
        ) : (
          <h2 className="fw-600 text-center mb-3">Check Out Own Orders</h2>
        )}
        <div className="row">
          {myOrders
            .slice()
            .sort((a, b) => myOrders.indexOf(b) - myOrders.indexOf(a))
            .map((order) => {
              const currentPackage = packages?.find(
                (el) => el?._id === order?.packageId
              );
              return (
                <div
                  className="shadow-sm p-3 my-2 col-12 col-md-8 m-auto border rounded"
                  key={order?._id}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h4>{currentPackage?.name}</h4>
                      <div className="d-flex aign-items-center">
                        <p className="pe-3 m-0">Adult: {order?.adult}</p>
                        <p className="pe-3 m-0">Child: {order?.child}</p>
                        <h5 className="m-0 pe-3 fw-700">
                          $
                          {order?.price ||
                            parseInt(currentPackage?.price || 80) *
                              (parseInt(order?.adult) +
                                parseInt(order?.child)) -
                              (35 / 100) * parseInt(order?.child)}
                        </h5>
                        <h6 className="m-0 d-flex align-items-baseline pe-3">
                          <i className="fas fa-map-marker-alt h5 m-0 pe-1"></i>
                          {currentPackage?.location}
                        </h6>
                        <h6 className="m-0 pe-3">
                          <i className="fas fa-stopwatch m-0 pe-1"></i>
                          {currentPackage?.time || "1 Day / 1 Night"}
                        </h6>
                        <h6 className="m-0">
                          <i className="fas fa-calendar-alt m-0 pe-1"></i>
                          {currentPackage?.date}
                        </h6>
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
      </div>
    </>
  );
};

export default MyOrders;
