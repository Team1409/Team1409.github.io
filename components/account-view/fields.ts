import { required } from "@vuelidate/validators";
import type { FormField } from "../UIForm/types";
import ProxyDropdown from "../ProxyDropdown.vue";

export const nameField: FormField = {
  name: "name",
  label: "Name",
  as: "text",
  rules: { required },
};

export const proxyField: FormField = {
  name: "proxyId",
  label: "Proxy",
  as: "custom",
  component: ProxyDropdown,
  rules: { required },
};

export const accountFields = [nameField, proxyField];
