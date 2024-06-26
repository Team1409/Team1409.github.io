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
};

export const accountFields = [nameField, proxyField];

export const addressField: FormField = {
  name: "address",
  label: "Address",
  as: "text",
  rules: { required },
};
