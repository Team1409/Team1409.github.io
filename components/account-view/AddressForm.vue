<template>
  <div class="flex justify-content-end" :class="$style['form-field']">
    <Button
      v-tooltip="'Add address'"
      severity="success"
      icon="pi pi-plus"
      class="ml-2"
      size="small"
      aria-label="Add"
      @click="() => onAddAddress(accountId)"
    />
  </div>
  <div v-for="address in addresses" class="flex" :class="$style['form-field']">
    <AccountViewAddress :key="address.id" :address="address" />
  </div>
</template>

<script setup lang="ts">
import { useAddAddress } from "../../queries";

defineProps(["addresses", "accountId"]);

const { mutate: add } = useAddAddress();

const onAddAddress = (accountId: number) => {
  add({ address: "", accountId });
};
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
