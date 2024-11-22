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
    <div>
      <Header />
      <div className="min-h-screen bg-stone-200 text-stone-800 flex flex-col items-center p-5">
        <h1 className="text-3xl font-bold mb-6 text-center border-b-2 border-stone-300 mt-10">
          Paket Dekorasi Engagement
        </h1>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {decorationPackages.map((paket, index) => (
            <button
              key={index}
              className={`px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base font-semibold rounded-md transition-colors border font-[family-name:var(--font-geist-mono)] min-h-[40px] ${
                selectedPackage.title === paket.title
                  ? "bg-stone-500 text-white hover:bg-stone-600"
                  : "bg-white text-stone-800 border-stone-500 hover:text-stone-600"
              }`}
              onClick={() => setSelectedPackage(paket)}
            >
              {paket.title}
            </button>
          ))}
        </div>
        <div className="mt-5 p-4 bg-white border border-stone-300 rounded-lg flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-start lg:space-x-6 shadow-md">
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <Image
              src={selectedPackage.image || "/assets/placeholder.jpg"}
              alt={selectedPackage.title}
              width={300}
              height={200}
              className="rounded-lg shadow-sm"
            />
          </div>

          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-stone-800">
              {selectedPackage.title}
            </h2>
            <p className="text-stone-800 font-bold text-2xl">
              {selectedPackage.price}
            </p>

            <ol className="text-stone-600 text-left text-lg">
              {selectedPackage.includes.map((item, idx) => (
                <li key={idx} className="text-stone-600 capitalize">
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
      </div>
      <Footer />
    </div>
  );
}
