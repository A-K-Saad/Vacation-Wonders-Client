import React, { useEffect, useState } from "react";
import Alert from "../../hooks/Alert";
import "./AddTour.css";

const AddTour = () => {
  const { sweetAlert } = Alert();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [days, setDays] = useState(1);
  const [nights, setNights] = useState(1);
  const [time, setTime] = useState("1 Day / 1 Night");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sweetAlert("success", "Success!", "Added Tour Successfully!");
    // history.push("/");
    fetch("http://localhost:5000/packages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        date: date,
        image: image,
        price: price,
        time: time,
        description: description,
      }),
    }).then((result) => console.log(result));
  };
  useEffect(() => {
    setTime(`${days} Day / ${nights} Night`);
  }, [days, nights]);

  return (
    <>
      <div className="container py-3 text-center">
        <h2>Add A New Tour</h2>
        <form
          className="add-form d-flex flex-column justify-content-center p-3 my-3 mx-auto w-100 text-start mt-4 rounded shadow-sm"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="d-flex justify-content-between flex-column flex-md-row">
            <div className="half-input">
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                required
                className="py-2 px-3 rounded border my-2 w-100 form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="half-input">
              <label>Date:</label>
              <input
                type="date"
                placeholder="Enter Your Email"
                required
                className="py-2 px-3 rounded border my-2 w-100 form-control"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between flex-column flex-md-row">
            <div className="half-input mx-auto">
              <label>Image:</label>
              <input
                type="url"
                placeholder="Enter Image Url"
                required
                className="py-2 px-3 rounded border my-2 w-100 form-control"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="half-input mx-auto">
              <label>Price:</label>
              <input
                type="number"
                defaultValue="0"
                className="py-2 px-3 rounded border my-2 w-100 form-control"
                required
                min="0"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="half-input mx-auto d-flex align-items-center">
            <div className="pe-1">
              <label>Days:</label>
              <div className="d-flex">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  required
                  className="py-2 px-3 rounded border my-2 w-100 form-control"
                  onChange={(e) => setDays(e.target.value)}
                />
              </div>
            </div>
            <div className="ps-1">
              <label>Nights:</label>
              <div className="d-flex">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  required
                  className="py-2 px-3 rounded border my-2 w-100 form-control"
                  onChange={(e) => setNights(e.target.value)}
                />
              </div>
            </div>
          </div>
          <label>Description:</label>
          <textarea
            placeholder="Enter Tour Description"
            className="py-2 px-3 rounded border my-2 message-field form-control"
            required
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
          ></textarea>
          <button className="btn btn-lightblue mt-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTour;
