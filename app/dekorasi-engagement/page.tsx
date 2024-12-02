// app/dekorasi-engagement/page.tsx

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { fonts } from "@/app/src/font";
import {
  decorationPackages,
  IDecorationPackage,
} from "@/app/src/decorationPackages";

export default function DecorationEngagementPage() {
  const [selectedPackage, setSelectedPackage] = useState<IDecorationPackage>(
    decorationPackages[0]
  );

  return (
    <>
      <section className="flex flex-col px-2 md:px-4">
        <h1
          className={`text-2xl font-medium mb-2 text-center mt-7 sm:mt-3 md:mt-2 ${fonts.bodoni}`}
        >
          Paket Dekorasi Engagement
        </h1>
        <div
          className={`flex flex-wrap gap-2 md:gap-4 justify-center mb-8 md:mt-4 mt-3 ${fonts.montserrat}`}
        >
          {decorationPackages.map((paket, index) => (
            <button
              key={index}
              className={`px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base transition-colors min-h-[40px] ${
                selectedPackage.title === paket.title
                  ? " btn uppercase"
                  : " btn-primary uppercase"
              }`}
              onClick={() => setSelectedPackage(paket)}
            >
              {paket.title}
            </button>
          ))}
        </div>
        <hr className="w-full max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[80%] mx-auto border-b-1 border-stone-200" />
        <div className="mt-5 p-8 w-full max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[80%] mx-auto flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-start lg:space-x-6">
          <div className="flex-shrink-0 w-full lg:w-1/2 mx-auto lg:mx-0 lg:pr-6">
            <Image
              src={selectedPackage.image || "/assets/placeholder.jpg"}
              alt={selectedPackage.title}
              width={300}
              height={200}
              className="object-cover w-full"
            />
          </div>
          <div className="flex flex-col space-y-10 text-center lg:text-left">
            <h2
              className={`text-3xl lg:text-5xl font-bold uppercase ${fonts.bodoni}`}
            >
              {selectedPackage.title}
            </h2>
            <ol className={`text-left text-lg ${fonts.montserrat}`}>
              {selectedPackage.includes.map((item, idx) => (
                <li key={idx} className="text-gray-600 capitalize md:py-2 py-1">
                  {item}
                </li>
              ))}
            </ol>
            <p className={`text-3xl md:text-4xl ${fonts.bodoni}`}>
              {selectedPackage.price}
            </p>
            <button
              type="button"
              formTarget="_blank"
              className={`btn hover:bg-stone-600 uppercase px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base transition-colors min-h-[40px] ${fonts.montserrat}`}
              onClick={() =>
                (window.location.href =
                  "https://api.whatsapp.com/send/?phone=62895354969032&text&type=phone_number&app_absent=0")
              }
            >
              {selectedPackage.button}
            </button>

            {selectedPackage.additional && (
              <div className="mt-4">
                <h3
                  className={`text-2xl font-semibold text-stone-700 mb-2 ${fonts.bodoni} `}
                >
                  Additional:
                </h3>
                <ul className="list-disc list-inside">
                  {selectedPackage.additional.map((add, idx) => (
                    <li
                      key={idx}
                      className={`text-stone-600 capitalize ${fonts.montserrat}`}
                    >
                      {add}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
