"use client";
import React, { useState } from "react";
import Image from "next/image";
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
    <header className="text-stone-800 py-4 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col lg:flex-col items-center lg:justify-between space-y-2">
        {/* Small Screen: Logo and Hamburger Menu */}
        <div className="md:hidden flex justify-between items-center w-full sticky top-0 bg-white z-50">
          <Link href="/wedding-and-makeup" legacyBehavior>
            <Image
              src="/assets/rnita-logo.png"
              alt="Rnita Logo"
              width={48}
              height={48}
              className="object-cover cursor-pointer"
            />
          </Link>
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6 text-stone-800" />
            ) : (
              <FiMenu className="w-6 h-6 text-stone-800" />
            )}
          </button>
        </div>

        {/* Large Screen: Centered Logo */}
        <div className="border-y-2 border-stone-200 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 flex flex-col items-center">
            <Link
              href="/wedding-and-makeup"
              legacyBehavior
              className={`lg:mb-0 lg:text-6xl px-4 md:px-6 pt-10 md:pt-2 ${fonts.bodoni}`}
            >
              <Image
                src="/assets/rnita-logo.png"
                alt="Rnita Logo"
                width={48}
                height={48}
                className="object-cover md:block hidden mt-4 cursor-pointer"
              />
            </Link>

            {/* Navigation Menu */}
            <nav
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } fixed inset-0 bg-white bg-opacity-90 backdrop-blur z-40 md:static block md:bg-transparent md:flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 py-8 px-6 font-spring tracking-wide`}
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
                    onClick={() => setIsMenuOpen(false)}
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
