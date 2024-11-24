"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

interface IButtonInfo {
  title: string;
  description: string;
  price?: string;
  image: string;
}

const buttons: IButtonInfo[] = [
  {
    title: "Paket Basic",
    description: `
      <ol>
        <li>Makeup dan busana akad dan resepsi (2baju) CPP & CPW</li>
        <li>Make dan busana 2 ibu dan 2 bapak</li>
        <li>Melati simple sepasang pengantin</li>
        <li>Makeup dan busana penerima tamu 4 orang</li>
        <li>Free : Upacara adat/panggih</li>
        <li>Free : Softlens</li>
        <li>Free : Fakenail</li>
      </ol>
    `,
    price: "Rp 5.000.000",
    image: "/assets/img-1.jpg",
  },
  {
    title: "Paket Medium",
    description: `
      <ol>
        <li>Makeup dan busana akad dan resepsi (2baju) CPP & CPW</li>
        <li>Makeup dan busana 2 ibu dan 2 bapak</li>
        <li>Melati bebas pilih adat jawa/sunda</li>
        <li>Makeup dan busana penerima tamu 4 orang</li>
        <li>Free Upacara adat/panggih</li>
        <li>Free : Softlens</li>
        <li>Free : Handboquet</li>
      </ol>
    `,
    price: "Rp 6.000.000",
    image: "/assets/img-2.jpg",
  },
  {
    title: "Paket Premium",
    description: `
      <ol>
        <li>Makeup dan busana akad dan resepsi (2baju) CPP & CPW</li>
        <li>Make dan busana 2 ibu dan 2 bapak</li>
        <li>Melati bebas pilih adat jawa/sunda</li>
        <li>Makeup dan busana penerima tamu 4 orang</li>
        <li>Baju 3 pasang pengantin 1 akad dan 2 resepsi</li>
         <li>Free Upacara adat/panggih</li>
        <li>Free : Softlens</li>
        <li>Free : Handboquet</li>
      </ol>
    `,
    price: "Rp 7.000.000",
    image: "/assets/img-3.jpg",
  },
];

export default function Page() {
  const [info, setInfo] = useState<IButtonInfo>(buttons[0]);

  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-200 text-gray-800 flex flex-col items-center p-5 font-[family-name:var(--font-geist-mono)]">
        <h1 className="text-3xl font-medium mb-6 text-center mt-10">
          Price List Wedding & Make Up
        </h1>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {buttons.map((button) => (
            <button
              key={button.title}
              className={`px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base font-semibold transition-colors font-[family-name:var(--font-geist-mono)] min-h-[40px] ${
                info.title === button.title
                  ? "bg-gray-400 text-white hover:bg-gray-500"
                  : "bg-white text-gray-800 border-gray-500 hover:text-gray-600"
              }`}
              onClick={() => setInfo(button)}
            >
              {button.title}
            </button>
          ))}
        </div>
        <hr className="w-full max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[60%] mx-auto border-b-2 border-gray-300" />
        <div className="mt-5 p-8 w-full max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[60%] mx-auto flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-start lg:space-x-6 shadow-md">
          <div className="flex-shrink-0 w-full lg:w-1/2 mx-auto lg:mx-0 lg:border-r lg:border-stone-300 lg:pr-6">
            <Image src={info.image} alt={info.title} width={300} height={200} className=" w-full object-cover" />
          </div>
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-stone-800">{info.title}</h2>
            <p className="text-stone-800 font-bold text-2xl">{info.price}</p>
            <div
              className="text-stone-600 text-left text-lg"
              dangerouslySetInnerHTML={{ __html: info.description }}
            ></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
