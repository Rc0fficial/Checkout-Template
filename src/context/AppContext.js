import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [useDifferentBilling, setUseDifferentBilling] = useState(false);
  return (
    <AppContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        address,
        setAddress,
        shippingAddress,
        setShippingAddress,
        billingAddress,
        setBillingAddress,
        useDifferentBilling,
        setUseDifferentBilling,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
