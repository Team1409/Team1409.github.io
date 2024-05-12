<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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
