import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import Alert from "./Alert";

initializeAuthentication();

export const auth = getAuth();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { sweetAlert } = Alert();

  const googleProvider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [isLoading]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        sweetAlert("success", "Success!", "Signed Out Successfully!");
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    loginWithGoogle,
    logOut,
    setUser,
    setIsLoading,
  };
};

export default UseFirebase;
