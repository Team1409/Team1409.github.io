import type {
  AddRequest,
  UpdateRequest,
} from "~/client/apis/NetworkEndpointsApi";
import { queryKeys } from "./keys";

const { NetworkEndpointsApi } = services;

export const useAddNetwork = () => {
  const queryClient = useQueryClient();

  return useMutation<number, Error, AddRequest["upsertNetworkRequestApi"]>({
    mutationFn: (newItem) =>
      NetworkEndpointsApi.add({ upsertNetworkRequestApi: newItem }),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.accounts.all.queryKey,
      });
    },
  });
};

export const useRemoveNetwork = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn: (id) => NetworkEndpointsApi._delete({ id }),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.accounts.all.queryKey,
      });
    },
  });
};

// ONLY OPTIMISTIC UPDATE IS IMPLEMENTED
export const useUpdateNetwork = () => {
  return useMutation({
    mutationFn: (req: {
      id: number;
      data: UpdateRequest["upsertNetworkRequestApi"];
    }) =>
      NetworkEndpointsApi.update({
        id: req.id,
        upsertNetworkRequestApi: req.data,
      }),
    scope: {
      id: "network",
    },
  });
};
