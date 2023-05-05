import React from "react";
import { Checkout } from "./components/Checkout";
import { Navbar } from "./components/Navbar";

export default function shippingBilling() {
  return (
    <div>
      <Navbar />
      <Checkout />
    </div>
  );
}
