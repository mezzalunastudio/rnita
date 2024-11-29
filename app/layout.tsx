import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <link rel="icon" href="/rnita-logo.jpg" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
