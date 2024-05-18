<template>
  <Splitter class="h-full">
    <SplitterPanel :size="25" :minSize="10" :maxSize="30">
      <Menu :model="items" :class="$style.menu" class="w-full h-full">
        <template #item="{ item, props, hasSubmenu }">
          <router-link
            v-if="item.route"
            v-slot="{ href, navigate, isActive }"
            :to="item.route"
            custom
          >
            <a
              v-ripple
              :href="href"
              v-bind="props.action"
              @click="navigate"
              :class="isActive ? $style.active : ''"
            >
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </router-link>
          <a
            v-else
            v-ripple
            :href="item.url"
            :target="item.target"
            v-bind="props.action"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
          </a>
        </template>
      </Menu>
    </SplitterPanel>

    <SplitterPanel :size="75">
      <div class="p-2 h-full"><slot></slot></div>
    </SplitterPanel>
  </Splitter>

  <UITerminal v-if="isTerminalVisible" />

  <Dock :model="dockItems" position="bottom">
    <template #icon="{ item }">
      <img
        :alt="item.label"
        :src="item.icon"
        style="width: 100%"
        @click="item.onClick"
      />
    </template>
  </Dock>
</template>

<script setup>
import { ref } from "vue";

const toast = useToast();
const isTerminalVisible = ref(false);

const items = ref([
  { label: "Accounts", icon: "pi pi-arrow-right-arrow-left", route: "/" },
  { label: "Proxies", icon: "pi pi-arrow-right-arrow-left", route: "/proxies" },
]);

const dockItems = ref([
  {
    label: "Finder",
    icon: "https://primefaces.org/cdn/primevue/images/dock/finder.svg",
    onClick: () => {
      toast.add({
        severity: "success",
        summary: "Мощно, ага?",
        life: 2000,
      });
    },
  },
  {
    label: "App Store",
    icon: "https://primefaces.org/cdn/primevue/images/dock/appstore.svg",
    onClick: () =>
      toast.add({
        severity: "success",
        summary: "A ти казав говноадмінка, пф!",
        life: 2000,
      }),
  },
  {
    label: "Photos",
    icon: "https://primefaces.org/cdn/primevue/images/dock/photos.svg",
    onClick: () =>
      toast.add({
        severity: "warn",
        summary: "Це космос, братан!",
        life: 2000,
      }),
  },
  {
    label: "Trash",
    icon: "https://primefaces.org/cdn/primevue/images/dock/trash.png",
    onClick: () => {
      toast.add({
        severity: "error",
        summary: "Сюди не нада було жмакать, пацан блін!",
        life: 2000,
      });

      isTerminalVisible.value = true;
    },
  },
]);
</script>

<style module>
.active {
  box-shadow: -2px 0px 0 var(--primary-color);
  color: var(--primary-color);
}
</style>
