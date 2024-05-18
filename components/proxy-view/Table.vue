<template>
  <DataTable
    :value="proxies"
    stripedRows
    scrollable
    scrollHeight="flex"
    size="small"
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
    <Column
      :exportable="false"
      rowEditor
      frozen
      style="min-width: 8rem; text-align: right"
    >
      <template #body="{ data }">
        <Button
          icon="pi pi-pencil"
          outlined
          rounded
          class="mr-2"
          @click="onClickEdit(data)"
        />
        <Button
          icon="pi pi-trash"
          outlined
          rounded
          severity="danger"
          @click="confirmDelete($event, data)"
        />
      </template>
    </Column>
  </DataTable>

  <ConfirmPopup></ConfirmPopup>
</template>

<script lang="ts" setup>
import type { ColumnProps } from "primevue/column";
import { proxyFields } from "./fields";
import type { ProxyResponseApi } from "../../client";

defineProps(["proxies"]);

const emit = defineEmits<{
  delete: [id: number];
  edit: [data: ProxyResponseApi];
}>();

const confirm = useConfirm();

const columns = ref<ColumnProps[]>(
  proxyFields.map((field) => ({
    columnKey: field.name,
    field: field.name,
    header: field.label,
  }))
);

const onClickEdit = (data: ProxyResponseApi) => {
  emit("edit", data);
};

const confirmDelete = (event: MouseEvent, data: Required<ProxyResponseApi>) => {
  if (!event.currentTarget) return;

  confirm.require({
    target: event.currentTarget,
    message: `Are you sure you want to delete "${data.name}"?`,
    icon: "pi pi-exclamation-triangle",
    rejectLabel: "No",
    acceptLabel: "Yes",
    accept: () => emit("delete", data.id),
  });
};
</script>
