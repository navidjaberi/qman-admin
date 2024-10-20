// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  app: {
    // head
    head: {
      script: [],
      title: "qman pannel",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Finance 24 is a platform for finance enthusiasts to connect and share their finance journey.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "qman pannel",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Finance 24 is a platform for finance enthusiasts to connect and share their finance journey.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "",
        },
        /* image width */
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "400",
        },
        /* image height */
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: "300",
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: "",
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: "Mizoni",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "image/png",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://app.Mizonibroker.com/",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "qman pannel",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Finance 24 is a platform for finance enthusiasts to connect and share their finance journey.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },

        {
          rel: "icon",
          type: "image/PNG",
          href: "/favicon.ico",
          sizes: "32x32",
        },
        {
          rel: "icon",
          type: "image/PNG",
          href: "/favicon.ico",
          sizes: "16x16",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        {
          rel: "mask-icon",
          href: "/mask-icon.svg",
          color: "#FFFFFF",
        },
      ],
    },
  },
  routeRules: {
    "/": { redirect: "/register" },
  },
  modules: [
    // uno css
    "vuetify-nuxt-module", // nuxt-icon
    "@unocss/nuxt",
    [
      "@vee-validate/nuxt",
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: "VForm",
          Field: "VField",
          FieldArray: "VFieldArray",
          ErrorMessage: "VErrorMessage",
        },
      },
    ],
    "@nuxt/icon",
    "@pinia/nuxt",
  ],
  devServer: {
    port: 3008,
    // host:'0.0.0.0'
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || "https://qmanpannel.com", //TODO:Replace this url
    },
  },
  css: ["@/assets/scss/index.scss"],
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: "./vuetify.options.ts",
  },
  /* For Nuxt 3.9.0+ */
  features: {
    inlineStyles: false,
  },
  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    esbuild: {
      drop: ["debugger"],
      pure: ["console.log"],
    },

    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  icon: {
    mode: "svg",
  },
});
