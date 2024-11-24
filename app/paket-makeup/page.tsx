import React from "react";
import Image from "next/image"; // Ensure this is imported
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
    image: "/assets/img-1.jpg", // Ensure this file is in the public/assets/ folder
  },
  {
    category: "Paket Engagement",
    options: [
      { name: "Makeup Only", price: "250k" },
      { name: "Makeup Hairdo", price: "350k" },
    ],
    image: "/assets/img-1.jpg", // Ensure this file is in the public/assets/ folder
  },
];

export default function MakeupPackages() {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-200 text-gray-800 flex flex-col items-center p-5 font-[family-name:var(--font-geist-mono)]">
        <div className="w-full max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[60%] mx-auto border border-stone-300 rounded-lg shadow-lg flex flex-col items-center">
          <h1 className="text-3xl font-medium mb-6 text-center mt-10">
            Paket Make Up
          </h1>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {makeupPackages.map((packageItem, index) => (
              <div
                key={index}
                className="mt-5 p-8 w-full max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] mx-auto flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-start lg:space-x-6 shadow-md"
              >
                <div className="flex-shrink-0 w-full lg:w-1/2 mx-auto lg:mx-0 lg:border-r lg:border-stone-300 lg:pr-6">
                  <Image
                    src={packageItem.image}
                    alt={packageItem.category}
                    width={300}
                    height={200}
                    className="w-full object-cover rounded-lg shadow-sm"
                  />
                </div>
                <div className="flex flex-col space-y-4 text-center lg:text-left w-full lg:w-1/2 lg:pl-6">
                  <h2 className="text-2xl font-bold text-stone-800 mb-6">
                    {packageItem.category}
                  </h2>
                  <ul className="text-stone-600 text-left text-lg space-y-5">
                    {packageItem.options.map((option, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center border-b border-stone-300 pb-2"
                      >
                        <span>{option.name}</span>
                        <span className="font-medium">{option.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
