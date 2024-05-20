<template>
  <MultiSelect
    v-model="value"
    :options="options"
    optionLabel="networkType"
    display="chip"
    placeholder="Select networks"
    class="w-full"
  >
  </MultiSelect>
</template>

<script setup lang="ts">
import { NetworkType, type NetworkResponseApi } from "../../client";
import { useAddNetwork, useRemoveNetwork } from "../../queries";
import { difference } from "lodash";
const props = defineProps<{
  networks: Required<NetworkResponseApi>[];
  addressId: number;
}>();

const value = computed({
  get() {
    return props.networks.map((n) => ({
      networkType: n.networkType,
    }));
  },

  set(newValue) {
    const added = difference(newValue, props.networks);
    const deleted = difference(props.networks, newValue);

    if (deleted.length > 0) {
      deleted.forEach(({ id }) => remove(id));
    }

    if (added.length > 0) {
      added.forEach(({ networkType }) => {
        add({ addressId: props.addressId, networkType });
      });
    }
  },
});

const options = shallowRef(
  Object.values(NetworkType).map((value) => ({
    networkType: value,
  }))
);

const { mutate: add } = useAddNetwork();
const { mutate: remove } = useRemoveNetwork();
</script>
