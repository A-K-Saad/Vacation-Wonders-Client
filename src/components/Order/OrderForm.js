import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";
import { AuthContext } from "../../Contexts/AuthProvider";
import Alert from "../../hooks/Alert";

const OrderForm = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const [phone, setPhone] = useState(0);
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [address, setAddress] = useState("");
  const { packageId } = useParams();
  const { sweetAlert } = Alert();
  const history = useHistory();

  const handleOrder = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/orders", {
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
        address: address,
        packageId: packageId,
      }),
    }).then(() => {
      sweetAlert("success", "Success!", "Placed Your Order Successfully!");
      history.push("/my-orders");
    });
  };

  return (
    <div className="col-12 col-md-5">
      <div className="shadow-sm p-4 text-center bg-light">
        <h4>Enter Your Order Details</h4>
        <form onSubmit={handleOrder}>
          <input
            type="text"
            id="name"
            className="form-control mt-2"
            placeholder="Enter Your Name"
            defaultValue={user?.displayName}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            className="form-control mt-2"
            placeholder="Enter Your Email"
            defaultValue={user?.email}
            required
            disabled
          />
          <input
            type="number"
            id="phone"
            className="form-control mt-2"
            placeholder="Enter Your Phone Number"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="d-flex justify-content-between mt-2">
            <div className="pe-1 w-50">
              <input
                type="number"
                id="adult"
                placeholder="Adult"
                required
                className="form-control"
                min="1"
                onChange={(e) => setAdult(e.target.value)}
                max="5"
              />
            </div>
            <div className="ps-1 w-50">
              <input
                type="number"
                id="children"
                placeholder="Children"
                required
                className="form-control"
                min="1"
                onChange={(e) => setChild(e.target.value)}
                max="5"
              />
            </div>
          </div>
          <input
            type="text"
            id="address"
            className="form-control mt-2"
            placeholder="Enter Your Address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <button className="btn btn-danger mt-4 w-100">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
