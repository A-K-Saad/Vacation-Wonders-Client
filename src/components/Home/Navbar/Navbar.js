import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-0 px-2 sticky-top px-md-0">
        <div className="container p-0">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="https://i.ibb.co/Nt2L6Ft/travel-icon.png"
              onError={(event) =>
                (event.target.src = "https://i.ibb.co/Nt2L6Ft/travel-icon.png")
              }
              alt="Logo"
            />
            <h3 className="m-0 ps-2 main-title d-flex flex-column">
              <span>Vacation </span>
              <span className="title-border-bottom"></span>
              <span>Wonders</span>
            </h3>
          </NavLink>
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
            className="collapse navbar-collapse justify-content-end pb-4 pb-md-0"
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
                {user?.email ? (
                  <>
                    <NavLink
                      className="nav-link px-2 px-md-3"
                      exact
                      to="/add-tour"
                      activeClassName="active-link"
                    >
                      Add Tour
                    </NavLink>
                    <div className="d-flex align-items-center flex-column flex-md-row">
                      <div className="position-relative">
                        <button
                          className="btn p-0 shadow-none"
                          onClick={() => {
                            setIsDropdown(!isDropdown);
                          }}
                          onBlur={() => {
                            setIsDropdown(false);
                          }}
                        >
                          <img
                            src={user?.photoURL}
                            alt="Avatar"
                            onError={(e) =>
                              (e.target.src =
                                "https://i.ibb.co/qgbdqZ3/male.png")
                            }
                            className={`avatar-img border-2 border-light ${
                              isDropdown && "border"
                            }`}
                          />
                        </button>
                        {isDropdown && (
                          <div className="dropdown position-absolute top-0 end-0 mt-5 p-3 text-light rounded-3">
                            <small className="fw-bold">
                              {user?.displayName}
                            </small>
                            <br />
                            <small>{user?.email}</small>
                            <hr />
                            <NavLink
                              className="nav-link px-1 px-md-2 justify-content-start rounded"
                              exact
                              to="/my-orders"
                              activeClassName="active-link"
                            >
                              My Orders
                            </NavLink>
                            <NavLink
                              className="nav-link px-1 px-md-2 justify-content-start rounded"
                              exact
                              to="/all-orders"
                              activeClassName="active-link"
                            >
                              All Orders
                            </NavLink>
                            <button
                              className="btn nav-link justify-content-start w-100 rounded"
                              onClick={logOut}
                            >
                              <i className="fas fa-sign-out-alt me-2"></i> Sign
                              Out
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <NavLink
                      className="nav-link px-2 px-md-3"
                      exact
                      to="/blogs"
                      activeClassName="active-link"
                    >
                      Blogs
                    </NavLink>
                    <NavLink
                      className="nav-link px-2 px-md-3 btn btn-lightblue ms-3"
                      exact
                      to="/login"
                    >
                      <i className="fas fa-sign-in-alt pe-2"></i> Login
                    </NavLink>
                  </>
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
