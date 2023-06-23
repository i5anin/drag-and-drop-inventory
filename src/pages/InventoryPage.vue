<template>
  <div>
    <InventoryInfo />
    <InventoryGrid />
    <InventoryFooter />
    <TestTest />
  </div>
</template>
<script>
import InventoryInfo from '@/components/InventoryInfo.vue'
import InventoryGrid from '@/components/InventoryGrid.vue'
import InventoryFooter from '@/components/InventoryFooter.vue'
import TestTest from '@/components/test/TestTest.vue'

export default {
  components: {
    InventoryInfo,
    InventoryGrid,
    InventoryFooter,
    TestTest,
  },
}
</script>
