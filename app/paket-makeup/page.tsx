// app/paket-makeup/page.tsx

"use client";
import React, { useState } from "react";

import Image from "next/image";
import { fonts } from "@/app/src/font";
import { buttons, IButtonInfo } from "@/app/src/makeupPackages";

export default function MakeupPackages() {
  const [info, setInfo] = useState<IButtonInfo>(buttons[0]);
  return (
    <>
      <section className="flex flex-col items-center">
        <h1
          className={`text-5xl font-medium mb-2 text-center mt-7 sm:mt-3 md:mt-2 font-bickham`}
        >
          Paket Make Up
        </h1>
        <div
          className={`flex flex-wrap gap-2 md:gap-4 justify-center mb-8 md:mt-4 mt-3 font-spring tracking-wide`}
        >
          {buttons.map((button) => (
            <button
              key={button.title}
              className={`px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base transition-colors min-h-[40px] ${
                info.title === button.title
                  ? " btn uppercase"
                  : " btn-primary uppercase"
              }`}
              onClick={() => setInfo(button)}
            >
              {button.title}
            </button>
          ))}
        </div>
        <hr className="w-full max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[80%] mx-auto border-b-1 border-stone-200" />
        <div className="mt-5 p-8 w-full max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[80%] mx-auto flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-start lg:space-x-6">
          <div className="flex-shrink-0 w-full lg:w-1/2 mx-auto lg:mx-0 lg:pr-6">
            <Image
              src={info.image}
              alt={info.title}
              width={300}
              height={200}
              className=" w-full object-cover"
            />
          </div>
          <div className="flex flex-col space-y-10 text-center lg:text-left">
            <h2 className={`text-3xl lg:text-5xl font-voyage`}>{info.title}</h2>
            <div
              className={`text-left text-lg font-spring tracking-wide`}
              dangerouslySetInnerHTML={{ __html: info.description }}
            ></div>
            <ul
              className={`text-stone-600 text-lg space-y-3 font-spring tracking-wide`}
            >
              {info.options.map((option, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center border-b border-stone-200 pb-2"
                >
                  <span>{option.name}</span>
                  <span className={`font-bold text-xl ${fonts.bodoni}`}>
                    {option.price}
                  </span>
                </li>
              ))}
            </ul>
            <p className={`text-3xl md:text-4xl font-voyage`}>{info.price}</p>{" "}
            <button
              type="button"
              formTarget="_blank"
              className={`btn hover:bg-stone-600 uppercase px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base transition-colors min-h-[40px] ${fonts.montserrat}`}
              onClick={() =>
                (window.location.href =
                  "https://api.whatsapp.com/send/?phone=62895354969032&text&type=phone_number&app_absent=0")
              }
            >
              {info.button}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
