import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const tendaPackages = [
  { name: "Tenda Plafon", price: "150k" },
  { name: "Tenda Serut Biasa", price: "200k" },
  { name: "Tenda Serut Lengkung", price: "300k" },
  { name: "Dinding", price: "10k/meter" },
  { name: "Panggung", price: "25k/meter" },
  { name: "Tenda Daun", price: "500k" },
  { name: "Lighting", price: "20k/unit" },
];

export default function PaketTenda() {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center bg-gray-200 border-b-2 border-stone-400 p-5 font-[family-name:var(--font-geist-mono)]">
        <h1 className="text-3xl font-bold mb-6 text-center border-b-2 border-stone-300 text-stone-800 mt-10">
          Paket Tenda
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-4 w-4/5 lg:w-1/2 mx-auto">
          {tendaPackages.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <h2 className="text-lg font-semibold mb-2 text-stone-800">
                {item.name}
              </h2>
              <p className="text-lg text-stone-900">Harga: {item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
