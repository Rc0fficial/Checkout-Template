import React from "react";

export const OutputCard = () => {
  return (
    <div className="mx-auto mt-[50px]">
      <div className="grid grid-cols-2 gap-[60px] ">
        <div className="flex flex-col gap-[16px]">
          <div>
            <p>Name:</p>
            <h3>Oleo Bone</h3>
          </div>
          <div className="max-w-[200px]">
            <p>Shipping Address:</p>
            <h3 className="">4140 Parker Rd. Allentown, New Mexico 31134</h3>
          </div>
          <div>
            <p>Shipping:</p>
            <h3>Free</h3>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] ">
          <div>
            <p>Email:</p>
            <h3>oleo_bone@gmail.com</h3>
          </div>
          <div className="max-w-[200px]">
            <p>Billing Address:</p>
            <h3 className="min-h-[48px]">Same as shipping</h3>
          </div>
          <div>
            <p>Payment Method:</p>
            <h3>Credit Card</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
