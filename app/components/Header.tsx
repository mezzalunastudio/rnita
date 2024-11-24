"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavLink {
  label: string;
  href: string;
}

const navLinks: INavLink[] = [
  { label: "Dekorasi Engagement", href: "/dekorasi-engagement" },
  { label: "Wedding and Makeup", href: "/wedding-and-makeup" },
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
    <header className="bg-gray-400 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex flex-col lg:flex-col items-center lg:justify-between space-y-2">
        <Link
          href="/wedding-and-makeup"
          className="text-4xl font-extrabold font-[family-name:var(--font-geist-mono)] lg:mb-0 lg:text-3xl"
        >
          Price List rnita
        </Link>
        <nav className="flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-start py-5">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={index}
                href={link.href}
                className={`hover:underline text-base lg:text-xl font-medium font-[family-name:var(--font-geist-mono)] ${
                  isActive ? "text-white" : "text-gray-800"
                } ${
                  link.label === "Whatsapp"
                    ? "text-white font-bold border-2 border-white px-3 hover:no-underline hover:opacity-90"
                    : ""
                }`}
                target={link.label === "Whatsapp" ? "_blank" : undefined}
                rel={
                  link.label === "Whatsapp" ? undefined : "noopener noreferrer"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
