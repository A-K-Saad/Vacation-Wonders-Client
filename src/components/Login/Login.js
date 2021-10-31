import React, { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Alert from "../../hooks/Alert";
import "./Login.css";

const Login = () => {
  const { loginWithGoogle, setIsLoading, setUser, user } =
    useContext(AuthContext);
  const { sweetAlert } = Alert();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    //Redirecting the user if logged in already
    if (user?.email) {
      history.push(location?.state?.from || "");
    }
  }, []);

  const handleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        setIsLoading(false);
        sweetAlert("success", "Success!", "Logged In Successfully!");
        setUser(result.user);
        history.push(location?.state?.from || "/");
      })
      .catch((error) => sweetAlert("error", "OOPS!", error.message));
  };
  return (
    <>
      <div className="container py-5">
        <div className="d-flex justify-content-center align-items-center">
          <div className="shadow p-3 p-md-5 text-center form">
            <NavLink
              className="navbar-brand d-flex justify-content-center align-items-center mb-3"
              to="/"
            >
              <img
                src="https://i.ibb.co/Nt2L6Ft/travel-icon.png"
                onError={(event) =>
                  (event.target.src =
                    "https://i.ibb.co/Nt2L6Ft/travel-icon.png")
                }
                alt="Logo"
              />
              <h3 className="m-0 ps-2 title d-flex flex-column">
                <span>Vacation </span>
                <span className="title-border-bottom bg-dark"></span>
                <span>Wonders</span>
              </h3>
            </NavLink>
            <h3>Login In To Continue</h3>
            <button
              className="btn btn-outline-primary rounded-pill mt-4 login-btn"
              onClick={handleLogin}
            >
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                alt="Google_ICON"
                className="me-2"
              />
              Continue with google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
