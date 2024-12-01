"use client";
import React from "react";
// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Bodoni_Moda } from "next/font/google";
import { Montserrat } from "next/font/google";
import { PiInstagramLogoFill } from "react-icons/pi";
import Link from "next/link";

const bodoni = Bodoni_Moda({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

interface INavLink {
  label: string;
  href: string;
}

const navLinks: INavLink[] = [
  { label: "Dekorasi Engagement", href: "/dekorasi-engagement" },
  { label: "Wedding & Makeup", href: "/wedding-and-makeup" },
  { label: "Paket Makeup", href: "/paket-makeup" },
  { label: "Paket Tenda", href: "/paket-tenda" },
  { label: "Gallery", href: "/gallery" },
];

export default function Footer() {
  // const router = useRouter();
  const pathname = usePathname();

  return (
    <footer className="bg-stone-200 text-stone-800 text-center">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-center justify-center py-20">
        <div className="flex flex-col items-center lg:items-start text-center space-y-4 px-4 lg:px-6 border-b lg:border-b-0 lg:border-r border-stone-300">
          <nav className="flex flex-col items-center text-center space-y-2 mb-4 md:lg-2">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`text-sm hover:text-stone-400 lg:text-base font-medium uppercase ${
                    isActive ? "text-stone-700" : "text-stone-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-col items-center md:gap-5 gap-3 px-4 lg:px-6 border-b lg:border-b-0 lg:border-r border-stone-300">
          <div className="my-4 md:my-2">
            <Link
              href="/wedding-and-makeup"
              className={`text-6xl font-extrabold lg:mb-0 lg:text-6xl uppercase m-4 p-4 text-stone-700 ${bodoni.className}`}
            >
              rnita
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 md:gap-6 mb-6 md:mb-0">
            <div className="flex flex-col items-center">
              <a
                href="https://www.instagram.com/rnita.makeup/profilecard/?igsh=N2VzaHdnNm0zMnJ0/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <PiInstagramLogoFill
                  size={28}
                  className="text-stone-700 hover:text-stone-500"
                />
              </a>
              <p className="text-sm text-stone-500 mt-2">Rnita Makeup</p>{" "}
            </div>
            <div className="flex flex-col items-center">
              <a
                href="https://www.instagram.com/rnita.deco/profilecard/?igsh=MXFvaGhrNGRmM210MA=="
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <PiInstagramLogoFill
                  size={28}
                  className="text-stone-700 hover:text-stone-500"
                />
              </a>
              <p className="text-sm text-stone-500 mt-2">Rnita Decoration</p>{" "}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center px-4 lg:px-6">
          <a
            href="https://api.whatsapp.com/send/?phone=62895354969032&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-4xl ${bodoni.className} text-stone-700 hover:text-stone-500`}
          >
            <span className="block mb-2">PESAN</span>
            <span className="block">SEKARANG</span>
          </a>
        </div>
      </div>

      <div className="mt-4 bg-white py-3">
        <p className={`text-stone-400  ${montserrat.className}`}>
          Template by <span className="text-stone-500">Mezzaluna Studio</span>
        </p>
      </div>
    </footer>
  );
}
