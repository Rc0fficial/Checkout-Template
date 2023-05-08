import { useState } from "react";
import { ArrowRight } from "./icons/ArrowRight.svg";
import { ShippingAddressForm } from "./ShippingAddressForm";

export const BillingAddressCard = () => {
  const [useDifferentBilling, setUseDifferentBilling] = useState(false);

  const handleRadioChange = (event) => {
    setUseDifferentBilling(event.target.value === "use-different-billing");
  };
  return (
    <div className="mt-[50px]">
      <div>
        <h2 className="text-[#000034] text-[22px] font-medium mb-[5px]">
          Billing Address
        </h2>
        <p className="text-[#84849A] font-normal">
          Specify the address for your payment option
        </p>
        <div className="flex items-center justify-between my-[20px]">
          <div className="flex items-center justify-center">
            <input
              type="radio"
              id="same-shipping"
              name="shipping-method"
              value="same-shipping"
              checked={!useDifferentBilling}
              className="mr-2"
              onChange={handleRadioChange}
            />
            <label
              htmlFor="same-shipping"
              className="mr-4 text-[#4B4E68] font-medium relative"
            >
              Same as shipping address
              <div className="dot"></div>
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-center">
            <input
              type="radio"
              id="use-different-billing"
              name="shipping-method"
              value="use-different-billing"
              checked={useDifferentBilling}
              className="mr-2"
              onChange={handleRadioChange}
            />
            <label
              htmlFor="use-different-billing"
              className="mr-4 text-[#4B4E68] font-medium relative"
            >
              Use a different billing address
              <div className="dot"></div>
            </label>
          </div>
        </div>
        {useDifferentBilling && <ShippingAddressForm />}
        
      </div>
    </div>
  );
};
