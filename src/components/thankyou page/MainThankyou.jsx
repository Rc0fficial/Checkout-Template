import React from "react";
import { ItemPricingCard } from "../Card-2/ItemPricingCard";
import { SecureSSLCard } from "../Card-2/SecureSSLCard";
import { LeftCard } from "./LeftCard";

export const MainThankyou = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Card */}
          <div className="flex justify-center mt-[60px]">
            <LeftCard />
          </div>
          {/* Right Card */}
          <div className="pt-[66px] px-[10px] sm:px-[50px] lg:px-[100px] bg-[#EBECF3]">
            <ItemPricingCard />
            <SecureSSLCard />
          </div>
        </div>
      </div>
    </div>
  );
};
