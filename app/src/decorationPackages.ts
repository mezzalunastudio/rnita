export interface IDecorationPackage {
  title: string;
  price: string;
  includes: string[];
  additional?: string[];
  image?: string;
  button?: string;
}

export const decorationPackages: IDecorationPackage[] = [
  {
    title: "PAKET 1",
    price: "Rp. 1.000.000",
    includes: [
      "backdrop 3 meter",
      "bunga artificial",
      "lighting",
      "background kain",
      "2 kursi tifani (putih/coklat)",
      "karpet",
      "inisial nama",
    ],
    image: "/assets/dekor-1.jpg",
    button: "Pesan Sekarang",
  },
  {
    title: "PAKET 2",
    price: "Rp. 1.500.000",
    includes: [
      "backdrop 3 meter",
      "Mix flowers",
      "lighting",
      "background kain",
      "2 kursi tifani (putih/coklat)",
      "karpet",
    ],
    image: "/assets/dekor-2.jpg",
    button: "Pesan Sekarang",
  },
  {
    title: "PAKET 2 with Makeup",
    price: "Rp. 1.750.000",
    includes: [
      "backdrop 3 meter",
      "Mix flowers",
      "lighting",
      "background kain",
      "2 kursi tifani (putih/coklat)",
    ],
    additional: ["makeup by Rnita makeup"],
    image: "/assets/dekor-3.jpg",
    button: "Pesan Sekarang",
  },
];
