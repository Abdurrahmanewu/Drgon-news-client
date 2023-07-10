import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AunthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const crateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      console.log("logedIn User is ", loggedInUser);
      setUser(loggedInUser);
    });
    return unsubscribe();
  }, []);

  const authInfo = { googleLogin, user, crateUser };
  return (
    <div>
      <AunthContext.Provider value={authInfo}>{children}</AunthContext.Provider>
    </div>
  );
};

export default AuthProvider;
