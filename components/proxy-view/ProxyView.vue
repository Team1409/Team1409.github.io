<template>
  <div class="flex flex-column h-full">
    <Toolbar>
      <template #start>
        <Button
          label="New"
          icon="pi pi-plus"
          severity="success"
          class="mr-2"
          @click="isFormOpened = true"
        />
        <!-- <Button
        label="Delete"
        icon="pi pi-trash"
        severity="danger"
        @click="confirmDeleteSelected"
        :disabled="!selectedProducts || !selectedProducts.length"
      /> -->
      </template>
    </Toolbar>

    <div class="flex-auto min-h-0">
      <ProxyTable :proxies="proxies" @delete="onDelete" @edit="onEdit" />
    </div>
  </div>

  <Dialog
    v-model:visible="isFormOpened"
    :style="{ width: '450px' }"
    header="Proxy Details"
    :modal="true"
    class="p-fluid"
    @hide="proxyOnEdit = undefined"
  >
    <ProxyForm :proxy="proxyOnEdit" @success="onFormSuccess" />
  </Dialog>

  <Toast />
</template>

<script lang="ts" setup>
import ProxyForm from "./ProxyForm.vue";
import ProxyTable from "./ProxyTable.vue";
import type { ProxyResponseApi } from "@/api/apiSchemas";

const {
  $services: { ProxyService },
} = useNuxtApp();

const toast = useToast();
const isFormOpened = ref(false);
const proxyOnEdit = ref<ProxyResponseApi>();
const proxies = ref<ProxyResponseApi[]>([]);

onBeforeMount(() => {
  ProxyService.getAll().then((data) => (proxies.value = data));
});

const closeForm = () => (isFormOpened.value = false);

const onFormSuccess = (item: ProxyResponseApi) => {
  if (item.id) {
    ProxyService.update(item.id, item).then(() => {
      closeForm();
      const index = proxies.value.findIndex((v) => v.id === item.id);
      proxies.value.splice(index, 1, item);

      toast.add({
        severity: "success",
        summary: "Updated",
        life: 2000,
      });
    });
  } else {
    ProxyService.create(item).then((id: number) => {
      closeForm();
      proxies.value.unshift({ ...item, id });

      toast.add({
        severity: "success",
        summary: "Created",
        life: 2000,
      });
    });
  }
};

const onEdit = (data: ProxyResponseApi) => {
  proxyOnEdit.value = { ...data };
  isFormOpened.value = true;
};

const onDelete = (id: number) => {
  ProxyService.delete(id).then(() => {
    const index = proxies.value.findIndex((v) => v.id === id);
    proxies.value.splice(index, 1);

    toast.add({
      severity: "success",
      summary: "Deleted",
      life: 2000,
    });
  });
};
</script>
