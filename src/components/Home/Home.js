import React from "react";
import Banner from "./Banner/Banner";
import Packages from "./Packages/Packages";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="container py-5 text-center">
        <h1 className="fw-bold">
          Select The Best <br /> Package for you
        </h1>
        <br />
        <Packages limit={6}></Packages>
      </div>
    </>
  );
};

export default Home;
