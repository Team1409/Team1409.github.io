<template>
  <div class="flex h-full p-2">
    <Menu :model="items" class="h-full">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate, isActive }"
          :to="item.route"
          custom
        >
          <a
            v-ripple
            :href="href"
            :class="[isActive ? $style.active : '', 'p-menuitem-link']"
            @click="navigate"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Menu>

    <div class="pl-2 h-full w-full">
      <slot></slot>
    </div>
  </div>

  <UITerminal v-if="isTerminalVisible" />
</template>

<script setup>
import { ref } from "vue";

const toast = useToast();
const isTerminalVisible = ref(false);

const items = ref([
  {
    label: "Accounts",
    icon: "pi pi-users",
    route: "/",
  },
  {
    label: "Proxies",
    icon: "pi pi-sort-alt-slash",
    route: "/proxies",
  },
]);
</script>

<style module>
.active {
  color: var(--primary-color);
}
</style>
