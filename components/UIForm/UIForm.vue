<template>
  <form @submit.prevent="onSubmit">
    <div :class="[$style.layout, $style[layout]]">
      <UIFormField
        v-for="field in fields"
        :key="field.name"
        v-model="$v[field.name].$model"
        :has-error="$v[field.name].$error"
        :errors="$v[field.name].$errors"
        v-bind="field"
      />

      <Button type="submit" :class="$style.submit">{{ submitLabel }}</Button>
    </div>
  </form>
</template>

<script lang="ts" setup generic="T extends Record<string, unknown>">
import { useVuelidate } from "@vuelidate/core";
import type { FormField } from "./types";

const { fields, initialData } = withDefaults(
  defineProps<{
    fields: FormField[];
    initialData?: T;
    layout?: "vertical" | "horizontal";
    submitLabel?: string;
  }>(),
  { layout: "vertical", submitLabel: "Submit" }
);

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

<style module>
.layout {
  display: flex;
}

.vertical {
  flex-direction: column;

  :global(.form-field + .form-field) {
    margin-top: 1.7rem;
  }

  .submit {
    margin-top: 1.7rem;
  }
}

.horizontal {
  flex-direction: row;
}
</style>
