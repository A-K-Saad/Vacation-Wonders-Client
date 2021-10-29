import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-0 px-2 sticky-top px-md-0">
        <div className="container p-0">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="https://i.ibb.co/Nt2L6Ft/travel-icon.png"
              onError={(event) =>
                (event.target.src = "https://i.ibb.co/Nt2L6Ft/travel-icon.png")
              }
              alt="Logo"
            />
            <h1 className="m-0 ps-2 main-title">Vacation Wonders</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav d-flex align-items-center">
              <div className="d-flex flex-wrap justify-content-center">
                <NavLink
                  className="nav-link px-2 px-md-3"
                  exact
                  to="/"
                  activeClassName="active-link"
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav-link px-2 px-md-3"
                  exact
                  to="/tours"
                  activeClassName="active-link"
                >
                  Tours
                </NavLink>
                <NavLink
                  className="nav-link px-2 px-md-3"
                  exact
                  to="/blogs"
                  activeClassName="active-link"
                >
                  Blogs
                </NavLink>
                <NavLink
                  className="nav-link px-2 px-md-3"
                  exact
                  to="/about"
                  activeClassName="active-link"
                >
                  About
                </NavLink>
                <NavLink
                  className="nav-link px-2 px-md-3"
                  exact
                  to="/contact"
                  activeClassName="active-link"
                >
                  Contact
                </NavLink>
                {user?.email ? (
                  <div className="d-flex align-items-center">
                    <button className="btn btn-danger ms-3" onClick={logOut}>
                      <i className="fas fa-sign-out-alt"></i> Sign Out
                    </button>
                    <img
                      src={user?.photoURL}
                      alt="Avatar"
                      onError={(e) =>
                        (e.target.src = "https://i.ibb.co/qgbdqZ3/male.png")
                      }
                      className="avatar-img ms-3"
                    />
                  </div>
                ) : (
                  <NavLink
                    className="nav-link px-2 px-md-3 btn btn-lightblue"
                    exact
                    to="/login"
                  >
                    <i className="fas fa-sign-in-alt"></i> Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
