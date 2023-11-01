// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      "viewport": "width=device-width, initial-scale=1, minimum-scale=1, user-scalable=0",
      "title": "菟絲子塔羅占卜",
      "meta": [
        { charset: 'utf-8' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'description', content: '' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: "菟絲子塔羅占卜" },
        { property: 'og:title', content: "菟絲子塔羅占卜" },
        { property: 'og:description', content: '' },
        { property: 'og:image', content: '' },
        { property: 'og:url', content: '' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400;700&display=swap'}
      ],
    }
  },
  css: [
    '@/assets/styles/main.sass',
  ],
  devtools: { enabled: true }
})
