export interface MakeupOption {
  name: string;
  price: string;
}

export interface IButtonInfo {
  title: string;
  description: string;
  price?: string;
  image: string;
  options: MakeupOption[];
  button?: string;
}

export const buttons: IButtonInfo[] = [
  {
    title: "Paket Make Up Wisuda",
    description:
      "Paket make up spesial untuk wisuda, memberikan hasil yang memukau dengan berbagai opsi sesuai kebutuhan.",
    price: "Rp 5.000.000",
    image: "/assets/wisuda-1.jpg",
    options: [
      { name: "Makeup Only", price: "200k" },
      { name: "Makeup Hijab", price: "250k" },
      { name: "Makeup Hairdo", price: "280k" },
    ],
    button: "Pesan Sekarang",
  },
  {
    title: "Paket Engagement",
    description:
      "Paket make up untuk momen spesial pertunangan, memastikan penampilan elegan dan menawan.",
    price: "Rp 6.000.000",
    image: "/assets/engagement-1.jpg",
    options: [
      { name: "Makeup Only", price: "200k" },
      { name: "Makeup Hijab", price: "250k" },
      { name: "Makeup Hairdo", price: "280k" },
    ],
    button: "Pesan Sekarang",
  },
];
