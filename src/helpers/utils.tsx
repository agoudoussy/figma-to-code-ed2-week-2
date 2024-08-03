import { TCollectionsCard } from "UI/CollectionCard";
import { TMenuItem } from "UI/MenuItem";
import MonkeyD from "assets/monkeyD.jpg";
import Snoop from "assets/snoop.jpg";
import astroHead from "assets/astroHead.jpg";
import astro from "assets/astro.jpg";
import { TProcessCard } from "UI/ProcessCard";
import wallet from "assets/wallet.svg?react";
import cloud from "assets/cloud.svg?react";
import bitcoin from "assets/bitcoin.svg?react";
import sale from "assets/sale.svg?react";

export const MENU_ITEM: TMenuItem[] = [
  {
    libelle: "Home",
    path: "#",
  },
  {
    libelle: "Top sales",
    path: "#",
  },
  {
    libelle: "Collections",
    path: "#",
  },
  {
    libelle: "Our blog",
    path: "#",
  },
  {
    libelle: "About us",
    path: "#",
  },
];

export const COLLECTIONS_CARD: TCollectionsCard[] = [
  {
    img: MonkeyD,
    libelle: "CyberPunk",
  },
  {
    img: astro,
    libelle: "Durolost  Boll - Upper",
  },
  {
    img: astroHead,
    libelle: "Space X Wiper",
  },
  {
    img: Snoop,
    libelle: "Snoop Dogg",
  },
];

export const PROCESS_CARD: TProcessCard[] = [
  {
    icone: wallet,
    title: "Set up your wallet",
    libelle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    icone: cloud,
    title: "Add your NFT's",
    libelle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    icone: sale,
    title: "Promote your NFT's",
    libelle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    icone: bitcoin,
    title: "Sell your NFT's",
    libelle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
];

export const COLLECTIONS_CATEGORY = [
  {
    libelle: "All categories",
    path: "/categories",
  },
  {
    libelle: "Art",
    path: "/art",
  },
  {
    libelle: "Celebrities",
    path: "/celebrities",
  },
  {
    libelle: "Gaming",
    path: "/gaming",
  },
  {
    libelle: "Sport",
    path: "/sport",
  },
];
