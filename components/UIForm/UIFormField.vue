<template>
  <div class="form-field">
    <FloatLabel>
      <div>
        <component :is="input" :id="id" v-model="model" v-bind="attrs" />
      </div>
      <label :for="id">{{ label }}</label>

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
import Password from "primevue/password";

const { as } = defineProps<{
  label: string;
  hasError: boolean;
  errors?: any[];
  as: FormField["as"];
}>();

const { component, ...attrs } = useAttrs();

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
    case "password":
      return Password;
    case "custom":
      return component;
    default:
      return () => `Input type ${as}: Not Found`;
  }
});
</script>

<style module>
.error {
  position: absolute;
  top: calc(100% + 0.3rem);
  left: 0;
}
</style>
