import React from "react";
import { ShoeCard } from "../common/ShoeCard";
import { cardsData } from "@utils/constants";

export const ItemPricingCard = () => {
  return (
    <div className="mx-auto">
      <div className="mt-[66px] ml-[61px]">
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
      </div>
    </div>
  );
};
