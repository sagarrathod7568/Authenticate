import React from "react";
import { useState } from "react";

const CardDetails = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
  };

  return (
    <>
      <h2 className="text-center">
        Add Details🎉{" "}
      </h2>
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Title</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label htmlFor="">Address</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Address"
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <label htmlFor="">Location</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <button className="btn btn-primary" type="submit">
            {" "}
            submit{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default CardDetails;
