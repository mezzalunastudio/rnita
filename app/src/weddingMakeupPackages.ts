export interface IWeddingMakeupPackage {
  title: string;
  includes: string[];
  price?: string;
  image: string;
  button?: string;
}

export const buttons: IWeddingMakeupPackage[] = [
  {
    title: "Paket Basic",
    includes: [
      "Makeup dan busana akad dan resepsi (2baju) CPP & CPW",
      "Makeup dan busana 2 ibu dan 2 bapak",
      "Melati simple sepasang pengantin",
      "Makeup dan busana penerima tamu 4 orang",
      "Free : Upacara adat/panggih",
      "Free : Softlens",
      "Free : Fakenail",
    ],
    price: "Rp 5.000.000",
    image: "/assets/wedding&makeup-5.jpg",
    button: "Pesan Sekarang",
  },
  {
    title: "Paket Medium",
    includes: [
      "Makeup dan busana akad dan resepsi (2baju) CPP & CPW",
      "Makeup dan busana 2 ibu dan 2 bapak",
      "Melati bebas pilih adat jawa/sunda",
      "Makeup dan busana penerima tamu 4 orang",
      "Free Upacara adat/panggih",
      "Free : Softlens",
      "Free : Handboquet",
    ],
    price: "Rp 6.000.000",
    image: "/assets/wedding&makeup-2.jpg",
    button: "Pesan Sekarang",
  },
  {
    title: "Paket Premium",
    includes: [
      "Makeup dan busana akad dan resepsi (2baju) CPP & CPW",
      "Makeup dan busana 2 ibu dan 2 bapak",
      "Melati bebas pilih adat jawa/sunda",
      "Makeup dan busana penerima tamu 4 orang",
      "Baju 3 pasang pengantin 1 akad dan 2 resepsi",
      "Free Upacara adat/panggih",
      "Free : Softlens",
      "Free : Handboquet",
    ],
    price: "Rp 7.000.000",
    image: "/assets/wedding&makeup-4.jpg",
    button: "Pesan Sekarang",
  },
];
