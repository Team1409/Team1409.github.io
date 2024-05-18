<template>
  <Dropdown :options="options" option-label="name" option-value="id"></Dropdown>
</template>

<script setup lang="ts">
import { queries } from "../queries";
const { data: options } = useQuery(queries.proxies.all);
</script>
