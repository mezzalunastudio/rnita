"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import { Montserrat } from "next/font/google";

const bodoni = Bodoni_Moda({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

interface IButtonInfo {
  title: string;
  description: string;
  price?: string;
  image: string;
  options: MakeupOption[];
}


// Define interface for MakeupPackage
interface MakeupOption {
  name: string;
  price: string;
}

const buttons: IButtonInfo[] = [
  {
    title: "Paket Make Up Wisuda",
    description:
    "Paket make up spesial untuk wisuda, memberikan hasil yang memukau dengan berbagai opsi sesuai kebutuhan.",
    price: "Rp 5.000.000",
    image: "/assets/img-1.jpg",
    options: [
      { name: "Makeup Only", price: "200k" },
      { name: "Makeup Hijab", price: "250k" },
      { name: "Makeup Hairdo", price: "280k" },
    ],
  },
  {
    title: "Paket Engagement",
    description:
      "Paket make up untuk momen spesial pertunangan, memastikan penampilan elegan dan menawan.",
    price: "Rp 6.000.000",
    image: "/assets/img-2.jpg",
    options: [
      { name: "Makeup Only", price: "200k" },
      { name: "Makeup Hijab", price: "250k" },
      { name: "Makeup Hairdo", price: "280k" },
    ],
  },
];

export default function MakeupPackages() {
  const [info, setInfo] = useState<IButtonInfo>(buttons[0]);
  return (
    <>
      <Header />
      <section className="min-h-screen flex flex-col items-center p-5">
        <h1
          className={`text-3xl font-medium mb-6 text-center mt-2 sm:mt-4 ${bodoni.className}`}
        >
          Wedding & Make Up
        </h1>
        <div
          className={`flex flex-wrap gap-4 justify-center mb-8 ${montserrat.className}`}
        >
          {buttons.map((button) => (
            <button
              key={button.title}
              className={`px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base transition-colors min-h-[40px] ${
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
            <h2
              className={`text-3xl lg:text-5xl font-bold uppercase ${bodoni.className}`}
            >
              {info.title}
            </h2>
            <div
              className={`text-left text-lg ${montserrat.className}`}
              dangerouslySetInnerHTML={{ __html: info.description }}
            ></div>
            <ul
                    className={`text-stone-600 text-lg space-y-3 ${montserrat.className}`}
                  >
                    {info.options.map((option, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center border-b border-stone-200 pb-2"
                      >
                        <span>{option.name}</span>
                        <span
                          className={`font-bold text-xl ${bodoni.className}`}
                        >
                          {option.price}
                        </span>
                      </li>
                    ))}
                  </ul>
            <p className={`text-4xl ${bodoni.className}`}>{info.price}</p>
          </div>
        </div>
        </section>
      <Footer />
    </>
  );
}
