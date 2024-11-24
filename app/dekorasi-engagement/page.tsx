"use client";

import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

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
    title: "PAKET 2 (with Makeup)",
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
      <section className="min-h-screen bg-gray-200 text-gray-800 flex flex-col items-center p-5 font-[family-name:var(--font-geist-mono)]">
        <h1 className="text-3xl font-medium mb-6 text-center border-gray-300 mt-10">
          Price List Paket Dekorasi Engagement
        </h1>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {decorationPackages.map((paket, index) => (
            <button
              key={index}
              className={`px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base font-semibold transition-colors min-h-[40px] ${
                selectedPackage.title === paket.title
                  ? "bg-gray-400 text-white hover:bg-gray-500"
                  : "bg-white text-gray-800 border-gray-500 hover:text-gray-600"
              }`}
              onClick={() => setSelectedPackage(paket)}
            >
              {paket.title}
            </button>
          ))}
        </div>
        <hr className="w-full max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[60%] mx-auto border-b-2 border-gray-300" />
        <div className="mt-5 p-8 w-full max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[60%] mx-auto flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-start lg:space-x-6 shadow-md">
          <div className="flex-shrink-0 w-full lg:w-1/2 mx-auto lg:mx-0 lg:border-r lg:border-stone-300 lg:pr-6">
            <Image
              src={selectedPackage.image || "/assets/placeholder.jpg"}
              alt={selectedPackage.title}
              width={300}
              height={200}
              className="object-cover w-full"
            />
          </div>
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedPackage.title}
            </h2>
            <p className="text-gray-800 font-bold text-xl text-left">
              Harga : {selectedPackage.price}
            </p>

            <ol className="text-stone-600 text-left text-lg">
              {selectedPackage.includes.map((item, idx) => (
                <li key={idx} className="text-gray-600 capitalize">
                  {item}
                </li>
              ))}
            </ol>

            {selectedPackage.additional && (
              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-stone-700 mb-2">
                  Additional:
                </h3>
                <ul className="list-disc list-inside">
                  {selectedPackage.additional.map((add, idx) => (
                    <li key={idx} className="text-stone-600 capitalize">
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
