import { UltimateJewellery } from "src/components/Card-2/UltimateJewellery";
import { Tick } from "src/components/icons/Tick.svg";

export const cardsData = [
  {
    imageSrc: "/shoe-1.png",
    altText: "shoe",
    title: "Nike sneakers",
    price: "$120.90",
  },
  {
    imageSrc: "/shoe-2.png",
    altText: "shoe",
    title: "Nike sneakers",
    price: "$120.90",
  },
  {
    imageSrc: "/shoe-3.png",
    altText: "shoe",
    title: "Nike sneakers",
    price: "$120.90",
  },
];

export const pricing = [
  { title: "Subtotal:", price: "$362.70" },
  { title: "Shipping", price: "Free" },
];

export const UltimateJewelleryCardData = [
  { svg: <Tick />, decsription: "Extra 10$ off!" },
  { svg: <Tick />, decsription: "Free shipping on marked club items!" },
  { svg: <Tick />, decsription: "Free returns on marked club items!" },
];
