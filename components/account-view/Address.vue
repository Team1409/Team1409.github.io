<template>
  <InputGroup>
    <InputText
      :class="['w-full']"
      :key="address.id"
      placeholder="Enter an address"
      :modelValue="address.address"
      @update:modelValue="onChange"
    />
    <AccountViewNetworks
      :networks="address.networks"
      :address-id="address.id"
    />
    <Button
      severity="danger"
      icon="pi pi-minus"
      size="small"
      aria-label="Delete"
      @click="() => onRemoveAddress(address.id)"
    />
  </InputGroup>
</template>

<script setup lang="ts">
import type { AddressResponseApi } from "../../client";
import { useRemoveAddress, useUpdateAddress } from "../../queries";
import { debounce } from "perfect-debounce";

const { address } = defineProps<{ address: Required<AddressResponseApi> }>();

const { mutate: remove } = useRemoveAddress();
const { mutate: update } = useUpdateAddress();

const onRemoveAddress = (addressId: number) => {
  remove(addressId);
};

const onChange = debounce((str?: string) => {
  update({ id: address.id, data: { ...address, address: str } });
}, 500);

const onUpdateAddress = () => {};
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
