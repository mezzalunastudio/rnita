// app/paket-tenda/page.tsx

import React from "react";
import Image from "next/image";
import { fonts } from "@/app/src/font";

const tendaPackages = [
  {
    name: "Tenda Plafon",
    price: "150k",
    description:
      "Tenda plafon dengan desain elegan untuk acara formal atau pernikahan.",
  },
  {
    name: "Tenda Serut Biasa",
    price: "200k",
    description: "Tenda serut sederhana yang cocok untuk berbagai jenis acara.",
  },
  {
    name: "Tenda Serut Lengkung",
    price: "300k",
    description:
      "Tenda serut dengan desain lengkung yang memberikan tampilan mewah.",
  },
  {
    name: "Dinding",
    price: "10k/meter",
    description:
      "Dinding tambahan untuk menutupi sisi tenda, memberikan privasi lebih.",
  },
  {
    name: "Panggung",
    price: "25k/meter",
    description:
      "Panggung kokoh untuk berbagai kebutuhan acara, seperti pidato atau pertunjukan.",
  },
  {
    name: "Tenda Daun",
    price: "500k",
    description:
      "Tenda unik dengan dekorasi daun untuk acara outdoor yang alami.",
  },
  {
    name: "Lighting",
    price: "20k/unit",
    description:
      "Lampu pencahayaan untuk menciptakan suasana meriah di acara Anda.",
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
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <h1
          className={`text-4xl font-bold text-center text-stone-800 my-10 border-b-2 pb-2 w-1/2 border-stone-200 ${fonts.bodoni}`}
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
                  className={`text-lg font-extrabold mb-3 text-stone-800 border-b border-1 border-stone-200 pb-2 w-1/2 mx-auto ${fonts.bodoni}`}
                >
                  {item.name}
                </h2>
                <p
                  className={`text-base text-stone-900 px-10 ${fonts.montserrat}`}
                >
                  {item.description}
                </p>
                <p className={`text-base text-stone-900 ${fonts.bodoni}`}>
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
