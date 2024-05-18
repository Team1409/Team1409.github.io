<template>
  <form @submit.prevent="onSubmit">
    <UIFormField
      v-for="field in fields"
      :key="field.name"
      v-model="$v[field.name].$model"
      :has-error="$v[field.name].$error"
      :errors="$v[field.name].$errors"
      v-bind="field"
    />

    <Button type="submit">Submit</Button>
  </form>
</template>

<script lang="ts" setup generic="T extends object">
import { useVuelidate } from "@vuelidate/core";
import type { FormField } from "./types";

const { fields, initialData } = defineProps<{
  fields: FormField[];
  initialData?: T;
}>();

const emit = defineEmits<{ (e: "finish", data: any): void }>();

const formData = reactive<Record<string, unknown>>(initialData ?? {});
const rules = computed(() =>
  Object.fromEntries(fields.map((field) => [field.name, field.rules ?? []]))
);

const $v = useVuelidate(rules, formData);

const onSubmit = async () => {
  const isFormCorrect = await $v.value.$validate();

  if (!isFormCorrect) return;

  emit("finish", formData);
};
</script>
