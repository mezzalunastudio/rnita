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
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center bg-stone-200 border-b-2 border-stone-400 p-5">
        <h1 className="text-3xl font-bold mb-6 text-center border-b-2 border-stone-300 text-stone-800 mt-10">
          Price List Wedding & Make Up
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-3 my-5">
          {buttons.map((button) => (
            <button
              key={button.title}
              className={`px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base font-semibold rounded-md transition-colors border font-[family-name:var(--font-geist-mono)] min-h-[40px] ${
                info.title === button.title
                  ? "bg-stone-500 text-white hover:bg-stone-600"
                  : "bg-white text-stone-800 border-stone-500 hover:text-stone-600"
              }`}
              onClick={() => setInfo(button)}
            >
              {button.title}
            </button>
          ))}
        </div>

        <div className="mt-5 p-4 bg-white border border-stone-300 rounded-lg flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-start lg:space-x-6 shadow-md">
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <Image
              src={info.image}
              alt={info.title}
              width={300}
              height={200}
              className="rounded-lg shadow-sm"
            />
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
      </div>
      <Footer />
    </div>
  );
}
