import React from "react";
import { Button } from "../common/Button";
import { ArrowLeft } from "../icons/ArrowLeft.svg";
import { useRouter } from "next/router";
import { OutputCard } from "./OutputCard";

export const LeftCard = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div className="mx-auto">
      <div className="flex flex-col items-center ">
        <img src="/Like.png" alt="Thumb Like" />
        <div className="mt-[20px] flex items-center flex-col gap-[5px]">
          <h3 className="text-[#000034] text-[24px] font-semibold">
            Thank you for your order
          </h3>
          <p className="text-[#4B4E68] text-[16px] font-medium">
            Your order is confirmed
          </p>
        </div>
        <div className="mt-[30px] text-[#7782F1] text-[14px] font-medium bg-[#E4E4FF] py-[6px] px-[15px] rounded-xl border-[#7782F1] border-solid border-[1px]">
          Order ID: #10040
        </div>
      <Button title="Back to Shop" leftSvg={<ArrowLeft />} onClick={handleClick} />
      <OutputCard/>
      </div>
    </div>
  );
};
