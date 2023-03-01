import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "src/components/Navbar";
import { Checkout } from "src/components/Checkout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      





      <Checkout />
    </div>
  );
}
