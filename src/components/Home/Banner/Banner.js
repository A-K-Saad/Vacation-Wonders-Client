import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="position-sticky">
        <div
          id="carouselExampleIndicators"
          className="carousel slide pe-none"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators pe-auto">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="video-outer position-relative">
                <video
                  src="https://cdn.videvo.net/videvo_files/video/free/2017-08/large_watermarked/170724_15_Setangibeach_preview.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-100"
                ></video>
                <div className="container">
                  <div className="d-flex flex-column w-100 position-absolute top-0 bottom-0 end-0 start-0 px-1 px-md-5 justify-content-center text-light">
                    <div className="d-none d-md-block">
                      <h1 className="display-4">Enjoy a Sea Side Tour</h1>
                      <h2 className="text-danger">7 days, 8 night tour</h2>
                      <h6 className="lh-30px">
                        This is the most popular package in our experience.{" "}
                        <br /> A huge number of entertainments are in this{" "}
                        <br /> package. Book the package quickly.
                      </h6>
                      <Link to="/tours">
                        <button className="btn btn-danger book-btn mt-4">
                          Explore
                        </button>
                      </Link>
                    </div>
                    <div className="d-block d-md-none text-center">
                      <h3>Enjoy a Sea Side Tour</h3>
                      <h4 className="text-danger">7 days, 8 night tour</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="video-outer position-relative">
                <video
                  src="https://cdn.videvo.net/videvo_files/video/free/2020-09/large_watermarked/200831_01_drone%20scotland_4K_020_preview.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-100"
                ></video>
                <div className="container">
                  <div className="d-flex flex-column w-100 position-absolute top-0 bottom-0 end-0 start-0 px-1 px-md-5 justify-content-center text-light">
                    <div className="d-none d-md-block">
                      <h1 className="display-5">
                        Get a Happy Jungle <br /> Adventure Tour
                      </h1>
                      <h2 className="text-danger mt-2">3 days, 4 night tour</h2>
                      <h6 className="lh-30px">
                        One of the most popular tour with awesome
                        <br /> adventure. You would be refreshed in mind <br />{" "}
                        in the tour after a long time of work.
                      </h6>
                      <Link to="/tours">
                        <button className="btn btn-danger book-btn mt-4">
                          Explore
                        </button>
                      </Link>
                    </div>
                    <div className="d-block d-md-none text-center">
                      <h3>Get a Happy Jungle Adventure</h3>
                      <h4 className="text-danger">3 days, 4 nights tour</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="video-outer position-relative">
                <video
                  src="https://cdn.videvo.net/videvo_files/video/free/2018-07/large_watermarked/180607_A_101_preview.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-100"
                ></video>
                <div className="container">
                  <div className="d-flex flex-column w-100 position-absolute top-0 bottom-0 end-0 start-0 px-1 px-md-5 justify-content-center text-light">
                    <div className="d-none d-md-block">
                      <h1 className="display-4">Enjoy a Hill Ride</h1>
                      <h2 className="text-danger">3 days, 2 night tour</h2>
                      <h6 className="lh-30px">
                        If you love mountain, this tour is for you. <br />
                        You will find some awesome animals. <br /> You'll be
                        able the find the pure meaning of tour.
                      </h6>
                      <Link to="/tours">
                        <button className="btn btn-danger book-btn mt-4">
                          Explore
                        </button>
                      </Link>
                    </div>
                    <div className="d-block d-md-none text-center">
                      <h3>Enjoy a Hill Ride</h3>
                      <h4 className="text-danger">3 days, 2 night tour</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
