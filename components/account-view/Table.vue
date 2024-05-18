<template>
  <DataTable :value="accounts">
    <Column field="name" header="Name"></Column>
    <Column field="proxyId" header="Proxy">
      <template #body="{ data }">
        <ProxyDropdown :model-value="data.proxy?.id" disabled></ProxyDropdown>
      </template>
    </Column>
    <Column field="addresses" header="Addresses">
      <template #body="slotProps">
        {{ slotProps.data.addresses }}
      </template>
    </Column>
  </DataTable>
</template>

<script lang="ts" setup>
defineProps(["accounts"]);

onMounted(() => {});
</script>
