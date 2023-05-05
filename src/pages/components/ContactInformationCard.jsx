import React from "react";
import { Mail } from "./icons/mail.svg";

export const ContactInformationCard = () => {
  return (
    <div>
      <div className="relative mt-[29px]">
        <label className="relative">
          <div className="">
            <input
              type="email"
              id="email"
              placeholder="oleo_bone@gmail.com"
              className="block w-full text-[14px] px-4 py-2 h-[58px] border-[#D6D8EE] border-[1px] border-solid rounded-full focus:outline-none focus:border-blue-500 custom-border pl-20"
            />
            <span className="absolute top-[-10px] bg-white px-2 left-4 text-[12px] text-[#84849A]">
              Email Address
            </span>

            <div className="absolute top-0 left-0 h-full flex items-center pl-[39px]">
              <Mail />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};
