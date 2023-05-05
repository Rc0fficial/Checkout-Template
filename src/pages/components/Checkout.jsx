import React from "react";
import { ContactInformationCard } from "./ContactInformationCard";
import { ExpressCheckoutCard } from "./ExpressCheckoutCard";
import { ShippingAddressForm } from "./ShippingAddressForm";
import { TimerCard } from "./TimerCard";

export const Checkout = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-start min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-[36px] mb-4 text-[#000034]">
                Checkout
              </h1>
              <p className="text-[#84849A] text-[14px]">
                cart &gt;{" "}
                <span className="text-[#000034] ">Shipping & Billing</span>{" "}
              </p>
            </div>
            <div className="mt-[50px]">
              <TimerCard />
              <ExpressCheckoutCard />
              <ContactInformationCard />
              <ShippingAddressForm />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium mb-4">Card 2 Title</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              molestie malesuada dolor, in cursus odio vulputate nec. Duis sed
              ipsum id nunc maximus efficitur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
