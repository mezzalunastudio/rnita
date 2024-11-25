"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import { Montserrat } from "next/font/google";

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

const bodoni = Bodoni_Moda({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
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
            <p className={`text-4xl ${bodoni.className}`}>{info.price}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
