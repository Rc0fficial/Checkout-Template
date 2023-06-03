import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  return (
    <AppContext.Provider value={{ firstName, setFirstName, lastName, setLastName, email, setEmail, address, setAddress }}>
      {children}
    </AppContext.Provider>
  );
};
