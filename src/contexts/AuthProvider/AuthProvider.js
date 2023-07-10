import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AunthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (logedInUser) => {
      console.log("logedIn User is ", logedInUser);
      setUser(logedInUser);
    });
    return unsubscribe();
  }, []);

  const authInfo = { googleLogin, user };
  return (
    <div>
      <AunthContext.Provider value={authInfo}>{children}</AunthContext.Provider>
    </div>
  );
};

export default AuthProvider;
