"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaDownload, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { imageData } from "@/app/src/imageData";
import { Bodoni_Moda } from "next/font/google";
import { Montserrat } from "next/font/google";
import Footer from "@/app/components/Footer";

const bodoni = Bodoni_Moda({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const filteredImages = imageData.filter((image) => {
    const matchesCategory =
      selectedCategory === "All" || image.category === selectedCategory;
    const matchesSearch = image.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImageIndex(null);
  };

  const nextImage = () => {
    if (currentImageIndex !== null) {
      const nextIndex =
        currentImageIndex === filteredImages.length - 1
          ? 0
          : currentImageIndex + 1;
      setCurrentImageIndex(nextIndex);
    }
  };

  const prevImage = () => {
    if (currentImageIndex !== null) {
      const prevIndex =
        currentImageIndex === 0
          ? filteredImages.length - 1
          : currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
    if (e.key === "ArrowLeft") {
      prevImage();
    }
    if (e.key === "ArrowRight") {
      nextImage();
    }
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "modal-overlay") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const noImagesFound = filteredImages.length === 0;

  return (
    <>
      {/* <Header /> */}
      <div className=" md:w-4/5 w-11/12 mx-auto mb-5 md:mb-10 ">
        {/* Gallery Header */}
        <div className="flex items-center justify-between md:px-3 px-2 md:py-6 py-4 mt-2 md:mt-4 border-b-2 border-stone-200">
          <h1
            className={`text-xl md:text-2xl lg:text-3xl font-extrabold text-stone-800 cursor-pointer uppercase ${bodoni.className}`}
            onClick={() => router.push("/")}
          >
            Rnita
          </h1>

          {/* Desktop: Hide on small screens and show category buttons/search input */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:space-x-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 mt-4 md:mt-0`}
          >
            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-2 md:space-x-2 space-y-2 md:space-y-0">
              {["All", "Makeup", "Random", "Tenda", "Wedding"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setMenuOpen(false); // Close the menu when a category is clicked
                    }}
                    className={`px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base transition-colors min-h-[40px] ${
                      selectedCategory === category
                        ? " btn uppercase"
                        : " btn-primary uppercase"
                    } transition-all duration-300 ease-in-out hover:bg-stone-400 hover:text-white`}
                  >
                    {category}
                  </button>
                )
              )}
            </div>

            {/* Search Input */}
            <div
              className={`w-full md:w-auto mt-2 md:mt-0 ${montserrat.className}`}
            >
              <input
                type="text"
                placeholder="Search Images ..."
                className={`md:px-4 md:py-2 px-2 py-1 border border-stone-500 focus:outline-none text-stone-400 w-full`}
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </div>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="px-3 py-2 space-x-2 border border-stone-500 text-stone-800 bg-white hover:bg-stone-800 hover:text-white flex items-center"
            >
              {menuOpen ? (
                <IoMdCloseCircle size={20} />
              ) : (
                <GiHamburgerMenu size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } fixed inset-0 z-50 bg-white bg-opacity-90 p-6 flex flex-col items-center justify-center`}
        >
          {/* Close button */}
          <div
            className="absolute top-4 right-4 text-stone-400 hover:text-stone-800 text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            <FaTimes />
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {["All", "Makeup", "Random", "Tenda", "Wedding"].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setMenuOpen(false); // Close the menu after selecting a category
                }}
                className={`md:px-4 md:py-2 px-4 py-2 w-full text-center text-stone-800 text-lg md:text-sm hover:text-stone-400 font-medium uppercase ${
                  selectedCategory === category
                    ? "text-stone-400"
                    : "text-stone-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full mt-4">
            <input
              type="text"
              placeholder="Search Images ..."
              className="px-4 py-2 w-full text-stone-800 border-2 border-stone-400 focus:outline-none mt-10"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
          </div>
        </div>

        {/* No Images Found Message */}
        {noImagesFound ? (
          <div className="text-center text-stone-500 mt-6">
            No images found matching `{searchQuery}`.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-2 gap-1 md:px-3 px-2 mt-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative w-full h-96 group overflow-hidden cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image
                  alt={image.title}
                  src={image.src}
                  quality={80}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div
                  className={`absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-4 transition-opacity duration-300`}
                >
                  <h2 className={`text-sm font-bold ${bodoni.className}`}>
                    {image.title}
                  </h2>
                  <p className={`text-xs ${montserrat.className}`}>
                    {image.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {modalOpen && currentImageIndex !== null && (
          <div
            id="modal-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-800 bg-opacity-70"
            onClick={handleClickOutside}
          >
            <div className="relative max-w-full max-h-full overflow-hidden">
              {/* Close Button - top-right */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                <FaTimes />
              </button>

              {/* Download Button - top-left */}
              <button
                onClick={() => {
                  const image = filteredImages[currentImageIndex];
                  const link = document.createElement("a");
                  link.href = image.src;
                  link.download = image.title;
                  link.click();
                }}
                className="absolute top-4 left-4 text-white text-2xl"
              >
                <FaDownload />
              </button>

              {/* Previous Image Button - vertically centered left */}
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 text-white text-3xl transform -translate-y-1/2"
              >
                <FaArrowLeft />
              </button>

              {/* Next Image Button - vertically centered right */}
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 text-white text-3xl transform -translate-y-1/2"
              >
                <FaArrowRight />
              </button>

              {/* Image Display */}
              <Image
                alt={filteredImages[currentImageIndex].title}
                src={filteredImages[currentImageIndex].src}
                width={800}
                height={600}
                objectFit="cover"
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
