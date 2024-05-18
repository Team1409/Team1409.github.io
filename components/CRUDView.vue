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
import { queries, type QueryKeys } from "../queries";

const { service, queryName } = defineProps<{
  title: string;
  service: TService;
  queryName: keyof QueryKeys;
}>();

const toast = useToast();
const isFormOpened = ref(false);
const itemOnEdit = ref<TItem>();

// Fetch all list
const { data: list } = useQuery(queries[queryName].all);

const closeForm = () => (isFormOpened.value = false);

const onFormSuccess = (item: TItem) => {
  if (item.id) {
    // Update if id exists
    service
      .update({
        id: item.id,
        upsertAccountRequestApi: item,
      })
      .then(() => {
        closeForm();
        const index = list.value.findIndex((v) => v.id === item.id);
        list.value.splice(index, 1, item);

        toast.add({
          severity: "success",
          summary: "Updated",
          life: 2000,
        });
      });
  } else {
    // Otherwise add new one
    service.add({ upsertAccountRequestApi: item }).then((id: number) => {
      closeForm();
      list.value.unshift({ ...item, id });

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
  service._delete({ id }).then(() => {
    const index = list.value.findIndex((v) => v.id === id);
    list.value.splice(index, 1);

    toast.add({
      severity: "success",
      summary: "Deleted",
      life: 2000,
    });
  });
};
</script>
