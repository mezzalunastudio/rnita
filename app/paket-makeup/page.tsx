import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const makeupPackages = [
  {
    category: "Paket Make Up Wisuda",
    options: [
      { name: "Makeup Only", price: "200k" },
      { name: "Makeup Hijab", price: "250k" },
      { name: "Makeup Hairdo", price: "280k" },
    ],
  },
  {
    category: "Paket Engagement",
    options: [
      { name: "Makeup Only", price: "250k" },
      { name: "Makeup Hairdo", price: "350k" },
    ],
  },
];

export default function MakeupPackages() {
  return (
    <div>
      <Header />
      <div className="bg-stone-200 text-stone-800 min-h-screen flex flex-col items-center p-5">
        <h1 className="text-3xl font-bold mb-6 text-center border-b-2 border-stone-300 mt-10">
          Paket Make Up
        </h1>
        <div className="space-y-6 w-full max-w-4xl">
          {makeupPackages.map((packageItem, index) => (
            <div
              key={index}
              className="p-4 border border-stone-300 rounded-lg shadow-lg bg-white"
            >
              <h2 className="text-xl font-semibold mb-4 font-[family-name:var(--font-geist-mono)]">
                {packageItem.category}
              </h2>
              <ul className="space-y-2">
                {packageItem.options.map((option, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center border-b border-stone-300 pb-2 font-[family-name:var(--font-geist-mono)]"
                  >
                    <span>{option.name}</span>
                    <span className="font-medium">{option.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
