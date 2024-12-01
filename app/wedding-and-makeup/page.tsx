"use client";
import React, { useState } from "react";
import Image from "next/image";
import { fonts } from "@/app/src/font";

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
    image: "/assets/wedding&makeup-5.jpg",
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
    image: "/assets/wedding&makeup-2.jpg",
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
    image: "/assets/wedding&makeup-4.jpg",
    button: "Pesan Sekarang",
  },
];


export default function Page() {
  const [info, setInfo] = useState<IButtonInfo>(buttons[0]);

  return (
    <>
      <section className="flex flex-col px-2 md:px-4">
        <h1
          className={`text-2xl font-medium mb-2 text-center mt-7 sm:mt-3 md:mt-2 ${fonts.bodoni}`}
        >
          Wedding & Make Up
        </h1>
        <div
          className={`flex flex-wrap gap-2 md:gap-4 justify-center mb-8 md:mt-4 mt-3 ${fonts.montserrat}`}
        >
          {buttons.map((button) => (
            <button
              key={button.title}
              className={`px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base transition-colors min-h-[40px] ${
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
        <div className="flex flex-col mt-5 p-8 w-full max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[80%] mx-auto space-y-4 lg:space-y-0 lg:flex-row lg:items-start lg:space-x-6">
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
              className={`text-3xl lg:text-5xl font-bold uppercase ${fonts.bodoni}`}
            >
              {info.title}
            </h2>
            {/* <div
              className={`text-left text-lg ${fonts.montserrat}`}
              dangerouslySetInnerHTML={{ __html: info.includes }}
            ></div>
            <p className={`text-4xl ${fonts.bodoni}`}>{info.price}</p> */}

            <ol className={`text-left text-lg ${fonts.montserrat}`}>
              {info.includes.map((item, idx) => (
                <li key={idx} className="text-gray-600 capitalize md:py-2 py-1">
                  {item}
                </li>
              ))}
            </ol>
            <p className={`text-3xl md:text-4xl ${fonts.bodoni}`}>
              {info.price}
            </p>
            <button
              type="button"
              formTarget="_blank"
              className={`btn hover:bg-stone-600 uppercase px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base transition-colors min-h-[40px] ${fonts.montserrat}`}
              onClick={() =>
                (window.location.href =
                  "https://api.whatsapp.com/send/?phone=62895354969032&text&type=phone_number&app_absent=0")
              }
            >
              {info.button}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
