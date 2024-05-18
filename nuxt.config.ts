// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "nuxt-proxy", "@hebilicious/vue-query-nuxt"],
  primevue: {
    components: {
      exclude: ["Editor", "Chart"],
    },
  },
  css: [
    "primeflex/primeflex.css",
    "primevue/resources/themes/aura-dark-purple/theme.css",
    "@/assets/main.css",
    "primeicons/primeicons.css",
  ],
  proxy: {
    options: {
      target: "http://localhost:8080",
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
