import React from "react";
import Header from "@/app/components/Header";
import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-200 py-10">
        <Banner />
      </main>
      <Footer />
    </div>
  );
}
