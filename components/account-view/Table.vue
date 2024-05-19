<template>
  <UIEditableTable
    :value="accounts"
    @delete="$emit('delete', $event)"
    @edit="$emit('edit', $event)"
  >
    <Column field="name" header="Name"></Column>
    <Column field="proxyId" header="Proxy">
      <template #body="{ data }">
        <RouterLink :to="`/proxies/${data.proxy.id}`" v-if="data.proxy">{{
          data.proxy.name
        }}</RouterLink>
        <span v-else>No proxy</span>
      </template>
    </Column>
    <Column field="addresses" header="Address">
      <template #body="slotProps">
        <AccountViewAddressForm
          :addresses="slotProps.data.addresses"
          :accountId="slotProps.data.id"
        />
      </template>
    </Column>
  </UIEditableTable>
</template>

<script lang="ts" setup>
import type { AccountResponseApi } from "../../client";

const { accounts } = defineProps(["accounts"]);

defineEmits<{
  delete: [id: number];
  edit: [data: AccountResponseApi];
}>();
</script>

<style module>
.form-field {
  & + & {
    margin-top: 1.7rem;
  }

  :global(.form-field) {
    width: 100%;
  }
}
</style>
