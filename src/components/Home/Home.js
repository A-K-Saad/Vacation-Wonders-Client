import React from "react";
import Blogs from "../Blogs/Blogs";
import Banner from "./Banner/Banner";
import Packages from "./Packages/Packages";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="container py-5 text-center">
        <h1 className="fw-bold">Our Services</h1>
        <Services></Services>
        <div className="py-4">
          <h1 className="fw-bold">
            Select The Best <br /> Package for you
          </h1>
          <br />
          <Packages limit={6}></Packages>
          <div className="pt-5">
            <h1 className="fw-bold pb-3">Read About Places</h1>
            <Blogs></Blogs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
