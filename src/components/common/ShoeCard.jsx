import React from "react";

export const ShoeCard = ({ imageSrc, altText, title, price }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[20px]">
        <img src={imageSrc} alt={altText} />
        <p className="text-[16px] font-normal text-[#000034]">{title}</p>
      </div>
      <div>
        <p className="text-[16px] font-normal text-[#000034]">{price}</p>
      </div>
    </div>
  );
};
