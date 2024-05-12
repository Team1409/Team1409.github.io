import { ProxyService } from "~/api";

const services = {
  ProxyService: new ProxyService(),
};

export const useServices = () => {
  const nuxtApp = useNuxtApp();

  nuxtApp.provide("services", services);
};
