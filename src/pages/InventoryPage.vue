<template>
  <div>
    <InventoryInfo />
    <InventoryGrid />
    <InventoryFooter />
  </div>
</template>
<script>
import InventoryInfo from '@/components/InventoryInfo.vue'
import InventoryGrid from '@/components/InventoryGrid.vue'
import InventoryFooter from '@/components/InventoryFooter.vue'

export default {
  components: {
    InventoryInfo,
    InventoryGrid,
    InventoryFooter,
  },
}
</script>
