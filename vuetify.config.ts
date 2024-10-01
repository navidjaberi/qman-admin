import { VBtn } from "vuetify/components";
import { defineComponent } from "vue";
// vuetify.config.ts
import type { ThemeDefinition } from "vuetify";
import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";
import { fa } from "vuetify/locale";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    "primary-main": "#4060E3",
    "primary-light": "#B8D9F2",
    "primary-dark": "#001526",

    "secondary-main": "#D56400",
    "secondary-light": "#F7DFCB",
    "secondary-dark": "#552800",

    "error-main": "#FF4869",
    "error-light": "#FFA3B4",
    "error-dark": "#802434",

    "success-main": "#53CA97",
    "success-light": "#CBEFE0",
    "success-dark": "#193D2D",

    "warning-main": "#EDB95E",
    "warning-light": "#FAEACF",
    "warning-dark": "#5E461F",
  },
  variables: {},
};
export default defineVuetifyConfiguration({
  /* vuetify options */
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },

  locale: {
    locale: "fa",
    fallback: "fa",
    messages: { fa },
    rtl: { fa: true },
  },
  aliases: {},
  defaults: {},
});
