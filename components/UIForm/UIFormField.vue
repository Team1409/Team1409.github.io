<template>
  <div :class="$style.field">
    <FloatLabel>
      <label :for="id">{{ label }}</label>
      <div>
        <component :is="input" :id="id" v-model="model" v-bind="$attrs" />
      </div>
      <small
        v-if="hasError"
        v-for="error in errors"
        :key="error.$uid"
        class="p-error"
        :class="$style.error"
        >{{ error.$message }}</small
      >
    </FloatLabel>
  </div>
</template>

<script lang="ts" setup>
import InputNumber from "primevue/inputnumber";
import type { FormField } from "./types";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";

const { as } = defineProps<{
  label: string;
  hasError: boolean;
  errors?: any[];
  as: FormField["as"];
}>();

const model = defineModel();

const id = useId();

const input = computed(() => {
  switch (as) {
    case "text":
      return InputText;
    case "number":
      return InputNumber;
    case "mask":
      return InputMask;
    default:
      return () => `Input type ${as}: Not Found`;
  }
});
</script>

<style module>
.field {
  margin-bottom: 1.7rem;
}

.error {
  position: absolute;
  top: calc(100% + 0.3rem);
  left: 0;
}
</style>
