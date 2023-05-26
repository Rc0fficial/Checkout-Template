import React from "react";
import { ShoeCard } from "../common/ShoeCard";
import { cardsData } from "@utils/constants";

export const ItemPricingCard = () => {
  return (
    <div className="mx-auto mt-[66px] ml-[61px]">
      <div className="">
        {cardsData?.map((card, idx) => (
          <div className="mb-[20px]">
            <ShoeCard
              key={idx}
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              price={card.price}
            />
          </div>
        ))}
        <div className="border-b-[1px] border-[#D6D8EE] mt-[20px] mb-[16px]"></div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-[11px]">
          <p className="font-normal text-[16px] text-[#000034]">Subtotal:</p>
          <p className="font-normal text-[16px] text-[#000034]">$362.70</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-normal text-[16px] text-[#000034]">Shipping:</p>
          <p className="font-normal text-[16px] text-[#000034]">Free</p>
        </div>
        <div className="border-b-[1px] border-[#D6D8EE] mt-[20px] mb-[16px]"></div>
        <div className="flex items-center justify-between">
          <p className="font-medium text-[16px] text-[#000034]">Total</p>
          <p className="font-medium text-[16px] text-[#000034]">$362.70</p>
        </div>
      </div>
    </div>
  );
};
