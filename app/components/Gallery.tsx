import React from "react";
import Image from "next/image";

export default function Gallery() {
  const galleryImages = [
    "/assets/img-1.jpg",
    "/assets/img-2.jpg",
    "/assets/img-3.jpg",
    "/assets/img-4.jpg",
    "/assets/img-5.jpg",
    "/assets/img-6.jpg",
  ];
  return (
    <div>
      <div className="container mx-auto px-4">
        <h1 className="text-center text-2xl font-bold mb-8 text-stone-800">
          Our Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
