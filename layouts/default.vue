<template>
  <Splitter class="h-full">
    <SplitterPanel :size="25" :minSize="10" :maxSize="30">
      <Menu :model="items" class="w-full h-full">
        <template #item="{ item, props, hasSubmenu }">
          <router-link
            v-if="item.route"
            v-slot="{ href, navigate }"
            :to="item.route"
            custom
          >
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
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
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  { label: "Accounts", icon: "pi pi-arrow-right-arrow-left", route: "/" },
  { label: "Proxies", icon: "pi pi-arrow-right-arrow-left", route: "/proxies" },
]);
</script>
