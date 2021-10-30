import React from "react";
import { Redirect, Route } from "react-router";
import UseAuth from "../../hooks/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = UseAuth();

  if (isLoading) {
    return (
      <div className="text-center">
        {/* <div className="spinner-border text-primary mx-auto" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> */}
        <img
          src="https://i.ibb.co/WtMm1Wz/loading-paper-airplane.gif"
          alt="Loader"
        />
      </div>
    );
  }
  return (
    <>
      <Route
        {...rest}
        render={({ location }) => {
          //   currentUser?.email ? children : <Redirect to="/login"></Redirect>;
          if (user?.email) {
            return children;
          } else {
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: location } }}
              ></Redirect>
            );
          }
        }}
      ></Route>
    </>
  );
};

export default PrivateRoute;
