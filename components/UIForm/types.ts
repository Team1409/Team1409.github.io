import type { ValidationArgs } from "@vuelidate/core";
import type { InputMaskProps } from "primevue/inputmask";
import type { PasswordProps } from "primevue/password";
import type { DefineSetupFnComponent } from "vue";

type BaseField = {
  name: string;
  label: string;
  rules?: ValidationArgs;
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

type PasswordField = {
  as: "password";
} & PasswordProps;

type CustomField = {
  as: "custom";
  component: DefineSetupFnComponent<any>;
};

export type FormField = BaseField &
  (TextField | NumberField | MaskField | CustomField | PasswordField);
