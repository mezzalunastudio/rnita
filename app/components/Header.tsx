"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fonts } from "@/app/src/font";

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

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-stone-800 py-4 flex flex-col justify-between items-center">
      <div className="container mx-auto px-4 flex flex-col lg:flex-col items-center lg:justify-between space-y-2">
        <Link
          href="/wedding-and-makeup"
          className={`md:hidden block text-6xl font-extrabold lg:mb-0 lg:text-6xl uppercase px-4 md:px-6 pt-0 md:pt-2 ${fonts.bodoni}`}
        >
          rnita
        </Link>
        
        <div className="border-y-2 border-stone-200 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 flex flex-col items-center">
            <Link
              href="/wedding-and-makeup"
              className={`md:block hidden text-6xl font-extrabold lg:mb-0 lg:text-6xl uppercase px-4 md:px-6 pt-10 md:pt-2 ${fonts.bodoni}`}
            >
              rnita
            </Link>

            <button
              className="md:hidden fixed top-6 right-5 z-50 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-stone-800" />
              ) : (
                <FiMenu className="w-6 h-6 text-stone-800" />
              )}
            </button>
            <nav
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } fixed inset-0 bg-white bg-opacity-90 backdrop-blur z-40 md:static block md:bg-transparent md:flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 py-8 px-6 ${
                fonts.montserrat
              }`}
            >
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className={`text-lg md:text-sm hover:text-stone-400 font-medium uppercase ${
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
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
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
