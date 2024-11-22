import React from "react";
import Link from "next/link";

// Define the structure for navigation links
interface INavLink {
  label: string;
  href: string;
}
const navLinks: INavLink[] = [
  { label: "Dekorasi Engagement", href: "/dekorasi-engagement" },
  { label: "Paket Makeup", href: "/paket-makeup" },
  { label: "Paket Tenda", href: "/paket-tenda" },
  { label: "Wedding and Makeup", href: "/wedding-and-makeup" },
  {
    label: "Whatsapp",
    href: "https://api.whatsapp.com/send?phone=62895354969032",
  },
];

export default function Header() {
  return (
    <header className="bg-stone-800 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-between">
        <Link
          href="/"
          className="text-2xl font-extrabold font-[family-name:var(--font-geist-mono)] mb-4 lg:mb-0 lg:text-3xl"
        >
          rnita
        </Link>
        <nav className="flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-start">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`hover:underline text-sm lg:text-base font-medium font-[family-name:var(--font-geist-mono)] ${
                link.label === "Whatsapp" ? "text-white font-bold border-2 border-white px-3 hover:no-underline hover:opacity-90" : ""
              }`}
              target={link.label === "Whatsapp" ? "_blank" : undefined}
              rel={
                link.label === "Whatsapp" ? undefined : "noopener noreferrer"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
