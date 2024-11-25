import React from "react";
import { Montserrat } from "next/font/google";
// import { FaInstagram } from "react-icons/fa";

const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

// const socialLinks = [
//   {
//     platform: "Rnite Makeup",
//     href: "https://www.instagram.com/rnita.makeup/profilecard/?igsh=N2VzaHdnNm0zMnJ0",
//     icon: <FaInstagram size={20} />,
//   },
//   {
//     platform: "Rnite Decoration",
//     href: "https://www.instagram.com/rnita.deco/profilecard/?igsh=MXFvaGhrNGRmM210MA%3D%3D",
//     icon: <FaInstagram size={20} />,
//   },
// ];

export default function Footer() {
  return (
    <footer className="bg-white text-stone-800 py-4 text-center">
      <div className="">
        {/* <div className="flex space-x-4">
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
        </div> */}

        <p className={`text-stone-400  ${montserrat.className}`}>
          Template by <span className="text-stone-500">Mezzaluna Studio</span>
        </p>
      </div>
    </footer>
  );
}
