<template>
  <DataTable :value="accounts">
    <Column field="name" header="Name"></Column>
    <Column header="Image">
      <template #body="slotProps">
        <img
          :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
          :alt="slotProps.data.image"
          class="w-6rem border-round"
        />
      </template>
    </Column>
    <Column field="category" header="Category"></Column>
    <Column field="rating" header="Reviews">
      <template #body="slotProps">
        <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
      </template>
    </Column>
    <Column header="Status"> </Column>
  </DataTable>
</template>

<script lang="ts" setup>
defineProps(["accounts"]);

onMounted(() => {});
</script>
