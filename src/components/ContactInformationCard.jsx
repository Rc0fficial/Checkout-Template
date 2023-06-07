import React from "react";
import { Mail } from "./icons/Mail.svg";

export const ContactInformationCard = ({ onBlur, error, email }) => {
  const inputClass = error
    ? "block w-full text-[14px] px-4 py-2 h-[58px] border-red-500 border-[1px] border-solid rounded-full focus:outline-none focus:border-red-500 custom-border pl-20"
    : "block w-full text-[14px] px-4 py-2 h-[58px] border-[#D6D8EE] border-[1px] border-solid rounded-full focus:outline-none focus:border-blue-500 custom-border pl-20";

  return (
    <div>
      <div className="relative mt-[29px]">
        <h2 className="mb-[29px] text-[20px] sm:text-[22px] font-medium">
          Contact Information
        </h2>
        <label className="relative">
          <div className="">
            <input
              type="email"
              id="email"
              placeholder="oleo_bone@gmail.com"
              className={inputClass}
              onBlur={onBlur}
              value={email}
            />
            <span className="absolute top-[-10px] bg-white px-2 left-4 text-[12px] text-[#84849A]">
              Email Address
            </span>
            <div className="absolute top-[20px] left-[39px]">
              <Mail color={error ? "#EF4444" : "#D6D8EE"} />
            </div>
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
        </label>
      </div>
    </div>
  );
};
