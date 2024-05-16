// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "nuxt-proxy"],
  primevue: {
    components: {
      exclude: ["Editor", "Chart"],
    },
  },
  css: [
    "primeflex/primeflex.css",
    "primevue/resources/themes/md-dark-deeppurple/theme.css",
    "@/assets/main.css",
    "primeicons/primeicons.css",
  ],
  proxy: {
    options: {
      target: "https://9fd3-185-244-159-253.ngrok-free.app",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/",
      },
      pathFilter: ["/api"],
    },
  },
  ssr: false,
  app: {
    head: {
      script: [{ src: "/env.js" }],
    },
  },
  build: {
    transpile: ["primevue"],
  },
});
