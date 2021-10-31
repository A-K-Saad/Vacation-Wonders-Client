import React from "react";
import "../Home/Navbar/Navbar.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-bg text-center">
        <footer className="py-4 container">
          <div className="d-flex flex-wrap justify-content-md-between justify-content-center">
            <NavLink
              className="navbar-brand p-0 d-flex align-items-center"
              to="/"
            >
              <img
                src="https://i.ibb.co/Nt2L6Ft/travel-icon.png"
                onError={(event) =>
                  (event.target.src =
                    "https://i.ibb.co/Nt2L6Ft/travel-icon.png")
                }
                alt="Navbar-Brand"
              />
              <h1 className="m-0 ps-2 main-title">Vacation Wonders</h1>
            </NavLink>
            <nav className="d-flex align-items-center flex-wrap justify-content-center">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
              <NavLink className="nav-link" to="/tours">
                Tours
              </NavLink>
              <NavLink className="nav-link" to="/my-orders">
                My Orders
              </NavLink>
              <NavLink className="nav-link" to="/all-orders">
                All Orders
              </NavLink>
            </nav>
          </div>
          <hr className="text-light" />
          <div className="d-flex h3 mx-auto text-light justify-content-center pt-3 pt-md-5">
            <a href="https://facebook.com">
              <i className="fab fa-facebook-f px-3"></i>
            </a>
            <a href="https://twitter.com">
              <i className="fab fa-twitter px-3"></i>
            </a>
            <a href="https://instagram.com">
              <i className="fab fa-instagram px-3"></i>
            </a>
          </div>
          <h6 className="pt-4 text-light">
            &copy; A-K-Saad || 2021 || Vacation Wonders || All rights reserved
          </h6>
        </footer>
      </div>
    </>
  );
};

export default Footer;
