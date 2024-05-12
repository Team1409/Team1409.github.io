import type { FormField } from "../UIForm/types";
import { minLength, required } from "@vuelidate/validators";

export const nameField: FormField = {
  name: "name",
  label: "Name",
  as: "text",
  rules: { required },
};

export const hostField: FormField = {
  name: "host",
  label: "Host",
  as: "text",
  rules: { required },
};

export const portField: FormField = {
  name: "port",
  label: "Port",
  as: "mask",
  rules: { required, minLength: minLength(4) },
  mask: "9999",
};

export const proxyFields = [nameField, hostField, portField];
