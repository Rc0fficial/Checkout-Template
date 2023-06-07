import React, { useState } from "react";
import { CreditCard } from "./icons/CreditCard.svg";
import { Mail } from "./icons/Mail.svg";
import { User } from "./icons/User.svg";

export const PaymentMethodCard = ({ value, error, onChange, onBlur }) => {
  const inputClass = error
    ? "block w-full text-[14px] px-4 py-2 h-[58px] border-red-500 border-[1px] border-solid rounded-full focus:outline-none focus:border-red-500 custom-border pl-20"
    : "block w-full text-[14px] px-4 py-2 h-[58px] border-[#D6D8EE] border-[1px] border-solid rounded-full focus:outline-none focus:border-blue-500 custom-border pl-20";

  return (
    <div className="mt-[50px]">
      <div>
        <h2 className="text-[#000034] font-semibold text-[20px] sm:text-[22px]">
          Payment Method
        </h2>
        <p className="mt-[5px] text-[14px] text-[#84849A]">
          All transaction are secured and encryted
        </p>
        <div className="relative mt-[29px]">
          <label className="relative">
            <div className="">
              <input
                type="text"
                id="cardNumber"
                placeholder="2587 9860 2354"
                className={inputClass}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
              <span className="absolute top-[-10px] bg-white px-2 left-4 text-[12px] text-[#84849A]">
                Card Number
              </span>

              <div className="absolute top-0 left-0 h-full flex items-center pl-[39px]">
                <CreditCard />
              </div>
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
          </label>
        </div>
        <div className="relative mb-4 mt-[29px]">
          <input
            id="address"
            name="address"
            placeholder="Name on Card"
            className="w-full px-3 py-2 border-[#D6D8EE]  border-[1px] border-solid rounded-full h-[56px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm pl-20"
          />
          <div className="absolute top-0 left-0 h-full flex items-center pl-[39px]">
            <User />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4 mt-[29px]">
          <div className="relative">
            <input
              type="text"
              id="city"
              name="city"
              placeholder="MM/YY"
              className="w-full px-3 py-2 border-[#D6D8EE]  border-[1px] border-solid rounded-full h-[56px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm pl-[30px]"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              id="postal-code"
              name="postal-code"
              placeholder="CVV"
              className="w-full px-3 py-2 border-[#D6D8EE]  border-[1px] border-solid rounded-full h-[56px] focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm pl-[30px]"
            />
          </div>
        </div>
        <div class="flex items-center just my-4">
          <label class="checkboxContainer">
            <p className="text-[12px] md:text-[14px]">
              By checking this box, I acknowledge that I have read and agree to
              the <span className="font-semibold">Terms of Service</span>, and{" "}
              <span className="font-semibold">Monthly Billing Terms</span> of
              this website and want to opt-in for the monthly billed Dream
              Collection Club®
            </p>
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
};
