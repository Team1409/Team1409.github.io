<template>
  <DataTable stripedRows scrollable scrollHeight="flex" size="small">
    <slot></slot>
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

    <ConfirmPopup></ConfirmPopup>
  </DataTable>
</template>

<script setup lang="ts" generic="TItem extends Required<BaseItem>">
import type { BaseItem } from "../types";

const emit = defineEmits<{
  delete: [id: number];
  edit: [data: TItem];
}>();

const confirm = useConfirm();

const onClickEdit = (data: TItem) => {
  emit("edit", data);
};

const confirmDelete = (event: MouseEvent, data: TItem) => {
  if (!event.currentTarget) return;

  confirm.require({
    target: event.currentTarget as HTMLElement,
    message: `Are you sure you want to delete?`,
    icon: "pi pi-exclamation-triangle",
    rejectLabel: "No",
    acceptLabel: "Yes",
    accept: () => emit("delete", data.id),
  });
};
</script>
