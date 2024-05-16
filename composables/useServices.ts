import {
  ProxyEndpointsApi,
  Configuration,
  AccountEndpointsApi,
} from "@/client";

// @ts-expect-error
const config = new Configuration({ basePath: window.API_URL ?? "/api" });

const services = {
  AccountEndpointsApi: new AccountEndpointsApi(config),
  ProxyEndpointsApi: new ProxyEndpointsApi(config),
};

export const useServices = () => services;
