import type {
  AddRequest,
  UpdateRequest,
} from "~/client/apis/AddressEndpointsApi";
import { queryKeys } from "./keys";

const { AddressEndpointsApi } = services;

export const useAddAddress = () => {
  const queryClient = useQueryClient();

  return useMutation<number, Error, AddRequest["createAddressRequestApi"]>({
    mutationFn: (newItem) =>
      AddressEndpointsApi.add({ createAddressRequestApi: newItem }),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.accounts.all.queryKey,
      });
    },
  });
};

export const useRemoveAddress = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn: (id) => AddressEndpointsApi._delete({ id }),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.accounts.all.queryKey,
      });
    },
  });
};

// ONLY OPTIMISTIC UPDATE IS IMPLEMENTED
export const useUpdateAddress = () => {
  return useMutation({
    mutationFn: (req: {
      id: number;
      data: UpdateRequest["updateAddressRequestApi"];
    }) =>
      AddressEndpointsApi.update({
        id: req.id,
        updateAddressRequestApi: req.data,
      }),
    scope: {
      id: "address",
    },
  });
};
