<template>
  <CRUDView title="Account" :service="service" query-name="accounts">
    <template #table="{ list }">
      <AccountViewTable :accounts="list" />
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
import {
  useAddAccount,
  useRemoveAccount,
  useUpdateAccount,
} from "../../queries";
import type { CRUDService } from "../../types";
import { accountFields } from "./fields";

const fields = shallowRef(accountFields);

const { mutateAsync: add } = useAddAccount();
const { mutateAsync: remove } = useRemoveAccount();
const { mutateAsync: update } = useUpdateAccount();

const service = shallowRef<CRUDService<{ id: number }>>({
  add,
  remove,
  update,
});
</script>
