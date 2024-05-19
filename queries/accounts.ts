import type {
  AddRequest,
  UpdateRequest,
} from "~/client/apis/AccountEndpointsApi";
import { queryKeys } from "./keys";

const { AccountEndpointsApi } = services;

export const useAddAccount = () => {
  const queryClient = useQueryClient();

  return useMutation<number, Error, AddRequest["upsertAccountRequestApi"]>({
    mutationFn: (newItem) =>
      AccountEndpointsApi.add({ upsertAccountRequestApi: newItem }),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.accounts.all.queryKey,
      });
    },
  });
};

export const useRemoveAccount = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn: (id) => AccountEndpointsApi._delete({ id }),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.accounts.all.queryKey,
      });
    },
  });
};

// ONLY OPTIMISTIC UPDATE IS IMPLEMENTED
export const useUpdateAccount = () => {
  return useMutation({
    mutationFn: (req: {
      id: number;
      data: UpdateRequest["upsertAccountRequestApi"];
    }) =>
      AccountEndpointsApi.update({
        id: req.id,
        upsertAccountRequestApi: req.data,
      }),
    scope: {
      id: "address",
    },
  });
};
