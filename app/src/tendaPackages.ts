export interface ITendaPackage {
  name: string;
  price: string;
  description: string;
}

export const tendaPackages: ITendaPackage[] = [
  {
    name: "Tenda Plafon",
    price: "150k",
    description:
      "Tenda plafon dengan desain elegan untuk acara formal atau pernikahan.",
  },
  {
    name: "Tenda Serut Biasa",
    price: "200k",
    description: "Tenda serut sederhana yang cocok untuk berbagai jenis acara.",
  },
  {
    name: "Tenda Serut Lengkung",
    price: "300k",
    description:
      "Tenda serut dengan desain lengkung yang memberikan tampilan mewah.",
  },
  {
    name: "Dinding",
    price: "10k/meter",
    description:
      "Dinding tambahan untuk menutupi sisi tenda, memberikan privasi lebih.",
  },
  {
    name: "Panggung",
    price: "25k/meter",
    description:
      "Panggung kokoh untuk berbagai kebutuhan acara, seperti pidato atau pertunjukan.",
  },
  {
    name: "Tenda Daun",
    price: "500k",
    description:
      "Tenda unik dengan dekorasi daun untuk acara outdoor yang alami.",
  },
  {
    name: "Lighting",
    price: "20k/unit",
    description:
      "Lampu pencahayaan untuk menciptakan suasana meriah di acara Anda.",
  },
];

export const imagePaths: Array<string> = [
  "/assets/dekor-1.jpg",
  "/assets/dekor-2.jpg",
  "/assets/wedding&makeup-3.jpg",
  "/assets/engagement-1.jpg",
  "/assets/wedding&makeup-5.jpg",
];
