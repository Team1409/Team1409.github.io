<template>
  <div class="flex flex-column h-full">
    <Toolbar>
      <template #start>
        <span class="text-xl text-900 font-bold">Proxies</span>
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
      <ProxyTable :proxies="proxies" @delete="onDelete" @edit="onEdit" />
    </div>
  </div>

  <Dialog
    v-model:visible="isFormOpened"
    :style="{ width: '450px' }"
    header="Proxy Details"
    :modal="true"
    class="p-fluid"
    @hide="() => (proxyOnEdit = undefined)"
  >
    <ProxyForm :proxy="proxyOnEdit" @success="onFormSuccess" />
  </Dialog>

  <Toast />
</template>

<script lang="ts" setup>
import type { ProxyResponseApi } from "@/client";
import ProxyForm from "./ProxyForm.vue";
import ProxyTable from "./ProxyTable.vue";

const { ProxyEndpointsApi } = useServices();

const toast = useToast();
const isFormOpened = ref(false);
const proxyOnEdit = ref<ProxyResponseApi>();
const proxies = ref<ProxyResponseApi[]>([]);

onBeforeMount(() => {
  ProxyEndpointsApi.getAll().then((data) => (proxies.value = data));
});

const closeForm = () => (isFormOpened.value = false);

const onFormSuccess = (item: ProxyResponseApi) => {
  if (item.id) {
    ProxyEndpointsApi.update({
      id: item.id,
      upsertProxyRequestApi: item,
    }).then(() => {
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
    ProxyEndpointsApi.add({ upsertProxyRequestApi: item }).then(
      (id: number) => {
        closeForm();
        proxies.value.unshift({ ...item, id });

        toast.add({
          severity: "success",
          summary: "Created",
          life: 2000,
        });
      }
    );
  }
};

const onEdit = (data: ProxyResponseApi) => {
  proxyOnEdit.value = { ...data };
  isFormOpened.value = true;
};

const onDelete = (id: number) => {
  ProxyEndpointsApi._delete({ id }).then(() => {
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
