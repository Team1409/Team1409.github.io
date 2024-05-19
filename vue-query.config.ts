import { QueryClient } from "@tanstack/vue-query";

export default defineVueQueryPluginHook(({ nuxt }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 5000 },
      mutations: {
        onError(error) {
          nuxt.vueApp.config.globalProperties.$toast.add({
            severity: "error",
            summary: "Fatal error",
            detail: error.message,
            life: 2000,
          });
        },
      },
    },
  });

  return {
    vueQueryPluginOptions: { queryClient },
  };
});
