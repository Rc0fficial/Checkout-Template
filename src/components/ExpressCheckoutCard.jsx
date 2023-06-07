import React from "react";
import Image from "next/image";

export const ExpressCheckoutCard = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] rounded-[16px] border-[#D6D8EE] border-solid border-[1px] mt-[30px] py-[30px] px-[20px]">
          <p className="text-[16px] sm:text-[18px] font-medium mb-[20px] text-[#000034]">
            Express Checkout
          </p>
        <div className="flex items-center justify-between space-x-[20px]">
            <div className="bg-blue-600 bg-opacity-10 h-[40px] px-2 max-w-[140px] grow justify-center  flex items-center rounded-[16px] border-[1px] border-solid  border-purple-600 border-opacity-60">
              <Image width={60} height={15} src="/shoppay.png" alt="shoppay" />
            </div>
            <div className="bg-blue-900 bg-opacity-10 h-[40px] max-w-[140px] px-2 grow  justify-center  flex items-center rounded-[16px] border-[1px] border-solid  border-blue-900 border-opacity-60">
              <Image width={60} height={15} src="/paypal.png" alt="paypal" />
            </div>
            <div className="bg-red-600 bg-opacity-10 h-[40px] max-w-[140px] px-3 grow  justify-center  flex items-center rounded-[16px] border-[1px] border-solid  border-red-600 border-opacity-60">
              <Image width={45} height={15} src="/gpay.png" alt="gpay" />
            </div>
        </div>
      </div>
    </div>
  );
};
