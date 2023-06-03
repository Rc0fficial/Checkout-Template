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
import { ItemPricingCard } from "./Card-2/ItemPricingCard";
import { SecureSSLCard } from "./Card-2/SecureSSLCard";
import { UltimateJewellery } from "./Card-2/UltimateJewellery";
import { useContext } from "react";
import { AppContext } from "src/context/AppContext";

export const Checkout = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  // const [firstName, setFirstName] = useState("");
  const { firstName, setFirstName } = useContext(AppContext);
  const { lastName, setLastName } = useContext(AppContext);
  const [errors, setErrors] = useState([]);
  // const { setFirstName } = useContext(AppContext);

  // const handleFirstNameInput = (event) => {
  //   setFirstName(event.target.value);
  //   setFirstNameError("");
  //   setErrors([]);
  // };
  const handleFirstNameInput = (event) => {
    const value = event.target.value;
    setFirstName(value);
    setFirstNameError("");
    setErrors([]);
  };

  // const handleLastNameInput = (event) => {
  //   setLastName(event.target.value);
  //   setLastNameError("");
  //   setErrors([]);
  // };

  const handleLastNameInput = (event) => {
    const value = event.target.value;
    setLastName(value);
  };

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function handleEmailValidation(event) {
    const email = event.target.value;
    setEmail(email);
    setEmailError("");
    setErrors([]);
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      setErrors((prevErrors) => [...prevErrors, "Invalid email address"]);
    }
  }

  function validateCardNumber(cardNumber) {
    const regex = /^[0-9]{16}$/;
    return cardNumber.trim().length > 0 && regex.test(cardNumber);
  }

  function handleCardNumberValidation(event) {
    const cardNumber = event.target.value.replace(/\s/g, "");
    setCardNumber(cardNumber);
    setCardNumberError("");
    setErrors([]);
    if (!validateCardNumber(cardNumber)) {
      setCardNumberError("Invalid card number");
      setErrors((prevErrors) => [...prevErrors, "Invalid card number"]);
    }
  }

  const handleValidation = () => {
    let isValid = true;

    if (firstName.trim() === "") {
      setFirstNameError("Enter a first name");
      setErrors((prevErrors) => [...prevErrors, "Enter a first name"]);
      isValid = false;
    }

    if (lastName.trim() === "") {
      setLastNameError("Enter a last name");
      setErrors((prevErrors) => [...prevErrors, "Enter a last name"]);
      isValid = false;
    }

    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      setErrors((prevErrors) => [...prevErrors, "Invalid email address"]);
      isValid = false;
    }

    if (!validateCardNumber(cardNumber)) {
      setCardNumberError("Invalid card number");
      setErrors((prevErrors) => [...prevErrors, "Invalid card number"]);
      isValid = false;
    }

    return isValid;
  };

  const router = useRouter();

  const handleClick = () => {
    if (handleValidation()) {
      router.push("/thankyou");
    }
  };

  return (
    <div className=" mx-auto mb-6">
      <div className="flex flex-col items-center justify-start min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* Card 1 */}
          <div className="px-[100px] pt-[60px]">
            <div className="flex flex-col ">
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
              <ContactInformationCard
                onBlur={handleEmailValidation}
                error={emailError}
                value={email}
              />
              <ShippingAddressForm
                firstNameOnChange={handleFirstNameInput}
                firstName={firstName}
                firstNameError={firstNameError}
                lastNameOnChange={handleLastNameInput}
                lastName={lastName}
                lastNameError={lastNameError}
              />
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

          <div className="bg-[#EBECF3]  pt-[66px] px-[61px]">
            <div className="">
              <ItemPricingCard />
              <SecureSSLCard />
              <UltimateJewellery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
