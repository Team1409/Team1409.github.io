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
import { useAddProxy, useRemoveProxy, useUpdateProxy } from "../../queries";
import { proxyFields } from "./fields";
// const { params } = useRoute();
// console.log(params);

const fields = shallowRef(proxyFields);

const { mutateAsync: add } = useAddProxy();
const { mutateAsync: remove } = useRemoveProxy();
const { mutateAsync: update } = useUpdateProxy();

const service = shallowRef({
  add,
  remove,
  update,
});
</script>
