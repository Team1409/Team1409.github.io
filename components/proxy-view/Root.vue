<template>
  <CRUDView title="Proxies" :service="service" query-name="proxies">
    <template #table="{ list, onDelete, onEdit }">
      <ProxyViewTable :proxies="list" @delete="onDelete" @edit="onEdit" />
    </template>

    <template #form="{ item, onSuccess }">
      <ProxyViewForm :initial-data="item" @success="onSuccess" />
    </template>
  </CRUDView>
</template>

<script lang="ts" setup>
import type { ProxyResponseApi } from "../../client";
import {
  useAddProxy,
  useRemoveProxy,
  useUpdateProxy,
  useGetAllProxy,
} from "../../queries";
import type { CRUDService } from "../../types";
// const { params } = useRoute();
// console.log(params);

const { mutateAsync: add } = useAddProxy();
const { mutateAsync: remove } = useRemoveProxy();
const { mutateAsync: update } = useUpdateProxy();

const service = shallowRef<CRUDService<ProxyResponseApi>>({
  getAll: useGetAllProxy,
  add,
  remove,
  update,
});
</script>
