"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import { Montserrat } from "next/font/google";

const bodoni = Bodoni_Moda({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const galleryImages: Array<{
  title: string;
  location: string;
  description: string;
  category: string;
}> = [
  {
    title: "Makeup Look 1",
    location: "/assets/makeup/makeup-1.jpg",
    description: "A beautiful makeup look featuring bold colors.",
    category: "Makeup",
  },
  {
    title: "Makeup Look 2",
    location: "/assets/makeup/makeup-2.jpg",
    description: "Soft and elegant makeup perfect for evening wear.",
    category: "Makeup",
  },
  {
    title: "Makeup Look 3",
    location: "/assets/makeup/makeup-3.jpg",
    description: "A natural makeup style for a fresh daytime look.",
    category: "Makeup",
  },
  {
    title: "Makeup Look 4",
    location: "/assets/makeup/makeup-4.jpg",
    description: "Glamorous makeup for a red carpet event.",
    category: "Makeup",
  },

  {
    title: "Tenda 1",
    location: "/assets/tenda/tenda-1.jpg",
    description: "A spacious tent setup for outdoor events.",
    category: "Tenda",
  },
  {
    title: "Tenda 2",
    location: "/assets/tenda/tenda-2.jpg",
    description: "A luxurious tent arrangement with elegant décor.",
    category: "Tenda",
  },
  {
    title: "Tenda 3",
    location: "/assets/tenda/tenda-3.jpg",
    description: "A small yet cozy tent setup for intimate gatherings.",
    category: "Tenda",
  },

  {
    title: "Wedding 1",
    location: "/assets/wedding/wedding-1.jpg",
    description: "A beautiful outdoor wedding ceremony setup.",
    category: "Wedding",
  },
  {
    title: "Wedding 2",
    location: "/assets/wedding/wedding-2.jpg",
    description: "Bride and groom's first dance under the stars.",
    category: "Wedding",
  },
  {
    title: "Wedding 3",
    location: "/assets/wedding/wedding-3.jpg",
    description: "A romantic sunset wedding photo shoot.",
    category: "Wedding",
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const categories = Array.from(
    new Set(galleryImages.map((image) => image.category))
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleAllclick = () => {
    setSelectedCategory("");
  };

  const filteredImages = selectedCategory
    ? galleryImages.filter((image) => image.category === selectedCategory)
    : galleryImages;

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center border-b-2 border-stone-400 w-full max-w-[90%] mx-auto py-6">
        <h1
          className={`text-3xl font-medium text-center ${bodoni.className} mb-6 sm:text-4xl`}
        >
          Gallery Section
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn-primary py-2 px-6" onClick={handleAllclick}>
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className="btn py-2 px-6 hover:bg-stone-500 transition duration-200"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="my-4 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {filteredImages.map((image, index) => (
              <div key={index} className="relative">
                <Image
                  src={image.location}
                  alt={image.title}
                  layout="responsive"
                  width={500}
                  height={500}
                  className="object-cover"
                  quality={90}
                />
                <div
                  className={`w-full text-stone-800 text-center p-2 opacity-0 hover:opacity-100 ${montserrat.className}`}
                >
                  {image.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
