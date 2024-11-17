<template>
  <div class="main-center">
    <div>
      <InventoryInfo />
      <InventoryFooter />
      <InventoryPage />
    </div>
  </div>
</template>

<script>
import InventoryInfo from '@/components/info/LeftInfo.vue'
import InventoryFooter from '@/components/footer/_Footer.vue'
import InventoryPage from '@/components/grid/GridView.vue'

export default {
  components: {
    InventoryInfo,
    InventoryFooter,
    InventoryPage,
  },
}
</script>

<style>
.main-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Занимает всю высоту экрана */
}
</style>
