import {
  createQueryKeyStore,
  type inferQueryKeyStore,
} from "@lukemorales/query-key-factory";
import { services } from "./composables/useServices";

const { ProxyEndpointsApi, AccountEndpointsApi } = services;

export const queries = createQueryKeyStore({
  proxies: {
    all: {
      queryKey: null,
      queryFn: () => ProxyEndpointsApi.getAll(),
    },
  },
  accounts: {
    all: {
      queryKey: null,
      queryFn: () => AccountEndpointsApi.getAll(),
    },
  },
});

export type QueryKeys = inferQueryKeyStore<typeof queries>;
