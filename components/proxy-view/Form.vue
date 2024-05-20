<template>
  <UIForm
    @finish="$emit('success', $event)"
    :fields="fields"
    :initial-data="initialData"
  ></UIForm>
</template>

<script setup lang="ts">
import { proxyFields } from "./fields";

const fields = shallowRef(proxyFields);

defineEmits(["success"]);

defineProps(["initialData"]);
</script>
