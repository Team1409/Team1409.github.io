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
</style>
