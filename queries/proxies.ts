import type {
  AddRequest,
  UpdateRequest,
} from "~/client/apis/ProxyEndpointsApi";
import { queryKeys } from "./keys";

const { ProxyEndpointsApi } = services;

export const useAddProxy = () => {
  const queryClient = useQueryClient();

  return useMutation<number, Error, AddRequest["upsertProxyRequestApi"]>({
    mutationFn: (newItem) =>
      ProxyEndpointsApi.add({ upsertProxyRequestApi: newItem }),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.proxies.all.queryKey,
      });
    },
  });
};

export const useRemoveProxy = () => {
  const queryClient = useQueryClient();
console.log(queryClient);

  return useMutation<void, Error, number>({
    mutationFn: (id) => ProxyEndpointsApi._delete({ id }),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.proxies.all.queryKey,
      });
    },
  });
};

// ONLY OPTIMISTIC UPDATE IS IMPLEMENTED
export const useUpdateProxy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (req: {
      id: number;
      data: UpdateRequest["upsertProxyRequestApi"];
    }) =>
      ProxyEndpointsApi.update({
        id: req.id,
        upsertProxyRequestApi: req.data,
      }),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.proxies.all.queryKey,
      });
    },
    scope: {
      id: "proxy",
    },
  });
};
