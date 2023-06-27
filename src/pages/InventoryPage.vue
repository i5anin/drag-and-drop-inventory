<template>
  <div>
    <InventoryInfo />
    <TableStylesOnly />
    <InventoryFooter />
    <InventoryPage />
  </div>
</template>
<script>
import InventoryInfo from '@/components/InventoryInfo.vue'
import TableStylesOnly from '@/components/TableStylesOnly.vue'
import InventoryFooter from '@/components/InventoryFooter.vue'
import InventoryPage from '@/components/InventoryGrid/InventoryPage.vue'

export default {
  components: {
    InventoryInfo,
    TableStylesOnly,
    InventoryFooter,
    InventoryPage,
  },
}
</script>
