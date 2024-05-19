<template>
  <CRUDView title="Account" :service="service" query-name="accounts">
    <template #table="{ list, onDelete, onEdit }">
      <AccountViewTable :accounts="list" @edit="onEdit" @delete="onDelete" />
    </template>

    <template #form="{ item, onSuccess }">
      <UIForm
        @finish="onSuccess"
        :fields="fields"
        :initial-data="item"
      ></UIForm>
    </template>
  </CRUDView>
</template>

<script lang="ts" setup>
import type { AccountResponseApi } from "../../client";
import {
  useAddAccount,
  useRemoveAccount,
  useUpdateAccount,
  useGetAllAccounts,
} from "../../queries";
import type { CRUDService } from "../../types";
import { accountFields } from "./fields";

const fields = shallowRef(accountFields);

const { mutateAsync: add } = useAddAccount();
const { mutateAsync: remove } = useRemoveAccount();
const { mutateAsync: update } = useUpdateAccount();

const service = shallowRef<CRUDService<AccountResponseApi>>({
  getAll: useGetAllAccounts,
  add,
  remove,
  update,
});
</script>
