import React from "react";

export const ExpressCheckoutCard = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] rounded-[16px] border-[#D6D8EE] border-solid border-[1px] mt-[30px] py-[30px] pl-[30px]">
        <div flex flex-col>
          <p className="text-[18px] font-semibold text-[#000034]">
            Express Checkout
          </p>
          <div className="flex mt-[30px] gap-[20px] items-center justify-start">
            <div className="bg-blue-600 bg-opacity-10 h-[50px] max-w-[150px] py-[15px] px-[32px] rounded-[16px] border-[1px] border-solid  border-purple-600 border-opacity-60">
              <img className="w-[64px] h-[15px]" src="/shoppay.png" alt="" />
            </div>
            <div className="bg-blue-900 bg-opacity-10 h-[50px] max-w-[150px] py-[15px] px-[32px] rounded-[16px] border-[1px] border-solid  border-blue-900 border-opacity-60">
              <img className="w-[64px] h-[20px]" src="/paypal.png" alt="" />
            </div>
            <div className="bg-red-600 bg-opacity-10 h-[50px] max-w-[100px] py-[15px] px-[32px] rounded-[16px] border-[1px] border-solid  border-red-600 border-opacity-60">
              <img className="w-[64px] h-[20px]" src="/gpay.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
