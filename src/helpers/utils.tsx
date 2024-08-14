import { TMenuItem } from "UI/MenuItem";
import { TProcessCard } from "UI/ProcessCard";
import wallet from "assets/wallet.svg?react";
import cloud from "assets/cloud.svg?react";
import bitcoin from "assets/bitcoin.svg?react";
import sale from "assets/sale.svg?react";

export const LEFT_MENU_ITEM: TMenuItem[] = [
  {
    libelle: "Men",
    path: "#",
  },
  {
    libelle: "Women",
    path: "#",
  },
  {
    libelle: "Kids",
    path: "#",
  },
  {
    libelle: "Collection",
    path: "#",
  },
];

export const RIGH_MENU_ITEM: TMenuItem[] = [
  {
    libelle: "Shop",
    path: "#",
  },
  {
    libelle: "About us",
    path: "#",
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

export const splitString = (character: string, value: string) => {
  return value.split(character);
};

export const locationContains = (key: string) => {
  return location.href.includes(key);
};

export const generateArray = (n: number) => {
  return Array(n).fill();
};
