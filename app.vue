<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <Toast position="bottom-left" />
</template>

<script lang="ts" setup>
useServices();
</script>

<style>
html {
  font-size: 14px;
}

body {
  height: 100vh;
  margin: 0;
}

#__nuxt {
  height: 100%;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
