import React from "react";
import Image from "next/image";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdOutlinePriceCheck } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { AiOutlineWhatsApp, AiOutlineEnvironment } from "react-icons/ai";
import { fonts } from "@/app/src/font";

export default function Links() {
  return (
    <div className="h-screen justify-center flex flex-col items-center space-y-6">
      <div className="w-24 h-24 rounded-full border-4 border-stone-800 overflow-hidden">
        <Image
          src="/assets/rnita-logo.jpg"
          alt="Rnita Logo"
          width={96}
          height={96}
          className="object-cover"
        />
      </div>

      <div className="w-1/3 flex flex-col items-center space-y-6">
        <a
          href="https://rnita.vercel.app/dekorasi-engagement"
          target="_blank"
          className={`flex items-center space-x-2 justify-center w-full text-center text-lg text-stone-800 btn-primary hover:btn ${fonts.bodoni}`}
        >
          <MdOutlinePriceCheck
            size={28}
            className="text-stone-700 hover:text-stone-500"
          />
          <span>Pricelist</span>
        </a>
        <a
          href="https://rnita.vercel.app/gallery"
          target="_blank"
          className={`flex items-center space-x-2 justify-center w-full text-center text-lg text-stone-800 btn-primary hover:btn ${fonts.bodoni}`}
        >
          <GrGallery
            size={28}
            className="text-stone-700 hover:text-stone-500"
          />
          <span>Gallery</span>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=62895354969032&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center space-x-2 justify-center w-full text-center text-lg text-stone-800 btn-primary hover:btn ${fonts.bodoni}`}
        >
          <AiOutlineWhatsApp
            size={28}
            className="text-stone-700 hover:text-stone-500"
          />
          <span>WhatsApp</span>
        </a>

        <div className="w-full flex flex-col space-y-6">
          <a
            href="https://www.instagram.com/rnita.makeup/profilecard/?igsh=N2VzaHdnNm0zMnJ0/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 justify-center text-lg text-stone-800 btn-primary hover:btn ${fonts.bodoni}`}
          >
            <PiInstagramLogoFill
              size={28}
              className="text-stone-700 hover:text-stone-500"
            />
            <span>rnita makeup</span>
          </a>
          <a
            href="https://www.instagram.com/rnita.deco/profilecard/?igsh=MXFvaGhrNGRmM210MA=="
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 justify-center text-lg text-stone-800 btn-primary hover:btn ${fonts.bodoni}`}
          >
            <PiInstagramLogoFill
              size={28}
              className="text-stone-700 hover:text-stone-500"
            />
            <span>rnita studio</span>
          </a>
        </div>

        <a
          href="https://goo.gl/maps/your-google-maps-link"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center space-x-2 justify-center w-full text-center text-lg text-stone-800 btn-primary hover:btn ${fonts.bodoni}`}
        >
          <AiOutlineEnvironment
            size={28}
            className="text-stone-700 hover:text-stone-500"
          />
          <span>Google Maps</span>
        </a>
      </div>
    </div>
  );
}
