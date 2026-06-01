<template>
  <div class="app">
    <InventoryPage />
  </div>
</template>

<script setup lang="ts">
import InventoryPage from '@/pages/inventory/InventoryPage.vue'
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1e1e1e;
  font-family: 'Inter', sans-serif;
}
</style>
