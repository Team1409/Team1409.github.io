import type { ValidationArgs } from "@vuelidate/core";
import type { InputMaskProps } from "primevue/inputmask";

type BaseField = {
  name: string;
  label: string;
  rules: ValidationArgs;
};

type TextField = {
  as: "text";
};

type MaskField = {
  as: "mask";
} & InputMaskProps;

type NumberField = {
  as: "number";
};

export type FormField = BaseField & (TextField | NumberField | MaskField);
