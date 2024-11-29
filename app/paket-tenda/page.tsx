import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Bodoni_Moda } from "next/font/google";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const bodoni = Bodoni_Moda({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const tendaPackages = [
  {
    name: "Tenda Plafon",
    price: "150k",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Tenda Serut Biasa",
    price: "200k",
    description: "Pellentesque habitant morbi tristique senectus et netus.",
  },
  {
    name: "Tenda Serut Lengkung",
    price: "300k",
    description: "Maecenas euismod eros nec tincidunt consectetur.",
  },
  {
    name: "Dinding",
    price: "10k/meter",
    description: "Curabitur id nulla sit amet justo viverra cursus.",
  },
  {
    name: "Panggung",
    price: "25k/meter",
    description: "Proin vel magna et sapien placerat congue vel ac mi.",
  },
  {
    name: "Tenda Daun",
    price: "500k",
    description: "Aenean ut eros ac libero dapibus pretium.",
  },
  {
    name: "Lighting",
    price: "20k/unit",
    description: "Ut pharetra urna vitae urna condimentum, ut pulvinar mi.",
  },
];

const imagePaths: Array<string> = [
  "/assets/dekor-1.jpg",
  "/assets/dekor-2.jpg",
  "/assets/wedding&makeup-3.jpg",
  "/assets/engagement-1.jpg",
  "/assets/wedding&makeup-5.jpg",
];

export default function PaketTenda() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center border-b-2 border-stone-400 pb-10">
        <div className="w-full max-w-[90%] mx-auto mt-10">
          <div className="flex space-x-0">
            {imagePaths.map((src, index) => (
              <div
                key={index}
                className="relative w-full sm:w-1/5 md:w-1/5 lg:w-1/5 lg:h-80 h-28"
              >
                <Image
                  src={src}
                  alt={`Tenda Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>

        <h1
          className={`text-4xl font-bold text-center text-stone-800 my-10 border-b-2 pb-2 w-1/2 border-stone-200 ${bodoni.className}`}
        >
          Paket Tenda
        </h1>
        <div className="lg:mt-5 mt-0 w-full max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[90%] mx-auto flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-start lg:space-x-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full lg:w-full mx-auto">
            {tendaPackages.map((item, index) => (
              <div
                key={index}
                className="text-center space-y-3 outline outline-1 outline-stone-200 px-2 py-3"
              >
                <h2
                  className={`text-lg font-extrabold mb-3 text-stone-800 border-b border-1 border-stone-200 pb-2 w-1/2 mx-auto ${bodoni.className}`}
                >
                  {item.name}
                </h2>
                <p
                  className={`text-base text-stone-900 px-10 ${montserrat.className}`}
                >
                  {item.description}
                </p>
                <p className={`text-base text-stone-900 ${bodoni.className}`}>
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
