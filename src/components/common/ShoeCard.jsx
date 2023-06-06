import React from "react";
import Image from "next/image";

export const ShoeCard = ({ imageSrc, altText, title, price }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[20px]">
        <Image width={70} height={65} src={imageSrc} alt={altText} />
        <p className="text-[16px] font-normal text-[#000034]">{title}</p>
      </div>
      <div>
        <p className="text-[16px] font-normal text-[#000034]">{price}</p>
      </div>
    </div>
  );
};
