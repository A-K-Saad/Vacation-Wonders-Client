import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { AuthContext } from "../../Contexts/AuthProvider";
import Alert from "../../hooks/Alert";
import "./Login.css";

const Login = () => {
  const { loginWithGoogle, setIsLoading, setUser } = useContext(AuthContext);
  const { sweetAlert } = Alert();
  const history = useHistory();
  const location = useLocation();

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
          <div className="shadow p-4 text-center form">
            <h3>Login In To Continue</h3>
            <button
              className="btn btn-outline-primary rounded-pill mt-4"
              style={{ fontSize: "19px" }}
              onClick={handleLogin}
            >
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                alt="Google_ICON"
                width="40px"
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
