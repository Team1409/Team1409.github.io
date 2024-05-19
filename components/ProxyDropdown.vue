<template>
  <Dropdown :options="options" option-label="name" option-value="id"></Dropdown>
</template>

<script setup lang="ts">
import { queryKeys } from "../queries";
const { data: options } = useQuery(queryKeys.proxies.all);
</script>
