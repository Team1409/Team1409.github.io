import {
  ProxyEndpointsApi,
  Configuration,
  AccountEndpointsApi,
  AddressEndpointsApi,
  NetworkEndpointsApi,
} from "@/client";

// @ts-expect-error
const config = new Configuration({ basePath: window.API_URL ?? "/api" });

export const services = {
  AccountEndpointsApi: new AccountEndpointsApi(config),
  ProxyEndpointsApi: new ProxyEndpointsApi(config),
  AddressEndpointsApi: new AddressEndpointsApi(config),
  NetworkEndpointsApi: new NetworkEndpointsApi(config),
};

export const useServices = () => services;
