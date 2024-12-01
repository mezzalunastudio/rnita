import { Bodoni_Moda } from "next/font/google";
import { Montserrat } from "next/font/google";

export const bodoni = Bodoni_Moda({
  weight: "400",
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export const fonts = {
  bodoni: bodoni.className,
  montserrat: montserrat.className,
};
