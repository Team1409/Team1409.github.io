<template>
  <UIForm @finish="onFinish" :fields="fields" :initial-data="proxy"></UIForm>
</template>

<script setup lang="ts">
import type { ProxyResponseApi } from "../../client";
import { proxyFields } from "./fields";

const fields = ref(proxyFields);

const { proxy } = defineProps<{ proxy?: ProxyResponseApi }>();
const emit = defineEmits<{ (e: "success", data: ProxyResponseApi): void }>();

const onFinish = (data: ProxyResponseApi) => emit("success", data);
</script>
