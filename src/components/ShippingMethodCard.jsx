import React from "react";
import { useContext } from "react";
import { AppContext } from "src/context/AppContext";

export const ShippingMethodCard = () => {
  const { shippingMethod, setShippingMethod } = useContext(AppContext);
  const handleOptionChange = (event) => {
    setShippingMethod(event.target.value);
  };
  return (
    <div className="mt-[50px]">
      <div>
        <h2 className="text-[#000034] text-[22px] font-medium">
          Shipping method
        </h2>
        <div className="flex items-center justify-between my-[20px]">
          <div className="flex items-center justify-center">
            <input
              type="radio"
              id="free-shipping"
              name="shipping-option"
              value="free-shipping"
              className="mr-2"
              checked={shippingMethod === "free-shipping"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="free-shipping"
              className="mr-4 text-[#4B4E68] font-medium relative"
            >
              Free shipping
              <span className="dot"></span>
            </label>
          </div>
          <div className="text-[#000034] font-semibold">$10</div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-center">
            <input
              type="radio"
              id="DHL-with-price"
              name="shipping-option"
              value="DHL-with-price"
              className="mr-2"
              checked={shippingMethod === "DHL-with-price"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="DHL-with-price"
              className="mr-4 text-[#4B4E68] font-medium relative"
            >
              DHL with price
              <div className="dot"></div>
            </label>
          </div>
          <div className="text-[#000034] font-semibold">$20</div>
        </div>
      </div>
    </div>
  );
};
