import React from "react";

export default function Banner() {
  return (
    <div className="min-h-[500px] bg-cover bg-center flex flex-col justify-center items-center text-white px-12 lg:px-3">
      <div className="text-center p-3 space-y-5">
        <h1 className="text-4xl font-extrabold text-stone-800 sm:text-3xl md:text-4xl lg:text-5xl">
          Welcome to Rnita
        </h1>
        <p className="text-lg mb-6 text-stone-600 sm:text-base md:text-lg lg:text-xl">
          Melayani Dekorasi Indoor | Bawah Tenda | Makeup Artist
          <br />
          Lokasi: Ambarawa, Kab. Semarang
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://shorturl.at/PPNRM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-stone-500 text-white hover:bg-stone-600 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold rounded-md transition-colors border min-h-[40px] w-full sm:w-auto text-center"
          >
            Explore Our Gallery
          </a>
          <a
            href="https://shorturl.at/KoogW"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-stone-800 border-stone-500 hover:text-stone-600 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold rounded-md transition-colors border min-h-[40px] w-full sm:w-auto text-center"
          >
            Find Us on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
