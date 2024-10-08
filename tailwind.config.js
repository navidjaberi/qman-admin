import { colors } from "./colors";
import { twColors } from "./utils/tw-colors";
// setup tailwind config
module.exports = {
  /* Warning
   * This file is not being used in the project
   * This file is only for reference
   * Unocss is being used in the project
   * This file added for access tailwind css class in components
   */
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: { ...colors, ...twColors },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
