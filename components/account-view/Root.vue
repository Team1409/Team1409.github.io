<template>
  <CRUDView title="Account" :service="service" query-name="accounts">
    <template #table="{ list }">
      <AccountViewTable :accounts="list" />
    </template>

    <template #form="{ item, onSuccess }">
      <UIForm
        @finish="onSuccess"
        :fields="fields"
        :initial-data="item"
      ></UIForm>
    </template>
  </CRUDView>
</template>

<script lang="ts" setup>
import { accountFields } from "./fields";

const { AccountEndpointsApi } = useServices();
const service = shallowRef(AccountEndpointsApi);
const fields = shallowRef(accountFields);
</script>
