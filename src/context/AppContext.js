import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  console.log(lastName)
  return (
    <AppContext.Provider value={{ firstName, setFirstName, lastName, setLastName }}>
      {children}
    </AppContext.Provider>
  );
};
