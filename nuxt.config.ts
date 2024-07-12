// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/lib/bootstrap-icons.css',
    '~/assets/css/lib/bootstrap.min.css',
    '~/assets/css/lib/all.min.css',
    '~/assets/css/style.css',
  ],
  app: {
    head: {
      title: 'Gracesoft IT Solutions',
      meta: [{ charset: 'utf-8' }],
    },
  },
  devtools: { enabled: true },
  ssr: true,
  modules: ['nuxt-swiper', '@nuxt/icon', "@nuxtjs/tailwindcss"],
});