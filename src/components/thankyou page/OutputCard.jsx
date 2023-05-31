import React from "react";

export const OutputCard = () => {
  return (
    <div className="mx-auto mt-[50px] border-solid border-[#D6D8EE] border-[1px] rounded-3xl py-[40px] px-[40px]">
      <div className="grid grid-cols-2 gap-[60px] ">
        <div className="flex flex-col gap-[16px]">
          <div>
            <p className="text-[#4B4E68] text-[14px] font-normal">Name:</p>
            <h3 className="text-[#000034] text-[14px] font-medium ">
              Oleo Bone
            </h3>
          </div>
          <div className="max-w-[200px]">
            <p className="text-[#4B4E68] text-[14px] font-normal">
              Shipping Address:
            </p>
            <h3 className="text-[#000034] text-[14px] font-medium ">
              4140 Parker Rd. Allentown, New Mexico 31134
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
            <h3 className="text-[#000034] text-[14px] font-medium ">
              oleo_bone@gmail.com
            </h3>
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
