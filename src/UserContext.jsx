import React, { useState } from "react";
import { useContext } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const storageUser = JSON.parse(localStorage.getItem("user")) || null;
  const [user, setUser] = useState(storageUser);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
