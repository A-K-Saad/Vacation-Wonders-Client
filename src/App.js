import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Home/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./Contexts/AuthProvider";
import AddTour from "./components/AddTour/AddTour";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Order from "./components/Order/Order";
import MyOrders from "./components/MyOrders/MyOrders";
import Tours from "./components/Tours/Tours";
import AllOrders from "./components/AllOrders/AllOrders";
import Blog from "./components/Blogs/Blog/Blog";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="min-h-screen d-flex flex-column justify-content-between">
          <BrowserRouter>
            <Navbar></Navbar>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute exact path="/add-tour">
                <AddTour></AddTour>
              </PrivateRoute>
              <PrivateRoute exact path="/packages/:packageId">
                <Order></Order>
              </PrivateRoute>
              <PrivateRoute exact path="/my-orders">
                <MyOrders></MyOrders>
              </PrivateRoute>
              <PrivateRoute exact path="/all-orders">
                <AllOrders></AllOrders>
              </PrivateRoute>
              <Route exact path="/tours">
                <Tours></Tours>
              </Route>
              <Route exact path="/blogs">
                <div className="container py-3 py-md-5 text-center">
                  <h2 className="fw-bold pb-3">Read About Places</h2>
                  <Blogs></Blogs>
                </div>
              </Route>
              <Route exact path="/blog/:blogId">
                <Blog></Blog>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
