<template>
  <CRUDView title="Proxies" :service="service" query-name="proxies">
    <template #table="{ list, onDelete, onEdit }">
      <ProxyViewTable :proxies="list" @delete="onDelete" @edit="onEdit" />
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
import type { ProxyResponseApi } from "../../client";
import {
  useAddProxy,
  useRemoveProxy,
  useUpdateProxy,
  useGetAllProxy,
} from "../../queries";
import type { CRUDService } from "../../types";
import { proxyFields } from "./fields";
// const { params } = useRoute();
// console.log(params);

const fields = shallowRef(proxyFields);

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
