import { fadeAndTranslateUpVariants, fadeInVariant } from "./variants";

export const fadeUpAnimation = {
  variants: fadeAndTranslateUpVariants,
  initial: "initial",
  animate: "translateUp",
};

export const fadeInAnimation = {
  variants: fadeInVariant,
  initial: "initial",
  animate: "fadeIn",
};
