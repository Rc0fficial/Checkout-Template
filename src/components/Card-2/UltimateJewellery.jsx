import React from "react";
import { UltimateJewelleryCardData } from "@utils/constants";
export const UltimateJewellery = () => {
  return (
    <div className="mx-auto mt-[40px]">
      <div className="py-[22px] px-[33px] bg-[#FFFFFF] border-[1px] border-solid border-[#D6D8EA] rounded-[32px]">
        <div className="flex flex-col">
          <div>
            <h2 className="font-semibold text-[16px] sm:text-[18px] text-[#000034]">
              The ultimate jewellery club
            </h2>
            <p className="mt-[10px] mb-[20px] text-[#4B4E68] font-normal text-[14px] sm:text-[16px]">
              Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices
              tincidunt. Pulvinar sed justo et viverra pellentesque.
            </p>
          </div>
          {UltimateJewelleryCardData?.map((item, idx) => (
            <div className="flex items-center gap-[10px]" key={idx}>
              {item?.svg}
              <p className="text-[#4B4E68] font-normal text-[14px] sm:text-[16px]">
                {item?.decsription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
