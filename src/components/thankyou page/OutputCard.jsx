import React from "react";
import { useContext } from "react";
import { AppContext } from "src/context/AppContext";

export const OutputCard = () => {
  const {
    firstName,
    lastName,
    email,
    address,
    shippingAddress,
    billingAddress,
    useDifferentBilling,
    shippingMethod,
  } = useContext(AppContext);

  return (
    <div className="mx-auto mt-[50px] border-solid border-[#D6D8EE] border-[1px] rounded-3xl py-[40px] px-[40px]">
      <div className="grid grid-cols-2 gap-[60px] ">
        <div className="flex flex-col items-start justify-between ">
          <div>
            <p className="text-[#4B4E68] text-[14px] font-normal">Name:</p>
            <h3 className="text-[#000034] text-[14px] font-medium ">
              {firstName} {lastName}
            </h3>
          </div>
          <div className="max-w-[200px]">
            <p className="text-[#4B4E68] text-[14px] font-normal">
              Shipping Address:
            </p>
            <h3 className="text-[#000034] text-[14px] font-medium ">
              {shippingAddress}
            </h3>
          </div>
          <div>
            <p className="text-[#4B4E68] text-[14px] font-normal">Shipping:</p>
            <h3 className="text-[#000034] text-[14px] font-medium ">
              {shippingMethod === "free-shipping"
                ? "Free shipping"
                : "DHL with price"}
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] ">
          <div className="">
            <p className="text-[#4B4E68] text-[14px] font-normal">Email:</p>
            <h3 className="text-[#000034] text-[14px] font-medium overflow-x-auto whitespace-nowrap">
              {email}
            </h3>
          </div>
          <div className="max-w-[200px]">
            <p className="text-[#4B4E68] text-[14px] font-normal">
              Billing Address:
            </p>
            <h3 className=" text-[#000034] text-[14px] font-medium">
              {useDifferentBilling
                ? billingAddress
                : "Same as shipping address"}
            </h3>
          </div>
          <div>
            <p className="text-[#4B4E68] text-[14px] font-normal">
              Payment Method:
            </p>
            <h3 className="text-[#000034] text-[14px] font-medium ">
              Credit Card
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
