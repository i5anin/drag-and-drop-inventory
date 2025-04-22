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
import InventoryInfo from '@/shared/ui/LeftInfo.vue'
import InventoryFooter from '@/shared/ui/TheFooter.vue'
import InventoryPage from '@/widgets/InventoryTable/ui/GridView.vue'

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
