"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import { Bodoni_Moda } from "next/font/google";

interface INavLink {
  label: string;
  href: string;
}

const bodoni = Bodoni_Moda({
  weight: "600",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

const navLinks: INavLink[] = [
  { label: "Dekorasi Engagement", href: "/dekorasi-engagement" },
  { label: "Wedding & Makeup", href: "/wedding-and-makeup" },
  { label: "Paket Makeup", href: "/paket-makeup" },
  { label: "Paket Tenda", href: "/paket-tenda" },
  // {
  //   label: "Whatsapp",
  //   href: "https://api.whatsapp.com/send?phone=62895354969032",
  // },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="text-stone-800 py-4 h-52 flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 flex flex-col lg:flex-col items-center lg:justify-between space-y-2">
        <Link
          href="/wedding-and-makeup"
          className={`text-6xl font-extrabold lg:mb-0 lg:text-6xl uppercase m-4 p-4 ${bodoni.className}`}
        >
          rnita
        </Link>
        <div className="border-y-2 border-stone-200 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 flex flex-col items-center">
            <nav
              className={`flex flex-wrap gap-4 lg:gap-6 justify-center py-5 ${montserrat.className}`}
            >
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className={`text-sm hover:text-stone-400 lg:text-sm font-medium uppercase ${
                      isActive ? "text-stone-400" : "text-stone-800"
                    } ${
                      link.label === "Whatsapp"
                        ? "text-white font-bold border-2 border-white px-3 hover:no-underline hover:opacity-90"
                        : ""
                    }`}
                    target={link.label === "Whatsapp" ? "_blank" : undefined}
                    rel={
                      link.label === "Whatsapp"
                        ? undefined
                        : "noopener noreferrer"
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
