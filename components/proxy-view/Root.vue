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
import { proxyFields } from "./fields";

const { ProxyEndpointsApi } = useServices();

const service = shallowRef(ProxyEndpointsApi);
const fields = shallowRef(proxyFields);
</script>
