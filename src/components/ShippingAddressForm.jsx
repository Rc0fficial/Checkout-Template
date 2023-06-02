import { useState } from "react";
import { Mail } from "./icons/mail.svg";
import { User } from "./icons/User.svg";
import { Location } from "./icons/Location.svg";
import { HomeLocation } from "./icons/HomeLocation.svg";

export const ShippingAddressForm = ({
  firstNameError,
  firstName,
  firstNameOnChange,
  lastNameOnChange,
  lastName,
  lastNameError,
}) => {
  const countries = ["USA", "Canada", "Mexico", "Brazil"];
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const inputClass = firstNameError
    ? "block w-full text-[14px] px-4 py-2 h-[58px] border-red-500 border-[1px] border-solid rounded-full focus:outline-none focus:border-red-500 custom-border pl-20"
    : "block w-full text-[14px] px-4 py-2 h-[58px] border-[#D6D8EE] border-[1px] border-solid rounded-full focus:outline-none focus:border-blue-500 custom-border pl-20";
  const inputClassLastName = lastNameError
    ? "block w-full text-[14px] px-4 py-2 h-[58px] border-red-500 border-[1px] border-solid rounded-full focus:outline-none focus:border-red-500 custom-border pl-20"
    : "block w-full text-[14px] px-4 py-2 h-[58px] border-[#D6D8EE] border-[1px] border-solid rounded-full focus:outline-none focus:border-blue-500 custom-border pl-20";
  return (
    <div>
      <div className="mt-[50px] text-[24px] ">
        <h2 className="mb-[20px] font-medium">Shipping Address</h2>
        <div className="relative mb-4">
          <select
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-3 py-2   border-[#D6D8EE] border-[1px] border-solid rounded-full h-[56px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm pl-20"
          >
            <option value="" disabled selected>
              Country
            </option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <div className="absolute top-0 left-0 h-full flex items-center pl-[39px]">
            <Location />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] mb-4 mt-[29px]">
          <div>
            <label className="relative">
              <div className="">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="Oleo"
                  className={inputClass}
                  value={firstName}
                  onChange={firstNameOnChange}
                />
                <span className="absolute top-[-10px] font-medium bg-white px-2 left-4 text-[12px] text-[#84849A]">
                   First Name
                </span>
                <div className="absolute top-[20px] left-[39px]">
                  <User />
                </div>
              </div>
              {firstNameError && (
                <div className="text-red-500 text-sm">{firstNameError}</div>
              )}
            </label>
          </div>
          <div>
            <label className="relative ">
              <div>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  value={lastName}
                  onChange={lastNameOnChange}
                  placeholder="Bone"
                  className={inputClassLastName}
                />
                <span className="absolute top-[-10px] font-medium bg-white px-2 left-4 text-[12px] text-[#84849A]">
                  Last Name
                </span>
                <div className="absolute top-[20px] left-[39px]">
                  <User />
                </div>
              </div>
              {lastNameError && (
                <div className="text-red-500 text-sm">{lastNameError}</div>
              )}
            </label>
          </div>
        </div>
        <div className="relative mb-4 mt-[29px]">
          <input
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={3}
            placeholder="Address"
            className="w-full px-3 py-2 border-[#D6D8EE] font-medium border-[1px] border-solid rounded-full h-[56px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm pl-20"
          />
          <div className="absolute top-0 left-0 h-full flex items-center pl-[39px]">
            <HomeLocation />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4 mt-[29px]">
          <div className="relative">
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className="w-full px-3 py-2 border-[#D6D8EE] font-medium border-[1px] border-solid rounded-full h-[56px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm pl-[30px]"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              id="postal-code"
              name="postal-code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Postal Code"
              className="w-full px-3 py-2 border-[#D6D8EE] font-medium border-[1px] border-solid rounded-full h-[56px] focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm pl-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
