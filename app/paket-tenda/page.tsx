// app/paket-tenda/page.tsx

import React from "react";
import Image from "next/image";
import { fonts } from "@/app/src/font";
import { tendaPackages, imagePaths } from "@/app/src/tendaPackages";

export default function PaketTenda() {
  return (
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
        className={`text-6xl font-bold text-center text-stone-800 my-10 border-b-2 pb-2 w-1/2 border-stone-200  font-bickham`}
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
  );
}
