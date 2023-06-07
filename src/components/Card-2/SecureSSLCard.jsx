import React from "react";
import { Lock } from "../icons/Lock.svg";
import Image from "next/image";

export const SecureSSLCard = () => {
  const logo = [
    { src: "/masterCard.png", alt: "mastercard" },
    { src: "/visaCard.png", alt: "visacard" },
    { src: "/paypal.png", alt: "paypal" },
    { src: "/amex.png", alt: "amex" },
    { src: "/jcb.png", alt: "jcb" },
    { src: "/dci.png", alt: "dci" },
  ];
  return (
    <div className="mx-auto mt-[40px]">
      <div className="py-[22px] px-[33px] bg-[#FFFFFF] border-[1px] border-solid border-[#D6D8EA] rounded-[32px]">
        <div className="flex flex-col items-center justify-center gap-[12px]">
          <div className="flex items-center gap-[8.5px]">
            <Lock />
            <p className="text-[#4B4E68] font-normal text-[12px] sm:text-[16px]">
              Secure SSL Encryption & Guaranteed Safe Checkout
            </p>
          </div>
          <div className="flex gap-[7px] items-center">
            {logo?.map((item, idx) => (
              <div key={idx}>
                <Image width={40} height={24} src={item?.src} alt={item?.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
