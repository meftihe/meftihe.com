// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/lib/bootstrap-icons.css',
    '~/assets/css/lib/bootstrap.min.css',
    '~/assets/css/style.css',
  ],
  app: {
    head: {
      title: 'My Awesome App',
      meta: [{ charset: 'utf-8' }],
      script: [
        {
          src: '~/assets/js/lib/bootstrap.bundle.min.js',
          type: 'text/javascript',
        },
      ],
    },
  },
  devtools: { enabled: true },
  ssr: true,
  modules: ['nuxt-swiper'],
});
