/** @type {import('tailwindcss').Config} */
import transformerDirectives from "@unocss/transformer-directives";
import { colors } from "./colors.js";


module.exports = {
  transformers: [transformerDirectives()],
  content: [],
  theme: {
    //rewrite the gray variant
    breakpoints: {
      xsss: "320px",
      xss: "375px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

     colors: colors
  },
  plugins: [],
};
