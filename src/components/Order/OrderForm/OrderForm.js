import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Alert from "../../../hooks/Alert";

const OrderForm = ({ orderPackage }) => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const [phone, setPhone] = useState(0);
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [address, setAddress] = useState("");
  const { packageId } = useParams();
  const { sweetAlert } = Alert();
  const history = useHistory();

  const handleOrder = (e) => {
    e.preventDefault();
    fetch("https://fathomless-meadow-55221.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: user?.email,
        phone: phone,
        adult: adult,
        child: child,
        price: totalPrice,
        address: address,
        packageId: packageId,
        status: "Pending",
      }),
    }).then(() => {
      sweetAlert("success", "Success!", "Placed Your Order Successfully!");
      history.push("/my-orders");
    });
  };
  const floatedPrice =
    parseInt(orderPackage?.price) * parseInt(adult) +
    parseInt(orderPackage?.price) * 0.75 * parseInt(child);
  const price = floatedPrice.toFixed(2);

  useEffect(() => {
    setTotalPrice(price);
  }, [price]);
  return (
    <div className="col-12 col-md-5">
      <div className="shadow-sm p-4 text-center bg-light">
        <h4>Enter Your Order Details</h4>
        <form onSubmit={handleOrder}>
          <label htmlFor="name" className="mt-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter Your Name"
            defaultValue={user?.displayName}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" className="mt-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter Your Email"
            defaultValue={user?.email}
            required
            disabled
          />
          <label htmlFor="phone" className="mt-2">
            Phone:
          </label>
          <input
            type="number"
            id="phone"
            className="form-control"
            placeholder="Enter Your Phone Number"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="d-flex justify-content-between">
            <div className="pe-1 w-50">
              <label htmlFor="adult" className="mt-2">
                Adult:
              </label>
              <input
                type="number"
                id="adult"
                placeholder="Adult"
                required
                className="form-control"
                min="0"
                onChange={(e) => setAdult(e.target.value)}
                max="5"
              />
            </div>
            <div className="ps-1 w-50">
              <label htmlFor="children" className="mt-2">
                Children:
              </label>
              <input
                type="number"
                id="children"
                placeholder="Children"
                required
                className="form-control"
                min="0"
                onChange={(e) => setChild(e.target.value)}
                max="5"
              />
            </div>
          </div>
          <label htmlFor="address" className="mt-2">
            Address:
          </label>
          <input
            type="text"
            id="address"
            className="form-control"
            placeholder="Enter Your Address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <h4 className="m-0 py-3">${totalPrice}</h4>
          <button className="btn btn-danger w-100">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
