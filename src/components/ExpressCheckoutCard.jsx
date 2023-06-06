import React from "react";

export const ExpressCheckoutCard = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] rounded-[16px] border-[#D6D8EE] border-solid border-[1px] mt-[30px] py-[30px] px-[20px]">
        <div className="flex flex-col items-start justify-center">
          <p className="text-[18px] font-semibold text-[#000034]">
            Express Checkout
          </p>
          <div className="flex mt-[30px] gap-[20px] items-center justify-start">
            <div className="bg-blue-600 bg-opacity-10 h-[40px] max-w-[150px] px-2 min-w-[60px] mx-auto justify-center  flex items-center rounded-[16px] border-[1px] border-solid  border-purple-600 border-opacity-60">
              <img width={60} height={15} src="/shoppay.png" alt="shoppay" />
            </div>
            <div className="bg-blue-600 bg-opacity-10 h-[40px] max-w-[150px] px-2 min-w-[60px] mx-auto justify-center  flex items-center rounded-[16px] border-[1px] border-solid  border-purple-600 border-opacity-60">
              <img width={60} height={15} src="/paypal.png" alt="paypal" />
            </div>
            <div className="bg-blue-600 bg-opacity-10 h-[40px] max-w-[150px] px-3 min-w-[60px] mx-auto justify-center  flex items-center rounded-[16px] border-[1px] border-solid  border-purple-600 border-opacity-60">
              <img width={45} height={15} src="/gpay.png" alt="gpay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
