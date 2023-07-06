import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AunthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const authInfo = {};
  return (
    <div>
      <AunthContext.Provider value={authInfo}>
        {children}
      </AunthContext.Provider>
    </div>
  );
};

export default AuthProvider;
