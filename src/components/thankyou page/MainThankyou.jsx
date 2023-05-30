import React from "react";
import { ItemPricingCard } from "../Card-2/ItemPricingCard";
import { SecureSSLCard } from "../Card-2/SecureSSLCard";
import { Button } from "../common/Button";
import { ArrowLeft } from "../icons/ArrowLeft.svg";

export const MainThankyou = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Card */}
          <div>
            <Button title="Hello" rightSvg={<ArrowLeft />} />
          </div>
          {/* Right Card */}
          <div className="h-screen pt-[66px] px-[61px] bg-[#EBECF3]">
            <ItemPricingCard />
            <SecureSSLCard />
          </div>
        </div>
      </div>
    </div>
  );
};
