import React from "react";
import { useContext } from "react";
import { AppContext } from "src/context/AppContext";

export const OutputCard = () => {
  const { firstName } = useContext(AppContext);
  const { lastName } = useContext(AppContext);
  const { email } = useContext(AppContext);
  const { address } = useContext(AppContext);
  return (
    <div className="mx-auto mt-[50px] border-solid border-[#D6D8EE] border-[1px] rounded-3xl py-[40px] px-[40px]">
      <div className="grid grid-cols-2 gap-[60px] ">
        <div className="flex flex-col gap-[16px]">
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
              {address}
            </h3>
          </div>
          <div>
            <p className="text-[#4B4E68] text-[14px] font-normal">Shipping:</p>
            <h3 className="text-[#000034] text-[14px] font-medium ">Free</h3>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] ">
          <div>
            <p className="text-[#4B4E68] text-[14px] font-normal">Email:</p>
            <h3 className="text-[#000034] text-[14px] font-medium ">{email}</h3>
          </div>
          <div className="max-w-[200px]">
            <p className="text-[#4B4E68] text-[14px] font-normal">
              Billing Address:
            </p>
            <h3 className="min-h-[48px] text-[#000034] text-[14px] font-medium">
              Same as shipping
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
