<template>
  <div>
    <InventoryInfo />
    <InventoryGrid />
    <InventoryFooter />
    <InventoryFunctions />
    <MainPages />
  </div>
</template>
<script>
import InventoryInfo from '@/components/InventoryInfo.vue'
import InventoryGrid from '@/components/InventoryGrid.vue'
import InventoryFooter from '@/components/InventoryFooter.vue'
import InventoryFunctions from '@/components/test/InventoryFunctions.vue'
import MainPages from '@/components/CustomFunctions/MainPages.vue'

export default {
  components: {
    InventoryInfo,
    InventoryGrid,
    InventoryFooter,
    InventoryFunctions,
    MainPages,
  },
}
</script>
