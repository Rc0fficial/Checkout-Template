import React from "react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="mx-auto h-[70px]">
      <div className="bg-[#050824] bg-opacity-100">
        <div className="py-[22px] max-w-[120px] mx-auto ml-[10px] sm:ml-[50px] lg:ml-[100px]">
          <Image width={170} height={36} src="/Logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};
