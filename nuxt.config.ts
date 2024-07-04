// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/lib/bootstrap/css/bootstrap.min.css',
    '~/assets/css/style.css',
  ],
  app: {
    head: {
      title: 'My Awesome App',
      meta: [{ charset: 'utf-8' }],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
        },
      ],
    },
  },
  devtools: { enabled: true },
  ssr: true,
});
