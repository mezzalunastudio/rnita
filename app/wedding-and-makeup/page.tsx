"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import { Montserrat } from "next/font/google";

interface IButtonInfo {
  title: string;
  includes: string[];
  price?: string;
  image: string;
  button?: string;
}

const buttons: IButtonInfo[] = [
  {
    title: "Paket Basic",
    includes: [
      "Makeup dan busana akad dan resepsi (2baju) CPP & CPW",
      "Make dan busana 2 ibu dan 2 bapak",
      "Melati simple sepasang pengantin",
      "Makeup dan busana penerima tamu 4 orang",
      "Free : Upacara adat/panggih",
      "Free : Softlens",
      "Free : Fakenail",
    ],
    price: "Rp 5.000.000",
    image: "/assets/img-1.jpg",
    button: "Pesan Sekarang",
  },
  {
    title: "Paket Medium",
    includes: [
      "Makeup dan busana akad dan resepsi (2baju) CPP & CPW",
      "Makeup dan busana 2 ibu dan 2 bapak",
      "Melati bebas pilih adat jawa/sunda",
      "Makeup dan busana penerima tamu 4 orang",
      "Free Upacara adat/panggih",
      "Free : Softlens",
      "Free : Handboquet",
    ],
    price: "Rp 6.000.000",
    image: "/assets/img-2.jpg",
    button: "Pesan Sekarang",
  },
  {
    title: "Paket Premium",
    includes: [
      "Makeup dan busana akad dan resepsi (2baju) CPP & CPW",
      "Make dan busana 2 ibu dan 2 bapak",
      "Melati bebas pilih adat jawa/sunda",
      "Makeup dan busana penerima tamu 4 orang",
      "Baju 3 pasang pengantin 1 akad dan 2 resepsi",
      "Free Upacara adat/panggih",
      "Free : Softlens",
      "Free : Handboquet",
    ],
    price: "Rp 7.000.000",
    image: "/assets/img-3.jpg",
    button: "Pesan Sekarang",
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
      <section className="flex flex-col items-center">
        <h1
          className={`text-3xl font-medium mb-2 text-center mt-7 sm:mt-3 md:mt-2 ${bodoni.className}`}
        >
          Wedding & Make Up
        </h1>
        <div
          className={`flex flex-wrap gap-x-4 justify-center mb-8 ${montserrat.className}`}
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
            {/* <div
              className={`text-left text-lg ${montserrat.className}`}
              dangerouslySetInnerHTML={{ __html: info.includes }}
            ></div>
            <p className={`text-4xl ${bodoni.className}`}>{info.price}</p> */}

            <ol className={`text-left text-lg ${montserrat.className}`}>
              {info.includes.map((item, idx) => (
                <li key={idx} className="text-gray-600 capitalize md:py-2 py-1">
                  {item}
                </li>
              ))}
            </ol>
            <p className={`text-4xl ${bodoni.className}`}>{info.price}</p>
            <button
              type="button"
              formTarget="_blank"
              className={`btn hover:bg-stone-600 uppercase px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base transition-colors min-h-[40px] ${montserrat.className}`}
              onClick={() =>
                (window.location.href =
                  "https://api.whatsapp.com/send?phone=628979078317")
              }
            >
              {info.button}
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
