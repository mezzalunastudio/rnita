import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "rnita Wedding Decoration & Makeup",
  description:
    "Rnita menyediakan dekorasi pernikahan yang memukau dan layanan makeup profesional untuk membuat hari spesial Anda tak terlupakan. Temukan paket terbaik untuk acara pertunangan, pernikahan, dan berbagai event lainnya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased scroll-smooth`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
