<template>
  <MultiSelect
    v-model="value"
    :options="options"
    optionLabel="networkType"
    display="chip"
    placeholder="Select networks"
    class="w-full"
    disabled
  />
</template>

<script setup lang="ts">
import { NetworkType, type NetworkResponseApi } from "../../client";
import { useAddNetwork, useRemoveNetwork } from "../../queries";

const { networks, addressId } = defineProps<{
  networks: NetworkResponseApi[];
  addressId: number;
}>();

const value = computed({
  get() {
    return networks.map((n) => ({
      networkType: n.networkType,
    }));
  },

  set(newValue) {
    console.log(newValue);
  },
});

const options = shallowRef(
  Object.values(NetworkType).map((value) => ({
    networkType: value,
  }))
);

const { mutate: add } = useAddNetwork();
const { mutate: remove } = useRemoveNetwork();

const onUpdate = (value: { networkType: NetworkType }[]) => {
  console.log(value);
  value.forEach(({ networkType }) => {
    const has =
      networks.findIndex((net) => net.networkType === networkType) > -1;

    if (!has) {
      add({ addressId, networkType });
    }
  });

  networks.forEach(({ networkType, id }) => {
    const has = value.findIndex((net) => net.networkType === networkType) > -1;

    if (!has && id) {
      remove(id);
    }
  });
};
</script>
