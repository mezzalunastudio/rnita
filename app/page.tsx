import React from "react";
import Header from "@/app/components/Header";
// import Banner from "@/app/components/Banner";
// import Slider from "@/app/components/Slider";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white">
        {/* <Banner /> */}
        {/* <Slider /> */}
      </main>
      <Footer />
    </div>
  );
}
