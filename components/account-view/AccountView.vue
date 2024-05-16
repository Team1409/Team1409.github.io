<template>
  <div class="flex flex-column h-full">
    <Toolbar>
      <template #start>
        <span class="text-xl text-900 font-bold">Accounts</span>
      </template>
      <template #end>
        <Button label="New" icon="pi pi-plus" severity="success" class="mr-2" />
      </template>
    </Toolbar>
    <AccountViewAccountTable :accounts="accounts" />
  </div>
</template>

<script lang="ts" setup>
import type { AccountResponseApi } from "../../client";

const { AccountEndpointsApi } = useServices();

const accounts = ref<AccountResponseApi[]>([]);

onBeforeMount(() => {
  AccountEndpointsApi.getAll().then((data) => (accounts.value = data));
});
</script>
