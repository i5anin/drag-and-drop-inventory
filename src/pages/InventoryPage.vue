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
import InventoryInfo from '@/components/info/_LeftInfo.vue'
import InventoryFooter from '@/components/footer/_Footer.vue'
import InventoryPage from '@/components/grid/_Grid.vue'
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
</style>
