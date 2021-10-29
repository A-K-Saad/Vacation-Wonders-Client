import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const UseAuth = () => {
  return useContext(AuthContext);
};

export default UseAuth;
