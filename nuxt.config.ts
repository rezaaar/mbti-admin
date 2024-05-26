// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    },
  },
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/google-fonts', '@pinia/nuxt',],
  css: [
    '@/assets/css/main.css',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  googleFonts: {
    families: {
      'Poppins': true,
    }
  }
})