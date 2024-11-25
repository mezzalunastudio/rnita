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

interface IDecorationPackage {
  title: string;
  price: string;
  includes: string[];
  additional?: string[];
  image?: string;
}

const decorationPackages: IDecorationPackage[] = [
  {
    title: "PAKET 1",
    price: "Rp. 1.000.000",
    includes: [
      "backdrop 3 meter",
      "bunga artificial",
      "lighting",
      "background kain",
      "2 kursi tifani (putih/coklat)",
      "karpet",
      "inisial nama",
    ],
    image: "/assets/img-1.jpg",
  },
  {
    title: "PAKET 2",
    price: "Rp. 1.500.000",
    includes: [
      "backdrop 3 meter",
      "Mix flowers",
      "lighting",
      "background kain",
      "2 kursi tifani (putih/coklat)",
      "karpet",
    ],
    image: "/assets/img-2.jpg",
  },
  {
    title: "PAKET 2 with Makeup",
    price: "Rp. 1.750.000",
    includes: [
      "backdrop 3 meter",
      "Mix flowers",
      "lighting",
      "background kain",
      "2 kursi tifani (putih/coklat)",
    ],
    additional: ["makeup by Rnita makeup"],
    image: "/assets/img-3.jpg",
  },
];

export default function DecorationEngagementPage() {
  const [selectedPackage, setSelectedPackage] = useState<IDecorationPackage>(
    decorationPackages[0]
  );

  return (
    <>
      <Header />
      <section className="min-h-screen text-stone-800 flex flex-col items-center p-5">
        <h1
          className={`text-3xl font-medium mb-6 text-center mt-2 sm:mt-4 ${bodoni.className}`}
        >
          {" "}
          Paket Dekorasi Engagement
        </h1>
        <div
          className={`flex flex-wrap gap-4 justify-center mb-8 ${montserrat.className}`}
        >
          {decorationPackages.map((paket, index) => (
            <button
              key={index}
              className={`px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base transition-colors min-h-[40px] ${
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
              className={`text-3xl lg:text-5xl font-bold uppercase ${bodoni.className}`}
            >
              {selectedPackage.title}
            </h2>
            <ol className={`text-left text-lg ${montserrat.className}`}>
              {selectedPackage.includes.map((item, idx) => (
                <li key={idx} className="text-gray-600 capitalize">
                  {item}
                </li>
              ))}
            </ol>
            <p className={`text-4xl ${bodoni.className}`}>
              {selectedPackage.price}
            </p>

            {selectedPackage.additional && (
              <div className="mt-4">
                <h3 className={`text-2xl font-semibold text-stone-700 mb-2 ${bodoni.className} `}>
                  Additional:
                </h3>
                <ul className="list-disc list-inside">
                  {selectedPackage.additional.map((add, idx) => (
                    <li key={idx} className={`text-stone-600 capitalize ${montserrat.className}`}>
                      {add}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
