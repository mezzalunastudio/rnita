import React from "react";
import { FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    platform: "Rnite Makeup",
    href: "https://www.instagram.com/rnita.makeup/profilecard/?igsh=N2VzaHdnNm0zMnJ0",
    icon: <FaInstagram size={20} />,
  },
  {
    platform: "Rnite Decoration",
    href: "https://www.instagram.com/rnita.deco/profilecard/?igsh=MXFvaGhrNGRmM210MA%3D%3D",
    icon: <FaInstagram size={20} />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              title={link.platform}
            >
              <span className="absolute left-0 bottom-8 bg-stone-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {link.platform}
              </span>
              {link.icon}
            </a>
          ))}
        </div>

        <p className="text-sm lg:text-base font-medium text-center lg:text-right font-[family-name:var(--font-geist-mono)]">
          Template by <span className="font-bold ">Mezzaluna Studio</span>
        </p>
      </div>
    </footer>
  );
}
