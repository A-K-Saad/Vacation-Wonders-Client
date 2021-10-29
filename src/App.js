import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./Contexts/AuthProvider";

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
