<template>
  <div class="p-2 pb-8 h-full">
    <slot></slot>
  </div>

  <UITerminal v-if="isTerminalVisible" />

  <Dock :model="items" position="bottom">
    <template #item="{ item }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate, isActive }"
        :to="item.route"
        custom
      >
        <a
          :href="href"
          @click="navigate"
          class="p-dock-link"
          :aria-label="item.label"
          :class="[isActive ? $style.active : '', $style.link]"
        >
          <span :class="[item.icon, $style.icon]" />
        </a>
      </router-link>
      <span v-else class="p-dock-link">
        <img
          :alt="item.label"
          :src="item.img"
          style="width: 100%"
          @click="item.onClick"
        />
      </span>
    </template>
  </Dock>
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
  {
    label: "App Store",
    img: "https://primefaces.org/cdn/primevue/images/dock/appstore.svg",
    onClick: () =>
      toast.add({
        severity: "success",
        summary: "A ти казав говноадмінка, пф!",
        life: 2000,
      }),
  },
  {
    label: "Photos",
    img: "https://primefaces.org/cdn/primevue/images/dock/photos.svg",
    onClick: () =>
      toast.add({
        severity: "warn",
        summary: "Це космос, братан!",
        life: 2000,
      }),
  },
  {
    label: "Trash",
    img: "https://primefaces.org/cdn/primevue/images/dock/trash.png",
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
.link {
  background: white;
  border-radius: 6px;
  position: relative;

  &::after {
    /* content: attr(aria-label); */
    display: block;
    position: absolute;
    top: 100%;
  }

  &.active {
    background-color: var(--primary-color);
  }
}

.icon {
  font-size: 2.3rem;
  overflow: hidden;

  .active & {
    color: white;
  }
}
</style>
