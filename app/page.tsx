import React from "react";
import Header from "@/app/components/Header";
// import Links from "@/app/components/Links";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white">{/* <Links /> */}</main>
      <Footer />
    </div>
  );
}
