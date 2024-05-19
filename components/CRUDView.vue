<template>
  <div class="flex flex-column h-full">
    <Toolbar class="mb-2">
      <template #start>
        <span class="text-xl text-900 font-bold">{{ title }}</span>
      </template>
      <template #end>
        <Button
          label="New"
          icon="pi pi-plus"
          severity="success"
          class="mr-2"
          @click="isFormOpened = true"
        />
      </template>
    </Toolbar>

    <div class="flex-auto min-h-0">
      <slot name="table" :list="list" @edit="onEdit" @delete="onDelete"></slot>
    </div>

    <Dialog
      v-model:visible="isFormOpened"
      :style="{ width: '450px' }"
      header="Details"
      :modal="true"
      class="p-fluid"
      @hide="() => (itemOnEdit = undefined)"
    >
      <slot name="form" :item="itemOnEdit" @success="onFormSuccess"></slot>
    </Dialog>
  </div>
</template>

<script
  setup
  lang="ts"
  generic="TItem extends BaseItem, TAddRequest, TUpdateRequest, TService extends CRUDService<TItem, TAddRequest, TUpdateRequest>"
>
import type { CRUDService, BaseItem } from "../types";
import { queryKeys, type QueryKeys } from "../queries";

const { service, queryName } = defineProps<{
  title: string;
  service: TService;
  queryName: keyof QueryKeys;
}>();

const toast = useToast();
const isFormOpened = ref(false);
const itemOnEdit = ref<TItem>();

// Fetch all list
const { data: list } = useQuery(queryKeys[queryName].all);

const closeForm = () => (isFormOpened.value = false);

const onFormSuccess = (item: TItem) => {
  if (item.id) {
    // Update if id exists
    service
      .update({
        id: item.id,
        data: item,
      })
      .then(() => {
        closeForm();

        toast.add({
          severity: "success",
          summary: "Updated",
          life: 2000,
        });
      });
  } else {
    // Otherwise add new one
    service.add(item).then((id: number) => {
      closeForm();

      toast.add({
        severity: "success",
        summary: "Created",
        life: 2000,
      });
    });
  }
};

const onEdit = (data: TItem) => {
  itemOnEdit.value = { ...data };
  isFormOpened.value = true;
};

const onDelete = (id: number) => {
  service.remove(id).then(() => {
    toast.add({
      severity: "success",
      summary: "Deleted",
      life: 2000,
    });
  });
};
</script>
