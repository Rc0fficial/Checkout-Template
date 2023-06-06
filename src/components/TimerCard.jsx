import React from "react";
import { useState, useEffect } from "react";

export const TimerCard = () => {
  const [countdown, setCountdown] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((countdown) => {
        if (countdown === 0) {
          return 10 * 60;
        }
        return countdown - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  return (
    <div>
      <div className="bg-[#979AB8] rounded-[16px]">
        <div className="py-[30px] px-[20px]">
          <div className="flex flex-col">
            <p className="text-[16px] text-[#000034]">
              🔥 Your cart is reserved for{" "}
              <span className="font-bold"> 10:00 </span> minutes
            </p>
            <div className="flex justify-start items-center mt-[15px]">
              <input
                type="text"
                value="00"
                className="w-[46px] h-[37px] text-center font-medium rounded-[12px] border-gray-400 bg-white text-gray-700 ml-2"
                readOnly
              />
              <span className="text-[#000034] text-2xl font-bold mx-2">:</span>
              <input
                type="text"
                value={`${minutes.toString().padStart(2, "0")}`}
                className="w-[46px] h-[37px] text-center font-medium rounded-[12px] border-gray-400 bg-white text-gray-700 mr-2"
                readOnly
              />
              <span className="text-[#000034] text-2xl font-bold mx-2">:</span>
              <input
                type="text"
                value={`${seconds.toString().padStart(2, "0")}`}
                className="w-[46px] h-[37px] text-center font-medium rounded-[12px] border-gray-400 bg-white text-gray-700 mx-2"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
