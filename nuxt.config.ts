// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Meftihe IT Solutions",
      meta: [{ charset: "utf-8" }],
    },
  },
  devtools: { enabled: true },
  ssr: true,
  modules: [
    "nuxt-swiper",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-gtag",
  ],
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
    dataValue: "theme",
  },
  gtag: {
    id: "G-2S7X4XTSG6",
  },
});

