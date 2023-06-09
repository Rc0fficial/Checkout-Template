import React from "react";
import { ShoeCard } from "../common/ShoeCard";
import { cardsData } from "@utils/constants";
import { pricing } from "@utils/constants";

export const ItemPricingCard = () => {
  return (
    <div className="mx-auto">
      <div className="">
        {cardsData?.map((card, idx) => (
          <div key={idx} className="mb-[20px]">
            <ShoeCard
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
        {pricing?.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between mb-[11px]"
          >
            <p className="font-normal text-[14px] sm:text-[16px] text-[#000034]">
              {item?.title}
            </p>
            <p className="font-normal text-[14px] sm:text-[16px] text-[#000034]">
              {item?.price}
            </p>
          </div>
        ))}
        <div className="border-b-[1px] border-[#D6D8EE] mt-[20px] mb-[16px]"></div>
        <div className="flex items-center justify-between">
          <p className="font-medium text-[16px] text-[#000034]">Total</p>
          <p className="font-medium text-[16px] text-[#000034]">$362.70</p>
        </div>
      </div>
    </div>
  );
};
