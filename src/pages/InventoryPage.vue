<template>
  <div class="center">
    <div class="content">
      <InventoryInfo />
      <InventoryFooter />
      <InventoryPage />
    </div>
  </div>
</template>

<script>
import InventoryInfo from '@/components/InventoryInfo.vue'
import InventoryFooter from '@/components/InventoryFooter.vue'
import InventoryPage from '@/components/InventoryGrid/InventoryPage.vue'
export default {
  components: {
    InventoryInfo,
    InventoryFooter,
    InventoryPage,
  },
}
</script>

<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  position: absolute;
}
</style>
