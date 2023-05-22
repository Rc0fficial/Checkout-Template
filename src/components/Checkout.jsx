import { useState } from "react";
import { BillingAddressCard } from "./BillingAddressCard";
import { ContactInformationCard } from "./ContactInformationCard";
import { ExpressCheckoutCard } from "./ExpressCheckoutCard";
import { ArrowRight } from "./icons/ArrowRight.svg";
import { PaymentMethodCard } from "./PaymentMethodCard";
import { ShippingAddressForm } from "./ShippingAddressForm";
import { ShippingMethodCard } from "./ShippingMethodCard";
import { TimerCard } from "./TimerCard";
import { useRouter } from "next/router";

export const Checkout = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!cardNumberError && !emailError) {
      console.log("Form submitted");
      // Add your code to submit the form here
    } else {
      console.log("Form not submitted due to errors");
    }
  }

  function validateCardNumber(cardNumber) {
    const regex = /^[0-9]{16}$/;
    return cardNumber.trim().length > 0 && regex.test(cardNumber);
  }

  function handleCardNumberValidation(event) {
    const cardNumber = event.target.value.replace(/\s/g, "");
    setCardNumber(cardNumber);
    if (!validateCardNumber(cardNumber)) {
      setCardNumberError("Invalid card number");
    } else {
      setCardNumberError(null);
    }
  }

  const router = useRouter();
  const handleClick = () => {
    if (!cardNumberError && cardNumber.trim().length > 0) {
      router.push("/thankyou");
    }
  };

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
              <ShippingMethodCard />
              <PaymentMethodCard
                value={cardNumber}
                error={cardNumberError}
                onChange={handleCardNumberValidation}
                onBlur={handleCardNumberValidation}
              />
              <BillingAddressCard />
            </div>
            <div
              className="bg-[#050824] max-w-[240px] h-[50px] flex items-center justify-center gap-[6px] rounded-full mt-[50px] cursor-pointer hover:opacity-90"
              onClick={handleClick}
            >
              <link rel="stylesheet" href="" />
              <div className="text-[#FFFFFF] font-semibold">Complete Order</div>
              <div>
                <ArrowRight />
              </div>
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
