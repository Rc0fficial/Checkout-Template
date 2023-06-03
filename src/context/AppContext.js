import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  return (
    <AppContext.Provider value={{ firstName, setFirstName }}>
      {children}
    </AppContext.Provider>
  );
};
