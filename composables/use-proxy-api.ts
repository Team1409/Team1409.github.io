export const useGetAllProxy = () => {
  const {
    $services: { ProxyService },
  } = useNuxtApp();

  return useAsyncData("proxies", () => ProxyService.getAll());
};
