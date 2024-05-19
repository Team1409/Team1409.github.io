<template>
  <UIEditableTable
    :value="proxies"
    @delete="$emit('delete', $event)"
    @edit="$emit('edit', $event)"
  >
    <Column
      v-for="col of columns"
      :key="col.columnKey"
      :field="col.field"
      :header="col.header"
      style="width: 25%"
    >
      <template #body="{ data, field }">
        {{ data[field] }}
      </template>

      <template #editor="{ data, field }">
        <InputText v-model="data[field]" autofocus />
      </template>
    </Column>
  </UIEditableTable>
</template>

<script lang="ts" setup>
import type { ColumnProps } from "primevue/column";
import { proxyFields } from "./fields";
import type { ProxyResponseApi } from "../../client";

defineProps(["proxies"]);

defineEmits<{
  delete: [id: number];
  edit: [data: ProxyResponseApi];
}>();

const columns = ref<ColumnProps[]>(
  proxyFields.map((field) => ({
    columnKey: field.name,
    field: field.name,
    header: field.label,
  }))
);
</script>
