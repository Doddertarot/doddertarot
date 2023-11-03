// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/doddertarot/' : '/',
    buildAssetsDir: '/static/',
    head: {
      "viewport": "width=device-width, initial-scale=1, minimum-scale=1, user-scalable=0",
      "title": "菟絲子塔羅占卜",
      "meta": [
        { charset: 'utf-8' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'description', content: '從業20年，融入式中西方命理文學，自創獨樹一格的解牌風格與課程，配合當事人狀況給予最實際有助益的建議，給出明確的方向以供選擇，占卜解牌過程中輕鬆愉快，抱著我們是好朋友的心情即可。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: "菟絲子塔羅占卜" },
        { property: 'og:title', content: "菟絲子塔羅占卜" },
        { property: 'og:description', content: '從業20年，融入式中西方命理文學，自創獨樹一格的解牌風格與課程，配合當事人狀況給予最實際有助益的建議，給出明確的方向以供選擇，占卜解牌過程中輕鬆愉快，抱著我們是好朋友的心情即可。' },
        { property: 'og:image', content: '/img/logo.jpg' },
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
  devtools: { enabled: true },
  // experimental: {
  //   payloadExtraction: true
  // }
})